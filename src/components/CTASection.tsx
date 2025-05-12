import { Button } from "@/components/ui/button";
import { Rocket, Sparkles, ArrowRight, SendHorizonal } from "lucide-react";
import { PiTelegramLogo } from "react-icons/pi";
import { useState, useEffect, useRef } from "react";
import { TELEGRAM_LINK } from "@/constants/links";

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
        <section ref={sectionRef} className='py-24 relative overflow-hidden'>
            <div className='container mx-auto px-4'>
                <div
                    className={`max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-2xl text-center relative z-10 border border-primary/20 transition-all duration-1000 ${
                        isVisible
                            ? "opacity-100 transform-none"
                            : "opacity-0 translate-y-10"
                    }`}
                >
                    {/* Decorative elements */}
                    <div className='absolute -top-6 -left-6 w-12 h-12 rounded-full bg-primary/20 animate-float'></div>
                    <div
                        className='absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-primary/20 animate-float'
                        style={{ animationDelay: "1s" }}
                    ></div>

                    <div className='inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary mb-6'>
                        <Sparkles size={16} className='mr-2 animate-spark' />
                        <span className='text-sm font-medium'>
                            Automate Your Trading Now!
                        </span>
                    </div>

                    <h2 className='text-3xl md:text-5xl md:leading-snug font-bold mb-6 text-gradient'>
                        Ready for Signals?
                    </h2>

                    <p className='text-lg mb-8 text-foreground/80'>
                        Join our Telegram Group now and get more information
                        about our trading bot and discover exclusive features!{" "}
                        <span className='inline-block animate-float'>🚀</span>
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <a
                            href={TELEGRAM_LINK}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-block'
                        >
                            <Button className='bg-primary hover:bg-primary text-primary-foreground rounded-lg px-8 py-6 text-lg font-medium relative group overflow-hidden '>
                                <span className='absolute inset-0 w-0 bg-white/15 transition-all duration-500 ease-in-out group-hover:w-full'></span>
                                <span className='relative flex items-center'>
                                    Join Telegram Group
                                    <PiTelegramLogo
                                        style={{
                                            height: "1.25rem",
                                            width: "1.25rem",
                                        }}
                                        className='ml-2 group-hover:translate-x-1 transition-transform duration-500'
                                    />
                                </span>
                            </Button>
                        </a>

                        <a
                            href='https://uncoded-1.gitbook.io/uncoded-docs'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-block'
                        >
                            <Button
                                variant='outline'
                                className='border-primary/30 hover:bg-primary/5 text-primary hover:text-primary rounded-lg px-8 py-6 text-lg font-medium group relative overflow-hidden'
                            >
                                <span className='absolute inset-0 w-0 bg-primary/5 transition-all duration-500 ease-in-out group-hover:w-full'></span>
                                <span className='relative flex items-center z-10'>
                                    <span className='relative overflow-hidden'>
                                        View Documentation
                                    </span>
                                    <ArrowRight
                                        size={16}
                                        className='ml-2 transition-transform group-hover:translate-x-1 duration-500'
                                    />
                                </span>
                            </Button>
                        </a>
                    </div>
                </div>
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
