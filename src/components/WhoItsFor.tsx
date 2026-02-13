import Section from './Section';

const participantFit = [
  "You're an older adult living with early or moderate memory loss",
  'You can move with light assistance or a mobility aid',
  'You enjoy being around people, even on quieter days',
];

const caregiverFit = [
  "You're caring for a spouse, parent, or loved one with memory changes",
  'You need reliable daytime support so you can work, rest, or recharge',
];

const notFit = [
  'Intense medical or nursing needs (24/7 care)',
  'Frequent unsafe wandering or aggressive behaviors',
];

export default function WhoItsFor() {
  return (
    <Section id="who" bgColor="cream">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Who It&rsquo;s For
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Participants Card */}
          <div className="card">
            <h3 className="text-2xl font-bold text-primary mb-6">
              For Participants
            </h3>
            <p className="text-accent text-lg font-semibold mb-3">
              Good fit if&hellip;
            </p>
            <ul className="space-y-3">
              {participantFit.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Caregivers Card */}
          <div className="card">
            <h3 className="text-2xl font-bold text-primary mb-6">
              For Families &amp; Caregivers
            </h3>
            <p className="text-accent text-lg font-semibold mb-3">
              Good fit if&hellip;
            </p>
            <ul className="space-y-3 mb-6">
              {caregiverFit.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-200 pt-4">
              <p className="text-text/70 text-sm font-semibold mb-2">
                Not a fit if&hellip;
              </p>
              <ul className="space-y-2 text-sm text-text/60">
                {notFit.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-text/40">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm italic text-text/70">
                If you&rsquo;re not sure, reach out—we&rsquo;ll help you find
                the right support.{' '}
                <a
                  href="#waitlist"
                  className="text-primary underline hover:text-primary/80"
                >
                  Contact us →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
