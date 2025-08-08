import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FilterPanel } from './components/FilterPanel';
import { SchoolCard } from './components/SchoolCard';
import { SchoolModal } from './components/SchoolModal';
import { MapView } from './components/MapView';
import { AdminPanel } from './components/AdminPanel';
import { mockSchools } from './data/mockSchools';
import { useSchoolFilters } from './hooks/useSchoolFilters';
import { School, FilterState } from './types';
import { Filter, Map, List, MoreVertical } from 'lucide-react';

function App() {
  const [schools, setSchools] = useState<School[]>(mockSchools);
  const [showHero, setShowHero] = useState(true);
  const [filters, setFilters] = useState<FilterState>({
    domain: '',
    type: '',
    city: '',
    pricing: '',
    searchQuery: ''
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  const filteredSchools = useSchoolFilters(schools, filters);

  const handleSchoolSelect = (school: School) => {
    setSelectedSchool(school);
    setIsModalOpen(true);
  };

  const handleGetStarted = () => {
    setShowHero(false);
  };

  const handleSearchChange = (query: string) => {
    setFilters({ ...filters, searchQuery: query });
    if (showHero && query) {
      setShowHero(false);
    }
  };

  const handleAddSchool = (newSchool: Omit<School, 'id'>) => {
    const school: School = {
      ...newSchool,
      id: Date.now().toString()
    };
    setSchools(prev => [...prev, school]);
  };

  const handleUpdateSchool = (id: string, updates: Partial<School>) => {
    setSchools(prev => prev.map(school => 
      school.id === id ? { ...school, ...updates } : school
    ));
  };

  const handleDeleteSchool = (id: string) => {
    setSchools(prev => prev.filter(school => school.id !== id));
  };

  if (showHero) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header
          searchQuery={filters.searchQuery}
          onSearchChange={handleSearchChange}
          isMenuOpen={isMenuOpen}
          onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        />
        <HeroSection onGetStarted={handleGetStarted} />
      </div>
    );
  }

  const MainApp = () => (
    <div className="min-h-screen bg-gray-50">
      <Header
        searchQuery={filters.searchQuery}
        onSearchChange={handleSearchChange}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />
      <MainContent />
    </div>
  );

  const MainContent = () => (
    <>
      <AppContent />
      <FilterPanel
        filters={filters}
        onFiltersChange={setFilters}
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
      <SchoolModal
        school={selectedSchool}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedSchool(null);
        }}
      />
    </>
  );

  const AppContent = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredSchools.length} écoles trouvées
          </h2>
          <p className="text-gray-600 mt-1">
            Découvre les meilleures formations d'Afrique
          </p>
        </div>

        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          {/* View Toggle */}
          <div className="bg-white rounded-lg border border-gray-300 p-1 flex">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <List className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'map'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Map className="h-4 w-4" />
            </button>
          </div>

          {/* Filter Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Filter className="h-4 w-4" />
            <span className="hidden sm:block">Filtres</span>
            {Object.values(filters).filter(Boolean).length - (filters.searchQuery ? 1 : 0) > 0 && (
              <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
                {Object.values(filters).filter(Boolean).length - (filters.searchQuery ? 1 : 0)}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar Filters - Desktop */}
        <div className="hidden lg:block w-80 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <FilterPanel
              filters={filters}
              onFiltersChange={setFilters}
              isOpen={true}
              onClose={() => {}}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {viewMode === 'list' ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
              {filteredSchools.map((school) => (
                <SchoolCard
                  key={school.id}
                  school={school}
                  onSelect={handleSchoolSelect}
                  isSelected={selectedSchool?.id === school.id}
                />
              ))}
            </div>
          ) : (
            <div className="h-[600px] bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <MapView
                schools={filteredSchools}
                selectedSchool={selectedSchool}
                onSchoolSelect={handleSchoolSelect}
              />
            </div>
          )}

          {filteredSchools.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Aucune école trouvée
              </h3>
              <p className="text-gray-600">
                Essayez de modifier vos filtres ou votre recherche
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route 
          path="/admin" 
          element={
            <AdminPanel
              schools={schools}
              onAddSchool={handleAddSchool}
              onUpdateSchool={handleUpdateSchool}
              onDeleteSchool={handleDeleteSchool}
            />
          } 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;