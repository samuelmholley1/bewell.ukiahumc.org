'use client';

import Section from './Section';

const cards = [
  {
    title: 'Donate',
    description: 'Help fund safe space, program supplies, and staff training.',
    icon: (
      <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
    ),
    iconBg: 'bg-secondary/10',
    bullets: [
      'Facility buildout and safety equipment',
      'Activity materials and therapeutic supplies',
      'Staff recruitment and dementia training',
    ],
    bulletLabel: 'Where your gift goes:',
    buttonText: 'Make a Donation',
    buttonClass: 'btn-secondary w-full text-center',
    href: '#waitlist',
    note: 'One-time or monthly giving available',
  },
  {
    title: 'Volunteer',
    description: 'Share time, talents, or helping hands.',
    icon: (
      <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
    iconBg: 'bg-accent/10',
    bullets: [
      'Lead activities (music, art, gardening)',
      'Assist with events and fundraisers',
      'Administrative and office support',
    ],
    bulletLabel: 'Ways to help:',
    buttonText: 'Sign Up to Volunteer',
    buttonClass:
      'w-full text-center font-semibold py-3 px-6 rounded-lg transition-all duration-200 bg-accent text-white hover:bg-accent/90 shadow-sm hover:shadow-md cursor-pointer',
    href: '#waitlist',
    note: null,
  },
  {
    title: 'Partners',
    description: 'Clinicians, businesses, and community organizations.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
          clipRule="evenodd"
        />
      </svg>
    ),
    iconBg: 'bg-primary/10',
    bullets: [
      'Referrals from healthcare providers',
      'Business sponsorships',
      'Co-hosted community events',
    ],
    bulletLabel: 'Partnership opportunities:',
    buttonText: 'Become a Partner',
    buttonClass: 'btn-outline w-full text-center',
    href: '#waitlist',
    note: null,
  },
];

export default function GetInvolved() {
  return (
    <Section id="involved" bgColor="cream">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Get Involved
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto mt-4">
            There are many ways to support Be Well Center as we prepare to open.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.title} className="card flex flex-col">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center ${card.iconBg}`}
                >
                  {card.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-primary text-center">
                {card.title}
              </h3>
              <p className="text-text/80 text-center mt-2">{card.description}</p>

              {/* Bullets */}
              <div className="mt-4 flex-1">
                <p className="text-accent font-semibold text-sm mb-2">
                  {card.bulletLabel}
                </p>
                <ul className="space-y-2">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm">
                      <svg
                        className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="mt-6">
                <a href={card.href} className={card.buttonClass}>
                  {card.buttonText}
                </a>
                {card.note && (
                  <p className="text-xs text-text/60 text-center mt-2">
                    {card.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
