import React, { useState } from 'react';
import { Menu, X,  } from 'lucide-react';
import logo from '../img/logo.png';



interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'courses', label: 'Courses' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick('home')}>
  <img src={logo} alt="Sringar Logo" className="h-14 w-15 object-contain" />
  <div>
    <h1 className="text-xl font-bold text-gray-900">Sringar</h1>
    <p className="text-xs text-pink-600 font-medium"> Makeup Studio</p>
  </div>
</div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-pink-600 border-b-2 border-pink-500'
                    : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Enquiry Now Button */}
           <a
            href="https://wa.me/qr/4ZN2MXWQZQZWN1"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden md:block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full font-medium hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Enquiry Now
          </button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-pink-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-pink-100 py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-pink-600 bg-pink-50'
                      : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}

               <a
            href="https://wa.me/qr/4ZN2MXWQZQZWN1"
            target="_blank"
            rel="noopener noreferrer"
          >
              <button
                onClick={() => handleNavClick('contact')}
                className="mx-4 mt-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full font-medium text-center"
              >
                Enquiry Now
              </button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;