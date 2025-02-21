
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
                <div className="w-6 h-6 rounded-full bg-primary" />
              </div>
              <span className="text-xl font-bold text-white">unCoded</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#learn" className="text-gray-300 hover:text-primary transition-colors">
              Learn
            </a>
            <a href="#community" className="text-gray-300 hover:text-primary transition-colors">
              Community
            </a>
            <button className="px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all">
              Add unCoded
            </button>
            <button className="px-4 py-2 rounded-lg bg-[#1A1A1A]/80 text-white hover:bg-[#1A1A1A] border border-white/10 transition-all">
              Dashboard
            </button>
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
              href="#learn"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-primary transition-colors"
            >
              Learn
            </a>
            <a
              href="#community"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-primary transition-colors"
            >
              Community
            </a>
            <button className="w-full mt-2 px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all">
              Add unCoded
            </button>
            <button className="w-full mt-2 px-3 py-2 rounded-lg bg-[#1A1A1A]/80 text-white hover:bg-[#1A1A1A] border border-white/10 transition-all">
              Dashboard
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
