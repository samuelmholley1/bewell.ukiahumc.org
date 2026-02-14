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

      <div className="container relative z-10 py-12 sm:py-16 md:py-24 lg:py-32 xl:py-36">
        <div className="max-w-3xl mx-auto text-center space-y-5 sm:space-y-6">
          <Image
            src="/BeWell-logo-transparent.png"
            alt="Be Well Center logo"
            width={200}
            height={200}
            className="mx-auto w-28 sm:w-36 md:w-44 lg:w-[200px]"
            priority
          />

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight text-balance">
            Ukiah needs a place for families facing memory loss.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-text/80 max-w-2xl mx-auto text-pretty">
            We&rsquo;re building it. Help us open our doors.
          </p>

          <div className="pt-2 sm:pt-4">
            <a
              href="#help"
              className="inline-block text-base sm:text-lg md:text-xl py-3 sm:py-4 px-8 sm:px-10 font-semibold rounded-lg shadow-lg transition-all duration-200 bg-primary text-white hover:bg-primary/90 hover:shadow-xl"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
