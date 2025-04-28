import { useState } from 'react';

function FAQs() {
  const [activeIndices, setActiveIndices] = useState({
    section1: null,
    section2: null
  });

  const toggleFAQ = (section, index) => {
    setActiveIndices(prev => ({
      ...prev,
      [section]: prev[section] === index ? null : index
    }));
  };

  const faqData1 = [
    {
      question: "Do you offer personal training?",
      answer: "Yes, we offer customized personal training programs with expert coaches for weight loss, strength building, endurance, and more. Our programs include Body Toning, Strength and Conditioning, Circuit Training, Athletic Training, Weight Loss/Gain, and Running Clinics."
    },
    {
      question: "What are your opening hours?",
      answer: "Our gym is open Monday-Friday from 6 AM to 12 AM, and Saturday-Sunday from 7 AM to 10 PM."
    },
    {
      question: "Do you have parking available?",
      answer: "Yes, we ensure all our locations have adequate parking facilities for our members' convenience."
    },
    {
      question: "Can I bring a guest?",
      answer: "Members can bring guests for a small fee. Guest passes are available at the front desk, and we also offer family-friendly programs for members who want to bond through fitness."
    },
    {
      question: "What equipment do you have?",
      answer: "We feature high-end cardio machines, strength training equipment, free weights, and functional training tools in a spacious, well-equipped facility with dedicated zones for different workout needs."
    }
  ];
  const faqData2 = [
    {
      question: "Can I try before signing up?",
      answer: "We occasionally offer trial classes and promotional events. Contact us at amigosfitnessgym.management@gmail.com or call +639760760570 to inquire about current trial offers."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including cash, credit/debit cards, and digital payments. Specific options can be confirmed with our front desk staff."
    },
    {
      question: "Is there an age requirement to join?",
      answer: "We welcome members of all ages! We have special programs for students and families, making fitness accessible to youth and adults alike."
    },
    {
      question: "Do you have group classes?",
      answer: "Yes! We offer diverse group classes including Tabata (HIIT), Dynamic Functional Training, Zumba, Yoga, Boxing, and Muay Thai - all included in your membership."
    },
    {
      question: "Can I pause or freeze membership?",
      answer: "We offer flexible membership options. Please speak with our membership consultant about our pause/freeze policies tailored to different situations."
    },
    {
      question: "Is there a cancellation fee?",
      answer: "Cancellation policies vary by membership type. Our team will provide full details during signup to ensure transparency about any applicable fees."
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#bfa14a] tracking-tight">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[faqData1, faqData2].map((faqData, sectionIdx) => (
          <div key={sectionIdx} className="flex flex-col gap-4">
            {faqData.map((faq, index) => {
              const sectionKey = sectionIdx === 0 ? 'section1' : 'section2';
              const isActive = activeIndices[sectionKey] === index;
              return (
                <div
                  key={index}
                  className={`rounded-xl shadow-lg border border-[#bfa14a] bg-neutral-900/80 transition-all duration-300 ${isActive ? 'ring-2 ring-[#bfa14a] bg-neutral-800/90' : 'hover:bg-neutral-800/70'}`}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 focus:outline-none"
                    onClick={() => toggleFAQ(sectionKey, index)}
                    aria-expanded={isActive}
                  >
                    <span className="text-lg font-semibold text-white text-left">{faq.question}</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform duration-300 ml-4 ${isActive ? 'rotate-180' : ''}`}
                    >
                      <path d="M6 9l6 6 6-6" stroke="#bfa14a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 px-6 ${isActive ? 'max-h-40 py-2' : 'max-h-0 py-0'}`}
                  >
                    <p className="text-neutral-200 text-base leading-relaxed">{faq.answer}</p>
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