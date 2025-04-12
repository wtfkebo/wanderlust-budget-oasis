
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TravelBudgetPlanner from "./components/TravelBudgetPlanner";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";
import { fetchCountryData } from "./utils/countryApi";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Pre-fetch country data when the app loads
    const preloadData = async () => {
      try {
        await queryClient.prefetchQuery({
          queryKey: ['countries'],
          queryFn: fetchCountryData
        });
      } catch (error) {
        console.error("Failed to prefetch country data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    preloadData();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {isLoading ? (
            <div className="flex items-center justify-center h-screen">
              <div className="animate-pulse flex flex-col items-center gap-4">
                <div className="h-16 w-16 bg-teal/50 rounded-full"></div>
                <p className="text-gray-600">Loading travel data...</p>
              </div>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<TravelBudgetPlanner />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
