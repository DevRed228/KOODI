import { School } from '../types';

export const mockSchools: School[] = [
  {
    id: '1',
    name: 'École Supérieure de Technologie de Dakar',
    description: 'Formation d\'excellence en informatique et nouvelles technologies avec accompagnement personnalisé.',
    domain: 'Technologie',
    type: 'École Technique',
    city: 'Dakar',
    country: 'Sénégal',
    coordinates: [14.6937, -17.4441],
    contact: {
      phone: '+221 33 842 12 34',
      email: 'contact@est-dakar.edu.sn',
      website: 'https://est-dakar.edu.sn',
      address: 'Avenue Cheikh Anta Diop, Dakar'
    },
    pricing: {
      isFree: false,
      price: '200 000 - 400 000 FCFA/an'
    },
    certifications: ['BTS Informatique', 'Licence Pro', 'Master Tech'],
    testimonials: [
      {
        id: '1',
        studentName: 'Aminata Diallo',
        content: 'Excellente formation pratique qui m\'a permis de décrocher un emploi rapidement !',
        rating: 5,
        course: 'BTS Informatique'
      },
      {
        id: '2',
        studentName: 'Moussa Ba',
        content: 'Professeurs compétents et équipements modernes.',
        rating: 4,
        course: 'Licence Pro'
      }
    ],
    images: ['https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'],
    logo: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    rating: 4.5,
    studentsCount: 1200
  },
  {
    id: '2',
    name: 'Institut de Formation en Santé d\'Abidjan',
    description: 'Centre de référence pour les formations médicales et paramédicales en Côte d\'Ivoire.',
    domain: 'Santé',
    type: 'Institut',
    city: 'Abidjan',
    country: 'Côte d\'Ivoire',
    coordinates: [5.3600, -4.0083],
    contact: {
      phone: '+225 22 44 56 78',
      email: 'info@ifsa-abidjan.edu.ci',
      website: 'https://ifsa-abidjan.edu.ci',
      address: 'Plateau, Abidjan'
    },
    pricing: {
      isFree: false,
      price: '150 000 - 300 000 FCFA/an'
    },
    certifications: ['Diplôme Infirmier', 'BTS Analyses Biomédicales'],
    testimonials: [
      {
        id: '3',
        studentName: 'Fatou Koné',
        content: 'Formation complète avec beaucoup de pratique en hôpital.',
        rating: 5,
        course: 'Diplôme Infirmier'
      }
    ],
    images: ['https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg'],
    logo: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg',
    rating: 4.3,
    studentsCount: 800
  },
  {
    id: '3',
    name: 'Centre Agro-pastoral de Ouagadougou',
    description: 'Formation pratique en agriculture moderne et élevage durable pour l\'autonomie alimentaire.',
    domain: 'Agriculture',
    type: 'Centre de Formation',
    city: 'Ouagadougou',
    country: 'Burkina Faso',
    coordinates: [12.3714, -1.5197],
    contact: {
      phone: '+226 25 30 45 67',
      email: 'contact@capo.bf',
      website: 'https://capo.bf',
      address: 'Secteur 15, Ouagadougou'
    },
    pricing: {
      isFree: true,
      price: 'Formation gratuite'
    },
    certifications: ['CAP Agriculture', 'BEP Élevage'],
    testimonials: [
      {
        id: '4',
        studentName: 'Ibrahim Sawadogo',
        content: 'J\'ai appris des techniques modernes qui ont transformé mon exploitation.',
        rating: 5,
        course: 'CAP Agriculture'
      }
    ],
    images: ['https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg'],
    logo: 'https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg',
    rating: 4.7,
    studentsCount: 600
  },
  {
    id: '4',
    name: 'Université Virtuelle du Mali',
    description: 'Formations en ligne de qualité accessible partout au Mali avec diplômes reconnus.',
    domain: 'Formation en ligne',
    type: 'Université',
    city: 'Bamako',
    country: 'Mali',
    coordinates: [12.6392, -8.0029],
    contact: {
      phone: '+223 20 22 34 56',
      email: 'admin@uvm.edu.ml',
      website: 'https://uvm.edu.ml',
      address: 'Hippodrome, Bamako'
    },
    pricing: {
      isFree: false,
      price: '100 000 - 250 000 FCFA/an'
    },
    certifications: ['Licence Management', 'Master Commerce'],
    testimonials: [
      {
        id: '5',
        studentName: 'Mariam Traoré',
        content: 'Flexibilité parfaite pour étudier tout en travaillant !',
        rating: 4,
        course: 'Licence Management'
      }
    ],
    images: ['https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg'],
    logo: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg',
    rating: 4.1,
    studentsCount: 2500
  },
  {
    id: '5',
    name: 'École des Beaux-Arts de Lomé',
    description: 'Développez votre créativité dans un environnement artistique stimulant avec des maîtres reconnus.',
    domain: 'Arts & Culture',
    type: 'École Spécialisée',
    city: 'Lomé',
    country: 'Togo',
    coordinates: [6.1375, 1.2123],
    contact: {
      phone: '+228 22 45 67 89',
      email: 'contact@eba-lome.tg',
      website: 'https://eba-lome.tg',
      address: 'Boulevard du Mono, Lomé'
    },
    pricing: {
      isFree: false,
      price: '80 000 - 150 000 FCFA/an'
    },
    certifications: ['BTS Arts Plastiques', 'Licence Arts Visuels'],
    testimonials: [
      {
        id: '6',
        studentName: 'Koffi Mensah',
        content: 'Ambiance créative exceptionnelle, professeurs passionnés !',
        rating: 5,
        course: 'BTS Arts Plastiques'
      }
    ],
    images: ['https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg'],
    logo: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg',
    rating: 4.4,
    studentsCount: 450
  }
];

export const domains = [
  'Tous les domaines',
  'Technologie',
  'Santé',
  'Agriculture',
  'Formation en ligne',
  'Arts & Culture',
  'Commerce',
  'Ingénierie'
];

export const types = [
  'Tous les types',
  'Université',
  'École Technique',
  'Institut',
  'Centre de Formation',
  'École Spécialisée'
];

export const cities = [
  'Toutes les villes',
  'Dakar',
  'Abidjan',
  'Ouagadougou',
  'Bamako',
  'Lomé',
  'Cotonou',
  'Niamey'
];