import { Button } from "@/components/ui/button";
import { START_BOT_CTA_LINK } from "@/constants/links";
import { DollarSign, Gift, Shield, TrendingUp, Users, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className='hero-gradient min-h-screen flex flex-col justify-center pt-16 overflow-hidden relative'>
            {/* Grid pattern background */}
            <div className='absolute inset-0 grid-pattern opacity-20'></div>

            <div className='container mx-auto px-4 py-12 relative z-10'>
                <div className='max-w-4xl mx-auto text-center'>
                    <div
                        className={`transition-all duration-1000 ${
                            isVisible
                                ? "opacity-100 transform-none"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        <h1 className='text-3xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground glow leading-tight text-gradient'>
                            unCoded Trading Bot
                        </h1>
                        <h1 className='text-lg md:text-xl lg:text-4xl font-bold mb-6 text-foreground glow leading-tight'>
                            Automated Crypto Trading That Works While You Sleep
                        </h1>

                        <h2 className='text-lg md:text-xl lg:text-2xl font-medium mb-8 text-foreground/90 max-w-3xl mx-auto leading-relaxed'>
                            Grow your crypto holdings automatically — with
                            thousands of real micro-trades per day, full
                            transparency, and no subscription fees
                        </h2>

                        <p className='text-base md:text-lg text-foreground/70 mb-8 max-w-2xl mx-auto'>
                            The unCoded Binance Trading Bot is built in
                            Switzerland and trusted by traders across Europe
                        </p>

                        <div className='mx-auto mb-6 max-w-2xl shadow-xl rounded-2xl bg-primary/10 border border-primary/20 px-6 py-5 flex flex-col items-center gap-4 animate-fade-in animate-delay-150'>
                            <div className='flex items-center'>
                                <Gift className='w-6 h-6 text-primary mr-1.5' />
                                <span className='text-base md:text-lg font-semibold text-gradient'>
                                    Free $100 Test License
                                </span>
                            </div>
                            <div className='text-center text-foreground font-medium text-sm md:text-base leading-relaxed'>
                                Experience real trades and visible results from
                                day one.
                            </div>
                            <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2'>
                                <Badge
                                    variant='outline'
                                    className='px-3 py-2 border-primary/30 bg-primary/5 text-foreground/90 text-sm flex items-center justify-center gap-2'
                                >
                                    <span className='flex items-center gap-1'>
                                       <img src="/logos/switzerland.webp" alt="Swiss Flag" className="w-3 h-3" />
                                        Developed in Switzerland.
                                    </span>
                                </Badge>
                                <Badge
                                    variant='outline'
                                    className='px-3 py-2 border-primary/30 bg-primary/5 text-foreground/90 text-sm flex items-center justify-center gap-2'
                                >
                                    <TrendingUp className='w-4 h-4 text-primary' />
                                    Real Results
                                </Badge>
                                <Badge
                                    variant='outline'
                                    className='px-3 py-2 border-primary/30 bg-primary/5 text-foreground/90 text-sm flex items-center justify-center gap-2 sm:col-span-2'
                                >
                                    <Shield className='w-4 h-4 text-primary' />
                                    Non-custodial - funds remain in your Binance
                                    account
                                </Badge>
                                <Badge
                                    variant='outline'
                                    className='px-3 py-2 border-primary/30 bg-primary/5 text-foreground/90 text-sm flex items-center justify-center gap-2'
                                >
                                    <Users className='w-4 h-4 text-primary' />
                                    Personal Support
                                </Badge>
                                <Badge
                                    variant='outline'
                                    className='px-3 py-2 border-primary/30 bg-primary/5 text-foreground/90 text-sm flex items-center justify-center gap-2'
                                >
                                    <DollarSign className='w-4 h-4 text-primary' />
                                    Includes $100 Test License
                                </Badge>
                            </div>
                            <Button
                                className='w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-9 py-7 text-lg font-medium animate-pulse-glow relative overflow-hidden group mt-2'
                                asChild
                            >
                                <a
                                    href={START_BOT_CTA_LINK}
                                >
                                    <span className='absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                                    <span className='relative flex items-center justify-center'>
                                        Start Your Trading Bot Now
                                        <Zap
                                            size={20}
                                            className='ml-2 animate-bounce-slow '
                                        />
                                    </span>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animated background elements */}
            <div className='absolute inset-0 -z-10 overflow-hidden crypto-particles'>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] animate-pulse-glow'></div>
                <div className='absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] animate-float'></div>
                <div
                    className='absolute bottom-1/4 left-1/5 w-[200px] h-[200px] bg-primary/5 rounded-full blur-[60px] animate-float'
                    style={{ animationDelay: "2s" }}
                ></div>

                {/* Animated rings */}
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div
                        className='w-[400px] h-[400px] border border-primary/20 rounded-full animate-rotate'
                        style={{ animationDuration: "20s" }}
                    ></div>
                    <div
                        className='w-[600px] h-[600px] border border-primary/10 rounded-full animate-rotate absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        style={{ animationDuration: "30s" }}
                    ></div>
                    <div
                        className='w-[800px] h-[800px] border border-primary/5 rounded-full animate-rotate absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        style={{ animationDuration: "40s" }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
