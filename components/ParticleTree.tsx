'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Props {
  src?: string;
  size?: number;
  pointCount?: number;
  worldSpan?: number;
}

/**
 * Renders the Tree of Life logo as a field of gold/silver particles.
 * Samples the source PNG's alpha channel for point positions, then
 * applies a soft, multi-frequency leaf-sway and brightness shimmer.
 * No rotation — a tree should stand still.
 */
export default function ParticleTree({
  src = '/logo.png',
  size = 460,
  pointCount = 1800,
  worldSpan = 4.6,
}: Props) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let canceled = false;
    let renderer: THREE.WebGLRenderer | null = null;
    let animId: number | null = null;
    let geometry: THREE.BufferGeometry | null = null;
    let material: THREE.PointsMaterial | null = null;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;

    img.onload = () => {
      if (canceled || !mount) return;

      // Rasterise the source at a working resolution for alpha sampling.
      const SAMPLE = 256;
      const off = document.createElement('canvas');
      off.width = SAMPLE;
      off.height = SAMPLE;
      const ctx = off.getContext('2d');
      if (!ctx) return;

      const aspect = img.width / img.height;
      let dw = SAMPLE, dh = SAMPLE, dx = 0, dy = 0;
      if (aspect > 1) { dh = SAMPLE / aspect; dy = (SAMPLE - dh) / 2; }
      else if (aspect < 1) { dw = SAMPLE * aspect; dx = (SAMPLE - dw) / 2; }
      ctx.drawImage(img, dx, dy, dw, dh);
      const pixels = ctx.getImageData(0, 0, SAMPLE, SAMPLE).data;

      // Collect every pixel solidly belonging to the tree.
      const ALPHA_T = 80;
      const candidates: number[] = []; // packed: x*SAMPLE+y
      for (let y = 0; y < SAMPLE; y++) {
        for (let x = 0; x < SAMPLE; x++) {
          const i = (y * SAMPLE + x) * 4;
          if (pixels[i + 3] > ALPHA_T) candidates.push(y * SAMPLE + x);
        }
      }
      if (candidates.length === 0) return;

      // Fisher–Yates so neighbour pixels aren't clustered in the sample order.
      for (let i = candidates.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = candidates[i]; candidates[i] = candidates[j]; candidates[j] = tmp;
      }

      const n = Math.min(pointCount, candidates.length);
      const positions = new Float32Array(n * 3);
      const basePositions = new Float32Array(n * 3);
      const colors = new Float32Array(n * 3);
      const phases = new Float32Array(n);
      const isLeaf = new Uint8Array(n);
      const fallState = new Uint8Array(n);       // 0 = on tree, 1 = falling
      const fallStartT = new Float32Array(n);
      const fallDrift = new Float32Array(n);     // lateral drift velocity

      const gold = new THREE.Color('#c9a14a');
      const goldDeep = new THREE.Color('#a87f2e');
      const silver = new THREE.Color('#b8bcc2');
      const silverDeep = new THREE.Color('#8c9099');

      for (let i = 0; i < n; i++) {
        const packed = candidates[i];
        const px = packed % SAMPLE;
        const py = (packed - px) / SAMPLE;

        // Pixel coords → world coords, centred, Y flipped.
        const wx = (px / SAMPLE - 0.5) * worldSpan;
        const wy = (0.5 - py / SAMPLE) * worldSpan;
        positions[i * 3] = basePositions[i * 3] = wx;
        positions[i * 3 + 1] = basePositions[i * 3 + 1] = wy;
        positions[i * 3 + 2] = basePositions[i * 3 + 2] = 0;

        // Source pixel colour drives sway amplitude: greener pixels (leaves)
        // sway more than the brown trunk/roots.
        const i4 = packed * 4;
        const sr = pixels[i4], sg = pixels[i4 + 1], sb = pixels[i4 + 2];
        isLeaf[i] = sg > sr && sg > sb ? 1 : 0;

        const bucket = i % 4;
        const c =
          bucket === 0 ? gold :
          bucket === 1 ? silver :
          bucket === 2 ? goldDeep :
          silverDeep;
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;

        phases[i] = Math.random() * Math.PI * 2;
      }

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
      camera.position.z = 5;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(size, size);
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      material = new THREE.PointsMaterial({
        size: 0.045,
        vertexColors: true,
        transparent: true,
        opacity: 0.92,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      const positionAttr = geometry.getAttribute('position') as THREE.BufferAttribute;
      const startT = performance.now();

      // Fall tuning ────────────────────────────────────────────
      const FALL_DURATION = 9;     // seconds before a leaf respawns
      const GRAVITY = 0.10;        // world units / s²
      const INITIAL_V = 0.05;      // small downward push at release
      const FLUTTER_AMP = 0.28;    // lateral wobble amplitude
      const SPAWN_PROB_PER_FRAME = 0.06; // ~3-4 new falls / second @ 60fps

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const t = (performance.now() - startT) * 0.001;

        // Maybe release a new leaf this frame.
        if (Math.random() < SPAWN_PROB_PER_FRAME) {
          for (let tries = 0; tries < 12; tries++) {
            const i = Math.floor(Math.random() * n);
            if (isLeaf[i] && fallState[i] === 0) {
              fallState[i] = 1;
              fallStartT[i] = t;
              fallDrift[i] = (Math.random() - 0.5) * 0.18;
              break;
            }
          }
        }

        // Whole-canopy breeze and gentle tilt for the still-attached leaves.
        const breeze = Math.sin(t * 0.5) * 0.18 + Math.sin(t * 0.23) * 0.09;
        const tilt = Math.sin(t * 0.3) * 0.06;
        const cosT = Math.cos(tilt);
        const sinT = Math.sin(tilt);

        for (let i = 0; i < n; i++) {
          if (fallState[i] === 1) {
            const dt = t - fallStartT[i];

            if (dt > FALL_DURATION) {
              // Respawn back on the tree (off-screen at this point).
              fallState[i] = 0;
              positions[i * 3] = basePositions[i * 3];
              positions[i * 3 + 1] = basePositions[i * 3 + 1];
              continue;
            }

            // Accelerating descent + side-to-side flutter + small lateral drift.
            const dy = -INITIAL_V * dt - 0.5 * GRAVITY * dt * dt;
            const flutter =
              Math.sin(dt * 2.1 + phases[i]) * FLUTTER_AMP +
              Math.sin(dt * 0.9 + phases[i] * 1.4) * (FLUTTER_AMP * 0.5);
            const dx = flutter + fallDrift[i] * dt;

            positions[i * 3] = basePositions[i * 3] + dx;
            positions[i * 3 + 1] = basePositions[i * 3 + 1] + dy;
            continue;
          }

          const phase = phases[i];
          const bx = basePositions[i * 3];
          const by = basePositions[i * 3 + 1];

          // Leaves sway; trunk holds; roots barely.
          const amp = isLeaf[i] ? 1 : 0.4;
          const heightWeight = Math.max(0.35, (by + worldSpan / 2) / worldSpan);

          const swayX =
            (Math.sin(t * 0.9 + phase) * 0.14 +
              Math.sin(t * 1.8 + phase * 1.3) * 0.07) *
              amp *
              heightWeight +
            breeze * heightWeight;
          const swayY =
            (Math.cos(t * 0.75 + phase * 1.1) * 0.08 +
              Math.sin(t * 1.5 + phase * 0.7) * 0.04) *
            amp *
            heightWeight;

          const tx = bx * cosT - by * sinT;
          const ty = bx * sinT + by * cosT;

          positions[i * 3] = tx + swayX;
          positions[i * 3 + 1] = ty + swayY;
        }
        positionAttr.needsUpdate = true;

        material!.opacity = 0.82 + Math.sin(t * 0.5) * 0.12;

        renderer!.render(scene, camera);
      };
      animate();
    };

    return () => {
      canceled = true;
      if (animId != null) cancelAnimationFrame(animId);
      if (renderer) {
        if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
        renderer.dispose();
      }
      if (geometry) geometry.dispose();
      if (material) material.dispose();
    };
  }, [src, size, pointCount, worldSpan]);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        maxWidth: '100%',
        flexShrink: 0,
      }}
    />
  );
}
