import React from 'react';
import { Star, Quote, Camera } from 'lucide-react';

// ✅ Importing images from src/img folder
import bridal from '../img/bridal.JPG';
import hairspa from '../img/hairspa.png';
import nail from '../img/nail.png';
import partymakeup from '../img/partymakeup.JPG';
import haircolor from '../img/haircolor.jpg';
import facial from '../img/facialtreatment.jpg';
import hair from '../img/hair.jpg';
import hairwaxing from '../img/hairwaxing.jpg';
import facecleanup from '../img/facecleanup.jpg';


const Gallery: React.FC = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      service: 'Bridal Makeup',
      rating: 5,
      comment: 'Absolutely stunning work! The team made me feel like a princess on my wedding day. Highly recommended!',
      image: 'PS'
    },
    {
      name: 'Anjali Patel',
      service: 'Hair Spa Treatment',
      rating: 5,
      comment: 'Amazing hair spa experience. My hair feels so soft and healthy now. Will definitely come back!',
      image: 'AP'
    },
    {
      name: 'Meera Gupta',
      service: 'Facial & Cleanup',
      rating: 5,
      comment: 'Professional service with great results. My skin looks so much brighter and clearer.',
      image: 'MG'
    },
    {
      name: 'Kavya Singh',
      service: 'Nail Art',
      rating: 5,
      comment: 'Beautiful nail art designs! The staff is so creative and talented. Love my new nails!',
      image: 'KS'
    },
    {
      name: 'Deepika Jain',
      service: 'Threading & Waxing',
      rating: 5,
      comment: 'Very gentle and professional service. The threading was painless and perfectly shaped.',
      image: 'DJ'
    },
    {
      name: 'Riya Mehta',
      service: 'Party Makeup',
      rating: 5,
      comment: 'Got so many compliments at the party! The makeup looked flawless throughout the evening.',
      image: 'RM'
    }
  ];

  const galleryItems = [
    {
      category: 'Bridal Makeup',
      image: bridal,
      alt: 'Beautiful bridal makeup transformation'
    },
    {
      category: 'Hair Spa Treatment',
      image: hairspa,
      alt: 'Relaxing and nourishing hair spa'
    },
    {
      category: 'Nail Art',
      image: nail,
      alt: 'Colorful and trendy nail art designs'
    },
    {
      category: 'Party Makeup',
      image: partymakeup,
      alt: 'Elegant and glamorous party makeup'
    },
    {
      category: 'Hair Color',
      image: haircolor,
      alt: 'Stylish hair coloring service'
    },
    {
      category: 'Facial Treatment',
      image: facial,
      alt: 'Deep facial cleansing and glow'
    },
    {
      category: 'Hair Styling',
      image: hair,
      alt: 'Professional hair styling service'
    },
    {
      category: 'Hair Waxing',
      image: hairwaxing,
      alt: 'Smooth and flawless hair waxing'
    },
    {
      category: 'Face cleanup',
      image: facecleanup,
      alt: 'Refreshing face cleanup service'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery & Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our work and hear from our satisfied clients who trust us with their beauty needs.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center space-x-2">
            <Camera className="h-6 w-6 text-pink-500" />
            <span>Our Work</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-semibold">{item.category}</h4>
                    <p className="text-sm text-gray-200">{item.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center space-x-2">
            <Quote className="h-6 w-6 text-pink-500" />
            <span>What Our Clients Say</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-pink-600">{testimonial.service}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Share your experience with us and join our happy clients!
          </p>
           <a
            href="https://wa.me/qr/4ZN2MXWQZQZWN1"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl">
            Enquiry Now
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
