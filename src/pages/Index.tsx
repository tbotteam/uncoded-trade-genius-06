import "@/index.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustSection from "@/components/TrustSection";
import FeaturesSection from "@/components/FeaturesSection";
import CommunitySection from "@/components/CommunitySection";
import MetricsSection from "@/components/MetricsSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { motion, useScroll } from "framer-motion";

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
            <ProblemSolutionSection />
            <TestimonialsSection />
            <TrustSection />
            <CommunitySection />
            <FeaturesSection />
            {/* <MetricsSection /> */}
            {/* <BlogSection /> */}
            <FAQSection />
            <CTASection />
            <Footer />

            {/* Cursor glow effect */}
            <div
                id='cursor-glow'
                className='fixed w-[120px] h-[120px] rounded-full bg-primary/10 pointer-events-none blur-[50px] -z-1 hidden md:block'
                style={{ transform: 'translate(-50%, -50%)' }}
            ></div>

            {/* Scroll progress indicator */}
            <motion.div
                className='fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left'
                style={{ scaleX: scrollYProgress }}
            />
        </div>
    );
};

export default Index;
