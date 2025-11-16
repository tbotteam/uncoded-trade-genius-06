import "@/index.css";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import OrdersChartSection from "@/components/OrdersChartSection";
import { useEffect } from "react";
import { motion, useScroll } from "framer-motion";

// Lazy load below-the-fold sections
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const TrustSection = lazy(() => import("@/components/TrustSection"));
const CommunitySection = lazy(() => import("@/components/CommunitySection"));
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const cursorGlow = document.getElementById('cursor-glow');
            if (cursorGlow) {
                cursorGlow.style.left = `${e.clientX}px`;
                cursorGlow.style.top = `${e.clientY}px`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            <Navbar />
            <HeroSection />
            <OrdersChartSection />
            <ProblemSolutionSection />

            {/* Cursor glow effect */}
            <div
                id='cursor-glow'
                className='fixed w-[120px] h-[120px] rounded-full bg-primary/10 pointer-events-none blur-[50px] -z-1 hidden md:block'
                style={{ transform: 'translate(-50%, -50%)' }}
            ></div>
            <Suspense fallback={<div className="py-12"></div>}>
                <TestimonialsSection />
                <TrustSection />
                <CommunitySection />
                <FeaturesSection />
                <FAQSection />
                <CTASection />
                <Footer />
            </Suspense>

            {/* Scroll progress indicator */}
            <motion.div
                className='fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left'
                style={{ scaleX: scrollYProgress }}
            />
        </div>
    );
};

export default Index;
