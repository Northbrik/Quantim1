import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import ContactForm from '@/components/ContactForm';
import CertificateModal from '@/components/CertificateModal';

const ParticleTree = dynamic(() => import('@/components/ParticleTree'), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── HERO ── */}
        <section
          className="relative flex items-center"
          style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '4rem' }}
        >
          {/* Subtle deeper-green radial behind the sphere for dot contrast */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                'radial-gradient(circle at 72% 50%, rgba(47,82,56,0.12), rgba(245,241,232,0) 55%)',
            }}
          />

          <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10 md:gap-12">
            <div className="md:max-w-md">
              <div className="flex items-center gap-3 mb-7">
                <Logo size={44} priority />
                <span className="text-xs tracking-[0.18em] uppercase text-inkSoft">
                  Quantum Therapy
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl text-forestDark leading-tight mb-4">
                Quantum View
              </h1>
              <p className="text-base sm:text-lg text-inkSoft leading-relaxed mb-8">
                Charu Sharma, UK-based Quantum Therapist
              </p>

              <a
                href="#contact"
                className="inline-block rounded-md bg-forest px-6 py-3 text-paper text-sm tracking-wide hover:bg-forestDark transition-colors"
              >
                Contact
              </a>
            </div>

            <div
              className="flex items-center justify-center self-center"
              style={{
                width: 'min(560px, 82vw)',
                height: 'min(560px, 82vw)',
              }}
            >
              <ParticleTree size={560} pointCount={2000} />
            </div>
          </div>
        </section>

        {/* ── INTRODUCTION ── */}
        <section id="introduction" className="py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <p className="font-serif text-xl sm:text-2xl leading-relaxed text-forestDark">
              Quantum Therapy is a gentle, non-invasive technique that works on the
              light field of the client using the Quantum 2-Point method developed by{' '}
              <a
                href="https://www.quantum-r-evolution.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-leaf/50 underline-offset-4 hover:decoration-forest"
              >
                Quantum (R) Evolution
              </a>
              . A session is held for an hour via Zoom video call.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <hr className="border-earth/20" />
        </div>

        {/* ── ABOUT THE THERAPY (link to secondary page) ── */}
        <section id="therapy" className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="font-serif text-2xl sm:text-3xl mb-4">More information</h2>
            <p className="text-inkSoft leading-relaxed mb-6">
              A brief summary of the therapy and contacts of other UK-based Quantum
              therapists can be found on the <em>About the Therapy</em> page.
            </p>
            <Link
              href="/about-the-therapy"
              className="inline-block rounded-md border border-forest/40 px-5 py-2.5 text-sm text-forest hover:bg-forest hover:text-paper transition-colors"
            >
              About the Therapy →
            </Link>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <hr className="border-earth/20" />
        </div>

        {/* ── CREDENTIALS ── */}
        <section id="credentials" className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="font-serif text-2xl sm:text-3xl mb-4">Credentials</h2>
            <p className="text-inkSoft leading-relaxed mb-6">
              Charu is a certified Quantum Therapist trained by Quantum (R) Evolution.
            </p>
            <CertificateModal />
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <hr className="border-earth/20" />
        </div>

        {/* ── ABOUT CHARU ── */}
        <section id="about" className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-6 sm:gap-10 items-start">
            <div className="w-40 sm:w-[200px] aspect-[4/5] overflow-hidden rounded-md">
              <Image
                src="/charu.jpg"
                alt="Portrait of Charu Sharma"
                width={400}
                height={500}
                sizes="(min-width: 640px) 200px, 160px"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl mb-4">About Charu</h2>
              <p className="text-inkSoft leading-relaxed">
                Charu is an East Sussex and London based Quantum Therapist, university
                academic, and a Heartfulness Meditation Trainer.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <hr className="border-earth/20" />
        </div>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-16 sm:py-24">
          <div className="mx-auto max-w-2xl px-5 sm:px-8">
            <h2 className="font-serif text-2xl sm:text-3xl mb-4">Contact</h2>
            <p className="text-inkSoft leading-relaxed mb-8">
              Please get in touch to arrange a session. Charu will reply by email to
              arrange a time and share the Zoom link.
            </p>

            <ContactForm />

            <p className="mt-8 text-sm text-inkSoft">
              Or write directly to{' '}
              <a
                href="mailto:quantumview26@gmail.com"
                className="text-forest hover:text-leaf underline decoration-leaf/40 underline-offset-4"
              >
                quantumview26@gmail.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
