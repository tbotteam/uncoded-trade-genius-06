import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { START_BOT_CTA_LINK, TELEGRAM_LINK } from "@/constants/links";
import {
    MessageCircle,
    Users,
    Rocket,
    TrendingUp,
    Award,
    Sparkles,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { PiTelegramLogo } from "react-icons/pi";

const CommunitySection = () => {
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
        <section ref={sectionRef} className='py-24 relative overflow-hidden'>
            <div className='container mx-auto px-4 max-w-6xl'>
                {/* Section Header */}
                <div className='text-center mb-12'>
                    <div className='flex items-center justify-center mb-4 gap-2'>
                        <MessageCircle
                            size={40}
                            className='text-primary my-0'
                        />
                        <h2 className='text-3xl md:text-5xl font-bold text-gradient'>
                            Our Community
                        </h2>
                    </div>
                    <h3 className='text-2xl md:text-3xl font-medium mb-4 text-foreground max-w-2xl mx-auto'>
                        Join a growing community of active traders sharing
                        experiences, results, and strategies.
                    </h3>
                </div>

                {/* Community Benefits Grid */}
                <div
                    className={`grid md:grid-cols-3 gap-4 mb-8 transition-all duration-1000 ${
                        isVisible
                            ? "opacity-100 transform-none"
                            : "opacity-0 -translate-y-10"
                    }`}
                >
                    <Card className='glass-card border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10'>
                        <CardContent className='p-4 text-center'>
                            <div className='w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3'>
                                <TrendingUp className='w-6 h-6 text-primary' />
                            </div>
                            <p className='text-foreground font-medium text-base'>
                                Real trading insights & success stories
                            </p>
                        </CardContent>
                    </Card>

                    <Card className='glass-card border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10'>
                        <CardContent className='p-4 text-center'>
                            <div className='w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3'>
                                <Sparkles className='w-6 h-6 text-primary' />
                            </div>
                            <p className='text-foreground font-medium text-base'>
                                Early access to feature updates
                            </p>
                        </CardContent>
                    </Card>

                    <Card className='glass-card border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10'>
                        <CardContent className='p-4 text-center'>
                            <div className='w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3'>
                                <Users className='w-6 h-6 text-primary' />
                            </div>
                            <p className='text-foreground font-medium text-base'>
                                Direct support from our team
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content - Two Columns */}
                <div className='grid lg:grid-cols-2 gap-8 items-start'>
                    {/* Left Column - Results Card */}
                    <div
                        className={`transition-all duration-1000 ${
                            isVisible
                                ? "opacity-100 transform-none"
                                : "opacity-0 -translate-x-10"
                        }`}
                    >
                        <Card className='glass-card border-2 border-primary/30 relative overflow-hidden h-full'>
                            <div className='absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px]'></div>
                            <CardContent className='p-6 relative z-10'>
                                <div className='flex items-center gap-2 mb-4'>
                                    <h3 className='text-xl font-bold text-gradient'>
                                        Results from Our Community
                                    </h3>
                                </div>

                                <div className='bg-background/60 rounded-xl p-4 mb-4 border border-primary/20'>
                                    <p className='text-sm text-foreground/60 mb-3 font-medium'>
                                        💥 My unCoded Bot in one Week
                                    </p>
                                    <div className='space-y-2'>
                                        <div className='flex justify-between items-center'>
                                            <span className='text-foreground/80 flex items-center gap-2 text-sm'>
                                                ETH/USDT 💰
                                            </span>
                                            <span className='text-green-400 font-bold'>
                                                $100.20
                                            </span>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <span className='text-foreground/80 flex items-center gap-2 text-sm'>
                                                BNB/USDT ⚡
                                            </span>
                                            <span className='text-green-400 font-bold'>
                                                $60.27
                                            </span>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <span className='text-foreground/80 flex items-center gap-2 text-sm'>
                                                PEPE/USDT 🔥
                                            </span>
                                            <span className='text-green-400 font-bold'>
                                                $19.06
                                            </span>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <span className='text-foreground/80 flex items-center gap-2 text-sm'>
                                                TRX/USDT 💎
                                            </span>
                                            <span className='text-green-400 font-bold'>
                                                $12.23
                                            </span>
                                        </div>
                                        <div className='border-t border-primary/20 pt-3 mt-3'>
                                            <div className='flex justify-between items-center'>
                                                <span className='text-foreground font-semibold'>
                                                    Total Profit:
                                                </span>
                                                <span className='text-primary font-bold text-xl'>
                                                    $191.76
                                                </span>
                                            </div>
                                            <p className='text-xs text-foreground/60 text-right mt-1'>
                                                ≈ $25 per day
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <p className='text-center text-foreground/80 italic mb-0 text-sm'>
                                    "Steady bots, zero stress, visible results."
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - Community Highlights + CTA */}
                    <div
                        className={`transition-all duration-1000 ${
                            isVisible
                                ? "opacity-100 transform-none"
                                : "opacity-0 translate-x-10"
                        }`}
                    >
                        <Card className='glass-card border-2 border-primary/30 relative overflow-hidden h-full'>
                            <div className='absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px]'></div>
                            <CardContent className='p-6 relative z-10 flex flex-col h-full'>
                                <div className='bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-5 mb-6 flex-grow'>
                                    <h4 className='font-semibold text-foreground mb-4 flex items-center gap-2 text-lg'>
                                        <Award className='w-5 h-5 text-primary' />
                                        Community Highlights
                                    </h4>
                                    <ul className='space-y-3 text-foreground/80'>
                                        <li className='flex items-center gap-3'>
                                            <span className='text-primary text-lg flex items-center justify-center pt-[2px]'>
                                                ✓
                                            </span>
                                            <span className='leading-tight sm:leading-normal'>
                                                Real users report consistent
                                                performance
                                            </span>
                                        </li>
                                        <li className='flex items-center gap-3'>
                                            <span className='text-primary text-lg flex items-center justify-center pt-[2px]'>
                                                ✓
                                            </span>
                                            <span className='leading-tight sm:leading-normal'>
                                                Transparent live trading – no
                                                simulations
                                            </span>
                                        </li>
                                        <li className='flex items-center gap-3'>
                                            <span className='text-primary text-lg flex items-center justify-center pt-[2px]'>
                                                ✓
                                            </span>
                                            <span className='leading-tight sm:leading-normal'>
                                                Referral model – earn up to 10%
                                                from client profit shares
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                {/* CTA Buttons */}
                                <div className='space-y-3'>
                                    <Button
                                        className='w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-6 text-base font-medium animate-pulse-glow relative overflow-hidden group'
                                        asChild
                                    >
                                        <a href={START_BOT_CTA_LINK}>
                                            <span className='absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                                            <span className='relative flex items-center justify-center'>
                                                Try Real Trades for Free
                                                <Rocket
                                                    size={18}
                                                    className='ml-2 group-hover:translate-x-1 transition-transform'
                                                />
                                            </span>
                                        </a>
                                    </Button>

                                    <Button
                                        variant='outline'
                                        className='w-full border-primary/30 hover:bg-primary/5 text-primary hover:text-primary group rounded-lg px-6 py-6 text-base font-medium'
                                        asChild
                                    >
                                        <a
                                            href={TELEGRAM_LINK}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <span className='flex items-center justify-center'>
                                                Join Our Community
                                                <PiTelegramLogo
                                                    style={{
                                                        height: "1.25rem",
                                                        width: "1.25rem",
                                                        marginLeft: "0.25rem",
                                                    }}
                                                    className='group-hover:animate-bounce-slow'
                                                />
                                            </span>
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Background decorations */}
            <div className='absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10'></div>
            <div className='absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10'></div>
        </section>
    );
};

export default CommunitySection;
