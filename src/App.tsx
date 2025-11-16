import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react"

// Eager load Index page for faster initial render
import Index from "./pages/Index";

// Lazy load other routes
const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Affiliate = lazy(() => import("./pages/Affiliate"));
const AboutUsPage = lazy(() => import("./pages/AboutUs"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));

const queryClient = new QueryClient();

const App = () => (
    <HelmetProvider>
        <Analytics />
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                    </div>}>
                        <Routes>
                            <Route path='/' element={<Index />} />
                            <Route path='/dashboard' element={<Dashboard />} />
                            <Route path='/pricing' element={<Pricing />} />
                            <Route path='/affiliate' element={<Affiliate />} />
                            <Route path='/about' element={<AboutUsPage />} />
                            <Route path='/terms' element={<TermsOfService />} />
                            <Route path='/blogs' element={<Blogs />} />
                            <Route path='/blogs/:slug' element={<BlogDetail />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </TooltipProvider>
        </QueryClientProvider>
    </HelmetProvider>
);

export default App;
