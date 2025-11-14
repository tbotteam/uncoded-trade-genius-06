import { Card, CardContent } from "@/components/ui/card";
import {
    Lock,
    Building2,
    Wallet,
    Gift,
    ShieldCheck,
    Users,
    CheckCircle2,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface TrustFeatureProps {
    icon: React.ReactNode;
    title: string;
    delay: number;
}

const TrustFeature = ({ icon, title, delay }: TrustFeatureProps) => {
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
        <div
            ref={ref}
            className={`flex items-center gap-3 transition-all duration-700 ${
                isVisible ? "opacity-100 transform-none" : "opacity-0 translate-x-10"
            }`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className='w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0'>
                {icon}
            </div>
            <div>
                <p className='text-foreground/80 text-base leading-snug'>
                    {title}
                </p>
            </div>
        </div>
    );
};

const TrustSection = () => {
    const trustFeatures = [
        {
            icon: <Building2 className='w-5 h-5 text-primary' />,
            title: "Developed by ArrowTrade AG, Brig (Switzerland)",
        },
        {
            icon: <CheckCircle2 className='w-5 h-5 text-primary' />,
            title: "No subscriptions, no fixed fees — we earn only when you earn",
        },
        {
            icon: <Wallet className='w-5 h-5 text-primary' />,
            title: "Non-custodial: funds stay safely on your Binance account",
        },
        {
            icon: <Gift className='w-5 h-5 text-primary' />,
            title: "$100 Test License to experience real results before you commit",
        },
        {
            icon: <ShieldCheck className='w-5 h-5 text-primary' />,
            title: "Audited connections & verified API security",
        },
        {
            icon: <Users className='w-5 h-5 text-primary' />,
            title: "Personal onboarding & human support",
        },
    ];

    return (
        <section className='py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12'>
                    <div className='flex items-center justify-center mb-4 gap-2'>
                        <Lock
                            size={40}
                            className='text-primary my-0'
                        />
                        <h2 className='text-3xl md:text-5xl font-bold text-gradient'>
                            Why Traders Trust unCoded
                        </h2>
                    </div>
                    <h3 className='text-2xl md:text-3xl font-medium mb-4 text-foreground max-w-2xl mx-auto'>
                        Swiss Precision · Transparent Results · Fair Profit Sharing
                    </h3>
                </div>

                <Card className='glass-card max-w-5xl mx-auto border border-primary/20'>
                    <CardContent className='p-6 md:p-8'>
                        <div className='grid md:grid-cols-2 gap-5'>
                            {trustFeatures.map((feature, index) => (
                                <TrustFeature
                                    key={index}
                                    {...feature}
                                    delay={index * 100}
                                />
                            ))}
                        </div>

                        <div className='mt-8 pt-6 border-t border-primary/10'>
                            <div className='text-center'>
                                <p className='text-foreground/80 leading-normal max-w-3xl mx-auto'>
                                    Developed by a Swiss company with German engineers — built for reliability and transparency
                                </p>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <div className='text-center'>
                                <p className='text-foreground/80 leading-normal max-w-3xl mx-auto'>
                                    Swiss engineering meets real-world crypto trading stability.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Background decorations */}
            <div className='absolute top-0 left-0 w-full h-96 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.15),transparent_70%)] opacity-30 pointer-events-none -z-10'></div>
            <div className='absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] -z-10'></div>
        </section>
    );
};

export default TrustSection;
