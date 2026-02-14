import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden min-h-[calc(100svh-5rem)]"
    >
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-white/75" />
      </div>

      <div className="container relative z-10 flex items-center justify-center min-h-[calc(100svh-5rem)] py-6">
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
          <Image
            src="/bewell_logo_transparent.png"
            alt="Be Well Center logo"
            width={200}
            height={200}
            className="mx-auto h-16 sm:h-20 md:h-24 lg:h-32 xl:h-40 max-h-[14svh] w-auto"
            priority
          />

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight text-balance">
            A place of dignity for adults who need a little more care.
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text/80 max-w-2xl mx-auto text-pretty">
            The Be Well Center is coming to Ukiah &mdash; daytime support, connection, and respite for families.
          </p>

          <div className="pt-1">
            <a
              href="#help"
              className="inline-block text-sm sm:text-base md:text-lg lg:text-xl py-2.5 sm:py-3 md:py-4 px-6 sm:px-8 md:px-10 font-semibold rounded-lg shadow-lg transition-all duration-200 bg-primary text-white hover:bg-primary/90 hover:shadow-xl"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
