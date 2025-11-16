import "@/index.css";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";

// Lazy load below-the-fold sections
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const TrustSection = lazy(() => import("@/components/TrustSection"));
const CommunitySection = lazy(() => import("@/components/CommunitySection"));
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            <Navbar />
            <HeroSection />
            <ProblemSolutionSection />

            <Suspense fallback={<div className="py-12"></div>}>
                <TestimonialsSection />
                <TrustSection />
                <CommunitySection />
                <FeaturesSection />
                <FAQSection />
                <CTASection />
                <Footer />
            </Suspense>

            {/* Background noise texture overlay */}
            <div className="fixed inset-0 z-[-2] opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
        </div>
    );
};

export default Index;
