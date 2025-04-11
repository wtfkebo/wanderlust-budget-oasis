
export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  averageCosts: {
    accommodation: {
      budget: number;
      mid: number;
      luxury: number;
    };
    food: {
      budget: number;
      mid: number;
      luxury: number;
    };
    transportation: {
      budget: number;
      mid: number;
      luxury: number;
    };
    activities: Activity[];
  };
}

export interface Activity {
  name: string;
  cost: number;
  description: string;
  category: "culture" | "nature" | "adventure" | "relaxation" | "food";
}

export const destinations: Destination[] = [
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    description: "A tropical paradise known for its iconic rice paddies, beautiful beaches, and spiritual retreats.",
    imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 15,
        mid: 50,
        luxury: 200,
      },
      food: {
        budget: 10,
        mid: 25,
        luxury: 60,
      },
      transportation: {
        budget: 5,
        mid: 15,
        luxury: 50,
      },
      activities: [
        {
          name: "Tegalalang Rice Terraces",
          cost: 15,
          description: "Visit the famous stepped rice paddies in Ubud.",
          category: "nature",
        },
        {
          name: "Uluwatu Temple",
          cost: 10,
          description: "Ancient sea temple perched on top of a steep cliff.",
          category: "culture",
        },
        {
          name: "Bali Swing",
          cost: 35,
          description: "Swing over the jungle and rice paddies for incredible photos.",
          category: "adventure",
        },
        {
          name: "Balinese Massage",
          cost: 15,
          description: "Traditional massage to relax and rejuvenate.",
          category: "relaxation",
        },
        {
          name: "Cooking Class",
          cost: 30,
          description: "Learn to make traditional Balinese dishes.",
          category: "food",
        },
        {
          name: "Mount Batur Sunrise Hike",
          cost: 40,
          description: "Hike an active volcano for stunning sunrise views.",
          category: "adventure",
        },
      ],
    },
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    description: "The City of Light famous for its museums, cuisine, and iconic landmarks like the Eiffel Tower.",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 50,
        mid: 150,
        luxury: 400,
      },
      food: {
        budget: 20,
        mid: 50,
        luxury: 150,
      },
      transportation: {
        budget: 10,
        mid: 30,
        luxury: 100,
      },
      activities: [
        {
          name: "Eiffel Tower",
          cost: 26,
          description: "Visit the iconic iron lattice tower.",
          category: "culture",
        },
        {
          name: "Louvre Museum",
          cost: 17,
          description: "World's largest art museum and home to the Mona Lisa.",
          category: "culture",
        },
        {
          name: "Seine River Cruise",
          cost: 15,
          description: "Boat tour on the Seine with views of Paris landmarks.",
          category: "relaxation",
        },
        {
          name: "Montmartre Walking Tour",
          cost: 0,
          description: "Explore the artsy hilltop district on your own.",
          category: "culture",
        },
        {
          name: "French Pastry Class",
          cost: 100,
          description: "Learn to make croissants and macarons from a pastry chef.",
          category: "food",
        },
        {
          name: "Luxembourg Gardens",
          cost: 0,
          description: "Relax in this beautiful park and garden.",
          category: "nature",
        },
      ],
    },
  },
  {
    id: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    description: "A bustling city known for its ornate shrines, vibrant street life, and boat-filled canals.",
    imageUrl: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 15,
        mid: 50,
        luxury: 200,
      },
      food: {
        budget: 5,
        mid: 15,
        luxury: 60,
      },
      transportation: {
        budget: 5,
        mid: 15,
        luxury: 40,
      },
      activities: [
        {
          name: "Grand Palace",
          cost: 15,
          description: "Historic complex of royal buildings and temples.",
          category: "culture",
        },
        {
          name: "Street Food Tour",
          cost: 30,
          description: "Guided tour of Bangkok's best street food stalls.",
          category: "food",
        },
        {
          name: "Chatuchak Weekend Market",
          cost: 0,
          description: "Huge market with thousands of vendors.",
          category: "culture",
        },
        {
          name: "Thai Massage",
          cost: 10,
          description: "Traditional therapeutic massage.",
          category: "relaxation",
        },
        {
          name: "Chao Phraya River Boat Tour",
          cost: 20,
          description: "See Bangkok from its main waterway.",
          category: "nature",
        },
        {
          name: "Muay Thai Boxing Match",
          cost: 30,
          description: "Watch Thailand's national sport live.",
          category: "adventure",
        },
      ],
    },
  },
  {
    id: "rome",
    name: "Rome",
    country: "Italy",
    description: "The Eternal City with ancient ruins, art, vibrant street life, and mouthwatering cuisine.",
    imageUrl: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 40,
        mid: 120,
        luxury: 350,
      },
      food: {
        budget: 20,
        mid: 40,
        luxury: 100,
      },
      transportation: {
        budget: 10,
        mid: 25,
        luxury: 80,
      },
      activities: [
        {
          name: "Colosseum",
          cost: 16,
          description: "Iconic ancient Roman gladiatorial arena.",
          category: "culture",
        },
        {
          name: "Vatican Museums & Sistine Chapel",
          cost: 17,
          description: "Art collections built up by the Catholic Church.",
          category: "culture",
        },
        {
          name: "Pasta Making Class",
          cost: 60,
          description: "Learn to make authentic Italian pasta from scratch.",
          category: "food",
        },
        {
          name: "Trevi Fountain",
          cost: 0,
          description: "Famous Baroque fountain in the city center.",
          category: "culture",
        },
        {
          name: "Villa Borghese Gardens",
          cost: 0,
          description: "Beautiful park with museums and attractions.",
          category: "nature",
        },
        {
          name: "Roman Food Tour",
          cost: 70,
          description: "Sample the best of Roman cuisine across multiple stops.",
          category: "food",
        },
      ],
    },
  },
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    description: "Ultra-modern city with historic temples, cutting-edge technology, and a rich food scene.",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 30,
        mid: 120,
        luxury: 400,
      },
      food: {
        budget: 15,
        mid: 30,
        luxury: 150,
      },
      transportation: {
        budget: 10,
        mid: 25,
        luxury: 80,
      },
      activities: [
        {
          name: "Sensoji Temple",
          cost: 0,
          description: "Tokyo's oldest temple in Asakusa.",
          category: "culture",
        },
        {
          name: "Tokyo Skytree",
          cost: 20,
          description: "One of the world's tallest towers with observation decks.",
          category: "adventure",
        },
        {
          name: "Tsukiji Outer Market Food Tour",
          cost: 100,
          description: "Sample fresh seafood and Japanese specialties.",
          category: "food",
        },
        {
          name: "Meiji Shrine",
          cost: 0,
          description: "Forested shrine dedicated to Emperor Meiji.",
          category: "culture",
        },
        {
          name: "Robot Restaurant Show",
          cost: 80,
          description: "Flashy entertainment show with robots and dancers.",
          category: "adventure",
        },
        {
          name: "Onsen Experience",
          cost: 15,
          description: "Traditional Japanese hot spring bath.",
          category: "relaxation",
        },
      ],
    },
  },
];

export const getDestinationById = (id: string): Destination | undefined => {
  return destinations.find(destination => destination.id === id);
};
