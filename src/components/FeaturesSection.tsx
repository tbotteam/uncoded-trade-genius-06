import {
    Shield,
    Zap,
    Activity,
    TrendingUp,
    CircleDot,
    Puzzle,
} from "lucide-react";
import { useState, memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DOCS_LINK } from "@/constants/links";
import { motion } from "framer-motion";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
}

const FeatureCard = memo(({ icon, title, description, index }: FeatureCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="h-full"
        >
        <Card
            className={`glass-card rounded-xl overflow-hidden transition-all duration-500 transform h-full ${
                isHovered ? "scale-105 shadow-lg shadow-primary/20" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
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
        </motion.div>
    );
});

const FeaturesSection = () => {
    const features = [
        {
            icon: <Activity size={24} />,
            title: "Smart Micro-Trading Engine",
            description:
                "captures even the smallest market movements with thousands of trades per day, optimizing entries and exits automatically.",
        },
        {
            icon: <Shield size={24} />,
            title: "Individual Risk Management",
            description:
                "full control through flexible risk settings: define stop-loss levels, position sizes, and a smart rebuy function that allows the bot to react intelligently to falling prices — instead of buying blindly into a downtrend.",
        },
        {
            icon: <TrendingUp size={24} />,
            title: "Transparent Reporting",
            description:
                "see every trade, live profit & loss, and detailed performance analytics in real time.",
        },
        {
            icon: <CircleDot size={24} />,
            title: "Fair Profit-Sharing Model",
            description:
                "ArrowTrade AG earns only 30 % of your actual profits — no fixed fees, no subscriptions.",
        },
    ];

    return (
        <section id='features' className='py-24 relative overflow-hidden'>
            <div className='container mx-auto px-4'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className='text-center mb-12'
                >
                    <div className='flex items-center justify-center mb-4 gap-2'>
                        <Puzzle size={40} className='text-primary my-0' />
                        <h2 className='text-3xl md:text-5xl font-bold text-gradient'>
                            Key Features
                        </h2>
                    </div>
                </motion.div>

                <div className='grid md:grid-cols-2 gap-8 lg:gap-16 mb-12'>
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
                        <a href={DOCS_LINK}>Explore All Features</a>
                    </Button>
                </div>
            </div>

            {/* Background elements - Static for better performance */}
            <div className='absolute top-1/2 left-1/4 -z-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]'></div>
            <div className='absolute bottom-0 right-0 -z-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]'></div>
        </section>
    );
};

export default FeaturesSection;
