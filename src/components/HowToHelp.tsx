import Section from './Section';

const cards = [
  {
    title: 'Donate',
    description: 'Your gift helps us secure a facility, hire trained staff, and open our doors to families who need us.',
    cta: 'Make a Gift',
    href: '#contact',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: 'Volunteer',
    description: 'Share your time — help with activities, events, outreach, or facility setup. No clinical experience required.',
    cta: 'Sign Up',
    href: '#contact',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Join Our Board',
    description: 'We need leaders with experience in healthcare, finance, nonprofit, or community development.',
    cta: 'Learn More',
    href: '#contact',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
];

export default function HowToHelp() {
  return (
    <Section id="help">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3">
          How You Can Help
        </h2>
        <p className="text-base sm:text-lg text-text/70 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto">
          Be Well Center doesn&apos;t exist yet — but it can, with your help.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="card flex flex-col items-center text-center p-5 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow sm:[&:last-child]:col-span-2 lg:[&:last-child]:col-span-1"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-text mb-3">{card.title}</h3>
              <p className="text-text/70 mb-6 leading-relaxed flex-1">
                {card.description}
              </p>
              <a
                href={card.href}
                className="btn-primary inline-block text-center"
              >
                {card.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
