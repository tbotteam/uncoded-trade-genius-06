
import { useState, useEffect } from "react";
import { Menu, X, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      // Wallet connection logic here
      const ethereum = (window as any).ethereum;
      if (!ethereum) {
        toast({
          title: "Wallet nicht gefunden",
          description: "Bitte installieren Sie MetaMask oder ein anderes Web3-Wallet.",
          variant: "destructive",
        });
        return;
      }

      await ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      toast({
        title: "Erfolgreich verbunden",
        description: "Ihre Wallet wurde erfolgreich verbunden.",
      });

    } catch (error: any) {
      console.error('Connection error:', error);
      
      // Spezifische Fehlermeldung für User Rejection
      if (error.message.includes('User rejected')) {
        toast({
          title: "Verbindung abgelehnt",
          description: "Sie haben die Wallet-Verbindung abgelehnt.",
          variant: "destructive",
        });
      } else {
        // Generische Fehlermeldung für andere Fehler
        toast({
          title: "Verbindungsfehler",
          description: "Es gab einen Fehler bei der Wallet-Verbindung. Bitte versuchen Sie es erneut.",
          variant: "destructive",
        });
      }
    } finally {
      setIsConnecting(false);
    }
  };

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
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#statistics" className="text-gray-300 hover:text-primary transition-colors">
              Statistics
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-primary transition-colors">
              Pricing
            </a>
            <button 
              onClick={handleConnect}
              disabled={isConnecting}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                isConnecting 
                  ? "bg-primary/50 cursor-not-allowed" 
                  : "bg-primary/10 hover:bg-primary/20"
              } text-primary transition-all`}
            >
              <Settings className="w-4 h-4" />
              <span>{isConnecting ? "Verbinde..." : "Wallet verbinden"}</span>
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
            <button 
              onClick={handleConnect}
              disabled={isConnecting}
              className={`w-full mt-4 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg ${
                isConnecting 
                  ? "bg-primary/50 cursor-not-allowed" 
                  : "bg-primary/10 hover:bg-primary/20"
              } text-primary transition-all`}
            >
              <Settings className="w-4 h-4" />
              <span>{isConnecting ? "Verbinde..." : "Wallet verbinden"}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
