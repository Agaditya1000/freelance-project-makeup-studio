import React from 'react';
import { GraduationCap, Clock, Award, Users } from 'lucide-react';

const Courses: React.FC = () => {
  const courses = [
    {
      name: 'Personal Makeup + Hairstyle',
      duration: '15 Days',
      price: '₹6000',
      features: ['Basic Hair Styling', 'Makeup Technique', 'Certificate Provided']
    },
    {
      name: ' Full Salon Services + Basic Makeup',
      duration: '6 Months',
      price: '₹20,000',
      features: ['Basic to Advance Salon Services (i.e, Threading, Facial, etc)', 'Salon Management', 'Basic Makeup Techniques', 'Certificate Provided']
    },
    {
      name: 'Basic to Advance (Only Makeup) ',
      duration: '1 Months',
      price: '₹25,000',
      features: ['Advance Makeup Technique', 'Bridal Makeup', 'Party Makeup', 'Engagement Makeup', 'Certificate Provided']
    },
    {
      name: ' Full Salon Services + Basic to Advance Makeup',
      duration: '6 Months',
      price: '₹40,000',
      features: [
        'Basic to Advance Salon Services (i.e, Threading, Facial, etc)',
        'Salon Management',
        'Basic Makeup Techniques',
        'Advance Makeup Technique',
        'Bridal Makeup',
        'Party Makeup',
        'Engagement Makeup',
        'Certificate Provided'
      ]
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Launch your career in beauty with our comprehensive professional courses.
            Learn from experienced professionals and get certified to start your own venture.
          </p>
        </div>

        {/* Courses Grid - only 2 per row on all screen sizes (except mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <GraduationCap className="h-6 w-6" />
                  <span className="font-semibold">Professional Course</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{course.name}</h3>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="text-2xl font-bold text-pink-600">{course.price}</div>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                    <Award className="h-4 w-4 text-pink-500" />
                    <span>What You'll Learn:</span>
                  </h4>
                  <ul className="space-y-1">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
 
           <a href="https://wa.me/qr/4ZN2MXWQZQZWN1"
            target="_blank"
            rel="noopener noreferrer">
                <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-md hover:shadow-lg">
                  Enroll Now
                </button>
          </a>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Users className="h-12 w-12 text-pink-500 mx-auto" />
              <h3 className="text-xl font-bold text-gray-900">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of experience</p>
            </div>
            <div className="space-y-2">
              <Award className="h-12 w-12 text-pink-500 mx-auto" />
              <h3 className="text-xl font-bold text-gray-900">Certified Courses</h3>
              <p className="text-gray-600">Receive professional certificates upon course completion</p>
            </div>
            <div className="space-y-2">
              <GraduationCap className="h-12 w-12 text-pink-500 mx-auto" />
              <h3 className="text-xl font-bold text-gray-900">Live Demo Sessions</h3>
              <p className="text-gray-600">Attend live demonstrations and learn the latest makeup trends</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
