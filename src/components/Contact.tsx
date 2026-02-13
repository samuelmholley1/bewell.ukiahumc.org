import Section from './Section';

export default function Contact() {
  return (
    <Section id="contact" bgColor="cream">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-text/70 mb-10 max-w-xl mx-auto">
          Ready to help — or just want to learn more? We&apos;d love to hear from you.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {/* Email */}
          <a
            href="mailto:info@ukiahumc.org"
            className="card p-6 flex items-center gap-4 hover:shadow-lg transition-shadow group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-semibold text-text">Email Us</p>
              <p className="text-text/60 text-sm">info@ukiahumc.org</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+17074626226"
            className="card p-6 flex items-center gap-4 hover:shadow-lg transition-shadow group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-semibold text-text">Call Us</p>
              <p className="text-text/60 text-sm">(707) 462-6226</p>
            </div>
          </a>
        </div>

        <p className="text-sm text-text/50">
          Be Well Center is a ministry of{' '}
          <a href="https://ukiahumc.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">
            Ukiah United Methodist Church
          </a>{' '}
          · 270 N Pine St, Ukiah, CA 95482
        </p>
      </div>
    </Section>
  );
}
