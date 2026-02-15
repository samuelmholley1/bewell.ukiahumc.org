'use client';

import React, { useRef, useState } from 'react';

export default function Brochure() {
  const [generating, setGenerating] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    if (!printRef.current) return;
    setGenerating(true);

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const domtoimage = (await import('dom-to-image-more' as any)).default;
      const jsPDF = (await import('jspdf')).default;

      // Landscape letter for tri-fold brochure
      const pdf = new jsPDF('landscape', 'in', 'letter');

      const sides = printRef.current.querySelectorAll('.brochure-side');

      // Inject style overrides for clean PDF capture
      const styleTag = document.createElement('style');
      styleTag.id = 'pdf-export-overrides-brochure';
      styleTag.textContent = `
        .brochure-side,
        .brochure-side *,
        .brochure-side *::before,
        .brochure-side *::after {
          box-shadow: none !important;
          -webkit-box-shadow: none !important;
          outline: none !important;
          text-shadow: none !important;
        }
        .brochure-side img {
          border: none !important;
          background-color: transparent !important;
        }
      `;
      document.head.appendChild(styleTag);
      await new Promise(resolve => setTimeout(resolve, 100));

      for (let i = 0; i < sides.length; i++) {
        if (i > 0) pdf.addPage('letter', 'landscape');
        const side = sides[i] as HTMLElement;
        const imgData = await domtoimage.toPng(side, {
          quality: 1,
          scale: 3,
          bgcolor: '#ffffff',
          style: { transform: 'scale(1)', transformOrigin: 'top left' },
        });
        // 11 x 8.5 landscape
        pdf.addImage(imgData, 'PNG', 0, 0, 11, 8.5);
      }

      styleTag.remove();
      pdf.save('bewell-brochure.pdf');
    } catch (error) {
      console.error('PDF generation error:', error);
      document.getElementById('pdf-export-overrides-brochure')?.remove();
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
              Download Brochure PDF
            </>
          )}
        </button>
        <p className="text-sm text-text/50 mt-2">
          Tip: Print double-sided, then fold into thirds for a professional tri-fold brochure.
        </p>
      </div>

      <div ref={printRef}>
        {/* ─── SIDE A (Outside when folded) ─── */}
        <div className="no-print text-center mb-3">
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
            Side A — Outside
          </span>
        </div>

        <div className="rounded-xl shadow-lg mx-auto overflow-hidden mb-10" style={{ width: '1056px' }}>
        <div
          className="brochure-side bg-white overflow-hidden"
          style={{ width: '1056px', height: '816px' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', height: '100%' }}>
            {/* Panel 1 — Back cover */}
            <div style={{ borderRight: '1px dashed #e5e7eb', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#556B2F', fontFamily: '"Cormorant Garamond", serif', marginBottom: '20px' }}>
                  How You Can Help
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Donate */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(217,154,43,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg style={{ width: '20px', height: '20px', color: '#D99A2B' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: '#2B2B2B', fontSize: '14px' }}>Donate</p>
                      <p style={{ color: 'rgba(43,43,43,0.6)', fontSize: '13px', fontFamily: '"Source Serif 4", Georgia, serif', lineHeight: 1.4 }}>
                        Your gift helps us secure a facility, hire staff, and open our doors.
                      </p>
                    </div>
                  </div>

                  {/* Volunteer */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(143,174,74,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg style={{ width: '20px', height: '20px', color: '#8FAE4A' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: '#2B2B2B', fontSize: '14px' }}>Volunteer</p>
                      <p style={{ color: 'rgba(43,43,43,0.6)', fontSize: '13px', fontFamily: '"Source Serif 4", Georgia, serif', lineHeight: 1.4 }}>
                        Help with activities, events, outreach, or facility setup.
                      </p>
                    </div>
                  </div>

                  {/* Join Board */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(108,166,193,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg style={{ width: '20px', height: '20px', color: '#6CA6C1' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: '#2B2B2B', fontSize: '14px' }}>Join Our Board</p>
                      <p style={{ color: 'rgba(43,43,43,0.6)', fontSize: '13px', fontFamily: '"Source Serif 4", Georgia, serif', lineHeight: 1.4 }}>
                        We need leaders in healthcare, finance, nonprofit, or community development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '16px', textAlign: 'center', fontSize: '12px', color: 'rgba(43,43,43,0.5)' }}>
                <p>A project of Ukiah United Methodist Church</p>
                <p>bewell.ukiahumc.org</p>
              </div>
            </div>

            {/* Panel 2 — Front cover */}
            <div style={{ borderRight: '1px dashed #e5e7eb', background: 'linear-gradient(to bottom, #ffffff, rgba(143,174,74,0.05), #ffffff)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px', textAlign: 'center' }}>
              <img
                src="/bewell_logo_transparent.png"
                alt="Be Well Center logo"
                style={{ width: '160px', height: 'auto', marginBottom: '24px' }}
              />
              <h1 style={{ fontSize: '34px', fontWeight: 700, color: '#556B2F', lineHeight: 1.15, fontFamily: '"Cormorant Garamond", serif', marginBottom: '16px' }}>
                Be Well<br />Adult Day Center
              </h1>
              <div style={{ width: '64px', height: '2px', backgroundColor: '#D99A2B', borderRadius: '1px', margin: '0 auto 16px' }} />
              <p style={{ fontSize: '16px', color: 'rgba(43,43,43,0.7)', fontStyle: 'italic', fontFamily: '"Source Serif 4", Georgia, serif', maxWidth: '240px', lineHeight: 1.5 }}>
                A place of dignity for adults who need a little more care.
              </p>
              <div style={{ marginTop: '24px', backgroundColor: 'rgba(85,107,47,0.1)', borderRadius: '8px', padding: '8px 16px' }}>
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#556B2F', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: '"Source Sans 3", Arial, sans-serif' }}>
                  Coming Soon · Ukiah, CA
                </p>
              </div>
            </div>

            {/* Panel 3 — Contact flap */}
            <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#556B2F', fontFamily: '"Cormorant Garamond", serif', marginBottom: '20px' }}>
                Contact Us
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { label: 'Email', value: 'bewell@ukiahumc.org', icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' },
                  { label: 'Phone', value: '(707) 462-3360', icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z' },
                  { label: 'Website', value: 'bewell.ukiahumc.org', icon: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(85,107,47,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg style={{ width: '18px', height: '18px', color: '#556B2F' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: '#2B2B2B', fontSize: '13px' }}>{item.label}</p>
                      <p style={{ color: '#556B2F', fontSize: '13px' }}>{item.value}</p>
                    </div>
                  </div>
                ))}

                {/* Address */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(85,107,47,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg style={{ width: '18px', height: '18px', color: '#556B2F' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, color: '#2B2B2B', fontSize: '13px' }}>Address</p>
                    <p style={{ color: 'rgba(43,43,43,0.6)', fontSize: '13px', fontFamily: '"Source Serif 4", Georgia, serif' }}>
                      270 N Pine St<br />Ukiah, CA 95482
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* ─── SIDE B (Inside when folded) ─── */}
        <div className="no-print text-center mb-3 mt-10">
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
            Side B — Inside
          </span>
        </div>

        <div className="rounded-xl shadow-lg mx-auto overflow-hidden" style={{ width: '1056px' }}>
        <div
          className="brochure-side bg-white overflow-hidden"
          style={{ width: '1056px', height: '816px' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', height: '100%' }}>
            {/* Panel 4 — Inside left: The Need */}
            <div style={{ borderRight: '1px dashed #e5e7eb', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#556B2F', fontFamily: '"Cormorant Garamond", serif', marginBottom: '16px' }}>
                The Need
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                <p style={{ fontSize: '14px', color: 'rgba(43,43,43,0.8)', fontFamily: '"Source Serif 4", Georgia, serif', lineHeight: 1.6 }}>
                  In Mendocino County, there is <strong style={{ color: '#556B2F' }}>no adult day program</strong> for people who need supervised daytime support — whether due to memory loss, aging, disability, or simply the need for community.
                </p>
                <p style={{ fontSize: '14px', color: 'rgba(43,43,43,0.8)', fontFamily: '"Source Serif 4", Georgia, serif', lineHeight: 1.6 }}>
                  Families are on their own, managing care around the clock with little relief. Caregivers burn out. Loved ones lose social connection and the structured activity that keeps them well.
                </p>
                <p style={{ fontSize: '14px', color: 'rgba(43,43,43,0.8)', fontFamily: '"Source Serif 4", Georgia, serif', lineHeight: 1.6 }}>
                  Many are forced into residential care earlier than necessary — at great cost to families, and at the expense of their loved one&apos;s independence.
                </p>
                <div style={{ backgroundColor: 'rgba(217,154,43,0.1)', borderRadius: '8px', padding: '16px', marginTop: 'auto' }}>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#556B2F', textAlign: 'center', fontFamily: '"Cormorant Garamond", serif' }}>
                    The Be Well Center will change that.
                  </p>
                </div>
              </div>
            </div>

            {/* Panel 5 — Inside center: Our Vision */}
            <div style={{ borderRight: '1px dashed #e5e7eb', backgroundColor: 'rgba(143,174,74,0.05)', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#556B2F', fontFamily: '"Cormorant Garamond", serif', marginBottom: '16px' }}>
                Our Vision
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(43,43,43,0.8)', fontFamily: '"Source Serif 4", Georgia, serif', lineHeight: 1.6, marginBottom: '16px' }}>
                The Be Well Adult Day Center will be a place of dignity, calm, and connection — where participants enjoy meaningful activities and families find peace of mind.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {[
                  'Safe, structured daytime programs',
                  'Memory-care–friendly activities & engagement',
                  'Nutritious meals & snacks',
                  'Social connection & community building',
                  'Licensed, trained, compassionate staff',
                  'Dependable respite for family caregivers',
                  'A community-rooted, church-supported project',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <svg style={{ width: '16px', height: '16px', color: '#8FAE4A', flexShrink: 0, marginTop: '2px' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span style={{ fontSize: '13px', color: 'rgba(43,43,43,0.8)', fontFamily: '"Source Serif 4", Georgia, serif' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Panel 6 — Inside right: Who We Serve */}
            <div style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#556B2F', fontFamily: '"Cormorant Garamond", serif', marginBottom: '16px' }}>
                Who We Serve
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
                <div style={{ backgroundColor: 'rgba(85,107,47,0.05)', borderRadius: '8px', padding: '14px' }}>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#556B2F', marginBottom: '4px' }}>Adults Who Need More Support</p>
                  <p style={{ fontSize: '12px', color: 'rgba(43,43,43,0.7)', fontFamily: '"Source Serif 4", Georgia, serif', lineHeight: 1.5 }}>
                    Individuals living with memory loss, early-stage dementia, physical disabilities, or age-related conditions who benefit from structured activity and socialization.
                  </p>
                </div>

                <div style={{ backgroundColor: 'rgba(85,107,47,0.05)', borderRadius: '8px', padding: '14px' }}>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#556B2F', marginBottom: '4px' }}>Family Caregivers</p>
                  <p style={{ fontSize: '12px', color: 'rgba(43,43,43,0.7)', fontFamily: '"Source Serif 4", Georgia, serif', lineHeight: 1.5 }}>
                    Spouses, children, and partners who need reliable daytime respite to work, rest, attend to their own health, or simply recharge.
                  </p>
                </div>

                <div style={{ backgroundColor: 'rgba(85,107,47,0.05)', borderRadius: '8px', padding: '14px' }}>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#556B2F', marginBottom: '4px' }}>Our Whole Community</p>
                  <p style={{ fontSize: '12px', color: 'rgba(43,43,43,0.7)', fontFamily: '"Source Serif 4", Georgia, serif', lineHeight: 1.5 }}>
                    When families are supported, communities thrive. The Be Well Center strengthens the fabric of care across Mendocino County.
                  </p>
                </div>

                <div style={{ marginTop: 'auto', borderTop: '1px solid #f3f4f6', paddingTop: '16px', textAlign: 'center' }}>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#556B2F', fontFamily: '"Cormorant Garamond", serif' }}>
                    Together, we can build something beautiful.
                  </p>
                  <p style={{ fontSize: '11px', color: 'rgba(43,43,43,0.5)', marginTop: '4px', fontFamily: '"Source Serif 4", Georgia, serif' }}>
                    bewell.ukiahumc.org
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
