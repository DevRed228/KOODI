import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Upload, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { School } from '../types';

interface AdminPanelProps {
  schools: School[];
  onAddSchool: (school: Omit<School, 'id'>) => void;
  onUpdateSchool: (id: string, school: Partial<School>) => void;
  onDeleteSchool: (id: string) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  schools,
  onAddSchool,
  onUpdateSchool,
  onDeleteSchool
}) => {
  const [isAddingSchool, setIsAddingSchool] = useState(false);
  const [editingSchool, setEditingSchool] = useState<string | null>(null);
  const [newSchool, setNewSchool] = useState<Partial<School>>({
    name: '',
    description: '',
    domain: '',
    type: '',
    city: '',
    country: '',
    coordinates: [0, 0],
    contact: {
      phone: '',
      email: '',
      website: '',
      address: ''
    },
    pricing: {
      isFree: false,
      price: ''
    },
    certifications: [],
    testimonials: [],
    images: ['https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'],
    logo: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    rating: 0,
    studentsCount: 0
  });

  const handleAddSchool = () => {
    if (newSchool.name && newSchool.description) {
      onAddSchool({
        ...newSchool,
        id: Date.now().toString(),
        coordinates: newSchool.coordinates || [0, 0],
        contact: newSchool.contact || { phone: '', email: '', website: '', address: '' },
        pricing: newSchool.pricing || { isFree: false, price: '' },
        certifications: newSchool.certifications || [],
        testimonials: newSchool.testimonials || [],
        images: newSchool.images || ['https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'],
        logo: newSchool.logo || 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
        rating: newSchool.rating || 0,
        studentsCount: newSchool.studentsCount || 0
      } as Omit<School, 'id'>);
      
      setNewSchool({
        name: '',
        description: '',
        domain: '',
        type: '',
        city: '',
        country: '',
        coordinates: [0, 0],
        contact: { phone: '', email: '', website: '', address: '' },
        pricing: { isFree: false, price: '' },
        certifications: [],
        testimonials: [],
        images: ['https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'],
        logo: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
        rating: 0,
        studentsCount: 0
      });
      setIsAddingSchool(false);
    }
  };

  const handleUpdateField = (field: string, value: any) => {
    setNewSchool(prev => ({ ...prev, [field]: value }));
  };

  const handleContactUpdate = (field: string, value: string) => {
    setNewSchool(prev => ({
      ...prev,
      contact: { ...prev.contact!, [field]: value }
    }));
  };

  const handlePricingUpdate = (field: string, value: any) => {
    setNewSchool(prev => ({
      ...prev,
      pricing: { ...prev.pricing!, [field]: value }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Administration KOODI</h1>
              <p className="text-gray-600">Gérer les écoles et formations</p>
            </div>
            <button
              onClick={() => setIsAddingSchool(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>Ajouter une école</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-2xl font-bold text-gray-900">{schools.length}</div>
            <div className="text-gray-600">Écoles totales</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-2xl font-bold text-green-600">
              {schools.filter(s => s.pricing.isFree).length}
            </div>
            <div className="text-gray-600">Formations gratuites</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-2xl font-bold text-blue-600">
              {new Set(schools.map(s => s.city)).size}
            </div>
            <div className="text-gray-600">Villes couvertes</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-2xl font-bold text-purple-600">
              {new Set(schools.map(s => s.domain)).size}
            </div>
            <div className="text-gray-600">Domaines</div>
          </div>
        </div>

        {/* Add School Form */}
        {isAddingSchool && (
          <div className="bg-white rounded-lg shadow-sm mb-8 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Ajouter une nouvelle école</h2>
              <button
                onClick={() => setIsAddingSchool(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom de l'école *
                </label>
                <input
                  type="text"
                  value={newSchool.name || ''}
                  onChange={(e) => handleUpdateField('name', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="École Supérieure de Technologie..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Domaine
                </label>
                <select
                  value={newSchool.domain || ''}
                  onChange={(e) => handleUpdateField('domain', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Sélectionner un domaine</option>
                  <option value="Technologie">Technologie</option>
                  <option value="Santé">Santé</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Arts & Culture">Arts & Culture</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Formation en ligne">Formation en ligne</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  value={newSchool.description || ''}
                  onChange={(e) => handleUpdateField('description', e.target.value)}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Description de l'école et de ses formations..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type d'établissement
                </label>
                <select
                  value={newSchool.type || ''}
                  onChange={(e) => handleUpdateField('type', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Sélectionner un type</option>
                  <option value="Université">Université</option>
                  <option value="École Technique">École Technique</option>
                  <option value="Institut">Institut</option>
                  <option value="Centre de Formation">Centre de Formation</option>
                  <option value="École Spécialisée">École Spécialisée</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ville
                </label>
                <input
                  type="text"
                  value={newSchool.city || ''}
                  onChange={(e) => handleUpdateField('city', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Dakar, Abidjan..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pays
                </label>
                <input
                  type="text"
                  value={newSchool.country || ''}
                  onChange={(e) => handleUpdateField('country', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Sénégal, Côte d'Ivoire..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre d'étudiants
                </label>
                <input
                  type="number"
                  value={newSchool.studentsCount || 0}
                  onChange={(e) => handleUpdateField('studentsCount', parseInt(e.target.value) || 0)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Contact Information */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Informations de contact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="h-4 w-4 inline mr-1" />
                      Téléphone
                    </label>
                    <input
                      type="text"
                      value={newSchool.contact?.phone || ''}
                      onChange={(e) => handleContactUpdate('phone', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="+221 33 842 12 34"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="h-4 w-4 inline mr-1" />
                      Email
                    </label>
                    <input
                      type="email"
                      value={newSchool.contact?.email || ''}
                      onChange={(e) => handleContactUpdate('email', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="contact@ecole.edu"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Globe className="h-4 w-4 inline mr-1" />
                      Site web
                    </label>
                    <input
                      type="url"
                      value={newSchool.contact?.website || ''}
                      onChange={(e) => handleContactUpdate('website', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="https://ecole.edu"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="h-4 w-4 inline mr-1" />
                      Adresse
                    </label>
                    <input
                      type="text"
                      value={newSchool.contact?.address || ''}
                      onChange={(e) => handleContactUpdate('address', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Avenue Cheikh Anta Diop, Dakar"
                    />
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Tarification</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={newSchool.pricing?.isFree || false}
                      onChange={(e) => handlePricingUpdate('isFree', e.target.checked)}
                      className="mr-2"
                    />
                    Formation gratuite
                  </label>
                </div>
                <input
                  type="text"
                  value={newSchool.pricing?.price || ''}
                  onChange={(e) => handlePricingUpdate('price', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="200 000 - 400 000 FCFA/an ou Formation gratuite"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setIsAddingSchool(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={handleAddSchool}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Save className="h-4 w-4" />
                <span>Enregistrer</span>
              </button>
            </div>
          </div>
        )}

        {/* Schools List */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Liste des écoles</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    École
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Domaine
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ville
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Étudiants
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Note
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {schools.map((school) => (
                  <tr key={school.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={school.logo}
                          alt={school.name}
                          className="h-10 w-10 rounded-lg object-cover mr-3"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{school.name}</div>
                          <div className="text-sm text-gray-500">{school.type}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        {school.domain}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {school.city}, {school.country}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {school.studentsCount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="ml-1 text-sm text-gray-900">{school.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setEditingSchool(school.id)}
                          className="text-orange-600 hover:text-orange-900"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => onDeleteSchool(school.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};