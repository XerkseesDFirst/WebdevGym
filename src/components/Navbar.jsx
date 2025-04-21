import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h1>Gym Website</h1>
      <div className="hamburger" onClick={toggleMenu}>
        
      </div>
      <ul className={isOpen ? 'active' : ''}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about-us" onClick={() => setIsOpen(false)}>About Us</Link></li>
        <li><Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link></li>
        <li><Link to="/trainers" onClick={() => setIsOpen(false)}>Trainers</Link></li>
        <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
        <li><Link to="/faqs" onClick={() => setIsOpen(false)}>FAQs</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;