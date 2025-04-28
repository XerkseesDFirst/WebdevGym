import { useState, useEffect } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = 'home';
    const scrollPosition = window.scrollY + window.innerHeight * 0.3;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollPosition >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      section.focus({ preventScroll: true });
    }
    // Focus the corresponding nav item for visual feedback
    setTimeout(() => {
      const navItem = document.querySelector(`li[data-nav='${id}']`);
      if (navItem) navItem.focus();
    }, 400); // Wait for scroll to finish
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about-us', label: 'About Us' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'trainers', label: 'Trainers' },
    { id: 'services', label: 'Services' },
    { id: 'faqs', label: 'FAQs' },
  ];

  return (
    <nav className="w-full bg-[#111] text-gray-200 font-montserrat sticky top-0 z-50 shadow-lg transition-colors duration-200">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-3 px-6 md:px-10 relative">
        {/* Logo and name left-aligned */}
        <div className="flex items-center gap-4 min-w-0">
          <div className="flex items-center justify-center rounded-full bg-[#232323] shadow-[0_0_0_2px_rgba(191,161,74,0.27)] w-12 h-12 overflow-hidden transition-all duration-300 hover:shadow-[0_0_0_4px_rgba(191,161,74,0.6),0_0_16px_rgba(191,161,74,0.2)] hover:scale-105 hover:-rotate-2">
            <img src="/assets/images/Logo.png" alt="Amigos Gym Logo" className="w-10 h-10 rounded-full object-cover transition-transform duration-300" />
          </div>
          <span className="text-[1.35rem] md:text-[1.45rem] font-bold tracking-wide bg-gradient-to-r from-[#bfa14a] to-[#6c5c2b] bg-clip-text text-transparent whitespace-nowrap drop-shadow-md leading-tight min-w-0 truncate">
            Amigo's Fitness Gym
          </span>
        </div>
        {/* Nav links right-aligned */}
        <div className="hidden md:flex items-center ml-auto">
          <ul className="flex gap-9 items-center">
            {navItems.map((item) => (
              <li
                key={item.id}
                data-nav={item.id}
                className={`relative text-[1.08rem] font-medium px-3 py-1 rounded-lg cursor-pointer transition-all duration-150 outline-none z-10
                  ${activeSection === item.id ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(191,161,74,0.7)]' : 'hover:text-yellow-300 hover:drop-shadow-[0_0_6px_rgba(191,161,74,0.5)]'}`}
                onClick={() => scrollToSection(item.id)}
                tabIndex={0}
                aria-current={activeSection === item.id ? 'page' : undefined}
                onFocus={() => setActiveSection(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        {/* Hamburger for mobile */}
        <div className="md:hidden flex flex-col gap-1.5 cursor-pointer ml-4" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="w-7 h-[3px] bg-[#bfa14a] rounded block transition-colors duration-200" />
          <span className="w-7 h-[3px] bg-[#bfa14a] rounded block transition-colors duration-200" />
          <span className="w-7 h-[3px] bg-[#bfa14a] rounded block transition-colors duration-200" />
        </div>
      </div>
      {menuOpen && (
        <ul className="flex flex-col gap-4 bg-[#232323] absolute top-full left-0 right-0 py-6 z-50 shadow-2xl animate-fadeIn">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`text-[1.13rem] font-medium px-6 py-2 text-center rounded-lg cursor-pointer transition-all duration-150
                ${activeSection === item.id ? 'text-[#bfa14a] bg-[#232323] scale-105 shadow-[0_2px_12px_rgba(191,161,74,0.13)]' : 'hover:text-[#bfa14a] hover:bg-[#232323] hover:scale-105'}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;