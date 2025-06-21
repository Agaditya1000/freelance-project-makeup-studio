import React from 'react';
import { Phone, MapPin, Clock, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any enquiries about our services. We're here to help you look and feel your best.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-500 text-white p-3 rounded-full">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:+918858996022" className="hover:text-pink-600">+91 88589 96022</a>
                  </p>
                  <p className="text-gray-600">
                    <a href="tel:+917754821311" className="hover:text-pink-600">+91 77548 21311</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-pink-500 text-white p-3 rounded-full">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">
                    Sringar Makeup Studio,<br />
                    King Road, Hamirpur, Uttar Pradesh 210301
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-pink-500 text-white p-3 rounded-full">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Opening Hours</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Sunday: 11:00 AM - 8:00 PM</p>
                    <p>Thursday: Closed (Open In Exceptional Cases)</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-pink-500 text-white p-3 rounded-full">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Follow Us</h4>
                  <a
                    href="https://www.instagram.com/sringar_makeup_studio?igsh=Zm12aGZwMHZmdGRv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:underline"
                  >
                    @sringar_makeup_studio
                  </a>
                  <p className="text-sm text-pink-600">See our latest work & offers!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Find Us</h3>
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.350115725891!2d80.1468898!3d25.9565555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399cfc4c48635d35%3A0x27aa806becce60a5!2sSringar%20Beauty%20Parlour!5e0!3m2!1sen!2sin!4v1750450158380!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Contact;
