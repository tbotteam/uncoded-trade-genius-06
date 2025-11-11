import {
    Shield,
    Zap,
    Activity,
    TrendingUp,
    CircleDot,
    Puzzle,
} from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FEATURES_PAGE_LINK } from "@/constants/links";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card
            className={`glass-card rounded-xl overflow-hidden transition-all duration-500 transform ${
                isHovered ? "scale-105 shadow-lg shadow-primary/20" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: "both",
            }}
        >
            <CardContent className='p-6 relative'>
                <div
                    className={`absolute top-0 right-0 w-24 h-24 rounded-full -mr-10 -mt-10 z-0 
                                overflow-hidden`}
                >
                    <div
                        className={`w-full h-full bg-primary rounded-full
                                    transition-all duration-500 ease-in-out origin-top-right 
                                    ${
                                        isHovered
                                            ? "opacity-60 scale-25"
                                            : "opacity-20 scale-50"
                                    }`}
                    ></div>
                </div>
                <div className='relative z-10'>
                    <div className='bg-primary/10 text-primary p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20'>
                        {icon}
                    </div>
                    <h3 className='text-xl font-semibold mb-3 text-primary'>
                        {title}
                    </h3>
                    <p className='text-foreground/70'>{description}</p>
                </div>
            </CardContent>
        </Card>
    );
};

const FeaturesSection = () => {
    const features = [
        {
            icon: <Activity size={24} className='animate-spark' />,
            title: "Smart Micro-Trading Engine",
            description:
                "captures even the smallest market movements with thousands of trades per day, optimizing entries and exits automatically.",
        },
        {
            icon: <Shield size={24} className='animate-spark' />,
            title: "Individual Risk Management",
            description:
                "full control through flexible risk settings: define stop-loss levels, position sizes, and a smart rebuy function that allows the bot to react intelligently to falling prices — instead of buying blindly into a downtrend.",
        },
        {
            icon: <Zap size={24} className='animate-spark' />,
            title: "Simple No-Code Setup",
            description:
                "start within minutes using proven default settings and adjust anytime to fit your strategy.",
        },
        {
            icon: <TrendingUp size={24} className='animate-bounce-slow' />,
            title: "Transparent Reporting",
            description:
                "see every trade, live profit & loss, and detailed performance analytics in real time.",
        },
        {
            icon: <CircleDot size={24} className='animate-pulse' />,
            title: "Fair Profit-Sharing Model",
            description:
                "ArrowTrade AG earns only 30 % of your actual profits — no fixed fees, no subscriptions.",
        },
    ];

    return (
        <section id='features' className='py-24 relative overflow-hidden'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12'>
                    <div className='flex items-center justify-center mb-4 gap-2'>
                        <Puzzle size={40} className='text-primary my-0' />
                        <h2 className='text-3xl md:text-5xl font-bold text-gradient'>
                            Key Features
                        </h2>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in animate-delay-200 mb-12'>
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            index={index}
                        />
                    ))}
                </div>

                <div className='text-center'>
                    <Button
                        variant='outline'
                        className='border-primary/30 hover:bg-primary/5 text-primary hover:text-primary px-10 py-6 text-lg font-semibold rounded-xl'
                        asChild
                    >
                        <a href={FEATURES_PAGE_LINK}>Explore All Features</a>
                    </Button>
                </div>
            </div>

            {/* Background elements */}
            <div className='absolute top-1/2 left-1/4 -z-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]'></div>
            <div className='absolute bottom-0 right-0 -z-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]'></div>

            {/* Floating elements */}
            <div className='absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full animate-float'></div>
            <div
                className='absolute bottom-20 right-10 w-6 h-6 bg-primary/20 rounded-full animate-float'
                style={{ animationDelay: "1s" }}
            ></div>
            <div
                className='absolute top-1/2 right-1/4 w-3 h-3 bg-primary/40 rounded-full animate-float'
                style={{ animationDelay: "2s" }}
            ></div>
        </section>
    );
};

export default FeaturesSection;
