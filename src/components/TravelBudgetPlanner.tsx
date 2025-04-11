
import React, { useState } from 'react';
import { destinations, getDestinationById, Destination } from '../data/destinations';
import { useToast } from '@/hooks/use-toast';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { 
  DollarSign, Bed, Utensils, Bus, Ticket, 
  Search, Tag 
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const TravelBudgetPlanner: React.FC = () => {
  const { toast } = useToast();
  
  // Budget form state
  const [budget, setBudget] = useState<number>(1000);
  const [destinationId, setDestinationId] = useState<string>('bali');
  const [days, setDays] = useState<number>(7);
  
  // Activity filter state
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Results state
  const [planCreated, setPlanCreated] = useState<boolean>(false);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  
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
    
    toast({
      title: "Budget Plan Created!",
      description: `Your ${days}-day trip to ${destination.name} with $${budget} budget is ready.`,
    });
  };
  
  // Calculate budget distribution based on destination's cost of living
  const getBudgetDistribution = () => {
    if (!selectedDestination) return [];
    
    // Get average costs for this destination
    const { accommodation, food, transportation } = selectedDestination.averageCosts;
    
    // Calculate the relative costs
    const totalDailyCost = accommodation.mid + food.mid + transportation.mid;
    
    // Calculate percentages based on destination's cost of living
    const accommodationPercent = accommodation.mid / totalDailyCost;
    const foodPercent = food.mid / totalDailyCost;
    const transportationPercent = transportation.mid / totalDailyCost;
    
    // Activities and miscellaneous get the remaining percentage
    const activitiesPercent = 0.15; // Fixed at 15%
    const miscPercent = 1 - (accommodationPercent + foodPercent + transportationPercent + activitiesPercent);
    
    return [
      { 
        name: 'Accommodation', 
        percentage: accommodationPercent, 
        value: Math.round(budget * accommodationPercent),
        color: '#4ecdc4', 
        icon: Bed 
      },
      { 
        name: 'Food', 
        percentage: foodPercent, 
        value: Math.round(budget * foodPercent),
        color: '#ff6b6b', 
        icon: Utensils 
      },
      { 
        name: 'Transportation', 
        percentage: transportationPercent, 
        value: Math.round(budget * transportationPercent),
        color: '#ffe66d', 
        icon: Bus 
      },
      { 
        name: 'Activities', 
        percentage: activitiesPercent, 
        value: Math.round(budget * activitiesPercent),
        color: '#1a535c', 
        icon: Ticket 
      },
      { 
        name: 'Miscellaneous', 
        percentage: miscPercent, 
        value: Math.round(budget * miscPercent),
        color: '#6c757d', 
        icon: DollarSign 
      }
    ];
  };
  
  // Determine accommodation level based on daily budget
  const getAccommodationLevel = () => {
    if (!selectedDestination) return '';
    
    const distribution = getBudgetDistribution();
    const accommodationEntry = distribution.find(item => item.name === 'Accommodation');
    
    if (!accommodationEntry) return '';
    
    const dailyAccommodation = accommodationEntry.value / days;
    
    if (dailyAccommodation <= selectedDestination.averageCosts.accommodation.budget) {
      return 'Budget (hostels, guesthouses)';
    } else if (dailyAccommodation <= selectedDestination.averageCosts.accommodation.mid) {
      return 'Mid-range (3-star hotels)';
    } else {
      return 'Luxury (4-5 star hotels)';
    }
  };
  
  // Determine food level based on daily budget
  const getFoodLevel = () => {
    if (!selectedDestination) return '';
    
    const distribution = getBudgetDistribution();
    const foodEntry = distribution.find(item => item.name === 'Food');
    
    if (!foodEntry) return '';
    
    const dailyFood = foodEntry.value / days;
    
    if (dailyFood <= selectedDestination.averageCosts.food.budget) {
      return 'Street food, local eateries';
    } else if (dailyFood <= selectedDestination.averageCosts.food.mid) {
      return 'Mix of local restaurants and casual dining';
    } else {
      return 'Fine dining and upscale restaurants';
    }
  };
  
  // Filter activities based on selected category and search term
  const getFilteredActivities = () => {
    if (!selectedDestination) return [];
    
    const distribution = getBudgetDistribution();
    const activitiesEntry = distribution.find(item => item.name === 'Activities');
    const activityBudget = activitiesEntry ? activitiesEntry.value : budget * 0.15;
    
    const filteredActivities = selectedDestination.averageCosts.activities.filter(activity => {
      const matchesCategory = filter === 'all' || activity.category === filter;
      const matchesSearch = activity.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            activity.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    
    // Sort activities by affordability (those within budget first)
    return [...filteredActivities].sort((a, b) => {
      // First, put affordable activities first
      const aAffordable = a.cost <= activityBudget;
      const bAffordable = b.cost <= activityBudget;
      
      if (aAffordable && !bAffordable) return -1;
      if (!aAffordable && bAffordable) return 1;
      
      // Then sort by cost (low to high)
      return a.cost - b.cost;
    });
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
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Budget Form */}
        <div>
          <div className="card">
            <h2 className="text-2xl font-bold mb-6 text-center">Plan Your Budget</h2>
            
            <form onSubmit={handleBudgetSubmit} className="space-y-6">
              <div>
                <label htmlFor="budget" className="block mb-2 font-medium">
                  Total Budget (USD)
                </label>
                <input
                  type="number"
                  id="budget"
                  min="100"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="destination" className="block mb-2 font-medium">
                  Destination
                </label>
                <select
                  id="destination"
                  value={destinationId}
                  onChange={(e) => setDestinationId(e.target.value)}
                  className="input-field"
                  required
                >
                  {destinations.map((destination) => (
                    <option key={destination.id} value={destination.id}>
                      {destination.name}, {destination.country}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="days" className="block mb-2 font-medium">
                  Number of Days
                </label>
                <input
                  type="number"
                  id="days"
                  min="1"
                  max="30"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="input-field"
                  required
                />
              </div>
              
              <button type="submit" className="btn-primary w-full mt-6">
                Calculate My Budget
              </button>
            </form>
          </div>
          
          {/* Popular Destinations */}
          <div className="card mt-8">
            <h2 className="text-2xl font-bold mb-6">Popular Destinations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {destinations.slice(0, 4).map((destination) => (
                <div 
                  key={destination.id}
                  className="rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 cursor-pointer"
                  onClick={() => {
                    setDestinationId(destination.id);
                  }}
                >
                  <img 
                    src={destination.imageUrl} 
                    alt={destination.name} 
                    className="w-full h-24 object-cover"
                  />
                  <div className="p-2 bg-white">
                    <h3 className="font-semibold text-sm">{destination.name}</h3>
                    <p className="text-xs text-gray-600">{destination.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Results Section */}
        <div className="md:col-span-2">
          {planCreated && selectedDestination ? (
            <>
              <div className="border-l-4 border-teal px-4 py-2 bg-teal/5 mb-8">
                <h2 className="text-2xl font-bold">
                  Your Trip to {selectedDestination.name}
                </h2>
                <p className="text-gray-600">
                  {days} days with a budget of ${budget}
                </p>
              </div>
              
              {/* Budget Breakdown */}
              <div className="card mb-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Your Budget Breakdown</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Budget Summary</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Total Budget</p>
                      <p className="text-2xl font-bold">${budget}</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Daily Budget</p>
                      <p className="text-2xl font-bold">${Math.round(budget / days)}/day</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Trip Duration</p>
                      <p className="text-2xl font-bold">{days} days</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Budget Allocation</h3>
                    <div className="h-72">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={getBudgetDistribution()}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={90}
                            dataKey="value"
                            label={({ name, value }) => `${name}: $${value}`}
                          >
                            {getBudgetDistribution().map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => `$${value}`} />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">What You Can Expect</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Bed className="w-5 h-5 mt-1 text-teal" />
                        <div>
                          <h4 className="font-medium">Accommodation</h4>
                          <p className="text-sm text-muted-foreground">{getAccommodationLevel()}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Utensils className="w-5 h-5 mt-1 text-orange" />
                        <div>
                          <h4 className="font-medium">Food</h4>
                          <p className="text-sm text-muted-foreground">{getFoodLevel()}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Bus className="w-5 h-5 mt-1 text-yellow" />
                        <div>
                          <h4 className="font-medium">Transportation</h4>
                          <p className="text-sm text-muted-foreground">
                            {(() => {
                              const distribution = getBudgetDistribution();
                              const transportationEntry = distribution.find(item => item.name === 'Transportation');
                              
                              if (!transportationEntry) return '';
                              
                              const dailyTransportation = transportationEntry.value / days;
                              
                              if (dailyTransportation <= selectedDestination.averageCosts.transportation.budget) {
                                return 'Public transportation, shared rides';
                              } else if (dailyTransportation <= selectedDestination.averageCosts.transportation.mid) {
                                return 'Mix of public and private transportation';
                              } else {
                                return 'Private transportation, taxis';
                              }
                            })()}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Ticket className="w-5 h-5 mt-1 text-navy" />
                        <div>
                          <h4 className="font-medium">Activities</h4>
                          <p className="text-sm text-muted-foreground">
                            {(() => {
                              const distribution = getBudgetDistribution();
                              const activitiesEntry = distribution.find(item => item.name === 'Activities');
                              const activityBudget = activitiesEntry ? activitiesEntry.value : budget * 0.15;
                              
                              return `You can afford approximately ${Math.floor((activityBudget) / selectedDestination.averageCosts.activities.reduce((acc, act) => acc + act.cost, 0) * selectedDestination.averageCosts.activities.length)} activities from our recommendations.`;
                            })()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Activity Recommendations */}
              <div className="card mb-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Recommended Activities</h2>
                
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search activities..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="input-field pl-10"
                    />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <button
                    onClick={() => setFilter('all')}
                    className={`px-4 py-2 rounded-full text-sm ${
                      filter === 'all' 
                        ? 'bg-navy text-white' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setFilter('culture')}
                    className={`px-4 py-2 rounded-full text-sm ${
                      filter === 'culture' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                    }`}
                  >
                    Culture
                  </button>
                  <button
                    onClick={() => setFilter('nature')}
                    className={`px-4 py-2 rounded-full text-sm ${
                      filter === 'nature' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-green-100 text-green-800 hover:bg-green-200'
                    }`}
                  >
                    Nature
                  </button>
                  <button
                    onClick={() => setFilter('adventure')}
                    className={`px-4 py-2 rounded-full text-sm ${
                      filter === 'adventure' 
                        ? 'bg-orange-600 text-white' 
                        : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
                    }`}
                  >
                    Adventure
                  </button>
                  <button
                    onClick={() => setFilter('relaxation')}
                    className={`px-4 py-2 rounded-full text-sm ${
                      filter === 'relaxation' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                    }`}
                  >
                    Relaxation
                  </button>
                  <button
                    onClick={() => setFilter('food')}
                    className={`px-4 py-2 rounded-full text-sm ${
                      filter === 'food' 
                        ? 'bg-red-600 text-white' 
                        : 'bg-red-100 text-red-800 hover:bg-red-200'
                    }`}
                  >
                    Food
                  </button>
                </div>
                
                <div className="space-y-4">
                  {getFilteredActivities().length > 0 ? (
                    getFilteredActivities().map((activity, index) => {
                      const distribution = getBudgetDistribution();
                      const activitiesEntry = distribution.find(item => item.name === 'Activities');
                      const activityBudget = activitiesEntry ? activitiesEntry.value : budget * 0.15;
                      
                      return (
                        <div 
                          key={index} 
                          className={`p-4 rounded-lg border ${
                            activity.cost <= activityBudget
                              ? 'border-teal/20 bg-teal/5' 
                              : 'border-gray-200 bg-gray-50'
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
                                activity.cost <= activityBudget ? 'text-teal' : 'text-gray-400'
                              }`}>
                                ${activity.cost}
                              </span>
                              <div className="mt-1">
                                {activity.cost === 0 ? (
                                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Free</span>
                                ) : activity.cost <= activityBudget ? (
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
              <div className="text-center p-8 bg-muted rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Start Planning Your Trip</h2>
                <p className="text-muted-foreground mb-6">
                  Enter your budget and destination details on the left to get personalized recommendations and a budget breakdown.
                </p>
                <DollarSign className="mx-auto h-16 w-16 text-teal opacity-50" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelBudgetPlanner;
