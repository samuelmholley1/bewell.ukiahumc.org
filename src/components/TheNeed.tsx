import Image from 'next/image';
import Section from './Section';

export default function TheNeed() {
  return (
    <Section id="need" bgColor="white">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/need-photo.png"
              alt="The need for adult day services in Mendocino County"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-5">
            <h2 id="need-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
              The Need
            </h2>
            <p className="text-base sm:text-lg text-text/80 leading-relaxed text-pretty">
              In Mendocino County, there is <strong className="text-primary">no adult day program</strong> for people who need supervised daytime support &mdash; whether due to memory loss, aging, disability, or simply the need for community.
            </p>
            <p className="text-base sm:text-lg text-text/80 leading-relaxed text-pretty">
              Families are on their own, managing care around the clock with little relief. Caregivers burn out. Loved ones lose the social connection and structured activity that keeps them well. Many are forced into residential care earlier than necessary.
            </p>
            <p className="text-base sm:text-lg font-semibold text-primary">
              The Be Well Center will change that.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
