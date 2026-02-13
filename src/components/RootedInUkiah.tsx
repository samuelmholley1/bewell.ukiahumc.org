import Section from './Section';

export default function RootedInUkiah() {
  return (
    <Section id="rooted" bgColor="light-green">
      <div className="max-w-4xl mx-auto space-y-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Rooted in Ukiah
        </h2>

        <p className="text-lg text-text/80 leading-relaxed">
          Be Well Center is being built by and for the people of Ukiah—a
          community nestled in the heart of Mendocino County wine country, where
          rolling hills, vineyards, and redwood groves meet a strong tradition
          of neighbor helping neighbor.
        </p>

        <p className="text-lg text-text/80 leading-relaxed">
          We&rsquo;re part of the same local ecosystem that includes
          Ukiah&rsquo;s senior services, Area Agency on Aging, and other
          community supports. Our goal isn&rsquo;t to replace what&rsquo;s
          already here—it&rsquo;s to fill a gap, offering specialized daytime
          memory care where none currently exists.
        </p>

        <p className="text-lg font-semibold text-primary leading-relaxed">
          If you or someone you know needs support now, we&rsquo;re happy to
          connect you with existing local resources while we work toward opening
          our doors.
        </p>
      </div>
    </Section>
  );
}
