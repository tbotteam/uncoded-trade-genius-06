import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    Menu,
    X,
    Users,
    LifeBuoy,
    HelpCircle,
    ChevronDown,
} from "lucide-react";
import { PiTelegramLogo } from "react-icons/pi";
import { TELEGRAM_LINK } from "@/constants/links";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [companyMenuOpen, setCompanyMenuOpen] = useState(false);
    const [isCompanyMenuVisible, setIsCompanyMenuVisible] = useState(false);
    const [companyMenuAnimationClass, setCompanyMenuAnimationClass] =
        useState("");
    const companyMenuRef = useRef<HTMLLIElement>(null);

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

    // Handle click outside to close company menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                companyMenuOpen &&
                companyMenuRef.current &&
                !companyMenuRef.current.contains(event.target as Node)
            ) {
                setCompanyMenuAnimationClass("animate-slide-up-fade");
                setCompanyMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [companyMenuOpen]);

    // Toggle company menu
    const toggleCompanyMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!companyMenuOpen) {
            setIsCompanyMenuVisible(true);
            setCompanyMenuAnimationClass("animate-slide-down-fade");
            setCompanyMenuOpen(true);
        } else {
            setCompanyMenuAnimationClass("animate-slide-up-fade");
            setCompanyMenuOpen(false);
        }
    };

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
                    <span className='ml-2 font-bold text-xl transition-all duration-300'>
                        unCoded
                    </span>
                </Link>

                <nav className='hidden md:block'>
                    <ul className='flex space-x-8'>
                        <li>
                            <a
                                href='/#features'
                                className='relative text-foreground/80 hover:text-primary transition-colors overflow-hidden group'
                            >
                                <span>Features</span>
                                <span className='absolute bottom-0 left-0 w-full h-[1px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300'></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href='/#metrics'
                                className='relative text-foreground/80 hover:text-primary transition-colors overflow-hidden group'
                            >
                                <span>Metrics</span>
                                <span className='absolute bottom-0 left-0 w-full h-[1px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300'></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href='/pricing'
                                className='relative text-foreground/80 hover:text-primary transition-colors overflow-hidden group'
                            >
                                <span>Pricing</span>
                                <span className='absolute bottom-0 left-0 w-full h-[1px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300'></span>
                            </a>
                        </li>
                        <li ref={companyMenuRef} className='relative'>
                            <button
                                onClick={toggleCompanyMenu}
                                className='relative text-foreground/80 hover:text-primary transition-colors overflow-hidden group flex items-center gap-1'
                            >
                                <span>Company</span>
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-300 ${
                                        companyMenuOpen ? "rotate-180" : ""
                                    }`}
                                />
                                <span className='absolute bottom-0 left-0 w-full h-[1px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300'></span>
                            </button>

                            {/* Company dropdown menu */}
                            {isCompanyMenuVisible && (
                                <div
                                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[280px] bg-popover/95 backdrop-blur-sm border border-primary/10 rounded-lg shadow-lg p-4 z-50 ${companyMenuAnimationClass}`}
                                    onAnimationEnd={() => {
                                        if (
                                            companyMenuAnimationClass ===
                                            "animate-slide-up-fade"
                                        ) {
                                            setIsCompanyMenuVisible(false);
                                        }
                                    }}
                                >
                                    <div className='grid gap-4'>
                                        <Link
                                            to='/about'
                                            className='flex items-center gap-3 p-2 hover:bg-card-foreground/5 rounded-md transition-colors duration-200 group'
                                        >
                                            <div className='p-2 bg-primary/10 rounded-full'>
                                                <Users
                                                    size={20}
                                                    className='text-primary'
                                                />
                                            </div>
                                            <div className='flex flex-col'>
                                                <span className='font-medium group-hover:text-primary transition-all duration-200'>
                                                    About Us
                                                </span>
                                                <span className='text-xs text-muted-foreground'>
                                                    Our team and our mission
                                                </span>
                                            </div>
                                        </Link>
                                        <Link
                                            to='/affiliate'
                                            className='flex items-center gap-3 p-2 hover:bg-card-foreground/5 rounded-md transition-colors duration-200 group'
                                        >
                                            <div className='p-2 bg-primary/10 rounded-full'>
                                                <LifeBuoy
                                                    size={20}
                                                    className='text-primary'
                                                />
                                            </div>
                                            <div className='flex flex-col'>
                                                <span className='font-medium group-hover:text-primary transition-all duration-200'>
                                                    Affiliate Program
                                                </span>
                                                <span className='text-xs text-muted-foreground'>
                                                    Earn 10% commissions
                                                </span>
                                            </div>
                                        </Link>
                                        <a
                                            href={TELEGRAM_LINK}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='flex items-center gap-3 p-2 hover:bg-card-foreground/5 rounded-md group transition-all duration-200'
                                        >
                                            <div className='p-2 bg-primary/10 rounded-full'>
                                                <HelpCircle
                                                    size={20}
                                                    className='text-primary'
                                                />
                                            </div>
                                            <div className='flex flex-col'>
                                                <span className='font-medium group-hover:text-primary transition-all duration-200'>
                                                    Support
                                                </span>
                                                <span className='text-xs text-muted-foreground'>
                                                    Get help via Telegram
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            )}
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
                            href={TELEGRAM_LINK}
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
                                    href='/pricing'
                                    className='text-foreground/80 hover:text-primary transition-colors text-xl'
                                    onClick={() => setIsOpen(false)}
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <Link
                                    to='/about'
                                    className='text-foreground/80 hover:text-primary transition-colors text-xl'
                                    onClick={() => setIsOpen(false)}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/affiliate'
                                    className='text-foreground/80 hover:text-primary transition-colors text-xl'
                                    onClick={() => setIsOpen(false)}
                                >
                                    Affiliate
                                </Link>
                            </li>
                            <li>
                                <a
                                    href={TELEGRAM_LINK}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-foreground/80 hover:text-primary transition-colors text-xl'
                                >
                                    Support
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
