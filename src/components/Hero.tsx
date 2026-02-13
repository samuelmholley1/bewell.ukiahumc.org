'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
    >
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/75" />
      </div>

      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Image
            src="/BeWell-logo-transparent.png"
            alt="Be Well Center logo"
            width={120}
            height={120}
            className="mx-auto"
            priority
          />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Ukiah needs a place for families facing memory loss.
          </h1>

          <p className="text-xl md:text-2xl text-text/80 max-w-2xl mx-auto">
            We&rsquo;re building it. Help us open our doors.
          </p>

          <div className="pt-4">
            <a
              href="#help"
              className="inline-block text-xl py-4 px-10 font-semibold rounded-lg shadow-lg transition-all duration-200 bg-primary text-white hover:bg-primary/90 hover:shadow-xl"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
