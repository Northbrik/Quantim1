import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About the Therapy · Quantum View',
  description:
    'A brief summary of Quantum Therapy and contacts of other UK-based Quantum therapists.',
};

export default function AboutTherapy() {
  return (
    <>
      <Navbar />

      <main className="pt-24 pb-16">
        <article className="mx-auto max-w-3xl px-5 sm:px-8">
          <header className="mb-12">
            <p className="text-xs tracking-[0.18em] uppercase text-inkSoft mb-3">
              <Link href="/" className="hover:text-forest">← Quantum View</Link>
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl text-forestDark mb-3">
              About the Therapy
            </h1>
            <p className="text-sm text-inkSoft">
              Summary by Ichha B. Talwar, Consulting Counselling Psychologist
              and Quantum Therapist, based in Saudi Arabia.{' '}
              <a
                href="mailto:m.transformwithin@gmail.com"
                className="text-forest hover:text-leaf underline decoration-leaf/40 underline-offset-4"
              >
                m.transformwithin@gmail.com
              </a>
              {' · '}
              <a
                href="https://www.linkedin.com/in/ichhabhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:text-leaf underline decoration-leaf/40 underline-offset-4"
              >
                LinkedIn
              </a>
            </p>
          </header>

          <section className="mb-10">
            <h2 className="font-serif text-xl sm:text-2xl mb-3">What is Quantum Science?</h2>
            <p className="text-inkSoft leading-relaxed">
              Quantum science is the field of physics dealing with the nature of matter
              and energy at extremely small scales, such as atoms and subatomic particles.
              Physics has moved from a classical, mechanical view of matter toward
              concepts such as superposition (particles existing in multiple states at
              once) and entanglement (particles becoming linked so their properties
              relate to one another).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-xl sm:text-2xl mb-3">How does this apply as a therapy?</h2>
            <p className="text-inkSoft leading-relaxed">
              Quantum therapy is an alternative approach that draws on the principles of
              quantum physics. It treats body and mind as interconnected energy systems
              of varying density, and uses focused intention and centring to influence
              those systems to support balance and overall well-being.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-xl sm:text-2xl mb-3">Why take it as a therapy session?</h2>
            <p className="text-inkSoft leading-relaxed">
              It is an alternative modality offering a holistic approach to wellness,
              and can be used to address a wide range of physical and emotional concerns.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-xl sm:text-2xl mb-3">What does a typical session look like?</h2>
            <p className="text-inkSoft leading-relaxed">
              You make an appointment and provide details about your situation. The
              session includes a brief consultation with the therapist, the therapy
              itself in a relaxed state, and a short discussion to close.
            </p>
            <p className="mt-3 text-xs text-earth/80 italic">
              Review note: this description is from the original summary. Charu&apos;s sessions
              are conducted via Zoom; confirm which wording to keep.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-xl sm:text-2xl mb-3">How many sessions?</h2>
            <p className="text-inkSoft leading-relaxed">
              This varies by individual need and the therapist&apos;s recommendation.
              Sessions are usually spaced a week or more apart, to allow time for
              integration between them.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-xl sm:text-2xl mb-3">How long does a session last?</h2>
            <p className="text-inkSoft leading-relaxed">
              One hour. The client is seated comfortably and the therapist works around
              the client&apos;s field. Charu&apos;s sessions are held online via a link provided
              before the appointment.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-xl sm:text-2xl mb-3">Finally</h2>
            <p className="text-inkSoft leading-relaxed">
              Quantum therapy is soft, gentle, and non-invasive. It is intended to sit
              alongside, not replace, any ongoing treatment or advice from the
              client&apos;s own physician.
            </p>
          </section>

          <hr className="border-earth/20 my-12" />

          <section className="mb-12">
            <h2 className="font-serif text-xl sm:text-2xl mb-3">About the co-founder</h2>
            <p className="text-inkSoft leading-relaxed">
              Ekta Bouderlique, founder of{' '}
              <a
                href="https://www.quantum-r-evolution.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-leaf/50 underline-offset-4 hover:decoration-forest"
              >
                Quantum (R) Evolution
              </a>
              , is a pioneer in developing quantum therapies. She is a Certified Yoga
              Trainer (Yoga Alliance USA) and a Heartfulness Meditation Trainer, and
              runs an NGO dedicated to sustainable development. Born in Gujarat, India,
              she lived for over two decades in France, working as a journalist and
              public relations consultant and in the participatory and sustainable
              economy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-xl sm:text-2xl mb-4">Other UK-based Quantum Therapists</h2>
            <ul className="space-y-3 text-inkSoft">
              <li>
                Meeta Hingu ·{' '}
                <a
                  href="mailto:meeta.hingu@gmail.com"
                  className="text-forest hover:text-leaf underline decoration-leaf/40 underline-offset-4"
                >
                  meeta.hingu@gmail.com
                </a>
              </li>
              <li>
                Karthik Rengarajan ·{' '}
                <a
                  href="mailto:kr@proactons.com"
                  className="text-forest hover:text-leaf underline decoration-leaf/40 underline-offset-4"
                >
                  kr@proactons.com
                </a>
                {' · '}
                <a
                  href="tel:+447515378711"
                  className="text-forest hover:text-leaf underline decoration-leaf/40 underline-offset-4"
                >
                  +44 7515 378711
                </a>
              </li>
              <li>
                Paramjit Gill ·{' '}
                <a
                  href="mailto:Paramjit@heartfulness.uk"
                  className="text-forest hover:text-leaf underline decoration-leaf/40 underline-offset-4"
                >
                  Paramjit@heartfulness.uk
                </a>
              </li>
            </ul>
          </section>

          <hr className="border-earth/20 my-10" />

          <section aria-labelledby="disclaimer-heading">
            <h3 id="disclaimer-heading" className="font-serif text-base mb-2 text-earth">
              Disclaimer
            </h3>
            <p className="text-xs leading-relaxed text-inkSoft">
              The two-point quantum therapy method is an alternative/complementary
              method. It is considered alternative or complementary by medical
              professionals and does not diagnose, prescribe, treat, or cure any
              disease, physical or mental. It is not a prescription, a promise of
              benefit, or a guarantee of results, and is not a substitute for
              professional medical or psychological diagnosis and care. Clients should
              not stop or change any prescribed medication without their healthcare
              professional&apos;s approval, and take full responsibility for their own
              physical and emotional well-being.
            </p>
          </section>

          <div className="mt-12">
            <Link
              href="/#contact"
              className="inline-block rounded-md border border-forest/40 px-5 py-2.5 text-sm text-forest hover:bg-forest hover:text-paper transition-colors"
            >
              ← Back to contact
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
