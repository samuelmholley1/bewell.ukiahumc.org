'use client';

import { useState } from 'react';
import Section from './Section';

const faqs = [
  {
    question: 'What is adult day memory care?',
    answer:
      'Adult day memory care is a structured daytime program for people living with Alzheimer\'s disease or other forms of dementia. We provide supervised activities, social engagement, and support in a safe environment—giving family caregivers reliable respite during the day while ensuring their loved ones receive dignified, person-centered care.',
  },
  {
    question: 'What will hours and cost be?',
    answer:
      'We\'re finalizing hours and daily rates now. Our goal is to be affordable and to work with local resources when possible, including exploring partnerships with Medi-Cal waiver programs and veteran benefits. Join the waitlist to be among the first to know when we announce schedule and pricing.',
  },
  {
    question: 'Is transportation available?',
    answer:
      'We\'re exploring transportation options and partnerships with local transit providers. Tell us in the waitlist form if transportation assistance would be helpful for your family—your input helps us shape our services.',
  },
  {
    question: 'What activities do you offer?',
    answer:
      'Our program will include gentle physical activities, music and art therapy, memory-stimulating games, gardening, reminiscence work, and social time. All activities are adapted to each participant\'s abilities and interests, with a focus on maintaining dignity and fostering joy.',
  },
  {
    question: 'Do you provide meals?',
    answer:
      'Yes, we plan to provide nutritious meals and snacks throughout the day. We\'ll accommodate dietary restrictions and preferences—just let us know your needs when you join the waitlist.',
  },
  {
    question: 'What is the staff-to-participant ratio?',
    answer:
      'We\'re committed to maintaining low ratios to ensure personalized attention and safety. Exact ratios will be finalized based on state licensing requirements and best practices in dementia care, but expect staffing that allows for genuine one-on-one interaction.',
  },
  {
    question: 'Is this a nursing home or assisted living?',
    answer:
      'No. Be Well Center is an adult day program—participants go home at the end of the day. We\'re not a residential facility. We\'re designed specifically for daytime care and caregiver respite, not 24/7 living arrangements.',
  },
  {
    question: 'How do I know if this is right for my loved one?',
    answer:
      'If your loved one has mild to moderate memory loss, can participate in group activities with support, and doesn\'t require intensive medical or nursing care, Be Well Center may be a great fit. The best way to know is to reach out—we\'ll talk through your situation and help determine if our program meets your family\'s needs, or connect you with other resources if not.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" bgColor="white">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  id={buttonId}
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 flex justify-between items-center gap-4 transition-colors duration-200"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="text-lg font-semibold text-primary">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 py-4 bg-neutral-bg text-text/80 leading-relaxed border-t border-gray-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
