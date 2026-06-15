'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'therapy', label: 'About the Therapy' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'about', label: 'About Charu' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 left-0 right-0 z-40 transition-colors"
      style={{
        backgroundColor: scrolled ? 'rgba(245,241,232,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(107,74,43,0.15)' : '1px solid transparent',
      }}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Quantum View, home">
          <Logo size={28} />
          <span className="font-serif text-base text-forestDark">Quantum View</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`/#${s.id}`}
              className="text-sm text-inkSoft hover:text-forest transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-forestDark p-2.5 -mr-2.5"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            {open ? (
              <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 7H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 15H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-earth/15"
          style={{ backgroundColor: 'rgba(245,241,232,0.98)', backdropFilter: 'blur(8px)' }}
        >
          <div className="mx-auto max-w-5xl px-5 py-3 flex flex-col">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`/#${s.id}`}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-inkSoft hover:text-forest"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
