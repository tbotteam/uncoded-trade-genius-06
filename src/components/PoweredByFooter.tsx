import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='py-12 relative overflow-hidden'>
            <div className='container mx-auto px-4'>
                <div className='border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center'>
                    <div>
                        <Link to='/' className='flex items-center group mb-1'>
                            <div className='w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center'>
                                <div className='w-6 h-6 rounded-full bg-primary animate-pulse' />
                            </div>
                            <span className='font-bold text-xl ml-1'>
                                unCoded
                            </span>
                        </Link>
                    </div>
                    <div className='mb-4 md:mb-0 text-foreground/60 text-sm'>
                        <span className='mr-2'>
                            Powered By{" "}
                            <a
                                href='https://google.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white font-semibold inline-flex items-center'
                            >
                                unCoded
                                <span className='w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center'>
                                    <span className='w-2.5 h-2.5 rounded-full bg-primary animate-pulse' />
                                </span>
                            </a>
                        </span>
                        © 2025 unCoded. All rights reserved.
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
