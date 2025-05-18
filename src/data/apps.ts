export interface Review {
  user: string
  rating: number
  comment: string
}

export interface App {
  id: string
  name: string
  description: string
  category: 'Education' | 'Health' | 'Productivity'
  icon: string
  screenshots: string[]
  rating: number
  reviews: number
  developer: string
  price: number
  features: string[]
  downloads: number
}

export const apps: App[] = [
  {
    id: '1',
    name: 'Language Master',
    description: 'Learn any language with AI-powered lessons and native speakers.',
    category: 'Education',
    icon: 'https://i.ibb.co.com/tw6M52bx/image.png',
    screenshots: [
      'https://i.ibb.co.com/8TXz8k0/image.png',
      'https://i.ibb.co.com/vC061sjH/image.png',
      'https://i.ibb.co.com/BVNX6mPG/image.png'
    ],
    rating: 4.8,
    reviews: 1250,
    developer: 'EduTech Inc.',
    price: 0,
    features: ['AI tutor', 'Speech recognition', 'Progress tracking'],
    downloads: 125000
  },
  {
    id: '2',
    name: 'Fitness Coach',
    description: 'Personal trainer in your pocket with customized workout plans.',
    category: 'Health',
    icon: 'https://i.ibb.co.com/QvC1jr0S/image.png',
    screenshots: [
      'https://i.ibb.co.com/JwLv9py3/image.png',
      'https://i.ibb.co.com/RkJ0mJtW/image.png',
      'https://i.ibb.co.com/xSSQkLnW/image.png'
    ],
    rating: 4.9,
    reviews: 2300,
    developer: 'HealthTech Labs',
    price: 4.99,
    features: ['Custom workouts', 'Nutrition plans', 'Progress tracking'],
    downloads: 250000
  },
  {
    id: '3',
    name: 'Task Master',
    description: 'Boost your productivity with smart task management.',
    category: 'Productivity',
    icon: 'https://i.ibb.co.com/vxzSrQRT/image.png',
    screenshots: [
      'https://i.ibb.co.com/q3NpVcy4/image.png',
      'https://i.ibb.co.com/DgTr0rRN/image.png',
      'https://i.ibb.co.com/B5WZFRVt/image.png'
    ],
    rating: 4.7,
    reviews: 1800,
    developer: 'ProductivityPro',
    price: 2.99,
    features: ['Smart scheduling', 'Team collaboration', 'Analytics'],
    downloads: 180000
  },
  {
    id: '4',
    name: 'Math Genius',
    description: 'Make learning mathematics fun and interactive.',
    category: 'Education',
    icon: 'https://i.ibb.co.com/DfC3VW3D/image.png',
    screenshots: [
      'https://i.ibb.co.com/RpjbMxW2/image.png',
      'https://i.ibb.co.com/3mkjQkpJ/image.png',
      'https://i.ibb.co.com/7NkHyq6Z/image.png'
    ],
    rating: 4.6,
    reviews: 950,
    developer: 'EduTech Inc.',
    price: 1.99,
    features: ['Interactive lessons', 'Practice exercises', 'Progress reports'],
    downloads: 95000
  },
  {
    id: '5',
    name: 'Meditation Guide',
    description: 'Find peace and mindfulness with guided meditations.',
    category: 'Health',
    icon: 'https://i.ibb.co.com/zWyd6C9C/image.png',
    screenshots: [
      'https://i.ibb.co.com/Rpfkm6zR/image.png',
      'https://i.ibb.co.com/yFKyVqj8/image.png',
      'https://i.ibb.co.com/4Z1d9zXq/image.png'
    ],
    rating: 4.8,
    reviews: 1600,
    developer: 'MindfulTech',
    price: 0,
    features: ['Guided sessions', 'Sleep stories', 'Breathing exercises'],
    downloads: 160000
  },
  {
    id: '6',
    name: 'Note Master',
    description: 'Take smart notes with AI organization and search.',
    category: 'Productivity',
    icon: 'https://i.ibb.co.com/DPzCNgns/image.png',
    screenshots: [
      'https://i.ibb.co.com/qF0QpdWV/image.png',
      'https://i.ibb.co.com/yH9rKD2/image.png',
      'https://i.ibb.co.com/KzcKYJZz/image.png'
    ],
    rating: 4.5,
    reviews: 1100,
    developer: 'NoteTech',
    price: 3.99,
    features: ['AI organization', 'Cloud sync', 'Rich text editor'],
    downloads: 110000
  }
] 