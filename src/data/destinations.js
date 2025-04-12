
// A comprehensive list of travel destinations with cost information
const destinations = [
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    description: 'Known for its lush landscapes, beautiful beaches, and vibrant culture, Bali offers a mix of relaxation and adventure.',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&h=400',
    averageCosts: {
      accommodation: {
        budget: 15,
        mid: 60,
        luxury: 200
      },
      food: {
        budget: 10,
        mid: 25,
        luxury: 70
      },
      transportation: {
        budget: 5,
        mid: 15,
        luxury: 40
      },
      activities: [
        {
          name: 'Ubud Monkey Forest',
          description: 'Natural sanctuary with over 700 monkeys',
          cost: 8,
          category: 'nature'
        },
        {
          name: 'Bali Swing',
          description: 'Swing over the jungle with amazing views',
          cost: 35,
          category: 'adventure'
        },
        {
          name: 'Mount Batur Sunrise Trek',
          description: 'Guided hike to an active volcano',
          cost: 45,
          category: 'adventure'
        },
        {
          name: 'Balinese Cooking Class',
          description: 'Learn to make local cuisine',
          cost: 30,
          category: 'food'
        },
        {
          name: 'Uluwatu Temple Visit',
          description: 'Ancient sea temple with cultural performances',
          cost: 10,
          category: 'culture'
        },
        {
          name: 'Tegalalang Rice Terraces',
          description: 'Iconic stepped rice fields',
          cost: 2,
          category: 'nature'
        },
        {
          name: 'Spa Treatment',
          description: 'Traditional Balinese massage',
          cost: 15,
          category: 'relaxation'
        },
        {
          name: 'Surfing Lesson',
          description: 'Learn to surf on Kuta beach',
          cost: 25,
          category: 'adventure'
        }
      ]
    }
  },
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    description: 'The City of Light offers world-class museums, iconic architecture, and renowned cuisine, making it a dream destination for culture enthusiasts.',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&h=400',
    averageCosts: {
      accommodation: {
        budget: 60,
        mid: 150,
        luxury: 400
      },
      food: {
        budget: 20,
        mid: 50,
        luxury: 120
      },
      transportation: {
        budget: 10,
        mid: 25,
        luxury: 80
      },
      activities: [
        {
          name: 'Eiffel Tower',
          description: 'Iconic iron lattice tower',
          cost: 25,
          category: 'culture'
        },
        {
          name: 'Louvre Museum',
          description: 'World\'s largest art museum',
          cost: 17,
          category: 'culture'
        },
        {
          name: 'Seine River Cruise',
          description: 'Boat tour along the Seine',
          cost: 15,
          category: 'relaxation'
        },
        {
          name: 'Palace of Versailles',
          description: 'Historic royal château',
          cost: 18,
          category: 'culture'
        },
        {
          name: 'Paris Food Tour',
          description: 'Guided culinary experience',
          cost: 95,
          category: 'food'
        },
        {
          name: 'Montmartre Walking Tour',
          description: 'Explore the artistic neighborhood',
          cost: 35,
          category: 'culture'
        },
        {
          name: 'Père Lachaise Cemetery',
          description: 'Visit famous graves',
          cost: 0,
          category: 'culture'
        },
        {
          name: 'Cooking Class',
          description: 'Learn to make French cuisine',
          cost: 120,
          category: 'food'
        }
      ]
    }
  },
  {
    id: 'bangkok',
    name: 'Bangkok',
    country: 'Thailand',
    description: 'A city of contrasts, Bangkok offers ancient temples, modern shopping malls, and vibrant street life with some of the world\'s best street food.',
    imageUrl: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=800&h=400',
    averageCosts: {
      accommodation: {
        budget: 15,
        mid: 50,
        luxury: 150
      },
      food: {
        budget: 5,
        mid: 15,
        luxury: 50
      },
      transportation: {
        budget: 5,
        mid: 15,
        luxury: 30
      },
      activities: [
        {
          name: 'Grand Palace',
          description: 'Former royal residence with temples',
          cost: 15,
          category: 'culture'
        },
        {
          name: 'Chatuchak Weekend Market',
          description: 'One of the world\'s largest markets',
          cost: 0,
          category: 'culture'
        },
        {
          name: 'Thai Cooking Class',
          description: 'Learn to cook Thai dishes',
          cost: 30,
          category: 'food'
        },
        {
          name: 'Chao Phraya River Cruise',
          description: 'Evening dinner cruise',
          cost: 40,
          category: 'relaxation'
        },
        {
          name: 'Wat Arun',
          description: 'Temple of Dawn visit',
          cost: 3,
          category: 'culture'
        },
        {
          name: 'Muay Thai Match',
          description: 'Watch traditional Thai boxing',
          cost: 25,
          category: 'culture'
        },
        {
          name: 'Bangkok Street Food Tour',
          description: 'Guided tour of best street eats',
          cost: 35,
          category: 'food'
        },
        {
          name: 'Jim Thompson House',
          description: 'Museum in a traditional Thai house',
          cost: 6,
          category: 'culture'
        }
      ]
    }
  },
  {
    id: 'rome',
    name: 'Rome',
    country: 'Italy',
    description: 'The Eternal City is a living museum of ancient history, Renaissance art, and mouthwatering Italian cuisine.',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&h=400',
    averageCosts: {
      accommodation: {
        budget: 50,
        mid: 120,
        luxury: 300
      },
      food: {
        budget: 20,
        mid: 45,
        luxury: 100
      },
      transportation: {
        budget: 10,
        mid: 25,
        luxury: 60
      },
      activities: [
        {
          name: 'Colosseum',
          description: 'Ancient Roman amphitheater',
          cost: 16,
          category: 'culture'
        },
        {
          name: 'Vatican Museums & Sistine Chapel',
          description: 'Historic art collections and Michelangelo\'s masterpiece',
          cost: 17,
          category: 'culture'
        },
        {
          name: 'Roman Forum',
          description: 'Ancient government buildings',
          cost: 16,
          category: 'culture'
        },
        {
          name: 'Pasta Making Class',
          description: 'Learn to make pasta from scratch',
          cost: 55,
          category: 'food'
        },
        {
          name: 'Trevi Fountain',
          description: 'Iconic Baroque fountain',
          cost: 0,
          category: 'culture'
        },
        {
          name: 'Borghese Gallery',
          description: 'Art museum with Bernini sculptures',
          cost: 13,
          category: 'culture'
        },
        {
          name: 'Appian Way Bike Tour',
          description: 'Cycling on ancient Roman road',
          cost: 45,
          category: 'adventure'
        },
        {
          name: 'Food Tour in Trastevere',
          description: 'Sample local cuisine in a hip neighborhood',
          cost: 75,
          category: 'food'
        }
      ]
    }
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    description: 'An ultra-modern metropolis that offers a unique blend of traditional culture and cutting-edge technology.',
    imageUrl: 'https://images.unsplash.com/photo-1535327027240-5a6e51a6354d?auto=format&fit=crop&w=800&h=400',
    averageCosts: {
      accommodation: {
        budget: 35,
        mid: 120,
        luxury: 350
      },
      food: {
        budget: 10,
        mid: 30,
        luxury: 100
      },
      transportation: {
        budget: 10,
        mid: 20,
        luxury: 60
      },
      activities: [
        {
          name: 'Meiji Shrine',
          description: 'Shinto shrine in a forest setting',
          cost: 0,
          category: 'culture'
        },
        {
          name: 'Tokyo Skytree',
          description: 'Tallest tower in Japan',
          cost: 18,
          category: 'culture'
        },
        {
          name: 'Tsukiji Outer Market',
          description: 'Famous seafood market',
          cost: 0,
          category: 'food'
        },
        {
          name: 'TeamLab Borderless',
          description: 'Digital art museum',
          cost: 30,
          category: 'culture'
        },
        {
          name: 'Sushi Making Class',
          description: 'Learn to make sushi',
          cost: 75,
          category: 'food'
        },
        {
          name: 'Mount Fuji Day Trip',
          description: 'Visit Japan\'s iconic mountain',
          cost: 125,
          category: 'nature'
        },
        {
          name: 'Robot Restaurant Show',
          description: 'Unique high-tech entertainment',
          cost: 80,
          category: 'culture'
        },
        {
          name: 'Senso-ji Temple',
          description: 'Tokyo\'s oldest temple',
          cost: 0,
          category: 'culture'
        }
      ]
    }
  }
];

// Helper function to get a destination by ID
export const getDestinationById = (id) => {
  return destinations.find(destination => destination.id === id) || null;
};

export { destinations };
