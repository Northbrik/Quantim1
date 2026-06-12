export default function Footer() {
  return (
    <footer className="border-t border-earth/20 mt-8">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
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
    </footer>
  );
}
