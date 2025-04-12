
import { toast } from '@/hooks/use-toast';

interface CountryInfo {
  name: {
    common: string;
    official: string;
  };
  currencies: Record<string, { name: string; symbol: string }>;
  flags: {
    png: string;
    svg: string;
  };
  capital: string[];
  population: number;
  region: string;
  languages: Record<string, string>;
}

export const fetchCountryData = async (): Promise<CountryInfo[]> => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    
    if (!response.ok) {
      throw new Error('Failed to fetch country data');
    }
    
    const data: CountryInfo[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching country data:', error);
    toast({
      title: "Error",
      description: "Failed to fetch country data. Using cached data instead.",
      variant: "destructive",
    });
    return [];
  }
};

// Helper function to get currency symbol for a country
export const getCurrencySymbol = (countryData: CountryInfo | undefined): string => {
  if (!countryData || !countryData.currencies) {
    return '$';
  }
  
  const currencyCode = Object.keys(countryData.currencies)[0];
  return countryData.currencies[currencyCode]?.symbol || '$';
};

// Helper function to format currency based on country
export const formatCurrency = (amount: number, countryData: CountryInfo | undefined): string => {
  const symbol = getCurrencySymbol(countryData);
  return `${symbol}${amount.toLocaleString()}`;
};

// Export CountryType interface that matches the properties we're using
export interface CountryType {
  currency?: string;
  currencyCode?: string;
  currencySymbol?: string;
  flagUrl?: string;
  capital?: string;
  languages?: string[];
  population?: number;
  region?: string;
  exchangeRate?: number;
}

// Update the destinations.ts file to include these properties in the Destination interface
// This is a hack to extend the Destination interface from another file
declare module '../data/destinations' {
  interface Destination extends CountryType {}
}
