import Section from './Section';

export default function TheNeed() {
  return (
    <Section id="need" bgColor="white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo placeholder */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-secondary/20 to-accent/10">
            {/* PHOTO PLACEHOLDER: need-photo.jpg — candid photo of an older
                adult and caregiver, or a Mendocino County landscape
                (vineyards, rolling hills). See PROGRESS.md for sourcing. */}
            <div className="absolute inset-0 flex items-center justify-center text-primary/30">
              <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              The Need
            </h2>
            <p className="text-lg text-text/80 leading-relaxed">
              In Mendocino County, there is <strong className="text-primary">no adult day program for people with memory loss</strong>. Families are on their own — managing care around the clock with little relief.
            </p>
            <p className="text-lg text-text/80 leading-relaxed">
              Caregivers burn out. Loved ones lose access to the social connection and structured activity that slows decline. Many are forced into residential care earlier than necessary.
            </p>
            <p className="text-lg font-semibold text-primary">
              Be Well Center will change that.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
