import Section from './Section';

const points = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    text: 'A safe, structured daytime program for adults with early to moderate memory loss',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    text: 'Dependable respite for family caregivers who need to work, rest, or recharge',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    text: 'A ministry of Ukiah United Methodist Church — rooted in this community',
  },
];

export default function TheVision() {
  return (
    <Section id="vision" bgColor="cream">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Our Vision
            </h2>
            <p className="text-lg text-text/80 leading-relaxed">
              Be Well Center will be a place of dignity, calm, and connection — where participants enjoy meaningful activities and families find peace of mind.
            </p>
            <ul className="space-y-4">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent flex-shrink-0 mt-0.5">{point.icon}</span>
                  <span className="text-lg text-text/80">{point.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Photo placeholder */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-accent/20 to-primary/10 order-1 md:order-2">
            {/* PHOTO PLACEHOLDER: vision-photo.jpg — bright, welcoming
                interior space (community room, sunlit room with plants,
                or art/activity setup). See PROGRESS.md for sourcing. */}
            <div className="absolute inset-0 flex items-center justify-center text-primary/30">
              <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
