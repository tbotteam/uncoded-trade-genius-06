import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
// import MetricsSection from "@/components/MetricsSection";
// import CTASection from "@/components/CTASection";
// import Footer from "@/components/Footer";
import { useEffect } from "react";
import { toast } from "@/components/ui/sonner";

const Index = () => {
    useEffect(() => {
        // Show a welcome toast when the page loads
        toast.success("Welcome to DecodedBeta", {
            description: "Experience the future of AI-powered trading",
            duration: 5000,
        });
    }, []);

    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            {/* <MetricsSection />
            <CTASection />
            <Footer /> */}

            {/* Cursor glow effect - follows the mouse with a subtle glow */}
            <div
                id='cursor-glow'
                className='fixed w-[200px] h-[200px] rounded-full bg-primary/5 pointer-events-none blur-[80px] -z-1 hidden md:block'
            ></div>

            {/* Background noise texture overlay */}
            <div className="fixed inset-0 z-[-2] opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
        </div>
    );
};

export default Index;
