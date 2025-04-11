
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
  {
    id: "new-york",
    name: "New York City",
    country: "United States",
    description: "The Big Apple offers world-class museums, diverse food, iconic skylines, and non-stop entertainment.",
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 70,
        mid: 200,
        luxury: 500,
      },
      food: {
        budget: 20,
        mid: 50,
        luxury: 150,
      },
      transportation: {
        budget: 15,
        mid: 40,
        luxury: 100,
      },
      activities: [
        {
          name: "Empire State Building",
          cost: 42,
          description: "Iconic skyscraper with panoramic city views.",
          category: "culture",
        },
        {
          name: "Metropolitan Museum of Art",
          cost: 25,
          description: "One of the world's largest and finest art museums.",
          category: "culture",
        },
        {
          name: "Central Park Bike Tour",
          cost: 45,
          description: "Guided bicycle tour through the famous urban park.",
          category: "nature",
        },
        {
          name: "Broadway Show",
          cost: 120,
          description: "World-class theatrical performances.",
          category: "culture",
        },
        {
          name: "Food Tour of Greenwich Village",
          cost: 60,
          description: "Sample diverse cuisine in this famous neighborhood.",
          category: "food",
        },
        {
          name: "Staten Island Ferry",
          cost: 0,
          description: "Free ferry with views of the Statue of Liberty.",
          category: "nature",
        },
      ],
    },
  },
  {
    id: "sydney",
    name: "Sydney",
    country: "Australia",
    description: "Stunning harbor city known for its iconic Opera House, beautiful beaches, and laid-back lifestyle.",
    imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 40,
        mid: 150,
        luxury: 350,
      },
      food: {
        budget: 15,
        mid: 40,
        luxury: 100,
      },
      transportation: {
        budget: 10,
        mid: 25,
        luxury: 70,
      },
      activities: [
        {
          name: "Sydney Opera House Tour",
          cost: 40,
          description: "Guided tour of the iconic performing arts center.",
          category: "culture",
        },
        {
          name: "Bondi to Coogee Beach Walk",
          cost: 0,
          description: "Scenic coastal walk between famous beaches.",
          category: "nature",
        },
        {
          name: "Sydney Harbour Bridge Climb",
          cost: 200,
          description: "Climb to the top of the famous bridge for spectacular views.",
          category: "adventure",
        },
        {
          name: "Taronga Zoo",
          cost: 45,
          description: "Renowned zoo with Australian wildlife and harbor views.",
          category: "nature",
        },
        {
          name: "Royal Botanic Garden",
          cost: 0,
          description: "Beautiful gardens with native and exotic plants.",
          category: "nature",
        },
        {
          name: "Australian Food and Wine Tour",
          cost: 90,
          description: "Taste local specialties and renowned Australian wines.",
          category: "food",
        },
      ],
    },
  },
  {
    id: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    description: "Stunning coastal city with dramatic mountains, diverse culture, and extraordinary natural beauty.",
    imageUrl: "https://images.unsplash.com/photo-1576485375217-d6a95e34d043?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 25,
        mid: 80,
        luxury: 250,
      },
      food: {
        budget: 10,
        mid: 25,
        luxury: 70,
      },
      transportation: {
        budget: 8,
        mid: 20,
        luxury: 60,
      },
      activities: [
        {
          name: "Table Mountain Cable Car",
          cost: 25,
          description: "Ride up to the iconic flat-topped mountain.",
          category: "nature",
        },
        {
          name: "Robben Island Tour",
          cost: 30,
          description: "Visit the prison where Nelson Mandela was held.",
          category: "culture",
        },
        {
          name: "Cape Point Nature Reserve",
          cost: 20,
          description: "Dramatic coastal scenery at the Cape of Good Hope.",
          category: "nature",
        },
        {
          name: "Wine Tasting in Stellenbosch",
          cost: 40,
          description: "Tour and tastings at world-class wineries.",
          category: "food",
        },
        {
          name: "V&A Waterfront",
          cost: 0,
          description: "Shopping, dining, and entertainment complex.",
          category: "culture",
        },
        {
          name: "Shark Cage Diving",
          cost: 150,
          description: "Underwater encounter with great white sharks.",
          category: "adventure",
        },
      ],
    },
  },
  {
    id: "barcelona",
    name: "Barcelona",
    country: "Spain",
    description: "Vibrant city famous for stunning architecture, Mediterranean beaches, and lively culture.",
    imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 35,
        mid: 120,
        luxury: 300,
      },
      food: {
        budget: 15,
        mid: 35,
        luxury: 90,
      },
      transportation: {
        budget: 10,
        mid: 25,
        luxury: 70,
      },
      activities: [
        {
          name: "Sagrada Familia",
          cost: 26,
          description: "Gaudí's unfinished masterpiece basilica.",
          category: "culture",
        },
        {
          name: "Park Güell",
          cost: 10,
          description: "Colorful park with amazing views and Gaudí's works.",
          category: "culture",
        },
        {
          name: "Tapas Walking Tour",
          cost: 70,
          description: "Sample Spanish cuisine across several tapas bars.",
          category: "food",
        },
        {
          name: "Barceloneta Beach",
          cost: 0,
          description: "Popular urban beach with restaurants and activities.",
          category: "relaxation",
        },
        {
          name: "Gothic Quarter Walking Tour",
          cost: 15,
          description: "Guided tour through the historic medieval quarter.",
          category: "culture",
        },
        {
          name: "Cooking Class",
          cost: 65,
          description: "Learn to make paella and other Spanish dishes.",
          category: "food",
        },
      ],
    },
  },
  {
    id: "marrakech",
    name: "Marrakech",
    country: "Morocco",
    description: "Ancient city with maze-like medinas, colorful souks, historic palaces, and vibrant culture.",
    imageUrl: "https://images.unsplash.com/photo-1597212720452-ba1779964e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 20,
        mid: 80,
        luxury: 250,
      },
      food: {
        budget: 10,
        mid: 25,
        luxury: 70,
      },
      transportation: {
        budget: 5,
        mid: 15,
        luxury: 50,
      },
      activities: [
        {
          name: "Jemaa el-Fnaa Square",
          cost: 0,
          description: "Famous market square with performers and food stalls.",
          category: "culture",
        },
        {
          name: "Majorelle Garden",
          cost: 8,
          description: "Beautiful botanical garden and artist's landscape garden.",
          category: "nature",
        },
        {
          name: "Moroccan Cooking Workshop",
          cost: 40,
          description: "Learn to prepare traditional Moroccan dishes.",
          category: "food",
        },
        {
          name: "Bahia Palace",
          cost: 7,
          description: "19th-century palace with beautiful architecture.",
          category: "culture",
        },
        {
          name: "Atlas Mountains Day Trip",
          cost: 70,
          description: "Experience Berber villages and mountain scenery.",
          category: "adventure",
        },
        {
          name: "Hammam Spa Experience",
          cost: 30,
          description: "Traditional Moroccan bath and massage treatment.",
          category: "relaxation",
        },
      ],
    },
  },
  {
    id: "rio-de-janeiro",
    name: "Rio de Janeiro",
    country: "Brazil",
    description: "Spectacular city of beaches, mountains, and vibrant culture, home to Christ the Redeemer statue.",
    imageUrl: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 25,
        mid: 90,
        luxury: 250,
      },
      food: {
        budget: 10,
        mid: 30,
        luxury: 80,
      },
      transportation: {
        budget: 5,
        mid: 20,
        luxury: 60,
      },
      activities: [
        {
          name: "Christ the Redeemer",
          cost: 20,
          description: "Iconic statue overlooking the city.",
          category: "culture",
        },
        {
          name: "Sugarloaf Mountain Cable Car",
          cost: 30,
          description: "Ride to the top of the famous mountain for panoramic views.",
          category: "nature",
        },
        {
          name: "Copacabana Beach",
          cost: 0,
          description: "Famous beach with vibrant boardwalk scene.",
          category: "relaxation",
        },
        {
          name: "Samba Dance Lesson",
          cost: 35,
          description: "Learn Brazil's most famous dance.",
          category: "culture",
        },
        {
          name: "Tijuca Forest Jeep Tour",
          cost: 70,
          description: "Explore the world's largest urban rainforest.",
          category: "adventure",
        },
        {
          name: "Brazilian Barbecue Experience",
          cost: 40,
          description: "Traditional all-you-can-eat meat feast.",
          category: "food",
        },
      ],
    },
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    description: "Futuristic city of superlatives with record-breaking architecture, luxury shopping, and desert adventures.",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 50,
        mid: 150,
        luxury: 400,
      },
      food: {
        budget: 15,
        mid: 40,
        luxury: 120,
      },
      transportation: {
        budget: 10,
        mid: 30,
        luxury: 100,
      },
      activities: [
        {
          name: "Burj Khalifa",
          cost: 40,
          description: "Visit the observation deck of the world's tallest building.",
          category: "adventure",
        },
        {
          name: "Desert Safari",
          cost: 80,
          description: "Dune bashing, camel rides, and traditional dinner in the desert.",
          category: "adventure",
        },
        {
          name: "Dubai Mall",
          cost: 0,
          description: "One of the world's largest shopping centers (entry is free).",
          category: "culture",
        },
        {
          name: "Dubai Fountain Show",
          cost: 0,
          description: "Spectacular water, music, and light show.",
          category: "culture",
        },
        {
          name: "Palm Jumeirah Monorail",
          cost: 15,
          description: "Ride over the famous palm-shaped island.",
          category: "adventure",
        },
        {
          name: "Dubai Food Tour",
          cost: 90,
          description: "Sample Middle Eastern cuisine and local specialties.",
          category: "food",
        },
      ],
    },
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    description: "Japan's cultural heart with thousands of classical Buddhist temples, Shinto shrines, and traditional gardens.",
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 30,
        mid: 110,
        luxury: 350,
      },
      food: {
        budget: 15,
        mid: 30,
        luxury: 120,
      },
      transportation: {
        budget: 10,
        mid: 25,
        luxury: 70,
      },
      activities: [
        {
          name: "Fushimi Inari Shrine",
          cost: 0,
          description: "Famous shrine with thousands of vermilion torii gates.",
          category: "culture",
        },
        {
          name: "Kinkaku-ji (Golden Pavilion)",
          cost: 5,
          description: "Zen Buddhist temple covered in gold leaf.",
          category: "culture",
        },
        {
          name: "Arashiyama Bamboo Grove",
          cost: 0,
          description: "Picturesque path through towering bamboo.",
          category: "nature",
        },
        {
          name: "Tea Ceremony Experience",
          cost: 30,
          description: "Participate in a traditional Japanese tea ceremony.",
          category: "culture",
        },
        {
          name: "Kimono Rental",
          cost: 40,
          description: "Rent a traditional kimono for a day of sightseeing.",
          category: "culture",
        },
        {
          name: "Nishiki Market Food Tour",
          cost: 60,
          description: "Sample local specialties at this famous food market.",
          category: "food",
        },
      ],
    },
  },
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    description: "Stunning island known for its whitewashed buildings, blue-domed churches, and breathtaking sunsets.",
    imageUrl: "https://images.unsplash.com/photo-1469796466635-455ede028aca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 45,
        mid: 150,
        luxury: 400,
      },
      food: {
        budget: 15,
        mid: 35,
        luxury: 100,
      },
      transportation: {
        budget: 12,
        mid: 30,
        luxury: 80,
      },
      activities: [
        {
          name: "Oia Sunset Viewing",
          cost: 0,
          description: "Watch the famous sunset from the village of Oia.",
          category: "nature",
        },
        {
          name: "Caldera Boat Tour",
          cost: 50,
          description: "Cruise around the volcanic caldera with hot springs.",
          category: "adventure",
        },
        {
          name: "Wine Tasting",
          cost: 40,
          description: "Sample the island's unique volcanic wines.",
          category: "food",
        },
        {
          name: "Akrotiri Archaeological Site",
          cost: 12,
          description: "Ancient Minoan bronze age settlement.",
          category: "culture",
        },
        {
          name: "Red Beach",
          cost: 0,
          description: "Stunning beach with red volcanic cliffs.",
          category: "nature",
        },
        {
          name: "Greek Cooking Class",
          cost: 70,
          description: "Learn to prepare traditional Greek dishes.",
          category: "food",
        },
      ],
    },
  },
  {
    id: "queenstown",
    name: "Queenstown",
    country: "New Zealand",
    description: "Adventure capital surrounded by mountains and set on Lake Wakatipu, known for outdoor activities.",
    imageUrl: "https://images.unsplash.com/photo-1589735475043-6afe338d4f9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 30,
        mid: 120,
        luxury: 300,
      },
      food: {
        budget: 15,
        mid: 35,
        luxury: 90,
      },
      transportation: {
        budget: 12,
        mid: 30,
        luxury: 80,
      },
      activities: [
        {
          name: "Bungee Jumping",
          cost: 150,
          description: "Jump from the world's first commercial bungee site.",
          category: "adventure",
        },
        {
          name: "Skyline Gondola",
          cost: 40,
          description: "Scenic ride to Bob's Peak for panoramic views.",
          category: "nature",
        },
        {
          name: "Milford Sound Day Trip",
          cost: 120,
          description: "Visit the stunning fiord in Fiordland National Park.",
          category: "nature",
        },
        {
          name: "Jet Boat Ride",
          cost: 80,
          description: "Thrilling high-speed boat trip through narrow canyons.",
          category: "adventure",
        },
        {
          name: "Lord of the Rings Tour",
          cost: 140,
          description: "Visit filming locations from the famous movies.",
          category: "culture",
        },
        {
          name: "Wine Tour in Central Otago",
          cost: 120,
          description: "Visit several wineries in New Zealand's southernmost wine region.",
          category: "food",
        },
      ],
    },
  },
  {
    id: "zurich",
    name: "Zurich",
    country: "Switzerland",
    description: "Global center for banking and finance with a picturesque old town and stunning lakeside setting.",
    imageUrl: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 60,
        mid: 180,
        luxury: 450,
      },
      food: {
        budget: 25,
        mid: 50,
        luxury: 150,
      },
      transportation: {
        budget: 15,
        mid: 30,
        luxury: 100,
      },
      activities: [
        {
          name: "Lake Zurich Cruise",
          cost: 30,
          description: "Scenic boat tour on the beautiful Lake Zurich.",
          category: "nature",
        },
        {
          name: "Bahnhofstrasse Shopping",
          cost: 0,
          description: "Stroll along one of the world's most expensive shopping streets.",
          category: "culture",
        },
        {
          name: "Swiss National Museum",
          cost: 10,
          description: "Learn about Swiss cultural history and crafts.",
          category: "culture",
        },
        {
          name: "Uetliberg Mountain",
          cost: 15,
          description: "Hike or take the train up for panoramic city views.",
          category: "nature",
        },
        {
          name: "Chocolate Tasting Tour",
          cost: 85,
          description: "Sample Swiss chocolates from artisan chocolatiers.",
          category: "food",
        },
        {
          name: "Thermal Baths & Spa",
          cost: 40,
          description: "Relax in mineral-rich thermal waters with city views.",
          category: "relaxation",
        },
      ],
    },
  },
  {
    id: "istanbul",
    name: "Istanbul",
    country: "Turkey",
    description: "Historic crossroads between Europe and Asia with magnificent mosques, bustling bazaars, and rich culture.",
    imageUrl: "https://images.unsplash.com/photo-1524231757912-21c4c3586a4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 20,
        mid: 70,
        luxury: 250,
      },
      food: {
        budget: 10,
        mid: 25,
        luxury: 80,
      },
      transportation: {
        budget: 5,
        mid: 15,
        luxury: 50,
      },
      activities: [
        {
          name: "Hagia Sophia",
          cost: 15,
          description: "Magnificent Byzantine church turned mosque.",
          category: "culture",
        },
        {
          name: "Blue Mosque",
          cost: 0,
          description: "Stunning mosque known for its blue tile interior.",
          category: "culture",
        },
        {
          name: "Bosphorus Cruise",
          cost: 20,
          description: "Boat trip along the strait that separates Europe and Asia.",
          category: "nature",
        },
        {
          name: "Grand Bazaar",
          cost: 0,
          description: "One of the world's oldest and largest covered markets.",
          category: "culture",
        },
        {
          name: "Turkish Bath (Hamam)",
          cost: 40,
          description: "Traditional cleansing and relaxation experience.",
          category: "relaxation",
        },
        {
          name: "Turkish Cooking Class",
          cost: 60,
          description: "Learn to prepare traditional Turkish dishes.",
          category: "food",
        },
      ],
    },
  },
  {
    id: "prague",
    name: "Prague",
    country: "Czech Republic",
    description: "Fairy-tale city with medieval architecture, romantic bridges, and a vibrant cultural scene.",
    imageUrl: "https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 25,
        mid: 80,
        luxury: 250,
      },
      food: {
        budget: 10,
        mid: 25,
        luxury: 70,
      },
      transportation: {
        budget: 5,
        mid: 15,
        luxury: 40,
      },
      activities: [
        {
          name: "Prague Castle",
          cost: 15,
          description: "Largest ancient castle complex in the world.",
          category: "culture",
        },
        {
          name: "Charles Bridge",
          cost: 0,
          description: "Historic bridge lined with statues of saints.",
          category: "culture",
        },
        {
          name: "Old Town Square",
          cost: 0,
          description: "Historic square with the famous Astronomical Clock.",
          category: "culture",
        },
        {
          name: "Beer Tasting Tour",
          cost: 35,
          description: "Sample Czech beers at traditional pubs.",
          category: "food",
        },
        {
          name: "Vltava River Cruise",
          cost: 20,
          description: "Scenic boat trip on Prague's main river.",
          category: "nature",
        },
        {
          name: "Traditional Czech Food Tour",
          cost: 50,
          description: "Taste local specialties like goulash and trdelník.",
          category: "food",
        },
      ],
    },
  },
  {
    id: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    description: "Beautiful canal city known for its artistic heritage, elaborate canal system, and narrow houses.",
    imageUrl: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 40,
        mid: 130,
        luxury: 350,
      },
      food: {
        budget: 15,
        mid: 35,
        luxury: 90,
      },
      transportation: {
        budget: 10,
        mid: 25,
        luxury: 60,
      },
      activities: [
        {
          name: "Van Gogh Museum",
          cost: 19,
          description: "Museum dedicated to works of Vincent van Gogh.",
          category: "culture",
        },
        {
          name: "Canal Cruise",
          cost: 16,
          description: "Boat tour through Amsterdam's famous canals.",
          category: "nature",
        },
        {
          name: "Anne Frank House",
          cost: 14,
          description: "Museum dedicated to Jewish wartime diarist Anne Frank.",
          category: "culture",
        },
        {
          name: "Rijksmuseum",
          cost: 20,
          description: "Dutch national museum with works by Rembrandt and Vermeer.",
          category: "culture",
        },
        {
          name: "Vondelpark",
          cost: 0,
          description: "Large public park for relaxation and recreation.",
          category: "nature",
        },
        {
          name: "Dutch Cheese Tasting",
          cost: 25,
          description: "Sample various Dutch cheeses with expert guidance.",
          category: "food",
        },
      ],
    },
  },
  {
    id: "buenos-aires",
    name: "Buenos Aires",
    country: "Argentina",
    description: "Vibrant city with European-style architecture, passionate tango, and exceptional food and wine.",
    imageUrl: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 20,
        mid: 70,
        luxury: 220,
      },
      food: {
        budget: 10,
        mid: 25,
        luxury: 70,
      },
      transportation: {
        budget: 5,
        mid: 15,
        luxury: 40,
      },
      activities: [
        {
          name: "Tango Show",
          cost: 60,
          description: "Experience Argentina's passionate national dance.",
          category: "culture",
        },
        {
          name: "Recoleta Cemetery",
          cost: 0,
          description: "Historic cemetery with elaborate tombs and mausoleums.",
          category: "culture",
        },
        {
          name: "La Boca Neighborhood",
          cost: 0,
          description: "Colorful district known for the Caminito street museum.",
          category: "culture",
        },
        {
          name: "Argentine Steak Dinner",
          cost: 30,
          description: "Enjoy the country's famous beef at a parrilla.",
          category: "food",
        },
        {
          name: "Tigre Delta Tour",
          cost: 40,
          description: "Boat trip through this unique river delta community.",
          category: "nature",
        },
        {
          name: "Tango Lesson",
          cost: 25,
          description: "Learn the basics of Argentine tango.",
          category: "culture",
        },
      ],
    },
  },
  {
    id: "singapore",
    name: "Singapore",
    country: "Singapore",
    description: "Modern city-state with futuristic architecture, diverse culture, lush gardens, and exceptional food.",
    imageUrl: "https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 40,
        mid: 150,
        luxury: 400,
      },
      food: {
        budget: 10,
        mid: 30,
        luxury: 100,
      },
      transportation: {
        budget: 8,
        mid: 20,
        luxury: 60,
      },
      activities: [
        {
          name: "Gardens by the Bay",
          cost: 20,
          description: "Futuristic nature park with Supertree Grove and conservatories.",
          category: "nature",
        },
        {
          name: "Marina Bay Sands SkyPark",
          cost: 23,
          description: "Observation deck on top of the iconic hotel.",
          category: "adventure",
        },
        {
          name: "Hawker Center Food Tour",
          cost: 50,
          description: "Sample diverse local cuisine at traditional food centers.",
          category: "food",
        },
        {
          name: "Singapore Zoo",
          cost: 40,
          description: "World-class zoo with open, naturalistic habitats.",
          category: "nature",
        },
        {
          name: "Sentosa Island",
          cost: 5,
          description: "Resort island with beaches, attractions, and Universal Studios.",
          category: "adventure",
        },
        {
          name: "Singapore Flyer",
          cost: 33,
          description: "Giant observation wheel with panoramic views.",
          category: "adventure",
        },
      ],
    },
  },
  {
    id: "berlin",
    name: "Berlin",
    country: "Germany",
    description: "Historic yet modern city known for its vibrant arts scene, fascinating history, and dynamic nightlife.",
    imageUrl: "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 30,
        mid: 100,
        luxury: 250,
      },
      food: {
        budget: 12,
        mid: 30,
        luxury: 80,
      },
      transportation: {
        budget: 8,
        mid: 20,
        luxury: 60,
      },
      activities: [
        {
          name: "Brandenburg Gate",
          cost: 0,
          description: "Iconic 18th-century neoclassical monument.",
          category: "culture",
        },
        {
          name: "Reichstag Building",
          cost: 0,
          description: "Historic parliament building with glass dome (free with reservation).",
          category: "culture",
        },
        {
          name: "Berlin Wall Memorial",
          cost: 0,
          description: "Historic site commemorating the divided city.",
          category: "culture",
        },
        {
          name: "Museum Island",
          cost: 18,
          description: "Complex of five world-renowned museums.",
          category: "culture",
        },
        {
          name: "Street Art Tour",
          cost: 20,
          description: "Guided tour of Berlin's famous urban art scene.",
          category: "culture",
        },
        {
          name: "German Beer Tasting",
          cost: 30,
          description: "Sample various German beers with food pairings.",
          category: "food",
        },
      ],
    },
  },
  {
    id: "vienna",
    name: "Vienna",
    country: "Austria",
    description: "Imperial city famous for its classical music heritage, grand palaces, coffeehouse culture, and museums.",
    imageUrl: "https://images.unsplash.com/photo-1516550893885-985c5fc9e202?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 35,
        mid: 120,
        luxury: 300,
      },
      food: {
        budget: 15,
        mid: 35,
        luxury: 90,
      },
      transportation: {
        budget: 8,
        mid: 20,
        luxury: 60,
      },
      activities: [
        {
          name: "Schönbrunn Palace",
          cost: 22,
          description: "Former imperial summer residence with gardens.",
          category: "culture",
        },
        {
          name: "Vienna State Opera",
          cost: 10,
          description: "Standing room tickets to world-class opera performances.",
          category: "culture",
        },
        {
          name: "Belvedere Palace",
          cost: 16,
          description: "Historic palace complex and art museum.",
          category: "culture",
        },
        {
          name: "Naschmarkt",
          cost: 0,
          description: "Popular market with food stalls and restaurants.",
          category: "food",
        },
        {
          name: "Vienna Coffeehouse Visit",
          cost: 10,
          description: "Experience traditional Viennese café culture.",
          category: "food",
        },
        {
          name: "Classical Concert",
          cost: 45,
          description: "Evening concert featuring Mozart and Strauss compositions.",
          category: "culture",
        },
      ],
    },
  },
  {
    id: "seoul",
    name: "Seoul",
    country: "South Korea",
    description: "Dynamic city blending ancient traditions with cutting-edge technology and vibrant youth culture.",
    imageUrl: "https://images.unsplash.com/photo-1538485399081-7c0be28ab280?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 25,
        mid: 100,
        luxury: 250,
      },
      food: {
        budget: 8,
        mid: 25,
        luxury: 80,
      },
      transportation: {
        budget: 7,
        mid: 20,
        luxury: 60,
      },
      activities: [
        {
          name: "Gyeongbokgung Palace",
          cost: 3,
          description: "Largest of the Five Grand Palaces of the Joseon Dynasty.",
          category: "culture",
        },
        {
          name: "Namsan Seoul Tower",
          cost: 10,
          description: "Iconic tower with panoramic city views.",
          category: "adventure",
        },
        {
          name: "Bukchon Hanok Village",
          cost: 0,
          description: "Traditional Korean village in the heart of Seoul.",
          category: "culture",
        },
        {
          name: "Korean Cooking Class",
          cost: 50,
          description: "Learn to make kimchi, bibimbap, and other Korean dishes.",
          category: "food",
        },
        {
          name: "K-Beauty Shopping Tour",
          cost: 30,
          description: "Guided tour of Korean skincare and beauty products.",
          category: "culture",
        },
        {
          name: "Street Food Tour",
          cost: 40,
          description: "Sample Korean street food in markets like Gwangjang.",
          category: "food",
        },
      ],
    },
  },
  {
    id: "havana",
    name: "Havana",
    country: "Cuba",
    description: "Colorful capital with vintage cars, colonial architecture, vibrant music, and rich cultural heritage.",
    imageUrl: "https://images.unsplash.com/photo-1500759285222-a95626b934cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 25,
        mid: 80,
        luxury: 200,
      },
      food: {
        budget: 8,
        mid: 20,
        luxury: 60,
      },
      transportation: {
        budget: 5,
        mid: 15,
        luxury: 50,
      },
      activities: [
        {
          name: "Old Havana Walking Tour",
          cost: 15,
          description: "Explore the historic district with a local guide.",
          category: "culture",
        },
        {
          name: "Classic Car Tour",
          cost: 35,
          description: "Ride through Havana in a vintage American car.",
          category: "adventure",
        },
        {
          name: "Salsa Lesson",
          cost: 20,
          description: "Learn the basics of Cuban salsa dancing.",
          category: "culture",
        },
        {
          name: "Cigar Factory Tour",
          cost: 10,
          description: "See how Cuba's famous cigars are made.",
          category: "culture",
        },
        {
          name: "Malecón Sunset Walk",
          cost: 0,
          description: "Stroll along the famous seaside promenade.",
          category: "relaxation",
        },
        {
          name: "Rum Tasting",
          cost: 25,
          description: "Sample various Cuban rums with expert guidance.",
          category: "food",
        },
      ],
    },
  },
  {
    id: "delhi",
    name: "Delhi",
    country: "India",
    description: "Historic capital blending ancient monuments, colonial architecture, and modern development.",
    imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 15,
        mid: 60,
        luxury: 200,
      },
      food: {
        budget: 5,
        mid: 15,
        luxury: 50,
      },
      transportation: {
        budget: 3,
        mid: 15,
        luxury: 40,
      },
      activities: [
        {
          name: "Red Fort",
          cost: 7,
          description: "Historic fort that served as the residence of Mughal emperors.",
          category: "culture",
        },
        {
          name: "Humayun's Tomb",
          cost: 7,
          description: "Tomb of the Mughal Emperor Humayun.",
          category: "culture",
        },
        {
          name: "Qutub Minar",
          cost: 7,
          description: "UNESCO World Heritage Site and the world's tallest brick minaret.",
          category: "culture",
        },
        {
          name: "Old Delhi Food Tour",
          cost: 35,
          description: "Sample street food in the historic district.",
          category: "food",
        },
        {
          name: "Lodhi Gardens",
          cost: 0,
          description: "Historical park containing tombs of medieval rulers.",
          category: "nature",
        },
        {
          name: "Indian Cooking Class",
          cost: 30,
          description: "Learn to prepare authentic Indian dishes.",
          category: "food",
        },
      ],
    },
  },
  {
    id: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    description: "Coastal capital with historic charm, colorful buildings, and a rich maritime history.",
    imageUrl: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 30,
        mid: 100,
        luxury: 250,
      },
      food: {
        budget: 12,
        mid: 30,
        luxury: 80,
      },
      transportation: {
        budget: 8,
        mid: 20,
        luxury: 60,
      },
      activities: [
        {
          name: "Belém Tower",
          cost: 6,
          description: "Iconic fortified tower on the Tagus River.",
          category: "culture",
        },
        {
          name: "Tram 28 Ride",
          cost: 3,
          description: "Historic tram route through the city's most interesting areas.",
          category: "culture",
        },
        {
          name: "Alfama Walking Tour",
          cost: 20,
          description: "Explore the oldest district of Lisbon.",
          category: "culture",
        },
        {
          name: "Fado Show",
          cost: 40,
          description: "Experience Portugal's traditional melancholic music.",
          category: "culture",
        },
        {
          name: "Pastéis de Belém",
          cost: 5,
          description: "Try the famous Portuguese custard tarts.",
          category: "food",
        },
        {
          name: "Day Trip to Sintra",
          cost: 70,
          description: "Visit the fairytale town and palaces nearby.",
          category: "adventure",
        },
      ],
    },
  },
  {
    id: "mexico-city",
    name: "Mexico City",
    country: "Mexico",
    description: "Vibrant capital with rich pre-Columbian history, colonial architecture, and world-class cuisine.",
    imageUrl: "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 20,
        mid: 70,
        luxury: 200,
      },
      food: {
        budget: 10,
        mid: 25,
        luxury: 70,
      },
      transportation: {
        budget: 5,
        mid: 15,
        luxury: 50,
      },
      activities: [
        {
          name: "Frida Kahlo Museum",
          cost: 14,
          description: "Blue house where the famous artist lived.",
          category: "culture",
        },
        {
          name: "Teotihuacan Pyramids",
          cost: 5,
          description: "Ancient Mesoamerican city with massive pyramids.",
          category: "culture",
        },
        {
          name: "Historic Center Walking Tour",
          cost: 20,
          description: "Explore the colonial heart of the city.",
          category: "culture",
        },
        {
          name: "Chapultepec Castle",
          cost: 7,
          description: "The only royal castle in the Americas.",
          category: "culture",
        },
        {
          name: "Street Food Tour",
          cost: 40,
          description: "Sample tacos, tamales, and other Mexican specialties.",
          category: "food",
        },
        {
          name: "Xochimilco Canals",
          cost: 25,
          description: "Boat ride on ancient canals on colorful trajineras.",
          category: "adventure",
        },
      ],
    },
  },
  {
    id: "hong-kong",
    name: "Hong Kong",
    country: "China",
    description: "Dynamic metropolis blending Chinese and British influences with stunning skyline and harbor.",
    imageUrl: "https://images.unsplash.com/photo-1506970845246-18f21d533b20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 40,
        mid: 150,
        luxury: 350,
      },
      food: {
        budget: 12,
        mid: 30,
        luxury: 100,
      },
      transportation: {
        budget: 8,
        mid: 20,
        luxury: 60,
      },
      activities: [
        {
          name: "Victoria Peak Tram",
          cost: 12,
          description: "Scenic tram ride to the highest point on Hong Kong Island.",
          category: "adventure",
        },
        {
          name: "Star Ferry",
          cost: 2,
          description: "Iconic ferry ride between Kowloon and Hong Kong Island.",
          category: "adventure",
        },
        {
          name: "Dim Sum Brunch",
          cost: 20,
          description: "Traditional Cantonese small plates meal.",
          category: "food",
        },
        {
          name: "Temple Street Night Market",
          cost: 0,
          description: "Bustling night market with food, goods, and fortune tellers.",
          category: "culture",
        },
        {
          name: "Big Buddha and Po Lin Monastery",
          cost: 10,
          description: "Giant Buddha statue on Lantau Island.",
          category: "culture",
        },
        {
          name: "Hong Kong Food Tour",
          cost: 75,
          description: "Sample local specialties with a knowledgeable guide.",
          category: "food",
        },
      ],
    },
  },
  {
    id: "dublin",
    name: "Dublin",
    country: "Ireland",
    description: "Friendly capital known for its literary heritage, historic buildings, vibrant pubs, and music scene.",
    imageUrl: "https://images.unsplash.com/photo-1599570146771-71543e47b8e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 35,
        mid: 120,
        luxury: 300,
      },
      food: {
        budget: 15,
        mid: 35,
        luxury: 90,
      },
      transportation: {
        budget: 8,
        mid: 20,
        luxury: 60,
      },
      activities: [
        {
          name: "Guinness Storehouse",
          cost: 26,
          description: "Interactive experience about Ireland's famous beer.",
          category: "culture",
        },
        {
          name: "Trinity College and Book of Kells",
          cost: 16,
          description: "Historic university and ancient manuscript.",
          category: "culture",
        },
        {
          name: "Temple Bar District",
          cost: 0,
          description: "Cultural quarter with pubs, restaurants, and shops.",
          category: "culture",
        },
        {
          name: "Literary Pub Crawl",
          cost: 30,
          description: "Tour of pubs associated with famous Irish writers.",
          category: "culture",
        },
        {
          name: "Traditional Irish Music Session",
          cost: 10,
          description: "Live folk music in a local pub (cost of one drink).",
          category: "culture",
        },
        {
          name: "Cliffs of Moher Day Trip",
          cost: 60,
          description: "Visit Ireland's most spectacular natural attraction.",
          category: "nature",
        },
      ],
    },
  },
  {
    id: "cairo",
    name: "Cairo",
    country: "Egypt",
    description: "Ancient city with pyramids, historic Islamic architecture, and the famous Egyptian Museum.",
    imageUrl: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 15,
        mid: 70,
        luxury: 200,
      },
      food: {
        budget: 5,
        mid: 20,
        luxury: 60,
      },
      transportation: {
        budget: 3,
        mid: 15,
        luxury: 40,
      },
      activities: [
        {
          name: "Pyramids of Giza",
          cost: 10,
          description: "Visit the only remaining wonder of the ancient world.",
          category: "culture",
        },
        {
          name: "Egyptian Museum",
          cost: 12,
          description: "Home to the world's largest collection of Pharaonic antiquities.",
          category: "culture",
        },
        {
          name: "Khan el-Khalili Bazaar",
          cost: 0,
          description: "Historic shopping district with local crafts and souvenirs.",
          category: "culture",
        },
        {
          name: "Nile Dinner Cruise",
          cost: 40,
          description: "Evening cruise with dinner and entertainment.",
          category: "relaxation",
        },
        {
          name: "Al-Azhar Park",
          cost: 2,
          description: "Beautiful park with views of historic Cairo.",
          category: "nature",
        },
        {
          name: "Egyptian Cooking Class",
          cost: 35,
          description: "Learn to prepare traditional Egyptian dishes.",
          category: "food",
        },
      ],
    },
  },
  {
    id: "florence",
    name: "Florence",
    country: "Italy",
    description: "Birthplace of the Renaissance with magnificent art, architecture, and Tuscan cuisine.",
    imageUrl: "https://images.unsplash.com/photo-1543429146-2aa67fc9daa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 40,
        mid: 120,
        luxury: 350,
      },
      food: {
        budget: 15,
        mid: 35,
        luxury: 100,
      },
      transportation: {
        budget: 8,
        mid: 20,
        luxury: 60,
      },
      activities: [
        {
          name: "Uffizi Gallery",
          cost: 20,
          description: "World-famous art museum with works by Botticelli, Michelangelo, and Leonardo.",
          category: "culture",
        },
        {
          name: "Duomo",
          cost: 18,
          description: "Florence's iconic cathedral with Brunelleschi's dome.",
          category: "culture",
        },
        {
          name: "Accademia Gallery (Michelangelo's David)",
          cost: 12,
          description: "Museum home to the original David sculpture.",
          category: "culture",
        },
        {
          name: "Tuscan Wine Tasting",
          cost: 50,
          description: "Sample wines from the Chianti region.",
          category: "food",
        },
        {
          name: "Cooking Class",
          cost: 85,
          description: "Learn to make pasta, tiramisu, and other Italian specialties.",
          category: "food",
        },
        {
          name: "Ponte Vecchio",
          cost: 0,
          description: "Medieval stone bridge with jewelry shops.",
          category: "culture",
        },
      ],
    },
  },
  {
    id: "reykjavik",
    name: "Reykjavik",
    country: "Iceland",
    description: "World's northernmost capital with colorful buildings, geothermal pools, and access to natural wonders.",
    imageUrl: "https://images.unsplash.com/photo-1580893246395-52aead8960dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 50,
        mid: 150,
        luxury: 350,
      },
      food: {
        budget: 20,
        mid: 50,
        luxury: 120,
      },
      transportation: {
        budget: 15,
        mid: 40,
        luxury: 100,
      },
      activities: [
        {
          name: "Blue Lagoon",
          cost: 60,
          description: "Famous geothermal spa with milky blue waters.",
          category: "relaxation",
        },
        {
          name: "Golden Circle Tour",
          cost: 80,
          description: "Visit Thingvellir National Park, Geysir, and Gullfoss waterfall.",
          category: "nature",
        },
        {
          name: "Northern Lights Tour (seasonal)",
          cost: 70,
          description: "Guided night tour to spot the Aurora Borealis.",
          category: "nature",
        },
        {
          name: "Hallgrímskirkja Church",
          cost: 10,
          description: "Iconic church with observation tower offering city views.",
          category: "culture",
        },
        {
          name: "Whale Watching",
          cost: 90,
          description: "Boat tour to see whales and dolphins in their natural habitat.",
          category: "nature",
        },
        {
          name: "Icelandic Food Tasting",
          cost: 70,
          description: "Try traditional and modern Icelandic cuisine.",
          category: "food",
        },
      ],
    },
  },
  {
    id: "new-orleans",
    name: "New Orleans",
    country: "United States",
    description: "Vibrant city known for its distinctive music, Creole cuisine, unique dialect, and annual Mardi Gras celebrations.",
    imageUrl: "https://images.unsplash.com/photo-1569949008298-28c95f5fd9c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 50,
        mid: 150,
        luxury: 300,
      },
      food: {
        budget: 15,
        mid: 40,
        luxury: 100,
      },
      transportation: {
        budget: 10,
        mid: 25,
        luxury: 70,
      },
      activities: [
        {
          name: "French Quarter Walking Tour",
          cost: 25,
          description: "Guided tour of the historic district.",
          category: "culture",
        },
        {
          name: "Jazz Club Visit",
          cost: 20,
          description: "Live music at a traditional New Orleans jazz venue.",
          category: "culture",
        },
        {
          name: "Swamp Tour",
          cost: 50,
          description: "Boat tour of the Louisiana bayous to see alligators and wildlife.",
          category: "nature",
        },
        {
          name: "Cooking Demonstration",
          cost: 35,
          description: "Learn to make gumbo, jambalaya, and other Creole dishes.",
          category: "food",
        },
        {
          name: "Cemetery Tour",
          cost: 25,
          description: "Guided tour of the historic above-ground cemeteries.",
          category: "culture",
        },
        {
          name: "Steamboat Cruise",
          cost: 40,
          description: "Scenic cruise on the Mississippi River.",
          category: "relaxation",
        },
      ],
    },
  },
  {
    id: "vancouver",
    name: "Vancouver",
    country: "Canada",
    description: "Coastal city surrounded by mountains, known for its film industry, outdoor activities, and cultural diversity.",
    imageUrl: "https://images.unsplash.com/photo-1519181258491-889c2b001485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 40,
        mid: 150,
        luxury: 300,
      },
      food: {
        budget: 15,
        mid: 40,
        luxury: 100,
      },
      transportation: {
        budget: 10,
        mid: 25,
        luxury: 70,
      },
      activities: [
        {
          name: "Stanley Park",
          cost: 0,
          description: "Urban park with scenic seawall, beaches, and forest trails.",
          category: "nature",
        },
        {
          name: "Capilano Suspension Bridge",
          cost: 55,
          description: "Suspended footbridge in a rainforest setting.",
          category: "adventure",
        },
        {
          name: "Granville Island",
          cost: 0,
          description: "Peninsula with public market, shops, and eateries (entry is free).",
          category: "culture",
        },
        {
          name: "Grouse Mountain",
          cost: 60,
          description: "Mountain with aerial tramway, ziplines, and wildlife refuge.",
          category: "adventure",
        },
        {
          name: "Vancouver Aquarium",
          cost: 40,
          description: "Public aquarium housing thousands of marine creatures.",
          category: "nature",
        },
        {
          name: "Food Truck Tour",
          cost: 60,
          description: "Guided tour of Vancouver's diverse food truck scene.",
          category: "food",
        },
      ],
    },
  },
  {
    id: "auckland",
    name: "Auckland",
    country: "New Zealand",
    description: "City of sails set between two harbors, surrounded by volcanic hills and blessed with beautiful beaches.",
    imageUrl: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 30,
        mid: 120,
        luxury: 300,
      },
      food: {
        budget: 15,
        mid: 35,
        luxury: 90,
      },
      transportation: {
        budget: 10,
        mid: 25,
        luxury: 70,
      },
      activities: [
        {
          name: "Sky Tower",
          cost: 32,
          description: "Observation deck with panoramic views of the city.",
          category: "adventure",
        },
        {
          name: "Waiheke Island Wine Tour",
          cost: 120,
          description: "Ferry to island vineyard tour with tastings.",
          category: "food",
        },
        {
          name: "Auckland War Memorial Museum",
          cost: 25,
          description: "Collection of Māori and Pacific Island artifacts.",
          category: "culture",
        },
        {
          name: "Rangitoto Island Hike",
          cost: 38,
          description: "Ferry and hike on a volcanic island.",
          category: "nature",
        },
        {
          name: "Harbor Sailing Experience",
          cost: 60,
          description: "Sail on an America's Cup yacht in Auckland Harbor.",
          category: "adventure",
        },
        {
          name: "Auckland Bridge Climb",
          cost: 150,
          description: "Guided climb over the Auckland Harbour Bridge.",
          category: "adventure",
        },
      ],
    },
  },
  {
    id: "helsinki",
    name: "Helsinki",
    country: "Finland",
    description: "Seaside city with striking architecture, design scene, sauna culture, and proximity to nature.",
    imageUrl: "https://images.unsplash.com/photo-1595846415458-404ddb4ac26a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 40,
        mid: 130,
        luxury: 300,
      },
      food: {
        budget: 15,
        mid: 40,
        luxury: 100,
      },
      transportation: {
        budget: 10,
        mid: 25,
        luxury: 70,
      },
      activities: [
        {
          name: "Suomenlinna Sea Fortress",
          cost: 0,
          description: "UNESCO World Heritage site on an island (ferry cost separate).",
          category: "culture",
        },
        {
          name: "Helsinki Cathedral",
          cost: 0,
          description: "Iconic white cathedral in the city center.",
          category: "culture",
        },
        {
          name: "Finnish Sauna Experience",
          cost: 20,
          description: "Traditional Finnish sauna with optional sea swimming.",
          category: "relaxation",
        },
        {
          name: "Design District Tour",
          cost: 30,
          description: "Guided tour of Helsinki's famous design district.",
          category: "culture",
        },
        {
          name: "Market Square and Old Market Hall",
          cost: 0,
          description: "Traditional markets with local food and crafts.",
          category: "food",
        },
        {
          name: "Nuuksio National Park",
          cost: 0,
          description: "Nearby wilderness with lakes and forests (transport cost separate).",
          category: "nature",
        },
      ],
    },
  },
  {
    id: "edinburgh",
    name: "Edinburgh",
    country: "Scotland",
    description: "Historic capital with medieval old town, Georgian new town, castle, and vibrant festival scene.",
    imageUrl: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 30,
        mid: 120,
        luxury: 300,
      },
      food: {
        budget: 15,
        mid: 35,
        luxury: 90,
      },
      transportation: {
        budget: 8,
        mid: 20,
        luxury: 60,
      },
      activities: [
        {
          name: "Edinburgh Castle",
          cost: 18,
          description: "Historic fortress dominating the city skyline.",
          category: "culture",
        },
        {
          name: "Royal Mile Walking Tour",
          cost: 15,
          description: "Guided tour of the historic street connecting Edinburgh Castle and Holyrood Palace.",
          category: "culture",
        },
        {
          name: "Arthur's Seat Hike",
          cost: 0,
          description: "Climb an ancient volcano for panoramic city views.",
          category: "nature",
        },
        {
          name: "Scotch Whisky Experience",
          cost: 19,
          description: "Interactive tour and tasting of Scotland's national drink.",
          category: "food",
        },
        {
          name: "Scottish Traditional Music Show",
          cost: 25,
          description: "Live performance of traditional Scottish music.",
          category: "culture",
        },
        {
          name: "Day Trip to Loch Ness",
          cost: 60,
          description: "Tour to the famous lake and surrounding Highlands.",
          category: "nature",
        },
      ],
    },
  },
  {
    id: "kuala-lumpur",
    name: "Kuala Lumpur",
    country: "Malaysia",
    description: "Modern capital with iconic Petronas Towers, diverse culture, shopping malls, and street food.",
    imageUrl: "https://images.unsplash.com/photo-1596422846543-75c6fc197f11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 15,
        mid: 60,
        luxury: 200,
      },
      food: {
        budget: 5,
        mid: 15,
        luxury: 50,
      },
      transportation: {
        budget: 5,
        mid: 15,
        luxury: 40,
      },
      activities: [
        {
          name: "Petronas Twin Towers",
          cost: 20,
          description: "Visit the observation deck of these iconic skyscrapers.",
          category: "adventure",
        },
        {
          name: "Batu Caves",
          cost: 0,
          description: "Hindu temple and shrine in a limestone cave.",
          category: "culture",
        },
        {
          name: "Jalan Alor Food Street",
          cost: 10,
          description: "Evening street food market with local specialties.",
          category: "food",
        },
        {
          name: "Islamic Arts Museum",
          cost: 5,
          description: "Collection of Islamic decorative arts and architecture.",
          category: "culture",
        },
        {
          name: "Menara KL Tower",
          cost: 15,
          description: "Communications tower with observation deck and revolving restaurant.",
          category: "adventure",
        },
        {
          name: "Malaysian Cooking Class",
          cost: 40,
          description: "Learn to prepare Malaysian dishes.",
          category: "food",
        },
      ],
    },
  },
  {
    id: "athens",
    name: "Athens",
    country: "Greece",
    description: "Ancient city with iconic Acropolis, archaeological sites, Mediterranean cuisine, and vibrant neighborhoods.",
    imageUrl: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    averageCosts: {
      accommodation: {
        budget: 25,
        mid: 90,
        luxury: 250,
      },
      food: {
        budget: 12,
        mid: 30,
        luxury: 80,
      },
      transportation: {
        budget: 8,
        mid: 20,
        luxury: 60,
      },
      activities: [
        {
          name: "Acropolis",
          cost: 20,
          description: "Ancient citadel with the Parthenon temple.",
          category: "culture",
        },
        {
          name: "Acropolis Museum",
          cost: 10,
          description: "Museum housing artifacts from the Acropolis archaeological site.",
          category: "culture",
        },
        {
          name: "Plaka Neighborhood",
          cost: 0,
          description: "Historic district with neoclassical architecture and shops.",
          category: "culture",
        },
        {
          name: "Greek Food Tour",
          cost: 50,
          description: "Sample traditional Greek dishes and visit local markets.",
          category: "food",
        },
        {
          name: "Temple of Poseidon Sunset Tour",
          cost: 50,
          description: "Visit the ancient temple at Cape Sounion at sunset.",
          category: "culture",
        },
        {
          name: "Day Trip to Delphi",
          cost: 90,
          description: "Visit the ancient sanctuary of Apollo.",
          category: "culture",
        },
      ],
    },
  },
];

export const getDestinationById = (id: string): Destination | undefined => {
  return destinations.find(destination => destination.id === id);
};

