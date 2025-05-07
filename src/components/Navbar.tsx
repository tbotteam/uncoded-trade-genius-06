import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { PiTelegramLogo } from "react-icons/pi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "backdrop-blur-xl bg-background/90 border-b border-primary/10 py-2"
                    : "bg-transparent py-4"
            }`}
        >
            <div className='container mx-auto flex items-center justify-between px-4'>
                <Link to='/' className='flex items-center group'>
                    <div className='w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center'>
                        <div className='w-6 h-6 rounded-full bg-primary animate-pulse' />
                    </div>
                    {/* <div className='w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2 group-hover:animate-pulse-glow'>
                        <Sparkles className='w-4 h-4 text-primary-foreground' />
                    </div> */}
                    <span className='ml-2 text-primary font-bold text-xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent group-hover:from-primary/80 group-hover:to-primary transition-all duration-300'>
                        unCoded
                    </span>
                </Link>

                <nav className='hidden md:block'>
                    <ul className='flex space-x-8'>
                        <li>
                            <a
                                href='#features'
                                className='relative text-foreground/80 hover:text-primary transition-colors overflow-hidden group'
                            >
                                <span>Features</span>
                                <span className='absolute bottom-0 left-0 w-full h-[1px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300'></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href='#metrics'
                                className='relative text-foreground/80 hover:text-primary transition-colors overflow-hidden group'
                            >
                                <span>Metrics</span>
                                <span className='absolute bottom-0 left-0 w-full h-[1px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300'></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://uncoded-1.gitbook.io/uncoded-docs'
                                className='relative text-foreground/80 hover:text-primary transition-colors overflow-hidden group'
                            >
                                <span>Docs</span>
                                <span className='absolute bottom-0 left-0 w-full h-[1px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300'></span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className='hidden md:block'>
                    <Button
                        variant='outline'
                        className='border-primary/30 hover:bg-primary/10 text-primary hover:text-primary rounded-lg font-medium group relative transition-colors duration-300'
                    >
                        <a
                            href='https://bit.ly/AuV-Telegram'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='relative overflow-hidden'
                        >
                            <span>Join Telegram</span>
                            <span className='absolute bottom-0 left-0 w-full h-[1px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300'></span>
                        </a>
                        <PiTelegramLogo
                            style={{
                                height: "0.95rem",
                                width: "0.95rem",
                            }}
                            className='group-hover:animate-bounce-slow'
                        />
                    </Button>
                </div>

                <button
                    className='md:hidden p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-md z-40 transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className='container mx-auto px-4 py-8'>
                    <div className='flex justify-end mb-8'>
                        <button
                            className='p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary'
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <nav>
                        <ul className='flex flex-col space-y-6 items-center'>
                            <li>
                                <a
                                    href='#features'
                                    className='text-foreground/80 hover:text-primary transition-colors text-xl'
                                    onClick={() => setIsOpen(false)}
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#metrics'
                                    className='text-foreground/80 hover:text-primary transition-colors text-xl'
                                    onClick={() => setIsOpen(false)}
                                >
                                    Metrics
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://bit.ly/AuV-Telegram'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-foreground/80 hover:text-primary transition-colors text-xl'
                                >
                                    Join Telegram
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
