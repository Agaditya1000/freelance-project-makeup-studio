import React from 'react';
import { Sparkles, Phone, MapPin, Instagram, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'courses', label: 'Courses' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const popularServices = [
    'Bridal Makeup',
    'Hair Spa',
    'Facial Treatment',
    'Nail Art',
    'Threading',
    'Hair Coloring'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-pink-400" />
              <div>
                <h3 className="text-xl font-bold">Sringar</h3>
                <p className="text-sm text-pink-400">Makeup Studio</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Since 2003, we've been your trusted destination for premium beauty services. 
              Experience the perfect blend of traditional techniques and modern trends.
            </p>
            <div className="flex items-center space-x-2 text-pink-400">
              <Heart className="h-4 w-4 fill-current" />
              <span className="text-sm">Serving beauty for over 20 years</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-pink-400">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Popular Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-pink-400">Popular Services</h4>
            <ul className="space-y-2">
              {popularServices.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm hover:text-pink-400 transition-colors duration-200 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-pink-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-pink-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>+91 88589 96022</p>
                  <p>+91 77548 21311</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-pink-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Sringar Makeup Studio,</p>
                  <p>King Road,</p>
                  <p>Hamirpur, Uttar Pradesh 210301</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Instagram className="h-4 w-4 text-pink-400" />
                <a
                  href="https://www.instagram.com/sringar_makeup_studio?igsh=Zm12aGZwMHZmdGRv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-pink-400 transition-colors duration-200"
                >
                  @sringar_makeup_studio
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Sringar Makeup Studio. All rights reserved.
              </p>
              <p className="text-pink-400 text-sm mt-1 font-medium">
                Established 2003 • Trusted by thousands
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-pink-400 font-semibold text-lg">
                Thank You, Visit Again! 
              </p>
              <p className="text-gray-400 text-sm">
                Your beauty is our passion
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
