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
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full max-w-6xl mx-auto">
          {/* Logo — stacked on mobile, left column on desktop */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/bewell_logo_transparent.png"
              alt="Be Well Center logo"
              width={500}
              height={500}
              className="w-32 sm:w-40 md:w-48 lg:w-auto lg:max-h-[60svh] drop-shadow-lg"
              priority
            />
          </div>

          {/* Text — stacked on mobile, right column on desktop */}
          <div className="text-center lg:text-left space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-primary leading-tight text-balance">
              A place of dignity for adults who need a little more care.
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text/80 max-w-xl mx-auto lg:mx-0 text-pretty">
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
      </div>
    </section>
  );
}
