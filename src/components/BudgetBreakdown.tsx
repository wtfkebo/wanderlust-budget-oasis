
import React, { useState } from 'react';
import { Destination } from '../data/destinations';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  Legend, Tooltip, Sector, AreaChart, Area, 
  XAxis, YAxis, CartesianGrid 
} from 'recharts';
import { 
  DollarSign, Bed, Utensils, Bus, Ticket, 
  TrendingUp, RefreshCw, Landmark, User
} from 'lucide-react';

interface BudgetBreakdownProps {
  destination: Destination;
  budget: number;
  days: number;
}

const BudgetBreakdown: React.FC<BudgetBreakdownProps> = ({ destination, budget, days }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedBudgetType, setSelectedBudgetType] = useState<'daily' | 'total'>('total');
  
  // Calculate daily budget
  const dailyBudget = budget / days;
  
  // Calculate budget distribution based on destination's cost of living
  const getBudgetDistribution = () => {
    // Get average costs for this destination
    const { accommodation, food, transportation } = destination.averageCosts;
    
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
        value: Math.round(selectedBudgetType === 'total' ? budget * accommodationPercent : dailyBudget * accommodationPercent),
        color: '#4ecdc4', 
        icon: Bed 
      },
      { 
        name: 'Food', 
        percentage: foodPercent, 
        value: Math.round(selectedBudgetType === 'total' ? budget * foodPercent : dailyBudget * foodPercent),
        color: '#ff6b6b', 
        icon: Utensils 
      },
      { 
        name: 'Transportation', 
        percentage: transportationPercent, 
        value: Math.round(selectedBudgetType === 'total' ? budget * transportationPercent : dailyBudget * transportationPercent),
        color: '#ffe66d', 
        icon: Bus 
      },
      { 
        name: 'Activities', 
        percentage: activitiesPercent, 
        value: Math.round(selectedBudgetType === 'total' ? budget * activitiesPercent : dailyBudget * activitiesPercent),
        color: '#1a535c', 
        icon: Ticket 
      },
      { 
        name: 'Miscellaneous', 
        percentage: miscPercent, 
        value: Math.round(selectedBudgetType === 'total' ? budget * miscPercent : dailyBudget * miscPercent),
        color: '#6c757d', 
        icon: DollarSign 
      }
    ];
  };
  
  // Create data for pie chart
  const chartData = getBudgetDistribution();
  
  // Trend data for cost projection (simulated)
  const trendData = Array.from({ length: days }).map((_, index) => ({
    day: index + 1,
    projected: Math.round(dailyBudget * (1 - Math.random() * 0.2)),
    actual: index < days / 2 ? Math.round(dailyBudget * (1 - Math.random() * 0.3)) : null
  }));
  
  // Custom active shape for pie chart
  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" fontSize={12}>{payload.name}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999" fontSize={12}>
          {`$${value} (${(percent * 100).toFixed(0)}%)`}
        </text>
      </g>
    );
  };
  
  // Determine accommodation level based on daily budget
  const getAccommodationLevel = () => {
    const distribution = getBudgetDistribution();
    const accommodationEntry = distribution.find(item => item.name === 'Accommodation');
    
    if (!accommodationEntry) return '';
    
    const dailyAccommodation = accommodationEntry.value / (selectedBudgetType === 'total' ? days : 1);
    
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
    const distribution = getBudgetDistribution();
    const foodEntry = distribution.find(item => item.name === 'Food');
    
    if (!foodEntry) return '';
    
    const dailyFood = foodEntry.value / (selectedBudgetType === 'total' ? days : 1);
    
    if (dailyFood <= destination.averageCosts.food.budget) {
      return 'Street food, local eateries';
    } else if (dailyFood <= destination.averageCosts.food.mid) {
      return 'Mix of local restaurants and casual dining';
    } else {
      return 'Fine dining and upscale restaurants';
    }
  };
  
  // Handle pie chart hover
  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };
  
  return (
    <div className="card mt-8 backdrop-blur-sm bg-white/90 border border-gray-100 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-teal to-blue-500 bg-clip-text text-transparent">Your Budget Breakdown</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Budget Summary</h3>
        
        <div className="flex justify-center mb-4">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                selectedBudgetType === 'total' 
                  ? 'bg-teal text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedBudgetType('total')}
            >
              Total Budget
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                selectedBudgetType === 'daily' 
                  ? 'bg-teal text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedBudgetType('daily')}
            >
              Daily Budget
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="bg-gradient-to-br from-teal/10 to-blue-500/10 p-4 rounded-lg shadow-sm border border-gray-100">
            <p className="text-sm text-gray-600">Total Budget</p>
            <p className="text-2xl font-bold text-navy">${budget.toLocaleString()}</p>
          </div>
          <div className="bg-gradient-to-br from-teal/10 to-blue-500/10 p-4 rounded-lg shadow-sm border border-gray-100">
            <p className="text-sm text-gray-600">Daily Budget</p>
            <p className="text-2xl font-bold text-navy">${Math.round(dailyBudget).toLocaleString()}/day</p>
          </div>
          <div className="bg-gradient-to-br from-teal/10 to-blue-500/10 p-4 rounded-lg shadow-sm border border-gray-100">
            <p className="text-sm text-gray-600">Trip Duration</p>
            <p className="text-2xl font-bold text-navy">{days} days</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <DollarSign className="w-5 h-5 mr-2 text-teal" />
            Budget Allocation
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="value"
                  onMouseEnter={onPieEnter}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Legend 
                  iconType="circle" 
                  layout="horizontal" 
                  verticalAlign="bottom" 
                  align="center"
                  formatter={(value, entry) => (
                    <span style={{ color: '#333', fontWeight: 500 }}>{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <User className="w-5 h-5 mr-2 text-teal" />
            What You Can Expect
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-teal/5 border border-teal/10">
              <Bed className="w-5 h-5 mt-1 text-teal" />
              <div>
                <h4 className="font-medium">Accommodation</h4>
                <p className="text-sm text-gray-600">{getAccommodationLevel()}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 rounded-lg bg-orange/5 border border-orange/10">
              <Utensils className="w-5 h-5 mt-1 text-orange" />
              <div>
                <h4 className="font-medium">Food</h4>
                <p className="text-sm text-gray-600">{getFoodLevel()}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow/5 border border-yellow/10">
              <Bus className="w-5 h-5 mt-1 text-yellow" />
              <div>
                <h4 className="font-medium">Transportation</h4>
                <p className="text-sm text-gray-600">
                  {(() => {
                    const distribution = getBudgetDistribution();
                    const transportationEntry = distribution.find(item => item.name === 'Transportation');
                    
                    if (!transportationEntry) return '';
                    
                    const dailyTransportation = transportationEntry.value / (selectedBudgetType === 'total' ? days : 1);
                    
                    if (dailyTransportation <= destination.averageCosts.transportation.budget) {
                      return 'Public transportation, shared rides';
                    } else if (dailyTransportation <= destination.averageCosts.transportation.mid) {
                      return 'Mix of public and private transportation';
                    } else {
                      return 'Private transportation, taxis';
                    }
                  })()}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 rounded-lg bg-navy/5 border border-navy/10">
              <Ticket className="w-5 h-5 mt-1 text-navy" />
              <div>
                <h4 className="font-medium">Activities</h4>
                <p className="text-sm text-gray-600">
                  {(() => {
                    const distribution = getBudgetDistribution();
                    const activitiesEntry = distribution.find(item => item.name === 'Activities');
                    const activityBudget = activitiesEntry ? activitiesEntry.value : budget * 0.15;
                    
                    return `You can afford approximately ${Math.floor((activityBudget) / destination.averageCosts.activities.reduce((acc, act) => acc + act.cost, 0) * destination.averageCosts.activities.length)} activities from our recommendations.`;
                  })()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-teal" />
          Expense Projection
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={trendData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" label={{ value: 'Day', position: 'insideBottomRight', offset: -5 }} />
              <YAxis label={{ value: 'Budget ($)', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value) => `$${value}`} />
              <Legend />
              <Area type="monotone" dataKey="projected" stackId="1" stroke="#4ecdc4" fill="#4ecdc4" name="Projected" />
              <Area type="monotone" dataKey="actual" stackId="2" stroke="#ff6b6b" fill="#ff6b6b" name="Actual" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gradient-to-r from-teal/10 to-blue-500/10 rounded-lg border border-gray-100">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <Landmark className="w-5 h-5 mr-2 text-teal" />
          Local Currency & Exchange
        </h3>
        <p className="text-sm text-gray-600">
          {destination.currency ? (
            <>
              Local currency: <span className="font-medium">{destination.currency}</span> 
              {destination.exchangeRate && (
                <> • Exchange rate: <span className="font-medium">1 USD ≈ {destination.exchangeRate} {destination.currencyCode || ''}</span></>
              )}
            </>
          ) : (
            'Currency information not available'
          )}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          <RefreshCw className="w-3 h-3 inline mr-1" /> 
          Exchange rates updated daily. Budget calculations are shown in USD.
        </p>
      </div>
    </div>
  );
};

export default BudgetBreakdown;
