import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Wallet,
    BadgeDollarSign,
    Coins,
    Receipt,
    CreditCard,
    Bitcoin,
    ExternalLink,
    Users,
    PercentIcon,
    ShieldCheck,
    Zap,
    Info,
    Calculator,
    ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PiTelegramLogo } from "react-icons/pi";
import { PRICING_PAGE_LINKS, TELEGRAM_LINK, UNCODED_BOT_LINK } from "@/constants/links";

const PricingPage = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Animation variants
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

    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        },
    };

    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            {/* Grid pattern background */}
            <div className='absolute inset-0 grid-pattern opacity-20'></div>

            <div
                className='absolute inset-0 hero-gradient z-0'
                style={{ height: "60vh" }}
            ></div>
            <Navbar />

            {/* Hero section */}
            <section className='pt-32 pb-20 relative'>
                <div className='container mx-auto px-4'>
                    <motion.div
                        className='max-w-4xl mx-auto text-center'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 glow bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-spark'>
                            Profit-Sharing Licensing
                        </h1>
                        <p className='text-xl md:text-2xl text-foreground/80 mb-12'>
                            Only pay for what you earn - a revolutionary
                            approach to trading software
                        </p>
                    </motion.div>
                </div>

                <div className='absolute top-0 left-0 w-full h-full overflow-hidden -z-10'>
                    {[...Array(16)].map((_, i) => (
                        <motion.div
                            key={i}
                            className='floating-coin absolute opacity-20'
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                transform: `scale(${
                                    0.5 + Math.random() * 0.5
                                })`,
                            }}
                            animate={floatingAnimation}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                delay: Math.random() * 2,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        >
                            <Bitcoin className='text-primary w-10 h-10' />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Main pricing model */}
            <section className='py-16 relative'>
                <div className='container mx-auto px-4'>
                    <motion.div
                        className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'
                        variants={containerVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                    >
                        {/* Left side: Pricing info */}
                        <motion.div
                            variants={itemVariants}
                            className='space-y-8'
                        >
                            <div className='flex items-center gap-3'>
                                <div className='p-3 bg-primary/10 rounded-xl'>
                                    <BadgeDollarSign className='w-7 h-7 text-primary' />
                                </div>
                                <h2 className='text-2xl md:text-3xl font-bold text-gradient'>
                                    Profit-Sharing Model
                                </h2>
                            </div>

                            <p className='text-lg text-foreground/80'>
                                DecodedBeta operates on a profit-sharing
                                licensing model. Users preload a license
                                balance, and only a percentage of the profit
                                from each successful trade is deducted.
                            </p>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <motion.div
                                    className='flex items-start gap-4 p-4 rounded-xl bg-card/20 backdrop-blur-sm border border-primary/5 hover:border-primary/20 transition-all'
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -5,
                                        boxShadow:
                                            "0 10px 30px -15px rgba(255, 193, 7, 0.2)",
                                    }}
                                >
                                    <div className='p-2 bg-primary/10 rounded-lg mt-1'>
                                        <Coins className='w-5 h-5 text-primary' />
                                    </div>
                                    <div>
                                        <h3 className='font-semibold text-lg mb-1'>
                                            Only Pay for Success
                                        </h3>
                                        <p className='text-foreground/70 text-sm'>
                                            Fees only when profitable. No
                                            profits, no fees.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className='flex items-start gap-4 p-4 rounded-xl bg-card/20 backdrop-blur-sm border border-primary/5 hover:border-primary/20 transition-all'
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -5,
                                        boxShadow:
                                            "0 10px 30px -15px rgba(255, 193, 7, 0.2)",
                                    }}
                                >
                                    <div className='p-2 bg-primary/10 rounded-lg mt-1'>
                                        <Wallet className='w-5 h-5 text-primary' />
                                    </div>
                                    <div>
                                        <h3 className='font-semibold text-lg mb-1'>
                                            Transparent Tracking
                                        </h3>
                                        <p className='text-foreground/70 text-sm'>
                                            Monitor your license in real-time
                                            with detailed logs.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className='flex items-start gap-4 p-4 rounded-xl bg-card/20 backdrop-blur-sm border border-primary/5 hover:border-primary/20 transition-all'
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -5,
                                        boxShadow:
                                            "0 10px 30px -15px rgba(255, 193, 7, 0.2)",
                                    }}
                                >
                                    <div className='p-2 bg-primary/10 rounded-lg mt-1'>
                                        <Receipt className='w-5 h-5 text-primary' />
                                    </div>
                                    <div>
                                        <h3 className='font-semibold text-lg mb-1'>
                                            Flexible Balance
                                        </h3>
                                        <p className='text-foreground/70 text-sm'>
                                            Load balance as needed with no
                                            expiry date.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className='flex items-start gap-4 p-4 rounded-xl bg-card/20 backdrop-blur-sm border border-primary/5 hover:border-primary/20 transition-all'
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -5,
                                        boxShadow:
                                            "0 10px 30px -15px rgba(255, 193, 7, 0.2)",
                                    }}
                                >
                                    <div className='p-2 bg-primary/10 rounded-lg mt-1'>
                                        <ShieldCheck className='w-5 h-5 text-primary' />
                                    </div>
                                    <div>
                                        <h3 className='font-semibold text-lg mb-1'>
                                            Secure Payments
                                        </h3>
                                        <p className='text-foreground/70 text-sm'>
                                            Integrated with Binance Pay for safe
                                            transactions.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            <div className='pt-4 flex flex-col items-center md:items-start text-center md:text-left'>
                                <Link
                                    to={PRICING_PAGE_LINKS.LEARN_MORE}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-block'
                                >
                                    <Button className='bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg h-auto rounded-xl font-medium group'>
                                        Learn More
                                        <ArrowRight className='group-hover:translate-x-1 transition-transform duration-500' />
                                    </Button>
                                </Link>

                                <div className='mt-4 flex items-center text-sm text-muted-foreground justify-center md:justify-start'>
                                    <Info className='w-4 h-4 mr-2' />
                                    <span>Don't have a Binance account? </span>
                                    <a
                                        href={PRICING_PAGE_LINKS.CREATE_BINANCE_ACCOUNT}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-primary ml-1 inline-flex items-center hover:underline'
                                    >
                                        Create one here
                                        <ExternalLink className='w-3 h-3 ml-1' />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right side: Visual pricing card */}
                        <motion.div
                            variants={itemVariants}
                            className='relative'
                        >
                            <motion.div
                                className='glass-card p-8 rounded-2xl border border-primary/20 overflow-hidden relative'
                                whileHover={{
                                    boxShadow:
                                        "0 0 30px 5px rgba(255, 193, 7, 0.15)",
                                    scale: 1.02,
                                    borderColor: "rgba(255, 193, 7, 0.3)",
                                }}
                                transition={{ duration: 0.3 }}
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}
                            >
                                {/* Background glow effect */}
                                <div className='absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl'></div>

                                <div className='relative z-10'>
                                    <div className='flex justify-center mb-6'>
                                        <motion.div
                                            className='w-20 h-20 flex items-center justify-center bg-primary/20 rounded-full'
                                            animate={
                                                isHovered
                                                    ? {
                                                          scale: [1, 1.1, 1],
                                                          rotate: 5,
                                                      }
                                                    : {}
                                            }
                                            transition={{
                                                duration: 1.5,
                                                repeat: isHovered
                                                    ? Infinity
                                                    : 0,
                                            }}
                                        >
                                            <CreditCard className='w-10 h-10 text-primary' />
                                        </motion.div>
                                    </div>

                                    <h3 className='text-2xl font-bold text-center mb-2'>
                                        Profit-Sharing License
                                    </h3>

                                    {/* Tabbed calculation example */}
                                    <div className='mb-6'>
                                        <Tabs
                                            defaultValue='standard'
                                            className='w-full'
                                        >
                                            <TabsList className='grid grid-cols-2 mb-4 w-full'>
                                                <TabsTrigger
                                                    value='standard'
                                                    className='flex items-center gap-2'
                                                >
                                                    <Users className='w-4 h-4' />
                                                    <span>Standard</span>
                                                </TabsTrigger>
                                                <TabsTrigger
                                                    value='referral'
                                                    className='flex items-center gap-2'
                                                >
                                                    <PercentIcon className='w-4 h-4' />
                                                    <span>Referral</span>
                                                </TabsTrigger>
                                            </TabsList>

                                            <TabsContent value='standard'>
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{
                                                        duration: 0.5,
                                                    }}
                                                    className='bg-background/30 rounded-xl p-6 backdrop-blur-sm'
                                                >
                                                    <div className='flex items-center gap-2 mb-4'>
                                                        <Calculator className='w-5 h-5 text-primary' />
                                                        <p className='font-medium'>
                                                            Standard
                                                            Registration:
                                                        </p>
                                                    </div>
                                                    <div className='space-y-2 text-foreground/70'>
                                                        <div className='flex justify-between'>
                                                            <span>
                                                                Trade profit:
                                                            </span>
                                                            <span className='font-medium'>
                                                                $100
                                                            </span>
                                                        </div>
                                                        <div className='flex justify-between'>
                                                            <span>
                                                                Fee rate:
                                                            </span>
                                                            <span className='font-medium'>
                                                                30%
                                                            </span>
                                                        </div>
                                                        <div className='flex justify-between'>
                                                            <span>
                                                                Fee amount:
                                                            </span>
                                                            <span className='font-medium'>
                                                                $30
                                                            </span>
                                                        </div>
                                                        <div className='border-t border-primary/10 pt-2 mt-2 flex justify-between font-medium'>
                                                            <span>
                                                                Your take-home:
                                                            </span>
                                                            <motion.span
                                                                className='text-primary'
                                                                animate={{
                                                                    scale: [
                                                                        1, 1.05,
                                                                        1,
                                                                    ],
                                                                }}
                                                                transition={{
                                                                    duration: 0.5,
                                                                    repeat: 3,
                                                                }}
                                                            >
                                                                $70
                                                            </motion.span>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </TabsContent>

                                            <TabsContent value='referral'>
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{
                                                        duration: 0.5,
                                                    }}
                                                    className='bg-background/30 rounded-xl p-6 backdrop-blur-sm'
                                                >
                                                    <div className='flex items-center gap-2 mb-4'>
                                                        <Calculator className='w-5 h-5 text-primary' />
                                                        <p className='font-medium'>
                                                            Referral
                                                            Registration:
                                                        </p>
                                                    </div>
                                                    <div className='space-y-2 text-foreground/70'>
                                                        <div className='flex justify-between'>
                                                            <span>
                                                                Trade profit:
                                                            </span>
                                                            <span className='font-medium'>
                                                                $100
                                                            </span>
                                                        </div>
                                                        <div className='flex justify-between'>
                                                            <span>
                                                                Fee rate:
                                                            </span>
                                                            <span className='font-medium text-primary'>
                                                                20%
                                                            </span>
                                                        </div>
                                                        <div className='flex justify-between'>
                                                            <span>
                                                                Fee amount:
                                                            </span>
                                                            <span className='font-medium text-primary'>
                                                                $20
                                                            </span>
                                                        </div>
                                                        <div className='border-t border-primary/10 pt-2 mt-2 flex justify-between font-medium'>
                                                            <span>
                                                                Your take-home:
                                                            </span>
                                                            <motion.span
                                                                className='text-primary'
                                                                animate={{
                                                                    scale: [
                                                                        1, 1.05,
                                                                        1,
                                                                    ],
                                                                }}
                                                                transition={{
                                                                    duration: 0.5,
                                                                    repeat: 3,
                                                                }}
                                                            >
                                                                $80
                                                            </motion.span>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </TabsContent>
                                        </Tabs>
                                    </div>

                                    <ul className='space-y-3 mb-6'>
                                        <motion.li
                                            className='flex items-center gap-3'
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <div className='text-primary'>
                                                ✓
                                            </div>
                                            <span>
                                                Basic setup & configuration free
                                            </span>
                                        </motion.li>
                                        <motion.li
                                            className='flex items-center gap-3'
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <div className='text-primary'>
                                                ✓
                                            </div>
                                            <span>
                                                Real-time balance monitoring
                                            </span>
                                        </motion.li>
                                        <motion.li
                                            className='flex items-center gap-3'
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            <div className='text-primary'>
                                                ✓
                                            </div>
                                            <span>
                                                Low balance auto-notifications
                                            </span>
                                        </motion.li>
                                        <motion.li
                                            className='flex items-center gap-3'
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            <div className='text-primary'>
                                                ✓
                                            </div>
                                            <span>
                                                Secure Binance Pay integration
                                            </span>
                                        </motion.li>
                                    </ul>

                                    <a
                                        href={TELEGRAM_LINK}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='w-full'
                                    >
                                        <Button className='w-full bg-primary hover:bg-primary text-primary-foreground rounded-lg px-8 py-6 text-lg font-medium relative group overflow-hidden h-auto'>
                                            <span className='absolute inset-0 w-0 bg-white/15 transition-all duration-500 ease-in-out group-hover:w-full'></span>
                                            <span className='relative flex items-center justify-center gap-2'>
                                                Join Telegram Group
                                                <PiTelegramLogo
                                                    style={{
                                                        height: "1.25rem",
                                                        width: "1.25rem",
                                                    }}
                                                    className='group-hover:translate-x-1 transition-transform duration-500'
                                                />
                                            </span>
                                        </Button>
                                    </a>
                                </div>
                            </motion.div>

                            {/* Decorative elements */}
                            <div className='absolute -bottom-6 -left-6 w-12 h-12 bg-primary/30 rounded-full blur-xl'></div>
                            <div className='absolute top-1/2 -right-6 w-12 h-12 bg-primary/20 rounded-full blur-lg'></div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* How It Works */}
            <section className='py-16 relative overflow-hidden bg-secondary/5'>
                <div className='container mx-auto px-4'>
                    <motion.h2
                        className='text-3xl font-bold text-center mb-12 text-gradient'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        How It Works
                    </motion.h2>

                    <div className='max-w-4xl mx-auto'>
                        <motion.div
                            className='grid grid-cols-1 md:grid-cols-3 gap-6'
                            variants={containerVariants}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className='bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-primary/10 flex flex-col items-center text-center'
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    boxShadow:
                                        "0 10px 30px -15px rgba(255, 193, 7, 0.2)",
                                }}
                            >
                                <motion.div
                                    className='w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4'
                                    whileHover={{
                                        y: -5,
                                        boxShadow:
                                            "0 10px 30px -15px rgba(255, 193, 7, 0.2)",
                                    }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <Wallet className='text-primary w-8 h-8' />
                                </motion.div>
                                <h3 className='text-xl font-bold mb-2'>
                                    1. Load Balance
                                </h3>
                                <p className='text-foreground/70'>
                                    Preload your licensing balance via Binance
                                    Pay to start trading.
                                </p>
                            </motion.div>

                            <motion.div
                                className='bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-primary/10 flex flex-col items-center text-center'
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    boxShadow:
                                        "0 10px 30px -15px rgba(255, 193, 7, 0.2)",
                                }}
                            >
                                <motion.div
                                    className='w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4'
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Zap className='text-primary w-8 h-8' />
                                </motion.div>
                                <h3 className='text-xl font-bold mb-2'>
                                    2. Trade Automatically
                                </h3>
                                <p className='text-foreground/70'>
                                    Let the bot execute trades based on market
                                    conditions.
                                </p>
                            </motion.div>

                            <motion.div
                                className='bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-primary/10 flex flex-col items-center text-center'
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    boxShadow:
                                        "0 10px 30px -15px rgba(255, 193, 7, 0.2)",
                                }}
                            >
                                <motion.div
                                    className='w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4'
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <PercentIcon className='text-primary w-8 h-8' />
                                </motion.div>
                                <h3 className='text-xl font-bold mb-2'>
                                    3. Pay From Profits
                                </h3>
                                <p className='text-foreground/70'>
                                    Only 30% (or 20% with referral) of profits
                                    are deducted for successful trades.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Background decoration */}
                <div className='absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl'></div>
                <div className='absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl'></div>
            </section>

            {/* FAQ Section */}
            <section className='py-12 bg-secondary/10 backdrop-blur-sm'>
                <div className='container mx-auto px-4'>
                    <motion.div
                        className='max-w-3xl mx-auto'
                        variants={containerVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className='text-2xl font-bold text-center mb-6 text-gradient'
                            variants={itemVariants}
                        >
                            Frequently Asked Questions
                        </motion.h2>

                        <div className='space-y-2'>
                            <Accordion
                                type='single'
                                collapsible
                                className='w-full'
                            >
                                <AccordionItem
                                    value='item-1'
                                    className='border-primary/10'
                                >
                                    <AccordionTrigger className='hover:text-primary py-2 text-left text-base'>
                                        How do I load my license balance?
                                    </AccordionTrigger>
                                    <AccordionContent className='text-foreground/70 text-sm'>
                                        Access the Binance Pay integration via
                                        our Telegram bot, send the desired
                                        amount to the specified address, and
                                        your license balance will update
                                        automatically.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem
                                    value='item-2'
                                    className='border-primary/10'
                                >
                                    <AccordionTrigger className='hover:text-primary py-2 text-left text-base'>
                                        What happens if my license balance runs
                                        out?
                                    </AccordionTrigger>
                                    <AccordionContent className='text-foreground/70 text-sm'>
                                        The bot will issue a warning
                                        notification and trading will pause
                                        after 24 hours. Simply reload your
                                        balance to resume operations.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem
                                    value='item-3'
                                    className='border-primary/10'
                                >
                                    <AccordionTrigger className='hover:text-primary py-2 text-left text-base'>
                                        How do I qualify for the referral
                                        discount?
                                    </AccordionTrigger>
                                    <AccordionContent className='text-foreground/70 text-sm'>
                                        Sign up using a referral link from an
                                        existing user. Your account will be
                                        automatically configured for the 20% fee
                                        rate (instead of 30%) for the lifetime
                                        of your account.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem
                                    value='item-4'
                                    className='border-primary/10'
                                >
                                    <AccordionTrigger className='hover:text-primary py-2 text-left text-base'>
                                        Are there any free features?
                                    </AccordionTrigger>
                                    <AccordionContent className='text-foreground/70 text-sm'>
                                        Yes, basic functionalities are available
                                        without a license balance for initial
                                        setup and configuration. However,
                                        trading requires an active license
                                        balance.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <section className='py-20 relative overflow-hidden'>
                <div className='container mx-auto px-4'>
                    <motion.div
                        className='max-w-4xl mx-auto text-center bg-card/40 backdrop-blur-sm rounded-3xl p-12 border border-primary/10 relative'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Glowing orbs */}
                        <div className='absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl'></div>
                        <div className='absolute -bottom-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-2xl'></div>

                        <motion.h2
                            className='text-3xl md:text-4xl font-bold mb-4 text-gradient'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Ready to Maximize Your Trading Profits?
                        </motion.h2>

                        <motion.p
                            className='text-xl text-foreground/80 mb-8'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Join our Telegram group today and experience the
                            power of intelligent automated trading.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className='flex flex-col sm:flex-row gap-4 justify-center'
                        >
                            <a
                                href={UNCODED_BOT_LINK}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-block'
                            >
                                <Button className='bg-primary hover:bg-primary text-primary-foreground rounded-lg px-8 py-6 text-lg font-medium relative group overflow-hidden '>
                                    <span className='absolute inset-0 w-0 bg-white/15 transition-all duration-500 ease-in-out group-hover:w-full'></span>
                                    <span className='relative flex items-center'>
Start your Trading Bot
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
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default PricingPage;
