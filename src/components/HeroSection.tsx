import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Sparkles, Zap } from "lucide-react";
import { useState, useEffect } from "react";

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
                <div className='max-w-3xl mx-auto text-center'>
                    <div
                        className={`transition-all duration-1000 ${
                            isVisible
                                ? "opacity-100 transform-none"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        <div className='inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary mb-6'>
                            <Sparkles
                                size={16}
                                className='mr-2 animate-spark'
                            />
                            <span className='text-sm font-medium text-gradient'>
                                Intelligent Trading Made Easy
                            </span>
                        </div>

                        <h1 className='text-4xl md:text-7xl font-bold mb-6 text-foreground glow'>
                            Intelligent Trading{" "}
                            <span className='text-gradient'>Automated</span>
                        </h1>

                        <h2 className='text-2xl md:text-3xl font-semibold mb-8 text-primary'>
                            unCoded Trading Bot
                        </h2>

                        <p className='text-lg md:text-xl text-foreground/80 mb-12 animate-fade-in animate-delay-200 max-w-2xl mx-auto'>
                            Automate your Binance trading with advanced AI and{" "}
                            <span className='text-primary font-semibold'>
                                maximize
                            </span>{" "}
                            your returns
                        </p>

                        <div className='flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-300'>
                            <Button
                                className='bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-9 py-7 text-lg font-medium animate-pulse-glow relative overflow-hidden group'
                                asChild
                            >
                                <a
                                    href='https://t.me/Official_unCoded'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <span className='absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                                    <span className='relative flex items-center'>
                                        Join Telegram Group
                                        <Zap
                                            size={20}
                                            className='ml-2 animate-bounce-slow '
                                        />
                                        {/* <ExternalLink
                                            size={20}
                                            className='ml-2 '
                                        /> */}
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
