import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Gift, PieChart, Wallet, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { AFFILIATE_PAGE_LINKS } from "@/constants/links";

const Affiliate = () => {
    return (
        <div className='min-h-screen flex flex-col relative overflow-hidden'>
            {/* Background elements */}
            <div
                className='absolute inset-0 hero-gradient opacity-70 z-0'
                style={{ height: "60vh" }}
            ></div>
            <div className='absolute top-0 left-0 right-0 h-[40vh] grid-pattern opacity-5 z-0'></div>

            {/* Reduced floating elements */}
            <motion.div
                className='absolute top-[20%] right-[10%] w-16 h-16 rounded-full bg-primary/5 z-0'
                animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className='absolute top-[50%] left-[5%] w-20 h-20 rounded-full bg-primary/3 z-0'
                animate={{
                    y: [0, 15, 0],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Coin elements - smaller and more subtle */}
            <motion.div
                className='absolute top-[15%] left-[15%] w-10 h-10 rounded-full bg-primary shadow-[0_0_10px_rgba(255,184,0,0.3)] z-0'
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                <div className='w-full h-full flex items-center justify-center text-primary-foreground font-bold'>
                    $
                </div>
            </motion.div>

            <motion.div
                className='absolute bottom-[25%] left-[8%] w-8 h-8 rounded-full bg-primary shadow-[0_0_10px_rgba(255,184,0,0.3)] z-0'
                initial={{ rotate: 0 }}
                animate={{ rotate: -360 }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                <div className='w-full h-full flex items-center justify-center text-primary-foreground font-bold'>
                    %
                </div>
            </motion.div>

            <Navbar />
            <main className='flex-grow mt-24 relative z-10'>
                <section className='container mx-auto px-4 py-12'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-center mb-16 relative'
                    >
                        {/* Less intense glow behind title */}
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary/10 blur-2xl'></div>

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative glow bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-spark'>
                            Affiliate Program
                        </h1>
                        <p className='text-xl text-muted-foreground max-w-2xl mx-auto mb-8'>
                            Earn 10% commission on every top-up your referrals
                            make. It's simple, transparent, and profitable.
                        </p>
                        <div className='flex flex-wrap justify-center gap-4'>
                            <Button
                                asChild
                                className='bg-primary hover:bg-primary text-primary-foreground rounded-lg px-6 py-5 text-base font-medium relative group overflow-hidden'
                            >
                                <Link to={AFFILIATE_PAGE_LINKS.JOIN_NOW}>
                                    <span className='absolute inset-0 w-0 bg-white/15 transition-all duration-500 ease-in-out group-hover:w-full'></span>
                                    <span className='relative flex items-center'>
                                        Join Now
                                        <ArrowRight
                                            size={14}
                                            className='ml-2 group-hover:translate-x-1 transition-transform duration-500'
                                        />
                                    </span>
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant='outline'
                                className='border-primary/30 hover:bg-primary/5 text-primary hover:text-primary rounded-lg px-6 py-5 text-base font-medium group relative overflow-hidden'
                            >
                                <Link to={AFFILIATE_PAGE_LINKS.LEARN_MORE}>
                                    <span className='absolute inset-0 w-0 bg-primary/5 transition-all duration-500 ease-in-out group-hover:w-full'></span>
                                    <span className='relative flex items-center z-10'>
                                        <span className='relative overflow-hidden'>
                                            Learn More
                                        </span>
                                        <ArrowRight
                                            size={14}
                                            className='ml-2 transition-transform group-hover:translate-x-1 duration-500'
                                        />
                                    </span>
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 relative'>
                        {/* Connection line between columns */}
                        <div className='hidden md:block absolute top-1/2 left-1/2 w-20 h-[2px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent'></div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className='relative z-10'
                        >
                            <div className='absolute -top-10 -left-10 w-20 h-20 bg-primary/5 rounded-full blur-2xl'></div>
                            <h2 className='text-3xl font-bold mb-6 text-gradient'>
                                How Our Affiliate Program Works
                            </h2>
                            <p className='text-lg text-muted-foreground mb-8'>
                                Our affiliate program offers a straightforward
                                way to earn passive income by referring users to
                                our platform.
                            </p>

                            <ul className='space-y-4'>
                                <li className='flex gap-3 items-start bg-card/40 backdrop-blur-sm p-4 rounded-lg border border-primary/10 hover:border-primary/20 transition-all'>
                                    <span className='bg-primary/10 p-2 rounded-full'>
                                        <Gift className='h-5 w-5 text-primary animate-spark' />
                                    </span>
                                    <div>
                                        <h3 className='font-semibold'>
                                            10% Commission
                                        </h3>
                                        <p className='text-muted-foreground'>
                                            Earn 10% of every license token
                                            top-up your referrals make.
                                        </p>
                                    </div>
                                </li>
                                <li className='flex gap-3 items-start bg-card/40 backdrop-blur-sm p-4 rounded-lg border border-primary/10 hover:border-primary/20 transition-all'>
                                    <span className='bg-primary/10 p-2 rounded-full'>
                                        <Zap className='h-5 w-5 text-primary animate-spark' />
                                    </span>
                                    <div>
                                        <h3 className='font-semibold'>
                                            User Benefit
                                        </h3>
                                        <p className='text-muted-foreground'>
                                            Your referrals pay 20% in fees
                                            instead of the standard 30%.
                                        </p>
                                    </div>
                                </li>
                                <li className='flex gap-3 items-start bg-card/40 backdrop-blur-sm p-4 rounded-lg border border-primary/10 hover:border-primary/20 transition-all'>
                                    <span className='bg-primary/10 p-2 rounded-full'>
                                        <Wallet className='h-5 w-5 text-primary animate-spark' />
                                    </span>
                                    <div>
                                        <h3 className='font-semibold'>
                                            Passive Income
                                        </h3>
                                        <p className='text-muted-foreground'>
                                            Continue earning as long as your
                                            referrals use our platform.
                                        </p>
                                    </div>
                                </li>
                                <li className='flex gap-3 items-start bg-card/40 backdrop-blur-sm p-4 rounded-lg border border-primary/10 hover:border-primary/20 transition-all'>
                                    <span className='bg-primary/10 p-2 rounded-full'>
                                        <PieChart className='h-5 w-5 text-primary animate-spark' />
                                    </span>
                                    <div>
                                        <h3 className='font-semibold'>
                                            Real-time Tracking
                                        </h3>
                                        <p className='text-muted-foreground'>
                                            Monitor your earnings and referral
                                            activity in your dashboard.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='flex items-center justify-center relative z-10'
                        >
                            <div className='absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl'></div>
                            <Card className='w-full glass-card animate-float shadow-lg border-primary/20 relative overflow-hidden'>
                                <div className='absolute -right-4 -top-4 w-24 h-24 bg-primary/20 blur-xl rounded-full'></div>
                                <CardHeader>
                                    <CardTitle>Example Calculation</CardTitle>
                                    <CardDescription>
                                        See how much you can earn
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className='space-y-4'>
                                    <div className='p-4 bg-primary/5 rounded-lg'>
                                        <p className='font-medium'>
                                            If your referral makes $1,000 in
                                            profit:
                                        </p>
                                        <ul className='mt-2 space-y-2'>
                                            <li className='flex justify-between'>
                                                <span className='text-muted-foreground'>
                                                    Fee at 20% (with referral)
                                                </span>
                                                <span className='font-medium'>
                                                    $200
                                                </span>
                                            </li>
                                            <li className='flex justify-between'>
                                                <span className='text-muted-foreground'>
                                                    License tokens needed
                                                </span>
                                                <span className='font-medium'>
                                                    200 tokens
                                                </span>
                                            </li>
                                            <li className='flex justify-between border-t pt-2 mt-2'>
                                                <span>
                                                    Your commission (10%)
                                                </span>
                                                <span className='font-bold text-primary'>
                                                    20 tokens
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='p-4 bg-primary/5 rounded-lg'>
                                        <p className='font-medium'>
                                            With 10 active referrals:
                                        </p>
                                        <ul className='mt-2 space-y-2'>
                                            <li className='flex justify-between'>
                                                <span className='text-muted-foreground'>
                                                    If each makes $1,000 profit
                                                </span>
                                                <span className='font-medium'>
                                                    2,000 tokens used
                                                </span>
                                            </li>
                                            <li className='flex justify-between border-t pt-2 mt-2'>
                                                <span>
                                                    Your total commission
                                                </span>
                                                <span className='font-bold text-primary'>
                                                    200 tokens
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        className='w-full animate-pulse-glow py-6 text-md group relative overflow-hidden'
                                        asChild
                                    >
                                        <Link
                                            to={
                                                AFFILIATE_PAGE_LINKS.START_REFERRING
                                            }
                                        >
                                            Start Referring Now
                                            <Zap className='h-4 w-4 group-hover:animate-bounce transition-transform duration-500' />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='text-center max-w-2xl mx-auto mb-12 relative'
                    >
                        <div className='absolute inset-0 bg-primary/5 blur-3xl rounded-full'></div>
                        <h2 className='text-3xl font-bold mb-6 relative text-gradient'>
                            Ready to Get Started?
                        </h2>
                        <p className='text-lg text-muted-foreground mb-8 relative'>
                            Join our affiliate program today and start earning
                            commission on every referral. It's free to join and
                            easy to get started.
                        </p>
                        <Button
                            size='lg'
                            className='bg-primary hover:bg-primary text-primary-foreground rounded-lg px-16 py-6 text-md font-medium relative group overflow-hidden animate-pulse-glow'
                            asChild
                        >
                            <Link to={AFFILIATE_PAGE_LINKS.SALES_EMAIL}>
                                <span className='absolute inset-0 w-0 bg-white/15 transition-all duration-500 ease-in-out group-hover:w-full'></span>
                                <span className='relative flex items-center'>
                                    Contact Sales{" "}
                                    <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-500' />
                                </span>
                            </Link>
                        </Button>
                    </motion.div>
                </section>
            </main>
            <Footer />

            <div id='cursor-glow'></div>
        </div>
    );
};

export default Affiliate;
