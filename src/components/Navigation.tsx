
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/50 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-primary animate-pulse" />
              </div>
              <span className="text-xl font-bold text-white">unCoded</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                Alpha
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#statistics" className="text-gray-300 hover:text-primary transition-colors">
              Statistics
            </a>
            {/* <a href="#pricing" className="text-gray-300 hover:text-primary transition-colors">
              Pricing
            </a> */}
            <a 
              href="https://bit.ly/AuV-Telegram" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all"
            >
              <span>Join Telegram</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-lg">
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#statistics"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-primary transition-colors"
            >
              Statistics
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <a 
              href="https://bit.ly/AuV-Telegram" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full mt-4 text-center px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all"
            >
              <div className="flex items-center justify-center space-x-2">
                <span>Join Telegram</span>
              </div>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
