/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useRef, useState } from 'react';

export default function Flyer() {
  const [generating, setGenerating] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    if (!printRef.current) return;
    setGenerating(true);

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const domtoimage = (await import('dom-to-image-more' as any)).default;
      const jsPDF = (await import('jspdf')).default;

      const pdf = new jsPDF('portrait', 'in', 'letter');
      const flyer = printRef.current.querySelector('.flyer-container') as HTMLElement;
      if (!flyer) return;

      // Inject style overrides for clean PDF capture
      const styleTag = document.createElement('style');
      styleTag.id = 'pdf-export-overrides';
      styleTag.textContent = `
        .flyer-container,
        .flyer-container *,
        .flyer-container *::before,
        .flyer-container *::after {
          box-shadow: none !important;
          -webkit-box-shadow: none !important;
          outline: none !important;
          text-shadow: none !important;
        }
        .flyer-container img {
          border: none !important;
          background-color: transparent !important;
        }
      `;
      document.head.appendChild(styleTag);
      await new Promise(resolve => setTimeout(resolve, 100));

      const imgData = await domtoimage.toPng(flyer, {
        quality: 1,
        scale: 3,
        bgcolor: '#ffffff',
        style: { transform: 'scale(1)', transformOrigin: 'top left' },
      });

      pdf.addImage(imgData, 'PNG', 0, 0, 8.5, 11);
      styleTag.remove();
      pdf.save('bewell-flyer.pdf');
    } catch (error) {
      console.error('PDF generation error:', error);
      document.getElementById('pdf-export-overrides')?.remove();
      alert('Error generating PDF. Please try again.');
    }

    setGenerating(false);
  };

  return (
    <>
      {/* Download PDF button */}
      <div className="no-print text-center mb-6">
        <button
          onClick={generatePDF}
          disabled={generating}
          className="btn-primary inline-flex items-center gap-2 disabled:opacity-50"
        >
          {generating ? (
            <>Generating PDF...</>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Flyer PDF
            </>
          )}
        </button>
      </div>

      {/* Flyer — 8.5 × 11 at 96dpi */}
      <div ref={printRef} className="flex justify-center">
        <div className="rounded-xl shadow-lg overflow-hidden" style={{ width: '816px' }}>
        <div
          className="flyer-container bg-white overflow-hidden flex flex-col"
          style={{ width: '816px', height: '1056px', gap: '0px' }}
        >
          {/* Top banner */}
          <div
            className="flex-shrink-0 flex items-center justify-center"
            style={{ padding: '12px 0', backgroundColor: '#556B2F' }}
          >
            <p style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: '"Source Sans 3", Arial, sans-serif' }}>
              Coming Soon to Ukiah, California
            </p>
          </div>

          {/* Main content area — fills between banner and footer */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', padding: '8px 56px' }}>

            {/* Logo */}
            <div className="flex items-center justify-center">
              <img
                src="/bewell_logo_transparent.png"
                alt="Be Well Center logo"
                style={{ height: '120px', width: 'auto' }}
              />
            </div>

            {/* Title + subtitle */}
            <div className="text-center">
              <h1 style={{ fontSize: '42px', fontWeight: 700, color: '#556B2F', lineHeight: 1.15, fontFamily: '"Cormorant Garamond", serif' }}>
                Be Well Adult Day Center
              </h1>
              <p style={{ fontSize: '20px', color: '#2B2B2B', opacity: 0.7, fontStyle: 'italic', fontFamily: '"Source Serif 4", Georgia, serif', marginTop: '10px' }}>
                A place of dignity for adults who need a little more care.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center w-full" style={{ maxWidth: '580px' }}>
              <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(217,154,43,0.4)' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#D99A2B', margin: '0 16px' }} />
              <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(217,154,43,0.4)' }} />
            </div>

            {/* What We Offer */}
            <div style={{ width: '100%' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#556B2F', textAlign: 'center', fontFamily: '"Cormorant Garamond", serif', marginBottom: '20px' }}>
                What We Will Offer
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 40px', maxWidth: '580px', margin: '0 auto' }}>
                {[
                  'Safe, structured daytime programs',
                  'Memory-care–friendly activities',
                  'Nutritious meals & snacks',
                  'Social connection & community',
                  'Reliable respite for caregivers',
                  'Trained, compassionate staff',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <svg style={{ width: '20px', height: '20px', color: '#8FAE4A', flexShrink: 0, marginTop: '2px' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span style={{ fontSize: '17px', color: '#2B2B2B', opacity: 0.8, fontFamily: '"Source Serif 4", Georgia, serif' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Callout */}
            <div style={{ width: '100%', maxWidth: '580px' }}>
              <div style={{ backgroundColor: 'rgba(143,174,74,0.1)', borderLeft: '4px solid #8FAE4A', borderRadius: '0 8px 8px 0', padding: '20px 24px' }}>
                <p style={{ fontSize: '17px', color: '#2B2B2B', opacity: 0.8, fontFamily: '"Source Serif 4", Georgia, serif', lineHeight: 1.6 }}>
                  <strong style={{ color: '#556B2F' }}>Mendocino County has no adult day program.</strong>{' '}
                  Families managing dementia, disability, or aging have nowhere to turn for daytime support.
                  The Be Well Center will change that — one day, one family at a time.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#556B2F', fontFamily: '"Cormorant Garamond", serif', marginBottom: '10px' }}>
                You Can Help Make It Happen
              </h2>
              <p style={{ fontSize: '17px', color: '#2B2B2B', opacity: 0.7, fontFamily: '"Source Serif 4", Georgia, serif', maxWidth: '420px', margin: '0 auto' }}>
                Donate, volunteer, or join our board. Every action brings us closer to opening day.
              </p>
            </div>

          </div>

          {/* Bottom contact bar */}
          <div
            className="flex-shrink-0"
            style={{ backgroundColor: '#556B2F', padding: '20px 56px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '580px', margin: '0 auto' }}>
              <div>
                <p style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 600, fontFamily: '"Source Sans 3", Arial, sans-serif' }}>Get in Touch</p>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', fontFamily: '"Source Sans 3", Arial, sans-serif' }}>
                  bewell@ukiahumc.org · (707) 462-3360
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontFamily: '"Source Sans 3", Arial, sans-serif' }}>Supported by Ukiah United Methodist Church</p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontFamily: '"Source Sans 3", Arial, sans-serif' }}>270 N Pine St, Ukiah, CA 95482</p>
              </div>
            </div>
            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginTop: '8px', fontFamily: '"Source Sans 3", Arial, sans-serif' }}>
              bewell.ukiahumc.org
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
