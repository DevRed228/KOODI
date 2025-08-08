import React from 'react';
import { X, MapPin, Phone, Mail, Globe, Star, Users, Award, Heart } from 'lucide-react';
import { School } from '../types';

interface SchoolModalProps {
  school: School | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SchoolModal: React.FC<SchoolModalProps> = ({ school, isOpen, onClose }) => {
  if (!isOpen || !school) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <img
            src={school.images[0]}
            alt={school.name}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute bottom-4 left-4 flex space-x-3">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${
              school.pricing.isFree
                ? 'bg-green-500 text-white'
                : 'bg-blue-500 text-white'
            }`}>
              {school.pricing.price}
            </span>
            <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
              <Heart className="h-5 w-5 text-red-500" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Title and Rating */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{school.name}</h2>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{school.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{school.studentsCount.toLocaleString()} étudiants</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{school.city}, {school.country}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6 leading-relaxed">{school.description}</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-orange-500" />
                    <span className="text-gray-700">{school.contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-orange-500" />
                    <span className="text-gray-700">{school.contact.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-4 w-4 text-orange-500" />
                    <a href={school.contact.website} className="text-blue-600 hover:text-blue-700">
                      Site web
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-orange-500 mt-1" />
                    <span className="text-gray-700">{school.contact.address}</span>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                  <Award className="h-5 w-5 text-orange-500" />
                  <span>Certifications</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {school.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 text-sm rounded-md font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Testimonials */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Témoignages</h3>
              <div className="space-y-4">
                {school.testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900">{testimonial.studentName}</h4>
                        <p className="text-sm text-gray-600">{testimonial.course}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm italic">"{testimonial.content}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200">
            <button className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 px-6 rounded-lg font-medium hover:from-orange-600 hover:to-amber-600 transition-all duration-200">
              Contacter l'école
            </button>
            <button className="flex-1 bg-green-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-600 transition-colors">
              Visiter le site web
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};