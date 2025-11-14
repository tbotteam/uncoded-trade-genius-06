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
    FileText,
} from "lucide-react";
import { PiTelegramLogo } from "react-icons/pi";
import { TELEGRAM_LINK, NAV_LINKS } from "@/constants/links";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [companyMenuOpen, setCompanyMenuOpen] = useState(false);
    const [isCompanyMenuVisible, setIsCompanyMenuVisible] = useState(false);
    const [companyMenuAnimationClass, setCompanyMenuAnimationClass] =
        useState("");
    const companyMenuRef = useRef<HTMLLIElement>(null);

    // Icon mapping helper
    const getIcon = (iconName: string) => {
        const icons: Record<string, React.ReactNode> = {
            Users: <Users size={20} className="text-primary" />,
            LifeBuoy: <LifeBuoy size={20} className="text-primary" />,
            FileText: <FileText size={20} className="text-primary" />,
            HelpCircle: <HelpCircle size={20} className="text-primary" />,
        };
        return icons[iconName];
    };

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
                        {NAV_LINKS.main.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className='relative text-foreground/80 hover:text-primary transition-colors overflow-hidden group'
                                >
                                    <span>{link.label}</span>
                                    <span className='absolute bottom-0 left-0 w-full h-[1px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300'></span>
                                </a>
                            </li>
                        ))}
                        <li ref={companyMenuRef} className='relative'>
                            <button
                                onClick={toggleCompanyMenu}
                                className='relative text-foreground/80 hover:text-primary transition-colors overflow-hidden group flex items-center gap-1'
                            >
                                <span>{NAV_LINKS.company.label}</span>
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
                                        {NAV_LINKS.company.items.map((item) => (
                                            item.external ? (
                                                <a
                                                    key={item.href}
                                                    href={item.href}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='flex items-center gap-3 p-2 hover:bg-card-foreground/5 rounded-md transition-colors duration-200 group'
                                                >
                                                    <div className='p-2 bg-primary/10 rounded-full'>
                                                        {getIcon(item.icon)}
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <span className='font-medium group-hover:text-primary transition-all duration-200'>
                                                            {item.label}
                                                        </span>
                                                        <span className='text-xs text-muted-foreground'>
                                                            {item.description}
                                                        </span>
                                                    </div>
                                                </a>
                                            ) : (
                                                <Link
                                                    key={item.href}
                                                    to={item.href}
                                                    className='flex items-center gap-3 p-2 hover:bg-card-foreground/5 rounded-md transition-colors duration-200 group'
                                                >
                                                    <div className='p-2 bg-primary/10 rounded-full'>
                                                        {getIcon(item.icon)}
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <span className='font-medium group-hover:text-primary transition-all duration-200'>
                                                            {item.label}
                                                        </span>
                                                        <span className='text-xs text-muted-foreground'>
                                                            {item.description}
                                                        </span>
                                                    </div>
                                                </Link>
                                            )
                                        ))}
                                    </div>
                                </div>
                            )}
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
                            <span>Join Community</span>
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
                className={`md:hidden fixed inset-0 h-screen md:h-auto bg-background backdrop-blur-md z-40 transition-transform duration-300 ${
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
                            {NAV_LINKS.main.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className='text-foreground/80 hover:text-primary transition-colors text-xl'
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            {NAV_LINKS.company.items.map((item) => (
                                <li key={item.href}>
                                    {item.external ? (
                                        <a
                                            href={item.href}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-foreground/80 hover:text-primary transition-colors text-xl'
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.label}
                                        </a>
                                    ) : (
                                        <Link
                                            to={item.href}
                                            className='text-foreground/80 hover:text-primary transition-colors text-xl'
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
