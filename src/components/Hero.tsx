'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="top"
      className="py-12 md:py-20 lg:py-24"
      style={{
        background:
          'linear-gradient(to bottom, var(--color-neutral-bg), color-mix(in srgb, var(--color-accent) 5%, white), var(--color-neutral-bg))',
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column — Headline & Info */}
          <div className="space-y-6 text-center lg:text-left">
            <Image
              src="/be-well-icon.png"
              alt="Be Well Center logo"
              width={80}
              height={80}
              className="rounded-lg shadow-md mx-auto lg:mx-0"
              priority
            />

            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Be Well Center
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-primary/80">
              Adult Day Memory Care in Ukiah
            </p>

            <p className="text-xl text-text/80 max-w-xl mx-auto lg:mx-0">
              Dignity-filled daytime support for adults living with memory
              loss—and respite for the caregivers who love them.
            </p>

            <div className="pt-2">
              <p className="text-lg font-semibold text-primary">
                Prefer to talk?
              </p>
              <a
                href="tel:+17070000000"
                className="inline-flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (707) XXX-XXXX
              </a>
            </div>
          </div>

          {/* Right Column — CTA Buttons */}
          <div className="space-y-4 max-w-md mx-auto lg:mx-0 w-full">
            <a
              href="#waitlist"
              className="block w-full text-center text-xl py-4 px-6 font-semibold rounded-lg shadow-md transition-all duration-200 bg-primary text-white hover:bg-primary/90 hover:shadow-lg"
            >
              Join Waitlist
            </a>
            <a
              href="#involved"
              className="block w-full text-center text-xl py-4 px-6 font-semibold rounded-lg shadow-md transition-all duration-200 bg-secondary text-white hover:bg-secondary/90 hover:shadow-lg"
            >
              Donate
            </a>
            <a
              href="#faq"
              className="block w-full text-center text-xl py-4 px-6 font-semibold rounded-lg shadow-md transition-all duration-200 border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
