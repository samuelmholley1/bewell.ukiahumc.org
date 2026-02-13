import Section from './Section';

const steps = [
  {
    number: 1,
    title: 'Now',
    subtitle: 'Community Support & Planning',
    description:
      'Gathering community input, building partnerships, and finalizing our program model.',
  },
  {
    number: 2,
    title: 'Next',
    subtitle: 'Buildout & Licensing',
    description:
      'Securing our space, meeting safety requirements, and completing state licensing.',
  },
  {
    number: 3,
    title: 'Then',
    subtitle: 'Hiring & Training',
    description:
      'Recruiting local, dementia-informed staff and providing specialized training.',
  },
  {
    number: 4,
    title: 'Opening',
    subtitle: 'Welcoming Our First Participants',
    description:
      'Opening our doors and beginning services for families in Ukiah.',
  },
];

export default function ProcessTimeline() {
  return (
    <Section id="progress" bgColor="white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Where We Are in the Process
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto mt-4">
            We&rsquo;re building Be Well Center step by step. Your support helps
            us open our doors sooner.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(12.5%+2.5rem)] right-[calc(12.5%+2.5rem)] h-1 bg-accent/30 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center space-y-4">
                {/* Circle */}
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-bold shadow-lg relative z-10">
                    {step.number}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary">{step.title}</h3>

                {/* Subtitle */}
                <p className="text-accent font-semibold text-base">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-text/70 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#involved"
            className="inline-block btn-secondary text-lg px-10 py-4"
          >
            Help Us Open Sooner
          </a>
        </div>
      </div>
    </Section>
  );
}
