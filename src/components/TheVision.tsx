import Image from 'next/image';
import Section from './Section';

const points = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    text: 'A safe, structured daytime program for adults who need a little more support',
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
    text: 'A community-rooted project, supported by Ukiah United Methodist Church',
  },
];

export default function TheVision() {
  return (
    <Section id="vision" bgColor="cream">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-5 sm:space-y-6 order-2 lg:order-1">
            <h2 id="vision-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
              Our Vision
            </h2>
            <p className="text-base sm:text-lg text-text/80 leading-relaxed text-pretty">
              The Be Well Center will be a place of dignity, calm, and connection — where participants enjoy meaningful activities, build community, and families find peace of mind.
            </p>
            <ul className="space-y-4">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent flex-shrink-0 mt-0.5">{point.icon}</span>
                  <span className="text-base sm:text-lg text-text/80">{point.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Photo */}
          <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg order-1 lg:order-2">
            <Image
              src="/vision-photo.png"
              alt="A bright, welcoming community space"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
