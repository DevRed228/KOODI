import React from 'react';
import { MapPin, Users, Star, Phone, Globe, Heart, GraduationCap } from 'lucide-react';
import { School } from '../types';

interface SchoolCardProps {
  school: School;
  onSelect: (school: School) => void;
  isSelected?: boolean;
}

export const SchoolCard: React.FC<SchoolCardProps> = ({ school, onSelect, isSelected }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden ${
        isSelected ? 'ring-2 ring-orange-500' : ''
      }`}
      onClick={() => onSelect(school)}
    >
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-orange-100 to-amber-100">
        <img
          src={school.images[0]}
          alt={school.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
            <Heart className="h-4 w-4 text-gray-600" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            school.pricing.isFree
              ? 'bg-green-500 text-white'
              : 'bg-blue-500 text-white'
          }`}>
            {school.pricing.isFree ? 'Gratuit' : 'Payant'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
            {school.name}
          </h3>
          <div className="flex items-center space-x-1 ml-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-600">
              {school.rating}
            </span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {school.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4 text-orange-500" />
            <span>{school.city}, {school.country}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <GraduationCap className="h-4 w-4 text-green-500" />
            <span>{school.domain}</span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Users className="h-4 w-4 text-blue-500" />
            <span>{school.studentsCount.toLocaleString()} étudiants</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {school.certifications.slice(0, 2).map((cert, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
            >
              {cert}
            </span>
          ))}
          {school.certifications.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
              +{school.certifications.length - 2}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
          <button className="flex items-center space-x-1 text-orange-600 hover:text-orange-700 text-sm font-medium">
            <Phone className="h-4 w-4" />
            <span>Contacter</span>
          </button>
          <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
            <Globe className="h-4 w-4" />
            <span>Site web</span>
          </button>
        </div>
      </div>
    </div>
  );
};