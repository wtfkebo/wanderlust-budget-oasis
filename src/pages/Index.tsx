
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BudgetForm from '../components/BudgetForm';
import BudgetBreakdown from '../components/BudgetBreakdown';
import ActivityRecommendations from '../components/ActivityRecommendations';
import DestinationGuide from '../components/DestinationGuide';
import SavingsTracker from '../components/SavingsTracker';
import Footer from '../components/Footer';
import { destinations, getDestinationById, Destination } from '../data/destinations';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [budget, setBudget] = useState<number>(0);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [days, setDays] = useState<number>(0);
  const [planCreated, setPlanCreated] = useState<boolean>(false);

  const handleBudgetSubmit = (budgetAmount: number, destinationId: string, tripDays: number) => {
    const destination = getDestinationById(destinationId);
    
    if (!destination) {
      toast({
        title: "Error",
        description: "Selected destination not found.",
        variant: "destructive",
      });
      return;
    }
    
    setBudget(budgetAmount);
    setSelectedDestination(destination);
    setDays(tripDays);
    setPlanCreated(true);
    
    // Scroll to the results section
    setTimeout(() => {
      const resultsSection = document.getElementById('results');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    
    toast({
      title: "Budget Plan Created!",
      description: `Your ${tripDays}-day trip to ${destination.name} with $${budgetAmount} budget is ready.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <BudgetForm onBudgetSubmit={handleBudgetSubmit} />
            </div>
            
            <div className="md:col-span-2" id="destinations">
              <h2 className="text-2xl font-bold mb-6">Popular Destinations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {destinations.map((destination) => (
                  <div 
                    key={destination.id}
                    className="rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 cursor-pointer"
                    onClick={() => {
                      const budgetInput = document.getElementById('budget');
                      if (budgetInput) {
                        budgetInput.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <img 
                      src={destination.imageUrl} 
                      alt={destination.name} 
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4 bg-white">
                      <h3 className="font-semibold">{destination.name}</h3>
                      <p className="text-sm text-gray-600">{destination.country}</p>
                      <p className="text-xs mt-2 text-gray-500">
                        From ${destination.averageCosts.accommodation.budget + 
                               destination.averageCosts.food.budget + 
                               destination.averageCosts.transportation.budget} / day
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {planCreated && selectedDestination && (
          <section className="container mx-auto px-4 py-8" id="results">
            <div className="border-l-4 border-teal px-4 py-2 bg-teal/5 mb-8">
              <h2 className="text-2xl font-bold">
                Your Trip to {selectedDestination.name}
              </h2>
              <p className="text-gray-600">
                {days} days with a budget of ${budget}
              </p>
            </div>
            
            <BudgetBreakdown 
              destination={selectedDestination} 
              budget={budget} 
              days={days} 
            />
            
            <ActivityRecommendations 
              destination={selectedDestination} 
              budget={budget} 
            />
            
            <DestinationGuide 
              destination={selectedDestination} 
            />
            
            <SavingsTracker 
              destinationName={selectedDestination.name} 
              budget={budget} 
            />
          </section>
        )}
        
        <section className="container mx-auto px-4 py-16" id="tips">
          <h2 className="text-2xl font-bold mb-8 text-center">Travel Smart, Save More</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="bg-teal/10 p-3 inline-block rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Budget Planning</h3>
              <p className="text-gray-600">
                Set your trip budget before booking anything. Include all expenses: transportation, accommodation, food, activities, and emergency funds.
              </p>
            </div>
            
            <div className="card">
              <div className="bg-teal/10 p-3 inline-block rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Timing Matters</h3>
              <p className="text-gray-600">
                Travel during shoulder season for the perfect balance of good weather, fewer crowds, and better prices on flights and accommodations.
              </p>
            </div>
            
            <div className="card">
              <div className="bg-teal/10 p-3 inline-block rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Experiences</h3>
              <p className="text-gray-600">
                Eat where locals eat, use public transportation, and explore free attractions. Authentic experiences often cost less than tourist traps.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
