import { useMemo } from 'react';
import { School, FilterState } from '../types';

export const useSchoolFilters = (schools: School[], filters: FilterState) => {
  return useMemo(() => {
    return schools.filter((school) => {
      // Search query filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const searchableText = [
          school.name,
          school.description,
          school.domain,
          school.type,
          school.city,
          school.country,
          ...school.certifications
        ].join(' ').toLowerCase();
        
        if (!searchableText.includes(query)) {
          return false;
        }
      }

      // Domain filter
      if (filters.domain && school.domain !== filters.domain) {
        return false;
      }

      // Type filter
      if (filters.type && school.type !== filters.type) {
        return false;
      }

      // City filter
      if (filters.city && school.city !== filters.city) {
        return false;
      }

      // Pricing filter
      if (filters.pricing) {
        if (filters.pricing === 'free' && !school.pricing.isFree) {
          return false;
        }
        if (filters.pricing === 'paid' && school.pricing.isFree) {
          return false;
        }
      }

      return true;
    });
  }, [schools, filters]);
};