import { useState, useEffect } from "react";
import { Menu, X, Settings } from "lucide-react";

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
        isScrolled ? "bg-black/50 backdrop-blur-lg neon-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center cyber-pulse">
                <div className="w-6 h-6 rounded-full bg-primary animate-pulse" />
              </div>
              <span className="text-xl font-bold text-gradient">unCoded</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["Features", "Statistics", "Pricing"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all neon-border">
              <Settings className="w-4 h-4" />
              <span>Dashboard</span>
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-lg tech-pattern">
            {["Features", "Statistics", "Pricing"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-gray-300 hover:text-primary transition-colors data-flow-bg"
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all neon-border">
              <Settings className="w-4 h-4" />
              <span>Dashboard</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
