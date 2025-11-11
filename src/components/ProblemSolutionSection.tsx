import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UNCODED_BOT_LINK } from "@/constants/links";
import {
    Lightbulb,
    Settings,
    TrendingDown,
    TrendingUp,
    Activity,
    ArrowDown,
    Zap,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const ProblemSolutionSection = () => {
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
            { threshold: 0.1 }
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
            ref={sectionRef}
            className='py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden'
        >
            <div className='container mx-auto px-4'>
                {/* Problem Section */}
                <div className='mb-48'>
                    <div className='text-center mb-12'>
                        <div className='flex items-center justify-center mb-4 gap-2'>
                            <Lightbulb
                                size={40}
                                className='text-primary my-0'
                            />
                            <h2 className='text-3xl md:text-5xl font-bold text-gradient'>
                                The Problem
                            </h2>
                        </div>
                        <h3 className='text-2xl md:text-3xl font-medium mb-4 text-foreground max-w-2xl mx-auto'>
                            Manual trading leads to emotional decisions, missed
                            opportunities, and inconsistent results.
                        </h3>
                    </div>

                    <Card
                        className={`glass-card max-w-3xl mx-auto border border-orange-500/20 transition-all duration-1000 ${
                            isVisible
                                ? "opacity-100 transform-none"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        <CardContent className='p-8'>
                            <div className='prose prose-invert max-w-none'>
                                <p className='text-lg text-foreground/80 italic leading-relaxed'>
                                    "I kept missing opportunities whenever the
                                    market moved fast. I hesitated when prices
                                    dropped. And I wasted hours staring at
                                    charts, trying to predict the next move."
                                </p>
                                <p className='text-base text-foreground/70 mt-4'>
                                    That's exactly why I started using{" "}
                                    <span className='text-primary font-semibold'>
                                        unCoded
                                    </span>{" "}
                                    — it takes all of that off my plate and lets
                                    me profit from every market condition
                                    automatically.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Solution Section */}
                <div>
                    <div className='text-center mb-12'>
                        <div className='flex items-center justify-center mb-4 gap-2'>
                            <Settings size={40} className='my-0 text-primary' />
                            <h2 className='text-3xl md:text-5xl font-bold text-gradient'>
                                The Solution
                            </h2>
                        </div>
                        <h2 className='text-2xl md:text-3xl font-medium mb-4 text-foreground max-w-2xl mx-auto'>
                            Automated Crypto Trading on Binance
                        </h2>
                    </div>

                    <Card
                        className={`glass-card border border-primary/20 max-w-4xl mx-auto transition-all duration-1000 ${
                            isVisible
                                ? "opacity-100 transform-none"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        <CardContent className='px-4 py-8 md:p-12'>
                            <h3 className='text-2xl md:text-3xl font-bold mb-8 text-center text-foreground flex items-center justify-center gap-2'>
                                How unCoded Works
                                <ArrowDown
                                    size={30}
                                    className='text-foreground'
                                />
                            </h3>
                            <div className='w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-10'></div>

                            <div className='relative'>
                                {/* Continuous vertical line - stops before last step */}
                                <div className='absolute left-5 md:left-6 top-10 bottom-[6rem] w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50'></div>

                                <div className='space-y-10'>
                                    {/* Step 0 */}
                                    <div className='relative'>
                                        <div className='flex items-start gap-4 md:gap-6'>
                                            <div className='relative flex items-center'>
                                                <div className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30 ring-2 md:ring-4 ring-primary/20 z-10'>
                                                    <span className='text-xl md:text-2xl font-bold text-black'>
                                                        0
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='flex-1 pt-1'>
                                                <h4 className='text-xl md:text-2xl font-bold mb-2 md:mb-3 text-primary'>
                                                    Claim Your $100 Test License
                                                </h4>
                                                <p className='text-foreground/80 text-base md:text-lg leading-snug md:leading-relaxed'>
                                                    Run your first automated
                                                    trading pair with real
                                                    trades and transparent
                                                    results — completely free.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 1 */}
                                    <div className='relative'>
                                        <div className='flex items-start gap-4 md:gap-6'>
                                            <div className='relative flex items-center'>
                                                <div className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30 ring-2 md:ring-4 ring-primary/20 z-10'>
                                                    <span className='text-xl md:text-2xl font-bold text-black'>
                                                        1
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='flex-1 pt-1'>
                                                <h4 className='text-xl md:text-2xl font-bold mb-2 md:mb-3 text-primary'>
                                                    Connect Your Binance Account
                                                </h4>
                                                <p className='text-foreground/80 text-base md:text-lg leading-snug md:leading-relaxed mb-2'>
                                                    Secure API connection - you
                                                    keep full control of your
                                                    funds.
                                                </p>
                                                <div className='bg-secondary/30 border border-primary/10 rounded-lg p-3 text-sm md:text-base'>
                                                    <p className='text-foreground/70 leading-tight md:leading-snug'>
                                                        You never deposit funds
                                                        anywhere. Your crypto
                                                        always stays on your own
                                                        Binance account. unCoded
                                                        only places orders via
                                                        secure API permissions —
                                                        no withdrawal rights.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className='relative'>
                                        <div className='flex items-start gap-4 md:gap-6'>
                                            <div className='relative flex items-center'>
                                                <div className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30 ring-2 md:ring-4 ring-primary/20 z-10'>
                                                    <span className='text-xl md:text-2xl font-bold text-black'>
                                                        2
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='flex-1 pt-1'>
                                                <h4 className='text-xl md:text-2xl font-bold mb-2 md:mb-3 text-primary'>
                                                    Choose your favorite coins
                                                    and parameters
                                                </h4>
                                                <p className='text-foreground/80 text-base md:text-lg leading-snug md:leading-relaxed'>
                                                    Pick assets you already
                                                    believe in and set your
                                                    preferred profit and risk
                                                    settings.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className='relative'>
                                        <div className='flex items-start gap-4 md:gap-6'>
                                            <div className='relative flex items-center'>
                                                <div className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30 ring-2 md:ring-4 ring-primary/20 z-10'>
                                                    <span className='text-xl md:text-2xl font-bold text-black'>
                                                        3
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='flex-1 pt-1'>
                                                <h4 className='text-xl md:text-2xl font-bold mb-2 md:mb-3 text-primary'>
                                                    Let unCoded Trade
                                                    Automatically
                                                </h4>
                                                <p className='text-foreground/80 text-base md:text-lg leading-snug md:leading-relaxed mb-3'>
                                                    unCoded executes thousands
                                                    of small, strategic buy/sell
                                                    orders automatically —
                                                    capturing profits even in
                                                    sideways markets:
                                                </p>
                                                <ul className='space-y-1.5 text-sm md:text-base text-foreground/80 leading-tight md:leading-normal'>
                                                    <li className='flex items-start gap-2'>
                                                        <TrendingDown className='w-4 h-4 text-green-400 flex-shrink-0 mt-0.5' />
                                                        <span>
                                                            Buys cheaper during
                                                            dips (DCA effect)
                                                        </span>
                                                    </li>
                                                    <li className='flex items-start gap-2'>
                                                        <TrendingUp className='w-4 h-4 text-primary flex-shrink-0 mt-0.5' />
                                                        <span>
                                                            Takes profits during
                                                            rallies
                                                        </span>
                                                    </li>
                                                    <li className='flex items-start gap-2'>
                                                        <Activity className='w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5' />
                                                        <span>
                                                            Builds your holdings
                                                            steadily over time
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button - Inside Card */}
                            <div className='border-t border-primary/20 pt-8 mt-8'>
                                <Button
                                    className='w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-9 py-7 text-lg font-medium animate-pulse-glow relative overflow-hidden group'
                                    asChild
                                >
                                    <a
                                        href={UNCODED_BOT_LINK}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <span className='absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                                        <span className='relative flex items-center justify-center'>
                                            Start Your Trading Bot Now
                                            <Zap
                                                size={20}
                                                className='ml-2 animate-bounce-slow'
                                            />
                                        </span>
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Background decorations */}
            <div className='absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10'></div>
            <div className='absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] -z-10'></div>
        </section>
    );
};

export default ProblemSolutionSection;
