import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Scissors,
  Palette,
  Sparkles,
  Heart,
} from 'lucide-react';

const Services: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['threading']);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const serviceCategories = [
    {
      id: 'threading',
      name: 'Threading',
      icon: <Scissors className="h-5 w-5" />,
      services: [
        { name: 'Eyebrow Threading', price: '₹30' },
        { name: 'Upper Lip Threading', price: '₹10' },
        { name: 'Forehead Threading', price: '₹10' },
      ],
    },
    {
      id: 'manicure-pedicure',
      name: 'Manicure & Pedicure',
      icon: <Heart className="h-5 w-5" />,
      services: [
        { name: 'Manicure', price: '₹450' },
        { name: 'Pedicure', price: '₹550' },
      ],
    },
    {
      id: 'nails',
      name: 'Nails',
      icon: <Sparkles className="h-5 w-5" />,
      services: [
        { name: 'Basic Gel Nails', price: '₹1399' },
        { name: 'Bridal Nails', price: '₹1500' },
      ],
    },
    {
      id: 'face-cleanup',
      name: 'Face Cleanup',
      icon: <Heart className="h-5 w-5" />,
      services: [
        { name: 'Fruit Cleanup', price: '₹250' },
        { name: 'Shahnaj Cleanup', price: '₹350' },
        { name: 'Pearl Cleanup', price: '₹450' },
        { name: 'D-Tan Cleanup', price: '₹450' },
        { name: 'Gold Cleanup', price: '₹550' },
        { name: 'Diamond Cleanup', price: '₹850' },
      ],
    },
    {
      id: 'facial',
      name: 'Facial',
      icon: <Sparkles className="h-5 w-5" />,
      services: [
        { name: 'Fruit Facial', price: '₹350' },
        { name: 'Shahnaj Facial', price: '₹450' },
        { name: 'Pearl Facial', price: '₹550' },
        { name: 'D-Tan Facial', price: '₹550' },
        { name: 'Gold Facial', price: '₹650' },
        { name: 'Diamond Facial', price: '₹950' },
        { name: 'O³⁺ Skin Whitening Facial', price: '₹1500' },
        { name: 'Hydra Facial', price: '₹2500' },
      ],
    },
    {
      id: 'bleach',
      name: 'Bleach',
      icon: <Palette className="h-5 w-5" />,
      services: [
        { name: 'Fruit Bleach', price: '₹100' },
        { name: 'Skin White Bleach', price: '₹150' },
        { name: 'D-Tan Bleach', price: '₹150' },
        { name: 'Oxy Bleach', price: '₹150' },
        { name: 'Gold Bleach', price: '₹150' },
        { name: 'Diamond Bleach', price: '₹200' },
        { name: 'O³ Bleach', price: '₹200' },
      ],
    },
    {
      id: 'hair-spa',
      name: 'Hair Spa & Treatments',
      icon: <Heart className="h-5 w-5" />,
      services: [
        { name: 'Streax Hair Spa', price: '₹1000' },
        { name: "L'Oreal Hair Spa", price: '₹1200' },
        { name: 'Matrix Hair Spa', price: '₹1500' },
        { name: 'Keratin Treatment', price: '₹3499' },
        { name: 'Smoothening Treatment', price: '₹3999' },
      ],
    },
    {
      id: 'hair-color',
      name: 'Hair Colour',
      icon: <Palette className="h-5 w-5" />,
      services: [
        { name: 'Root Touch Up', price: '₹650' },
        { name: 'Global Hair Color', price: '₹3000' },
        { name: 'Global + Highlight Hair Color', price: '₹5499' },
      ],
    },
    {
      id: 'waxing',
      name: 'Waxing (Fruit & Rica)',
      icon: <Heart className="h-5 w-5" />,
      services: [
        { name: 'Upper Lip Fruit Waxing', price: '₹30' },
        { name: 'Face Fruit Waxing', price: '₹350' },
        { name: 'Half Hand Fruit Waxing', price: '₹150' },
        { name: 'Full Hand Fruit Waxing', price: '₹250' },
        { name: 'Half Leg Fruit Waxing', price: '₹250' },
        { name: 'Full Leg Fruit Waxing', price: '₹450' },
        { name: 'Underarms Fruit Waxing', price: '₹80' },
        { name: 'FullBody Fruit Waxing', price: '₹1500' },
        { name: 'Upper Lips Rica Waxing', price: '₹50' },
        { name: 'Half Hand Rica Waxing', price: '₹450' },
        { name: 'Full Hand Rica Waxing', price: '₹300' },
        { name: 'Underarms Rica Waxing', price: '₹150' },
        { name: 'Full Leg Rica Waxing', price: '₹650' },
        { name: 'Half Leg Rica Waxing', price: '₹450' },
        { name: 'Full Body Rica Waxing', price: '₹2200' },
      ],
    },
    {
      id: 'haircut',
      name: 'Haircut (Adults & Kids)',
      icon: <Scissors className="h-5 w-5" />,
      services: [
        { name: 'Adult Blunt/Straight Haircut', price: '₹60' },
        { name: 'Adult U Shape Haircut', price: '₹70' },
        { name: 'Adult Deep U Haircut', price: '₹100' },
        { name: 'Adult V Shape Haircut', price: '₹180' },
        { name: 'Adult Step Haircut', price: '₹200' },
        { name: 'Adult Multistep Haircut', price: '₹220' },
        { name: 'Adult Feather Haircut', price: '₹250' },
        { name: 'Adult Butterfly Haircut', price: '₹200' },
        { name: 'Adult Advance Haircut', price: '₹250' },
        { name: 'Kids Mushroom Haircut', price: '₹100' },
        { name: 'Kids Boy Cut Haircut', price: '₹100' },
        { name: 'Kids Round Shape Haircut', price: '₹60' },
      ],
    },
    {
      id: 'makeup-party',
      name: 'Makeup (Party)',
      icon: <Palette className="h-5 w-5" />,
      services: [
        { name: 'Basic Makeup', price: '₹1000' },
        { name: 'MAC  Makeup', price: '₹1500' },
        { name: 'HD Makeup', price: '₹2000' },
        { name: 'Airbrush  Makeup', price: '₹3000' },
      ],
    },
    {
      id: 'makeup-engagement',
      name: 'Makeup (Engagement)',
      icon: <Palette className="h-5 w-5" />,
      services: [
        { name: 'Basic Makeup', price: '₹3000' },
        { name: 'MAC  Makeup', price: '₹4000' },
        { name: 'HD Makeup', price: '₹5000' },
        { name: 'Airbrush  Makeup', price: '₹6000' },
        { name: 'Signature Makeup', price: '₹10000' },
      ],
    },
  ];

  const bridalMakeupCategory = {
    id: 'makeup-bridal',
    name: 'Makeup (Bridal)',
    icon: <Palette className="h-5 w-5" />,
    services: [
      { name: 'HD Makeup', price: '₹6000' },
      { name: 'MAC  Makeup', price: '₹8000' },
      { name: 'HD Makeup', price: '₹5000' },
      { name: 'Airbrush  Makeup (Makeup Studio)', price: '₹10000' },
      { name: 'Airbrush (MAC) Makeup', price: '₹15000' },
      { name: 'Signature Makeup', price: '₹20000' },
    ],
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of beauty services, each designed to enhance your natural beauty
            with premium products and expert techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {serviceCategories.map(category => {
            const isExpanded = expandedCategories.includes(category.id);
            return (
              <div
                key={category.id}
                className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-pink-100/50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-pink-600">{category.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                  </div>
                  <div className="text-pink-600">
                    {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </button>
                {isExpanded && (
                  <div className="px-6 pb-4 space-y-2">
                    {category.services.map((service, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 px-4 bg-white rounded-lg hover:bg-pink-50 transition-colors duration-150"
                      >
                        <span className="text-gray-700">{service.name}</span>
                        <span className="text-pink-600 font-semibold">{service.price}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Centered Bridal Makeup */}
          <div className="col-span-full flex justify-center">
            <div className="w-full lg:w-1/2 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <button
                onClick={() => toggleCategory(bridalMakeupCategory.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-pink-100/50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-pink-600">{bridalMakeupCategory.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{bridalMakeupCategory.name}</h3>
                </div>
                <div className="text-pink-600">
                  {expandedCategories.includes(bridalMakeupCategory.id) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </div>
              </button>
              {expandedCategories.includes(bridalMakeupCategory.id) && (
                <div className="px-6 pb-4 space-y-2">
                  {bridalMakeupCategory.services.map((service, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 px-4 bg-white rounded-lg hover:bg-pink-50 transition-colors duration-150"
                    >
                      <span className="text-gray-700">{service.name}</span>
                      <span className="text-pink-600 font-semibold">{service.price}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            All prices are subject to change. Please contact us for the most current pricing.
          </p>
          <a
            href="https://wa.me/qr/4ZN2MXWQZQZWN1"
            target="_blank"
            rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl">
            Enquiry Now
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
