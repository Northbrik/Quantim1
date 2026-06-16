export default function Footer() {
  return (
    <footer className="border-t border-earth/20 mt-8">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 pt-10 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
        <div className="text-inkSoft">
          <span className="font-serif text-forestDark">Quantum View</span>
          <span className="mx-2 text-earth/60">·</span>
          <a href="mailto:quantumview26@gmail.com" className="hover:text-forest">
            quantumview26@gmail.com
          </a>
        </div>
        <a
          href="https://athenaattica.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-inkSoft hover:text-forest"
        >
          Blog
        </a>
      </div>
      <div className="mx-auto max-w-5xl px-5 sm:px-8 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-inkSoft/80">
        <p>
          Hero photograph by{' '}
          <a
            href="https://www.pexels.com/@chaitaastic/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-forest underline decoration-leaf/40 underline-offset-4"
          >
            Chaitaastic
          </a>{' '}
          on Pexels.
        </p>
        <p>
          Designed by{' '}
          <a
            href="https://northbrik.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-forest underline decoration-leaf/40 underline-offset-4"
          >
            Northbrik
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
