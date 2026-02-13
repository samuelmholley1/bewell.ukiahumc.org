import Hero from '@/components/Hero';
import WhatWeAre from '@/components/WhatWeAre';
import WhoItsFor from '@/components/WhoItsFor';
import ProcessTimeline from '@/components/ProcessTimeline';
import GetInvolved from '@/components/GetInvolved';
import FAQ from '@/components/FAQ';
import RootedInUkiah from '@/components/RootedInUkiah';

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeAre />
      <WhoItsFor />
      <ProcessTimeline />
      <GetInvolved />
      <FAQ />
      <RootedInUkiah />

      {/* Waitlist Placeholder */}
      <section id="waitlist" className="section bg-white">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Join Our Waitlist
          </h2>
          <p className="text-lg text-text/80 mb-8">
            Be among the first to know when we&rsquo;re ready to welcome
            participants.
          </p>
          <div className="card">
            <p className="text-text/70">Waitlist form coming soon&hellip;</p>
          </div>
        </div>
      </section>
    </>
  );
}
