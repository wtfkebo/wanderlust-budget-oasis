
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import RouteAnimator from "./pages/RouteAnimator";
import VoyageVibes from "./pages/VoyageVibes";
import NotFound from "./pages/NotFound";

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
  const [isLoading, setIsLoading] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          {isLoading ? (
            <div className="flex items-center justify-center h-screen">
              <div className="animate-pulse flex flex-col items-center gap-4">
                <div className="h-16 w-16 bg-purple-500/50 rounded-full"></div>
                <p className="text-gray-600">Loading...</p>
              </div>
            </div>
          ) : (
            <div className="flex min-h-screen bg-gradient-to-b from-purple-900 via-red-500 to-yellow-500">
              <Sidebar />
              <main className="flex-1 p-4">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/route-animator" element={<RouteAnimator />} />
                  <Route path="/voyage-vibes" element={<VoyageVibes />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          )}
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
