'use client';
import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://formsubmit.co/ajax/quantumview26@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: 'Quantum View — new enquiry',
          _template: 'table',
          _captcha: 'false',
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-md border border-leaf/40 bg-leaf/10 p-6 text-forestDark"
      >
        <p className="font-serif text-lg mb-1">Thank you.</p>
        <p className="text-sm text-inkSoft">
          Your message has been sent. Charu will reply by email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm text-inkSoft mb-1.5">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-earth/30 bg-paperSoft/40 px-3.5 py-2.5 text-ink focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest/40"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-inkSoft mb-1.5">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-earth/30 bg-paperSoft/40 px-3.5 py-2.5 text-ink focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest/40"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-inkSoft mb-1.5">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-md border border-earth/30 bg-paperSoft/40 px-3.5 py-2.5 text-ink focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest/40 resize-y"
        />
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="rounded-md bg-forest px-6 py-2.5 text-paper text-sm tracking-wide hover:bg-forestDark transition-colors disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </button>
        {status === 'error' && (
          <p role="alert" className="text-sm text-earth">
            Something went wrong. Please email directly.
          </p>
        )}
      </div>
    </form>
  );
}
