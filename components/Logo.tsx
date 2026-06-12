import Image from 'next/image';

interface Props {
  size?: number;
  priority?: boolean;
}

export default function Logo({ size = 32, priority = false }: Props) {
  return (
    <Image
      src="/logo.png"
      alt="Quantum View, Tree of Life logo"
      width={size}
      height={size}
      priority={priority}
      style={{ width: size, height: size, display: 'block' }}
    />
  );
}
