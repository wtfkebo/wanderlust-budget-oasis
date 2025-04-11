
import React from 'react';
import { Destination } from '../data/destinations';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { DollarSign, Bed, Utensils, Bus, Ticket } from 'lucide-react';

interface BudgetBreakdownProps {
  destination: Destination;
  budget: number;
  days: number;
}

// Define budget categories and their default percentages
const BUDGET_CATEGORIES = [
  { name: 'Accommodation', percentage: 0.35, color: '#4ecdc4', icon: Bed },
  { name: 'Food', percentage: 0.30, color: '#ff6b6b', icon: Utensils },
  { name: 'Transportation', percentage: 0.15, color: '#ffe66d', icon: Bus },
  { name: 'Activities', percentage: 0.15, color: '#1a535c', icon: Ticket },
  { name: 'Miscellaneous', percentage: 0.05, color: '#6c757d', icon: DollarSign }
];

const BudgetBreakdown: React.FC<BudgetBreakdownProps> = ({ destination, budget, days }) => {
  // Calculate daily budget
  const dailyBudget = budget / days;
  
  // Create data for pie chart
  const chartData = BUDGET_CATEGORIES.map(category => ({
    name: category.name,
    value: Math.round(budget * category.percentage),
    color: category.color,
    icon: category.icon
  }));
  
  // Determine accommodation level based on daily budget
  const getAccommodationLevel = () => {
    const dailyAccommodation = (budget * 0.35) / days;
    if (dailyAccommodation <= destination.averageCosts.accommodation.budget) {
      return 'Budget (hostels, guesthouses)';
    } else if (dailyAccommodation <= destination.averageCosts.accommodation.mid) {
      return 'Mid-range (3-star hotels)';
    } else {
      return 'Luxury (4-5 star hotels)';
    }
  };
  
  // Determine food level based on daily budget
  const getFoodLevel = () => {
    const dailyFood = (budget * 0.30) / days;
    if (dailyFood <= destination.averageCosts.food.budget) {
      return 'Street food, local eateries';
    } else if (dailyFood <= destination.averageCosts.food.mid) {
      return 'Mix of local restaurants and casual dining';
    } else {
      return 'Fine dining and upscale restaurants';
    }
  };
  
  return (
    <div className="card mt-8">
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
            <p className="text-2xl font-bold">${Math.round(dailyBudget)}/day</p>
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
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={90}
                  dataKey="value"
                  label={({ name, value }) => `${name}: $${value}`}
                >
                  {chartData.map((entry, index) => (
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
                  {(budget * 0.15) / days <= destination.averageCosts.transportation.budget
                    ? 'Public transportation, shared rides'
                    : (budget * 0.15) / days <= destination.averageCosts.transportation.mid
                    ? 'Mix of public and private transportation'
                    : 'Private transportation, taxis'}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Ticket className="w-5 h-5 mt-1 text-navy" />
              <div>
                <h4 className="font-medium">Activities</h4>
                <p className="text-sm text-muted-foreground">
                  {`You can afford approximately ${Math.floor((budget * 0.15) / destination.averageCosts.activities.reduce((acc, act) => acc + act.cost, 0) * destination.averageCosts.activities.length)} activities from our recommendations.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetBreakdown;
