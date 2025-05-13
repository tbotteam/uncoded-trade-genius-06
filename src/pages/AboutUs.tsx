import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Zap,
    Cpu,
    Users,
    BarChartBig,
    SlidersHorizontal,
    BookOpen,
    ArrowRight,
    GitFork,
    Award,
    Rocket,
    Brain,
    HelpCircle,
    Info,
} from "lucide-react";

const AboutUsPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    const cardHoverVariants = {
        hover: {
            y: -5,
            boxShadow: "0 10px 20px -5px rgba(255, 193, 7, 0.15)",
        },
    };

    const features = [
        {
            icon: <GitFork className='w-7 h-7 text-primary' />,
            title: "Decentralized and Self-Hosted",
            description:
                "Run the bot on your own server for full control and enhanced privacy. No third-party access to your data or trades.",
            subPoints: [
                "Full control: Complete ownership over trading activities.",
                "Enhanced privacy: No third party access.",
                "Independent operation: Not tied to any central platform.",
            ],
        },
        {
            icon: <BarChartBig className='w-7 h-7 text-primary' />,
            title: "High-Frequency Trading (HFT)",
            description:
                "Execute thousands of trades daily by leveraging microprice movements, ideal for high-volatility assets like PEPE/USDC.",
            subPoints: [
                "Maximize gains from volatile assets.",
                "Precision and speed in market fluctuations.",
            ],
        },
        {
            icon: <SlidersHorizontal className='w-7 h-7 text-primary' />,
            title: "Customizable Settings",
            description:
                "Adapt unCoded to your unique trading style with a wide range of parameters for risk management and strategy optimization.",
            subPoints: [
                "Fine-tune risk management.",
                "Adjust buy and sell thresholds.",
                "Optimize for specific market conditions.",
            ],
        },
        {
            icon: <ShieldCheck className='w-7 h-7 text-primary' />,
            title: "Transparent Licensing",
            description:
                "A straightforward model: load funds via Binance Pay, and a small percentage (30%) of profits from each trade is deducted.",
            subPoints: [
                "Load funds via Binance Pay.",
                "30% of profits deducted.",
                "No hidden fees or unnecessary costs.",
            ],
        },
    ];

    const whyUncodedPoints = [
        {
            icon: <Zap className='w-6 h-6 text-primary' />,
            title: "Designed for Volatility",
            description:
                "unCoded excels in volatile markets, making it ideal for high-risk, high-reward strategies.",
        },
        {
            icon: <Award className='w-6 h-6 text-primary' />,
            title: "Backed by Expertise",
            description:
                "Result of years of experience in bot trading and crypto markets, supported by community and insights from Aureum Victoria YouTube channel.",
        },
        {
            icon: <Cpu className='w-6 h-6 text-primary' />,
            title: "Flexibility and Freedom",
            description:
                "Whether you prefer aggressive short-term trades or a long-term approach, unCoded adapts to your needs.",
        },
    ];

    const whoIsItFor = [
        {
            icon: <Rocket className='w-6 h-6 text-primary' />,
            title: "Beginners",
            description:
                "Looking to automate trading without being tied to a central platform.",
        },
        {
            icon: <Brain className='w-6 h-6 text-primary' />,
            title: "Advanced Traders",
            description:
                "Seeking a highly customizable bot with powerful features.",
        },
        {
            icon: <Users className='w-6 h-6 text-primary' />,
            title: "Tech Enthusiasts",
            description:
                "Interested in running a decentralized trading solution.",
        },
    ];

    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            <div
                className='absolute inset-0 hero-gradient z-0'
                style={{ height: "60vh" }}
            ></div>
            <Navbar />

            {/* Hero Section */}
            <motion.section
                className='pt-32 pb-10 relative'
                variants={containerVariants}
                initial='hidden'
                animate='visible'
            >
                <div className='container mx-auto px-4 text-center'>
                    <motion.div
                        className='absolute top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/3'
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.02, 0.1, 0.02],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Info size={500} className='text-primary' />
                    </motion.div>
                    <motion.h1
                        className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 glow bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-spark'
                        variants={itemVariants}
                    >
                        About unCoded
                    </motion.h1>
                    <motion.p
                        className='text-xl text-foreground/80 mb-8 max-w-3xl mx-auto'
                        variants={itemVariants}
                    >
                        Welcome to unCoded, a cutting-edge trading bot designed
                        to revolutionize the way you approach cryptocurrency
                        trading. Built with a focus on decentralization,
                        customizability, and efficiency, unCoded offers a
                        trading solution tailored for both beginners and
                        advanced users.
                    </motion.p>
                </div>
            </motion.section>

            {/* What Makes unCoded Unique? Section */}
            <section className='py-16 lg:py-24 bg-background'>
                <div className='container mx-auto px-4'>
                    <motion.div
                        className='text-center mb-12 lg:mb-16'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-gradient mb-4'>
                            What Makes unCoded Unique?
                        </h2>
                    </motion.div>
                    <motion.div
                        className='grid md:grid-cols-2 gap-8'
                        variants={containerVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className='p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 shadow-lg hover:shadow-primary/20 transition-all duration-300 group hover:translate-y-[-8px]'
                                variants={itemVariants}
                                // whileHover='hover'
                            >
                                <motion.div variants={cardHoverVariants}>
                                    <div className='flex items-center mb-4'>
                                        <div className='p-3 bg-primary/10 rounded-lg mr-4'>
                                            {feature.icon}
                                        </div>
                                        <h3 className='text-xl font-semibold group-hover:text-primary transition-all duration-300'>
                                            {feature.title}
                                        </h3>
                                    </div>
                                    <p className='text-foreground/80 mb-3'>
                                        {feature.description}
                                    </p>
                                    <ul className='list-disc list-inside text-foreground/70 space-y-1 text-sm'>
                                        {feature.subPoints.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why unCoded? Section */}
            <section className='py-16 lg:py-24 hero-gradient-subtle'>
                <div className='container mx-auto px-4'>
                    <motion.div
                        className='text-center mb-12 lg:mb-16'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-gradient mb-4'>
                            Why Choose unCoded?
                        </h2>
                    </motion.div>
                    <motion.div
                        className='grid md:grid-cols-3 gap-8'
                        variants={containerVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                    >
                        {whyUncodedPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                className='p-6 rounded-xl bg-card/60 backdrop-blur-md border border-primary/15 shadow-md hover:shadow-primary/25 transition-all duration-300 flex flex-col items-center text-center group hover:translate-y-[-8px]'
                                variants={itemVariants}
                            >
                                <motion.div variants={cardHoverVariants}>
                                    <div className='p-3 bg-primary/10 rounded-full mb-4 inline-block'>
                                        {point.icon}
                                    </div>
                                    <h3 className='text-xl font-semibold mb-2 group-hover:text-primary transition-all duration-300'>
                                        {point.title}
                                    </h3>
                                    <p className='text-foreground/80'>
                                        {point.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Who is unCoded For? Section */}
            <section className='py-16 lg:py-24 bg-background'>
                <div className='container mx-auto px-4'>
                    <motion.div
                        className='text-center mb-12 lg:mb-16'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-gradient mb-4'>
                            Who is unCoded For?
                        </h2>
                    </motion.div>
                    <motion.div
                        className='grid md:grid-cols-3 gap-8'
                        variants={containerVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                    >
                        {whoIsItFor.map((target, index) => (
                            <motion.div
                                key={index}
                                className='p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 shadow-lg hover:shadow-primary/20 transition-all duration-300 group hover:translate-y-[-8px]'
                                variants={itemVariants}
                            >
                                <motion.div
                                    className='flex items-center mb-3'
                                    variants={cardHoverVariants}
                                >
                                    <div className='p-2 bg-primary/10 rounded-lg mr-3'>
                                        {target.icon}
                                    </div>
                                    <h3 className='text-lg font-semibold group-hover:text-primary transition-all duration-300'>
                                        {target.title}
                                    </h3>
                                </motion.div>
                                <p className='text-foreground/80'>
                                    {target.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className='py-20 bg-gradient-to-t from-background to-transparent'>
                <div className='container mx-auto px-4 text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <HelpCircle className='w-16 h-16 text-primary mx-auto mb-6' />
                        <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gradient'>
                            Ready to Dive Deeper?
                        </h2>
                        <p className='text-xl text-foreground/80 mb-10 max-w-2xl mx-auto'>
                            Explore our comprehensive documentation to learn how
                            to set up, configure, and optimize your unCoded bot
                            for maximum success.
                        </p>
                        <Link
                            to='https://uncoded-1.gitbook.io/uncoded-docs/introduction/aboutuncoded'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-block'
                        >
                            <Button className='bg-primary hover:bg-primary text-primary-foreground rounded-lg px-12 py-10 text-lg font-medium relative group overflow-hidden'>
                                <span className='absolute inset-0 w-0 bg-white/15 transition-all duration-500 ease-in-out group-hover:w-full'></span>
                                <span className='relative flex items-center'>
                                    View Documentation
                                    <BookOpen
                                        className='ml-2 group-hover:translate-x-1 transition-transform duration-500'
                                        style={{
                                            height: "1.25rem",
                                            width: "1.25rem",
                                        }}
                                    />
                                </span>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUsPage;
