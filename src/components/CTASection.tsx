import { Button } from "@/components/ui/button";
import { Rocket, Gift, BookOpen, Phone } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
    UNCODED_BOT_LINK,
    CALENDLY_LINK,
    DOCS_LINK,
} from "@/constants/links";
import { motion } from "framer-motion";

const CTASection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section
            id='cta'
            ref={sectionRef}
            className='py-24 relative overflow-hidden'
        >
            <div className='container mx-auto px-4'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className='max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-2xl text-center relative z-10 border border-primary/20'
                >
                    {/* Decorative elements */}
                    <div className='absolute -top-6 -left-6 w-12 h-12 rounded-full bg-primary/20 animate-float'></div>
                    <div
                        className='absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-primary/20 animate-float'
                        style={{ animationDelay: "1s" }}
                    ></div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className='text-center mb-12'
                    >
                        <div className='flex flex-col items-center justify-center mb-4 gap-2'>
                            <h2 className='text-2xl md:text-4xl font-bold text-gradient'>
                                Start Automated Trading Today
                            </h2>
                            <h2 className='text-xl md:text-3xl font-bold text-foreground'>
                                Trade Smarter, Not Harder.
                            </h2>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className='text-base leading-snug md:text-xl md:leading-normal mb-8 text-foreground/80 max-w-2xl mx-auto'
                    >
                        Grow your crypto holdings automatically — with real
                        trades, full transparency, and no subscription fees.
                        Automate buying dips and taking profits — 24/7 — without
                        monitoring charts.
                    </motion.p>

                    {/* Gift Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                        className='inline-flex items-center gap-2 px-3 py-2 rounded-full border border-primary/30 mb-8'
                    >
                        <Gift className='w-4 h-4 text-primary' />
                        <span className='text-sm font-semibold text-gradient'>
                            Start Free with a $100 Test License
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        className='flex flex-col gap-4 justify-center items-center mb-8'
                    >
                        {/* First row: Two smaller buttons */}
                        <div className='flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-[520px]'>
                            <Button
                                variant='outline'
                                className='border-primary/30 hover:bg-primary/5 text-primary hover:text-primary rounded-lg px-8 py-3 sm:py-6 text-lg font-medium group flex-1'
                                asChild
                            >
                                <a
                                    href={CALENDLY_LINK}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <span className='flex items-center gap-2'>
                                        Book a Free Consultation
                                        <Phone className='w-5 h-5 group-hover:scale-110 transition-transform' />
                                    </span>
                                </a>
                            </Button>

                            <Button
                                variant='outline'
                                className='border-primary/30 hover:bg-primary/5 text-primary hover:text-primary rounded-lg px-8 py-3 sm:py-6 text-lg font-medium group flex-1'
                                asChild
                            >
                                <a
                                    href={DOCS_LINK}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <span className='flex items-center gap-2'>
                                        Learn More in the Docs
                                        <BookOpen className='w-5 h-5 group-hover:scale-110 transition-transform' />
                                    </span>
                                </a>
                            </Button>
                        </div>

                        {/* Second row: Main CTA button (double width) */}
                        <div className='flex justify-center w-full'>
                            <Button
                                className='bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 py-6 text-lg font-medium relative group overflow-hidden animate-pulse-glow w-full sm:w-[574px]'
                                asChild
                            >
                                <a
                                    href={UNCODED_BOT_LINK}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <span className='absolute inset-0 w-0 bg-white/15 transition-all duration-500 ease-in-out group-hover:w-full'></span>
                                    <span className='relative flex items-center gap-2'>
                                        Start Your Trading Bot Now!
                                        <Rocket className='w-5 h-5 group-hover:translate-y-[-2px] transition-transform' />
                                    </span>
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        className='text-sm text-foreground/60 mt-8 max-w-xl mx-auto'
                    >
                        Personal onboarding, transparent results, and fair
                        profit-sharing — that's unCoded.
                    </motion.p>
                </motion.div>
            </div>

            {/* Background elements */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10'>
                <div className='w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]'></div>
                <div className='w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow'></div>
            </div>

            {/* Grid pattern */}
            <div className='absolute inset-0 grid-pattern opacity-10'></div>
        </section>
    );
};

export default CTASection;
