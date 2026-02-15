import type { Metadata } from 'next';
import Flyer from '@/components/Flyer';
import Brochure from '@/components/Brochure';

export const metadata: Metadata = {
  title: 'Flyer & Brochure — Be Well Adult Day Center',
  description:
    'Download or print a flyer and brochure for the Be Well Adult Day Center in Ukiah, CA. Help spread the word about adult day services for Mendocino County.',
  robots: { index: false, follow: true },
};

export default function FlyerBrochurePage() {
  return (
    <div className="bg-neutral-bg min-h-screen">
      {/* Page header */}
      <div className="section bg-white border-b border-gray-100">
        <div className="container max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Flyer &amp; Brochure
          </h1>
          <p className="text-base sm:text-lg text-text/70 max-w-2xl mx-auto leading-relaxed">
            Download these materials as PDFs to print or share digitally.
            Help spread the word about the Be&nbsp;Well Adult Day Center.
          </p>
        </div>
      </div>

      {/* Flyer */}
      <div id="flyer-section" className="section">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-8">
            One-Page Flyer
          </h2>
          <Flyer />
        </div>
      </div>

      {/* Brochure */}
      <div id="brochure-section" className="section bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-8">
            Tri-Fold Brochure
          </h2>
          <Brochure />
        </div>
      </div>
    </div>
  );
}
