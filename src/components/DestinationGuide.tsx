
import React from 'react';
import { Destination } from '../data/destinations';
import { MapPin, Clock, CalendarDays, DollarSign, Thermometer } from 'lucide-react';

interface DestinationGuideProps {
  destination: Destination;
}

const DestinationGuide: React.FC<DestinationGuideProps> = ({ destination }) => {
  // Helper function to get the average cost range for a destination
  const getCostRange = () => {
    const budgetDaily = 
      destination.averageCosts.accommodation.budget + 
      destination.averageCosts.food.budget + 
      destination.averageCosts.transportation.budget;
    
    const luxuryDaily = 
      destination.averageCosts.accommodation.luxury + 
      destination.averageCosts.food.luxury + 
      destination.averageCosts.transportation.luxury;
    
    return `$${budgetDaily}-${luxuryDaily}`;
  };
  
  // Get destination-specific tips based on the destination
  const getDestinationTips = () => {
    switch(destination.id) {
      case 'bali':
        return [
          "Rent a scooter to get around easily (about $5/day)",
          "Visit waterfalls in the northern part of the island",
          "Avoid drinking tap water - buy bottled water or bring a filter",
          "Bring mosquito repellent and sunscreen",
          "Be respectful when visiting temples - cover shoulders and knees"
        ];
      case 'paris':
        return [
          "Get a Paris Museum Pass to save on multiple attractions",
          "Use the Metro to travel around the city efficiently",
          "Many museums are free on the first Sunday of each month",
          "Watch out for pickpockets in tourist areas",
          "Learn a few basic French phrases - locals appreciate the effort"
        ];
      case 'bangkok':
        return [
          "Use the BTS Skytrain to avoid traffic jams",
          "Negotiate prices at markets, but do so politely",
          "Carry tissue paper as some restrooms don't provide toilet paper",
          "Dress modestly when visiting temples",
          "Be cautious with street food - choose busy stalls with high turnover"
        ];
      case 'rome':
        return [
          "Visit the Vatican early to avoid crowds",
          "Many fountains provide free drinking water",
          "Consider the Roma Pass for public transport and museum access",
          "Restaurants charging 'coperto' (cover charge) is normal",
          "Avoid eating in tourist hotspots - walk a few blocks for better prices"
        ];
      case 'tokyo':
        return [
          "Get a Suica or Pasmo card for easy public transportation",
          "Convenience stores (konbini) offer affordable quality food",
          "Free WiFi can be limited - consider renting a pocket WiFi",
          "Many small restaurants are cash-only",
          "Tipping is not customary and can even be considered rude"
        ];
      default:
        return [
          "Research local customs before you go",
          "Make copies of important documents",
          "Check if you need any vaccinations before traveling",
          "Let your bank know you're traveling to avoid card issues",
          "Learn a few phrases in the local language"
        ];
    }
  };
  
  // Get best time to visit based on destination
  const getBestTimeToVisit = () => {
    switch(destination.id) {
      case 'bali':
        return "May to September (dry season)";
      case 'paris':
        return "April to June or September to October";
      case 'bangkok':
        return "November to February (cool season)";
      case 'rome':
        return "April to June or September to October";
      case 'tokyo':
        return "March to May (spring) or September to November (fall)";
      default:
        return "Varies by season";
    }
  };
  
  return (
    <div className="card mt-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <img 
            src={destination.imageUrl} 
            alt={destination.name} 
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-teal" />
              <span>{destination.name}, {destination.country}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-teal" />
              <span>Best time to visit: {getBestTimeToVisit()}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-teal" />
              <span>Daily cost range: {getCostRange()}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-teal" />
              <span>Recommended stay: 5-7 days</span>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">{destination.name} Travel Guide</h2>
          <p className="mb-6">{destination.description}</p>
          
          <h3 className="text-lg font-semibold mb-3">Local Tips</h3>
          <ul className="list-disc pl-5 mb-6 space-y-1">
            {getDestinationTips().map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
          
          <h3 className="text-lg font-semibold mb-3">Money-Saving Tips</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Book accommodation in advance to get better rates</li>
            <li>Eat where locals eat for authentic and affordable meals</li>
            <li>Use public transportation instead of taxis</li>
            <li>Look for free activities and attractions</li>
            <li>Travel during shoulder season for lower prices</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DestinationGuide;
