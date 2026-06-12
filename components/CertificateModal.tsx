'use client';
import { useEffect, useRef } from 'react';

export default function CertificateModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => {
    dialogRef.current?.showModal();
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    dialogRef.current?.close();
  };

  // Restore body scroll whenever the dialog closes (button, Esc, or backdrop).
  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    const restore = () => { document.body.style.overflow = ''; };
    dlg.addEventListener('close', restore);
    return () => dlg.removeEventListener('close', restore);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="inline-block rounded-md border border-forest/40 px-5 py-2.5 text-sm text-forest hover:bg-forest hover:text-paper transition-colors"
      >
        View certificate →
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="certificate-title"
        onClick={(e) => {
          // Click on the dialog itself (the backdrop area) closes it.
          if (e.target === e.currentTarget) close();
        }}
        className="rounded-md p-0 bg-paper text-ink shadow-2xl w-[min(960px,96vw)] h-[min(88vh,1100px)] max-w-none max-h-none border border-earth/20"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-5 py-3 border-b border-earth/20 bg-paperSoft/60">
            <h3 id="certificate-title" className="font-serif text-base text-forestDark">
              Certificate
            </h3>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="text-sm text-inkSoft hover:text-forestDark px-2 py-1 -mr-2"
            >
              Close
            </button>
          </div>
          <iframe
            src="/credentials/certificate.pdf#view=FitH&toolbar=1"
            title="Charu Sharma — Quantum Therapy certificate"
            className="flex-1 w-full border-0 bg-paper"
          />
        </div>
      </dialog>
    </>
  );
}
