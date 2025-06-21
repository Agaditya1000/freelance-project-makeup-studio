import React from 'react';
import { MessageCircle, Eye, Star, Award } from 'lucide-react';
import logo from '../img/main.jpg';
interface HeroProps {
  onBookAppointment: () => void;
  onViewServices: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookAppointment, onViewServices }) => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-gray-600">Trusted Since 2003</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-pink-600">Sringar</span>
                <br />
                 Makeup Studio
              </h1>
              
              <p className="text-xl text-gray-600 max-w-xl">
                Experience premium beauty services with over 20 years of excellence. 
                Your trusted destination for complete beauty transformation.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">20+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">5000+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">15+</div>
                <div className="text-sm text-gray-600">Services</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
               <a
            href="https://wa.me/qr/4ZN2MXWQZQZWN1"
            target="_blank"
            rel="noopener noreferrer"
          >
              <button
                onClick={onBookAppointment}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle size={20} />
                <span>Enquiry Now</span>
              </button>
              </a>
              
              <button
                onClick={onViewServices}
                className="flex items-center justify-center space-x-2 bg-white text-pink-600 px-8 py-4 rounded-full font-semibold border-2 border-pink-500 hover:bg-pink-50 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Eye size={20} />
                <span>View Services</span>
              </button>
            </div>
          </div>

         {/* Image Placeholder */}
<div className="relative">
  <div className="aspect-square bg-gradient-to-br from-pink-200 to-rose-300 rounded-3xl shadow-2xl overflow-hidden">
    <div className="w-full h-full bg-gradient-to-br from-pink-100/50 to-rose-200/50 flex items-center justify-center">
      <img
        src={logo}
        alt="Sringar Logo"
        className="h-50 w-50 object-contain"
      />
    </div>
  </div>
</div>

            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <Star className="h-8 w-8 text-yellow-500 fill-current" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full p-4 shadow-lg">
              <Award className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Hero;