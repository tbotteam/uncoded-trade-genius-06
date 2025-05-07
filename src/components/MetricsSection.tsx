import { useEffect, useState, useRef } from "react";
import { Activity, CheckCircle, Clock, ArrowUpCircle, Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface StatProps {
    value: string;
    label: string;
    delay: number;
    icon: React.ReactNode;
    color: string;
    endValue: number;
    suffix?: string;
}

const Stat = ({
    value,
    label,
    delay,
    icon,
    color,
    endValue,
    suffix = "",
}: StatProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentValue, setCurrentValue] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

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

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        let animationFrame: number;
        const animationDuration = 1500; // ms

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;

            const progress = Math.min(elapsed / animationDuration, 1);
            const easedProgress = easeOutCubic(progress);
            const value = Math.floor(easedProgress * endValue);

            setCurrentValue(value);
            setProgress(progress * 100);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(step);
            }
        };

        const timeoutId = setTimeout(() => {
            animationFrame = requestAnimationFrame(step);
        }, delay);

        return () => {
            clearTimeout(timeoutId);
            cancelAnimationFrame(animationFrame);
        };
    }, [isVisible, delay, endValue]);

    // Easing function
    const easeOutCubic = (x: number): number => {
        return 1 - Math.pow(1 - x, 3);
    };

    return (
        <div
            ref={ref}
            className={`bg-secondary/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10 transition-all duration-1000 ${
                isVisible
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-10"
            }`}
        >
            <div className='flex items-start gap-4'>
                <div className={`p-3 rounded-lg ${color}`}>{icon}</div>
                <div className='w-full'>
                    <div className='flex items-end gap-1 mb-1'>
                        <div className='text-4xl md:text-5xl font-bold text-primary'>
                            {currentValue}
                        </div>
                        <div className='text-lg text-accent mb-1'>{suffix}</div>
                    </div>
                    <div className='text-foreground/70 mb-3'>{label}</div>
                    <Progress value={progress} className='h-1 w-3/4' />
                </div>
            </div>
        </div>
    );
};

const MetricsSection = () => {
    return (
        <section
            id='metrics'
            className='py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden'
        >
            <div className='container mx-auto px-4'>
                <div className='text-center mb-16 animate-fade-in'>
                    <div className='inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary mb-4'>
                        <span className='text-sm font-medium'>Metrics</span>
                    </div>
                    <h2 className='text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent'>
                        Our Success in{" "}
                        <span className='text-primary'>Numbers</span>
                    </h2>
                    <p className='text-lg text-foreground/70 max-w-2xl mx-auto'>
                        Real results that speak for themselves
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <Stat
                        value='99.9%'
                        label='Uptime'
                        delay={100}
                        icon={
                            <CheckCircle className='w-6 h-6 text-green-400' />
                        }
                        color='bg-green-500/20'
                        endValue={99}
                        suffix='.9%'
                    />
                    <Stat
                        value='0.1s'
                        label='Execution Time'
                        delay={300}
                        icon={<Zap className='w-6 h-6 text-primary' />}
                        color='bg-primary/20'
                        endValue={100}
                        suffix='ms'
                    />
                    <Stat
                        value='24/7'
                        label='Support'
                        delay={500}
                        icon={<Clock className='w-6 h-6 text-blue-400' />}
                        color='bg-blue-500/20'
                        endValue={24}
                        suffix='/ 7'
                    />
                    <Stat
                        value='50k+'
                        label='Trades'
                        delay={700}
                        icon={
                            <ArrowUpCircle className='w-6 h-6 text-purple-400' />
                        }
                        color='bg-purple-500/20'
                        endValue={50}
                        suffix='k+'
                    />
                </div>
            </div>

            {/* Background decorations */}
            <div className='absolute top-0 left-0 right-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(var(--primary-rgb),0.2),transparent_70%)] opacity-30 pointer-events-none'></div>
            <div className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent'></div>

            {/* Floating elements */}
            <div
                className='absolute top-1/4 right-1/6 w-8 h-8 border border-primary/30 rounded-full animate-float'
                style={{ animationDelay: "0.5s" }}
            ></div>
            <div
                className='absolute bottom-1/4 left-1/6 w-12 h-12 border border-primary/20 rounded-full animate-float'
                style={{ animationDelay: "1.5s" }}
            ></div>
        </section>
    );
};

export default MetricsSection;
