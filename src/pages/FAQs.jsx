import { useState } from 'react';

function FAQs() {
  const [open, setOpen] = useState([]);

  const faqs = [
    { question: 'Do you offer personal training?', answer: 'Yes, we offer customized personal training programs with expert coaches for weight loss, strength building, endurance, and more. Our programs include Body Toning, Strength and Conditioning, Circuit Training, Athletic Training, Weight Loss/Gain, and Running Clinics.' },
    { question: 'What are your opening hours?', answer: 'Our gym is open Monday-Friday from 6 AM to 12 AM, and Saturday-Sunday from 7 AM to 10 PM.' },
    { question: 'Do you have parking available?', answer: 'Yes, we ensure all our locations have adequate parking facilities for our members\' convenience.' },
    { question: 'Can I bring a guest?', answer: 'Members can bring guests for a small fee. Guest passes are available at the front desk, and we also offer family-friendly programs for members who want to bond through fitness.' },
    { question: 'What equipment do you have?', answer: 'We feature high-end cardio machines, strength training equipment, free weights, and functional training tools in a spacious, well-equipped facility with dedicated zones for different workout needs.' },
    { question: 'Can I try before signing up?', answer: 'We occasionally offer trial classes and promotional events. Contact us at amigosfitnessgym.management@gmail.com or call +639760760570 to inquire about current trial offers.' },
    { question: 'What payment methods do you accept?', answer: 'We accept various payment methods including cash, credit/debit cards, and digital payments. Specific options can be confirmed with our front desk staff.' },
    { question: 'Is there an age requirement to join?', answer: 'We welcome members of all ages! We have special programs for students and families, making fitness accessible to youth and adults alike.' },
    { question: 'Do you have group classes?', answer: 'Yes! We offer diverse group classes including Tabata (HIIT), Dynamic Functional Training, Zumba, Yoga, Boxing, and Muay Thai - all included in your membership.' },
    { question: 'Can I pause or freeze membership?', answer: 'We offer flexible membership options. Please speak with our membership consultant about our pause/freeze policies tailored to different situations.' }
  ];

  const toggle = idx => {
    setOpen(open => open.includes(idx) ? open.filter(i => i !== idx) : [...open, idx]);
  };

  // Split into two columns
  const leftFaqs = faqs.slice(0, 5);
  const rightFaqs = faqs.slice(5);

  return (
    <div className="w-full max-w-4xl mx-auto px-2 md:px-0">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#bfa14a] tracking-tight">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[leftFaqs, rightFaqs].map((column, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-4">
            {column.map((faq, idx) => {
              // Calculate the real index in the faqs array
              const realIdx = colIdx === 0 ? idx : idx + 5;
              const isOpen = open.includes(realIdx);
              return (
                <div
                  key={realIdx}
                  className={`bg-neutral-900 rounded-2xl border border-[#bfa14a] transition-all duration-300 ${isOpen ? 'shadow-lg' : 'hover:shadow'} p-4`}
                >
                  <button
                    className="w-full flex items-center justify-between gap-2 focus:outline-none group"
                    onClick={() => toggle(realIdx)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base md:text-lg font-bold text-white text-left flex-1 transition-colors group-hover:text-[#bfa14a]">{faq.question}</span>
                    <span className="relative w-6 h-6 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <line x1="6" y1="10" x2="12" y2="16" stroke="#bfa14a" strokeWidth="2.2" strokeLinecap="round" className={`transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <line x1="12" y1="16" x2="18" y2="10" stroke="#bfa14a" strokeWidth="2.2" strokeLinecap="round" className={`transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <line x1="7" y1="7" x2="17" y2="17" stroke="#bfa14a" strokeWidth="2.2" strokeLinecap="round" className={`transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
                        <line x1="17" y1="7" x2="7" y2="17" stroke="#bfa14a" strokeWidth="2.2" strokeLinecap="round" className={`transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
                      </svg>
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 px-1 ${isOpen ? 'max-h-40 py-2' : 'max-h-0 py-0'}`}>
                    <p className="text-neutral-300 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;