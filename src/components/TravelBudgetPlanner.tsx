
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { destinations, getDestinationById, Destination } from '../data/destinations';
import { fetchCountryData } from '../utils/countryApi';
import { useToast } from '@/hooks/use-toast';
import BudgetBreakdown from './BudgetBreakdown';
import { 
  DollarSign, MapPin, Calendar, Compass, 
  Search, Tag, Globe, Plane, X, ChevronDown,
  RefreshCcw, Filter
} from 'lucide-react';

const TravelBudgetPlanner: React.FC = () => {
  const { toast } = useToast();
  
  // Budget form state
  const [budget, setBudget] = useState<number>(1000);
  const [destinationId, setDestinationId] = useState<string>('bali');
  const [days, setDays] = useState<number>(7);
  
  // Activity filter state
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState<boolean>(false);
  
  // Destinations state
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  const [destinationSearchTerm, setDestinationSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState<string>('all');
  
  // Results state
  const [planCreated, setPlanCreated] = useState<boolean>(false);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  
  // Fetch country data from the API
  const { data: countryData, isLoading, isError } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountryData
  });
  
  // Update destinations with API data when available
  useEffect(() => {
    if (countryData && countryData.length > 0) {
      // Map API country data to our destinations where possible
      destinations.forEach(destination => {
        const matchingCountry = countryData.find(
          country => 
            country.name.common.toLowerCase() === destination.country.toLowerCase() ||
            country.name.official.toLowerCase() === destination.country.toLowerCase()
        );
        
        if (matchingCountry) {
          // Update destination with real-time data
          if (matchingCountry.currencies) {
            const currencyCode = Object.keys(matchingCountry.currencies)[0];
            const currency = matchingCountry.currencies[currencyCode];
            
            destination.currency = currency.name;
            destination.currencyCode = currencyCode;
            destination.currencySymbol = currency.symbol;
          }
          
          if (matchingCountry.flags && matchingCountry.flags.svg) {
            destination.flagUrl = matchingCountry.flags.svg;
          }
          
          if (matchingCountry.capital && matchingCountry.capital.length > 0) {
            destination.capital = matchingCountry.capital[0];
          }
          
          if (matchingCountry.languages) {
            destination.languages = Object.values(matchingCountry.languages);
          }
          
          destination.population = matchingCountry.population;
          destination.region = matchingCountry.region;
        }
      });
      
      // Set up filtered destinations after enhancements
      handleDestinationFiltering();
    }
  }, [countryData]);
  
  // Filter destinations based on search and region
  const handleDestinationFiltering = () => {
    let filtered = [...destinations];
    
    // Apply search filter
    if (destinationSearchTerm) {
      filtered = filtered.filter(
        dest => 
          dest.name.toLowerCase().includes(destinationSearchTerm.toLowerCase()) ||
          dest.country.toLowerCase().includes(destinationSearchTerm.toLowerCase())
      );
    }
    
    // Apply region filter
    if (regionFilter !== 'all') {
      filtered = filtered.filter(
        dest => dest.region?.toLowerCase() === regionFilter.toLowerCase()
      );
    }
    
    setFilteredDestinations(filtered);
  };
  
  // Update filters when search or region changes
  useEffect(() => {
    handleDestinationFiltering();
  }, [destinationSearchTerm, regionFilter]);
  
  // Handle budget form submission
  const handleBudgetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const destination = getDestinationById(destinationId);
    
    if (!destination) {
      toast({
        title: "Error",
        description: "Selected destination not found.",
        variant: "destructive",
      });
      return;
    }
    
    setSelectedDestination(destination);
    setPlanCreated(true);
    
    // Scroll to results on mobile
    setTimeout(() => {
      const resultsSection = document.getElementById('results-section');
      if (resultsSection && window.innerWidth < 768) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    
    toast({
      title: "Budget Plan Created!",
      description: `Your ${days}-day trip to ${destination.name} with $${budget} budget is ready.`,
    });
  };
  
  // Filter activities based on selected category and search term
  const getFilteredActivities = () => {
    if (!selectedDestination) return [];
    
    const filteredActivities = selectedDestination.averageCosts.activities.filter(activity => {
      const matchesCategory = filter === 'all' || activity.category === filter;
      const matchesSearch = activity.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            activity.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    
    // Sort activities by affordability (those within budget first)
    return [...filteredActivities].sort((a, b) => {
      // First sort by affordability
      const aAffordable = a.cost <= budget * 0.15;
      const bAffordable = b.cost <= budget * 0.15;
      
      if (aAffordable && !bAffordable) return -1;
      if (!aAffordable && bAffordable) return 1;
      
      // Then sort by cost (low to high)
      return a.cost - b.cost;
    });
  };
  
  // Get unique regions from all destinations
  const getUniqueRegions = () => {
    const regions = destinations
      .map(dest => dest.region)
      .filter((region): region is string => !!region);
    
    return ['all', ...new Set(regions)];
  };
  
  // Category colors for activities
  const categoryColors: Record<string, string> = {
    culture: 'bg-blue-100 text-blue-800',
    nature: 'bg-green-100 text-green-800',
    adventure: 'bg-orange-100 text-orange-800',
    relaxation: 'bg-purple-100 text-purple-800',
    food: 'bg-red-100 text-red-800',
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal/5">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-teal to-blue-500 bg-clip-text text-transparent">
            Travel Budget Planner
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Plan your perfect trip with a budget that works for you. Explore destinations, calculate costs, and make the most of your travel experience.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Budget Form */}
          <div>
            <div className="card backdrop-blur-sm bg-white/90 border border-gray-100 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-center">Plan Your Budget</h2>
              
              <form onSubmit={handleBudgetSubmit} className="space-y-6">
                <div>
                  <label htmlFor="budget" className="block mb-2 font-medium flex items-center">
                    <DollarSign className="w-4 h-4 mr-1 text-teal" />
                    Total Budget (USD)
                  </label>
                  <input
                    type="number"
                    id="budget"
                    min="100"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="input-field focus:ring-teal focus:border-teal"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="destination" className="block mb-2 font-medium flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-teal" />
                    Destination
                  </label>
                  
                  <div className="relative">
                    <select
                      id="destination"
                      value={destinationId}
                      onChange={(e) => setDestinationId(e.target.value)}
                      className="input-field focus:ring-teal focus:border-teal pr-10"
                      required
                    >
                      {filteredDestinations.map((destination) => (
                        <option key={destination.id} value={destination.id}>
                          {destination.name}, {destination.country}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                  
                  <div className="mt-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="relative flex-grow">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Search destinations..."
                          value={destinationSearchTerm}
                          onChange={(e) => setDestinationSearchTerm(e.target.value)}
                          className="input-field pl-9 py-1 text-sm focus:ring-teal focus:border-teal"
                        />
                        {destinationSearchTerm && (
                          <button
                            type="button"
                            onClick={() => setDestinationSearchTerm('')}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                      
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                          className="p-2 rounded border border-gray-300 hover:bg-gray-50 text-gray-600"
                        >
                          <Filter className="w-4 h-4" />
                        </button>
                        
                        {isFilterMenuOpen && (
                          <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-100">
                            <div className="p-2">
                              <p className="text-xs text-gray-500 mb-1">Filter by region:</p>
                              <div className="space-y-1">
                                {getUniqueRegions().map((region) => (
                                  <button
                                    key={region}
                                    type="button"
                                    className={`block w-full text-left px-2 py-1 text-sm rounded ${
                                      regionFilter === region 
                                        ? 'bg-teal text-white' 
                                        : 'hover:bg-gray-100 text-gray-700'
                                    }`}
                                    onClick={() => {
                                      setRegionFilter(region);
                                      setIsFilterMenuOpen(false);
                                    }}
                                  >
                                    {region === 'all' ? 'All Regions' : region}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {regionFilter !== 'all' && (
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <Filter className="w-3 h-3" />
                        <span>Region: {regionFilter}</span>
                        <button
                          type="button"
                          onClick={() => setRegionFilter('all')}
                          className="ml-1 text-teal hover:underline"
                        >
                          Clear
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="days" className="block mb-2 font-medium flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-teal" />
                    Number of Days
                  </label>
                  <input
                    type="number"
                    id="days"
                    min="1"
                    max="30"
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="input-field focus:ring-teal focus:border-teal"
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary w-full mt-6 flex items-center justify-center gap-2 transition-all hover:shadow-lg"
                >
                  <Compass className="w-4 h-4" />
                  Calculate My Budget
                </button>
              </form>
            </div>
            
            {/* Destination Highlights */}
            <div className="card backdrop-blur-sm bg-white/90 border border-gray-100 shadow-lg mt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Popular Destinations</h2>
                {isLoading && (
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <RefreshCcw className="w-3 h-3 animate-spin" />
                    Updating data...
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {filteredDestinations.slice(0, 4).map((destination) => (
                  <div 
                    key={destination.id}
                    className="rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg hover:scale-105 cursor-pointer bg-gradient-to-b from-white to-gray-50 border border-gray-100"
                    onClick={() => {
                      setDestinationId(destination.id);
                      
                      // If on mobile, scroll to the form
                      if (window.innerWidth < 768) {
                        const form = document.querySelector('form');
                        if (form) {
                          form.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    <div className="relative h-24">
                      <img 
                        src={destination.imageUrl} 
                        alt={destination.name} 
                        className="w-full h-full object-cover"
                      />
                      {destination.flagUrl && (
                        <div className="absolute top-2 right-2 w-6 h-4 rounded shadow-sm overflow-hidden">
                          <img 
                            src={destination.flagUrl} 
                            alt={`Flag of ${destination.country}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                    <div className="p-2">
                      <h3 className="font-semibold text-sm">{destination.name}</h3>
                      <p className="text-xs text-gray-600 flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        {destination.country}
                      </p>
                      <p className="text-xs text-teal mt-1 font-medium">
                        From ${destination.averageCosts.accommodation.budget + 
                              destination.averageCosts.food.budget + 
                              destination.averageCosts.transportation.budget}/day
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredDestinations.length > 4 && (
                <button 
                  className="text-sm text-teal hover:text-teal-600 mt-4 flex items-center justify-center w-full"
                  onClick={() => {
                    const form = document.querySelector('form');
                    if (form) {
                      form.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  View all {filteredDestinations.length} destinations
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              )}
            </div>
          </div>
          
          {/* Results Section */}
          <div className="md:col-span-2" id="results-section">
            {planCreated && selectedDestination ? (
              <>
                <div className="border-l-4 border-teal px-4 py-3 bg-teal/5 mb-8 rounded-r-lg shadow-sm">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Plane className="w-5 h-5 text-teal" />
                    Your Trip to {selectedDestination.name}
                  </h2>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {days} days with a budget of ${budget.toLocaleString()}
                  </p>
                </div>
                
                <BudgetBreakdown 
                  destination={selectedDestination} 
                  budget={budget} 
                  days={days} 
                />
                
                {/* Activity Recommendations */}
                <div className="card backdrop-blur-sm bg-white/90 border border-gray-100 shadow-lg mt-8">
                  <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-teal to-blue-500 bg-clip-text text-transparent">Recommended Activities</h2>
                  
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search activities..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="input-field pl-10 focus:ring-teal focus:border-teal"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <button
                      onClick={() => setFilter('all')}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${
                        filter === 'all' 
                          ? 'bg-navy text-white shadow-md' 
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setFilter('culture')}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${
                        filter === 'culture' 
                          ? 'bg-blue-600 text-white shadow-md' 
                          : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                      }`}
                    >
                      Culture
                    </button>
                    <button
                      onClick={() => setFilter('nature')}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${
                        filter === 'nature' 
                          ? 'bg-green-600 text-white shadow-md' 
                          : 'bg-green-100 text-green-800 hover:bg-green-200'
                      }`}
                    >
                      Nature
                    </button>
                    <button
                      onClick={() => setFilter('adventure')}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${
                        filter === 'adventure' 
                          ? 'bg-orange-600 text-white shadow-md' 
                          : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
                      }`}
                    >
                      Adventure
                    </button>
                    <button
                      onClick={() => setFilter('relaxation')}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${
                        filter === 'relaxation' 
                          ? 'bg-purple-600 text-white shadow-md' 
                          : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                      }`}
                    >
                      Relaxation
                    </button>
                    <button
                      onClick={() => setFilter('food')}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${
                        filter === 'food' 
                          ? 'bg-red-600 text-white shadow-md' 
                          : 'bg-red-100 text-red-800 hover:bg-red-200'
                      }`}
                    >
                      Food
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {getFilteredActivities().length > 0 ? (
                      getFilteredActivities().map((activity, index) => {
                        const activityBudget = budget * 0.15;
                        const isAffordable = activity.cost <= activityBudget;
                        
                        return (
                          <div 
                            key={index} 
                            className={`p-4 rounded-lg border transition-all ${
                              isAffordable
                                ? 'border-teal/20 bg-gradient-to-r from-teal/5 to-blue-500/5 shadow-sm hover:shadow' 
                                : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                            }`}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium text-lg">{activity.name}</h3>
                                <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                                <div className="flex items-center mt-2 gap-2">
                                  <span className={`px-2 py-1 rounded-full text-xs ${categoryColors[activity.category]}`}>
                                    {activity.category.charAt(0).toUpperCase() + activity.category.slice(1)}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <span className={`font-bold text-lg ${
                                  isAffordable ? 'text-teal' : 'text-gray-400'
                                }`}>
                                  ${activity.cost}
                                </span>
                                <div className="mt-1">
                                  {activity.cost === 0 ? (
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Free</span>
                                  ) : isAffordable ? (
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Within Budget</span>
                                  ) : (
                                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Over Budget</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        No activities found matching your criteria.
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center p-8 bg-gradient-to-br from-white to-teal/5 rounded-lg shadow-md border border-gray-100">
                  <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal to-blue-500 bg-clip-text text-transparent">
                    Start Planning Your Trip
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Enter your budget and destination details on the left to get personalized recommendations and a budget breakdown.
                  </p>
                  <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plane className="h-8 w-8 text-teal" />
                  </div>
                  {isLoading ? (
                    <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                      <RefreshCcw className="animate-spin h-4 w-4" />
                      Loading destination data...
                    </p>
                  ) : isError ? (
                    <p className="text-sm text-red-500">
                      Could not load all destination data. Some features may be limited.
                    </p>
                  ) : (
                    <p className="text-sm text-teal">
                      {filteredDestinations.length} destinations available for planning
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelBudgetPlanner;
