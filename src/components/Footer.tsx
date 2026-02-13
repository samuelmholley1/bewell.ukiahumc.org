const quickLinks = [
  { name: 'The Need', href: '#need' },
  { name: 'Our Vision', href: '#vision' },
  { name: 'How to Help', href: '#help' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">
              Be Well Center
            </h3>
            <p className="text-white/80 leading-relaxed">
              Adult Day Memory Care in Ukiah, CA
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Supported by Ukiah United Methodist Church
            </p>
            <div className="text-sm text-white/60">
              <p>&copy; {new Date().getFullYear()} Be Well Center</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0 text-white/90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p>[Address TBD]</p>
                  <p>Ukiah, CA 95482</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 flex-shrink-0 text-white/90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a
                  href="tel:+17074626226"
                  className="hover:text-white transition-colors duration-200"
                >
                  (707) 462-6226
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 flex-shrink-0 text-white/90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:info@ukiahumc.org"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@ukiahumc.org
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/80 hover:text-white transition-colors duration-200 py-1 px-2 rounded hover:bg-white/10"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/70">
              Dignity-filled daytime support for adults living with memory loss.
            </p>
            <p className="text-sm text-white/70">
              Website by{' '}
              <a
                href="https://github.com/samuelmholley1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200 underline"
              >
                Samuel Holley
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
