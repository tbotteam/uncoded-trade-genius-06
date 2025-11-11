import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TRUSTPILOT_LINK } from "@/constants/links";
import { Star, MessageCircle, ExternalLink } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface TestimonialProps {
    rating: number;
    text: string;
    author: string;
    delay: number;
}

const Testimonial = ({ rating, text, author, delay }: TestimonialProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

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

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <Card
            ref={ref}
            className={`glass-card border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 ${
                isVisible
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <CardContent className='p-6'>
                <div className='flex gap-1 mb-3'>
                    {[...Array(rating)].map((_, i) => (
                        <Star
                            key={i}
                            className='w-5 h-5 fill-primary text-primary'
                        />
                    ))}
                </div>
                <p className='text-foreground/80 mb-4 italic leading-relaxed'>
                    "{text}"
                </p>
                <p className='text-sm text-foreground/60 font-medium'>
                    — {author}
                </p>
            </CardContent>
        </Card>
    );
};

const TestimonialsSection = () => {
    const testimonials = [
        {
            rating: 5,
            text: "I was skeptical at first — but the bot has been running stable and profitable for months.",
            author: "Manuel K., Trustpilot",
        },
        {
            rating: 5,
            text: "It buys dips, sells spikes — exactly what I wanted.",
            author: "Lukas M., Trustpilot",
        },
    ];

    return (
        <section className='py-24 relative overflow-hidden'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12'>
                    <div className='flex items-center justify-center mb-4 gap-2'>
                        <MessageCircle
                            size={40}
                            className='text-primary my-0'
                        />
                        <h2 className='text-3xl md:text-5xl font-bold text-gradient'>
                            What Our Users Say
                        </h2>
                    </div>
                    <h3 className='text-2xl md:text-3xl font-medium mb-4 text-foreground max-w-2xl mx-auto'>
                        Trusted by Traders Worldwide
                    </h3>
                </div>

                <div className='grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8'>
                    {testimonials.map((testimonial, index) => (
                        <Testimonial
                            key={index}
                            {...testimonial}
                            delay={index * 200}
                        />
                    ))}
                </div>

                <div className='text-center'>
                    <div className='inline-flex flex-col items-center gap-4'>
                        <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-3'>
                            <div className='flex gap-0.5 sm:gap-1'>
                                {[...Array(4)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className='w-5 h-5 sm:w-6 sm:h-6 fill-[#00B67A] text-[#00B67A]'
                                    />
                                ))}
                                {/* 80% filled last star */}
                                <div className='relative w-5 h-5 sm:w-6 sm:h-6'>
                                    <Star 
                                        className='w-5 h-5 sm:w-6 sm:h-6 text-[#00B67A]' 
                                        fill="none"
                                        strokeWidth={1.5}
                                    />
                                    <Star 
                                        className='w-5 h-5 sm:w-6 sm:h-6 fill-[#00B67A] text-[#00B67A] absolute inset-0' 
                                        style={{ clipPath: 'inset(0 45% 0 0)' }}
                                    />
                                </div>
                            </div>
                            <span className='text-lg sm:text-2xl font-bold text-foreground flex items-center gap-1.5 sm:gap-2'>
                                4.8/5 Rated on{" "}
                                <img
                                    src='https://cdn.brandfetch.io/idjtYmGVfB/idMNTkMPlG.svg?c=1dxbfHSJFAPEGdCLU4o5B'
                                    alt='Trustpilot'
                                    className='h-6 sm:h-8 w-auto'
                                />
                            </span>
                        </div>
                        <Button
                            variant='outline'
                            className='border-foreground/20 hover:bg-foreground/5 text-foreground hover:text-foreground group text-lg px-8 py-3 h-auto'
                            asChild
                        >
                            <a
                                href={TRUSTPILOT_LINK}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <span className='flex items-center gap-2'>
                                    Read all reviews
                                    <ExternalLink className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                                </span>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Background decorations */}
            <div className='absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] -z-10'></div>
            <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[140px] -z-10'></div>
        </section>
    );
};

export default TestimonialsSection;
