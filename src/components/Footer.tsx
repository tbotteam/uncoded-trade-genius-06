import { Link } from "react-router-dom";
import { BINANCE_PAY_LINK, BTC_ECHO_LINK, TRUSTPILOT_LINK } from "@/constants/links";
import { Star, ExternalLink } from "lucide-react";

const Footer = () => {
    return (
        <footer className='py-12 relative overflow-hidden bg-gradient-to-b from-background to-secondary/30'>
            <div className='container mx-auto px-4'>
                <div className='border-t border-border pt-8'>
                    {/* Main Content */}
                    <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12'>
                        {/* Logo & Company Info */}
                        <div className='flex flex-col items-center md:items-start text-center md:text-left space-y-3 md:flex-[1.4]'>
                            <Link to='/' className='inline-flex items-center group'>
                                <div className='w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center'>
                                    <div className='w-6 h-6 rounded-full bg-primary animate-pulse' />
                                </div>
                                <span className='font-bold text-xl ml-2'>
                                    unCoded
                                </span>
                            </Link>
                            <p className='text-sm text-foreground/70 leading-relaxed'>
                                unCoded is developed and operated by <span className='font-semibold'>ArrowTrade AG</span>, Brig (Switzerland). <br />
                                All trading runs via the official Binance API. <span className='text-primary'>No custody · No deposits · No financial advice.</span>
                            </p>
                        </div>

                        {/* Partners & Mentions */}
                        <div className='flex flex-col items-center md:items-end text-center md:text-right space-y-3 md:flex-[1]'>
                            <h4 className='font-semibold text-foreground text-sm'>Partners & Mentions</h4>
                            <div className='flex flex-wrap justify-center md:justify-end gap-3'>
                                <a
                                    href='https://arrowtrade.ch'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs text-foreground/80 hover:bg-primary/20 hover:text-primary transition-all group'
                                >
                                    Powered by ArrowTrade AG
                                    <ExternalLink className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                                </a>
                                <a
                                    href={TRUSTPILOT_LINK}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs text-foreground/80 hover:bg-primary/20 hover:text-primary transition-all group'
                                >
                                    <Star className='w-3 h-3 fill-primary text-primary' />
                                    Trustpilot
                                </a>
                                <a
                                    href={BINANCE_PAY_LINK}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs text-foreground/80 hover:bg-primary/20 hover:text-primary transition-all group'
                                >
                                    Binance Pay
                                </a>
                                <a
                                    href={BTC_ECHO_LINK}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs text-foreground/80 hover:bg-primary/20 hover:text-primary transition-all group'
                                >
                                    BTC-Echo Feature
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <div className='absolute -bottom-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10'></div>
            <div className='absolute -top-20 left-20 w-60 h-60 bg-primary/5 rounded-full blur-[80px] -z-10'></div>
        </footer>
    );
};

export default Footer;
