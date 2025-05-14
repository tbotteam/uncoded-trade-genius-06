import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import Affiliate from "./pages/Affiliate";
import AboutUsPage from "./pages/AboutUs";
import TermsOfService from "./pages/TermsOfService";
const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Index />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/pricing' element={<Pricing />} />
                    <Route path='/affiliate' element={<Affiliate />} />
                    <Route path='/about' element={<AboutUsPage />} />
                    <Route path='/terms' element={<TermsOfService />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
