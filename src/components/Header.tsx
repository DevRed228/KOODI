import React from 'react';
import { Search, BookOpen, Menu, Heart } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  isMenuOpen,
  onToggleMenu
}) => {
  return (
    <header className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-white p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">KOODI</h1>
              <p className="text-xs text-orange-100">Trouve ta formation</p>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une école, formation..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-transparent rounded-lg bg-white/90 backdrop-blur-sm focus:bg-white focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">Favoris</span>
            </button>
            
            <button
              onClick={onToggleMenu}
              className="md:hidden p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-transparent rounded-lg bg-white/90 backdrop-blur-sm focus:bg-white focus:ring-2 focus:ring-white focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </header>
  );
};