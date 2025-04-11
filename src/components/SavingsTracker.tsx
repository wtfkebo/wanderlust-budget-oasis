
import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Calculator, Wallet, TrendingUp, Calendar } from 'lucide-react';

interface SavingsTrackerProps {
  destinationName: string;
  budget: number;
}

const SavingsTracker: React.FC<SavingsTrackerProps> = ({ destinationName, budget }) => {
  const [savedAmount, setSavedAmount] = useState<number>(0);
  const [savingPerMonth, setSavingPerMonth] = useState<number>(200);
  const [savingGoalDate, setSavingGoalDate] = useState<Date | null>(null);
  
  // Calculate the savings goal date
  useEffect(() => {
    if (savedAmount >= budget) {
      // Already saved enough
      setSavingGoalDate(new Date());
      return;
    }
    
    const remainingAmount = budget - savedAmount;
    const monthsNeeded = Math.ceil(remainingAmount / savingPerMonth);
    
    const goalDate = new Date();
    goalDate.setMonth(goalDate.getMonth() + monthsNeeded);
    
    setSavingGoalDate(goalDate);
  }, [savedAmount, budget, savingPerMonth]);
  
  // Calculate progress percentage
  const progressPercentage = Math.min(Math.round((savedAmount / budget) * 100), 100);
  
  // Format date to readable string
  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long'
    });
  };
  
  const handleSavedAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setSavedAmount(isNaN(value) ? 0 : value);
  };
  
  const handleSavingPerMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setSavingPerMonth(isNaN(value) ? 0 : value);
  };
  
  // Generate savings tips based on the monthly saving target
  const getSavingsTips = () => {
    if (savingPerMonth < 100) {
      return [
        "Make coffee at home instead of buying at cafes",
        "Cancel unused subscriptions",
        "Cook meals at home more often",
        "Use public transportation instead of rideshares"
      ];
    } else if (savingPerMonth < 300) {
      return [
        "Create a weekly budget and stick to it",
        "Consider a temporary side gig",
        "Reduce dining out to once a week",
        "Look for cheaper phone/internet plans"
      ];
    } else {
      return [
        "Set up automatic transfers to your savings account",
        "Consider temporary lifestyle adjustments",
        "Look for opportunities to increase your income",
        "Delay other major purchases until after your trip"
      ];
    }
  };
  
  return (
    <div className="card mt-8" id="savings-tracker">
      <h2 className="text-2xl font-bold mb-6 text-center">Savings Tracker</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <Wallet className="w-5 h-5 text-teal" />
          <span>Your Trip to {destinationName}</span>
        </h3>
        
        <div className="mt-4 space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span>Savings Progress</span>
              <span>${savedAmount} of ${budget}</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <div className="mt-2 text-sm text-right text-muted-foreground">
              {progressPercentage}% saved
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="savedAmount" className="block mb-2 font-medium">
                Current Savings ($)
              </label>
              <input
                type="number"
                id="savedAmount"
                value={savedAmount}
                onChange={handleSavedAmountChange}
                className="input-field"
                min="0"
                max={budget}
              />
            </div>
            
            <div>
              <label htmlFor="savingPerMonth" className="block mb-2 font-medium">
                Amount You Can Save Monthly ($)
              </label>
              <input
                type="number"
                id="savingPerMonth"
                value={savingPerMonth}
                onChange={handleSavingPerMonthChange}
                className="input-field"
                min="1"
              />
            </div>
          </div>
          
          <div className="bg-muted p-4 rounded-lg flex items-center gap-3">
            <Calendar className="w-6 h-6 text-teal shrink-0" />
            <div>
              <p className="font-medium">Estimated Goal Date</p>
              <p className="text-sm text-muted-foreground">
                {savingGoalDate ? (
                  progressPercentage === 100 
                    ? "You've already saved enough! Start planning your trip!" 
                    : `You'll reach your goal by ${formatDate(savingGoalDate)}`
                ) : 'Set your savings to calculate goal date'}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-teal" />
          <span>Savings Tips</span>
        </h3>
        
        <div className="bg-teal/5 p-4 rounded-lg border border-teal/20">
          <p className="mb-3">
            Here are some ways to help you save ${savingPerMonth}/month for your trip:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            {getSavingsTips().map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SavingsTracker;
