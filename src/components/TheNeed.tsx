import Image from 'next/image';
import Section from './Section';

export default function TheNeed() {
  return (
    <Section id="need" bgColor="white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/need-photo.png"
              alt="The need for memory care in Mendocino County"
              fill
              className="object-cover"
            />
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
