import React from 'react';
import { Search, MapPin, GraduationCap, Users } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <div className="bg-gradient-to-br from-orange-500 via-orange-400 to-amber-400 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Trouve ta <span className="text-yellow-200">formation idéale</span><br />
            en Afrique
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            KOODI connecte les jeunes africains aux meilleures écoles et formations. 
            Découvre, compare et choisis ton avenir professionnel en quelques clics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={onGetStarted}
              className="bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Search className="h-5 w-5" />
              <span>Explorer maintenant</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-500 transition-all duration-200">
              En savoir plus
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <GraduationCap className="h-8 w-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">500+</div>
                <div className="text-orange-100">Écoles partenaires</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <MapPin className="h-8 w-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">15</div>
                <div className="text-orange-100">Pays couverts</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Users className="h-8 w-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-orange-100">Étudiants aidés</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};