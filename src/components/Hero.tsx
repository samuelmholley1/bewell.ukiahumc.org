import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden h-[calc(100vh-5rem)]"
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

      <div className="container relative z-10 flex items-center justify-center h-full py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center justify-items-center w-full max-w-5xl mx-auto">
          {/* Logo — stacked on mobile, left column on desktop */}
          <div className="flex justify-center lg:justify-end lg:pr-6">
            <Image
              src="/bewell_logo_transparent.png"
              alt="Be Well Center logo"
              width={500}
              height={500}
              className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 drop-shadow-lg"
              priority
            />
          </div>

          {/* Text — stacked on mobile, right column on desktop */}
          <div className="text-center space-y-4 sm:space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-primary leading-snug text-balance">
              A place of dignity for adults who need a little more care.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-text/80 max-w-2xl mx-auto text-pretty leading-relaxed">
              The Be Well Adult Day Center is coming to Ukiah &mdash; daytime support, connection, and respite for families.
            </p>

            <div className="pt-2">
              <a
                href="#help"
                className="inline-block text-base sm:text-lg md:text-xl lg:text-2xl py-3 sm:py-4 md:py-5 px-8 sm:px-10 md:px-12 font-semibold rounded-lg shadow-lg transition-all duration-200 bg-primary text-white hover:bg-primary/90 hover:shadow-xl"
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
