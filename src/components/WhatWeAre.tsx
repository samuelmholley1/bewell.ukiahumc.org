import Section from './Section';

const expectations = [
  'Routine and calm, not chaos',
  'Meaningful activities matched to abilities',
  'A safe place while caregivers handle work, errands, or rest',
];

export default function WhatWeAre() {
  return (
    <Section id="what" bgColor="white">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          What We Are
        </h2>

        <p className="text-xl text-text/90">
          Be Well Center is a daytime program for adults living with memory loss,
          offering structured activities, social connection, and gentle
          support—while family caregivers get a dependable break.
        </p>

        <div className="card max-w-2xl mx-auto text-left">
          <h3 className="text-2xl font-bold text-primary mb-6">
            What Families Can Expect
          </h3>
          <ul className="space-y-4">
            {expectations.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg">
                <svg
                  className="w-6 h-6 text-accent flex-shrink-0 mt-0.5"
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
      </div>
    </Section>
  );
}
