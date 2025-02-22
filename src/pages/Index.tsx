import { Navigation } from "@/components/Navigation";
import { ArrowRight, ChartBar, Zap, Shield, BarChart3 } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient px-4 grid-lines">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -top-48 -left-48 pulse-ring" />
          <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -bottom-48 -right-48 pulse-ring" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-on-scroll mb-6">
            <span className="inline-block px-3 py-1 rounded-full glass-effect text-primary text-sm mb-4 glow">
              Intelligentes Trading leicht gemacht
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-stroke relative">
              <span className="text-gradient">unCoded Trading Bot</span>
              <div className="absolute -inset-1 bg-primary/20 blur-2xl opacity-50 -z-10" />
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto backdrop-blur-sm">
              Automatisieren Sie Ihr Binance-Trading mit fortschrittlicher KI und maximieren Sie Ihre Rendite
            </p>
          </div>
          
          <div className="animate-on-scroll flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group flex items-center space-x-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all glow">
              <span>Jetzt Starten</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 rounded-lg glass-effect hover:bg-white/10 transition-all border border-white/10">
              Demo ansehen
            </button>
          </div>
        </div>
      </section>

      {/* Trading Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <div className="max-w-6xl mx-auto relative">
          {/* Market Lines Background */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                style={{
                  top: `${20 * i}%`,
                  left: 0,
                  right: 0,
                  transform: `rotate(${i % 2 ? 2 : -2}deg)`,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gray-200">Trade</span>{" "}
              <span className="text-gradient">anything</span>
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8 text-primary">
              on the market
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Trade with confidence, minimal slippage, and deep liquidity.
            </p>
          </div>

          {/* Trading Platform Illustration */}
          <div className="relative h-[400px] animate-on-scroll">
            {/* Platform Base */}
            <div className="absolute left-1/2 bottom-20 -translate-x-1/2 w-[300px] h-[100px] perspective-1000">
              <div className="relative w-full h-full">
                {/* Platform Top */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent transform -skew-x-12 rounded-lg border border-primary/20" />
                
                {/* Side Panels */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-r from-primary/10 to-transparent transform -skew-x-45 origin-bottom-left" />
                <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-l from-primary/10 to-transparent transform skew-x-45 origin-bottom-right" />
              </div>
            </div>

            {/* Trading Lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Bitcoin Trading Line */}
              <div className="absolute w-[200px] h-[2px] bg-primary -rotate-12 left-1/4 top-1/3">
                <div className="absolute -left-4 -top-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <img src="/bitcoin-logo.svg" alt="Bitcoin" className="w-5 h-5" />
                </div>
                <div className="absolute w-full h-full animate-pulse-line" />
              </div>

              {/* Other Trading Line */}
              <div className="absolute w-[200px] h-[2px] bg-[#FF6B6B] rotate-12 right-1/4 top-1/2">
                <div className="absolute -right-4 -top-4 w-8 h-8 rounded-full bg-[#FF6B6B] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="absolute w-full h-full animate-pulse-line" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-50" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Warum unCoded Trading Bot?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Entdecken Sie die Vorteile unseres fortschrittlichen Trading-Bots
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ChartBar className="w-6 h-6 text-primary" />,
                title: "Intelligente Analyse",
                description: "Fortschrittliche Algorithmen für präzise Marktanalysen",
              },
              {
                icon: <Zap className="w-6 h-6 text-primary" />,
                title: "Schnelle Ausführung",
                description: "Blitzschnelle Order-Ausführung für optimale Ergebnisse",
              },
              {
                icon: <Shield className="w-6 h-6 text-primary" />,
                title: "Sicher & Zuverlässig",
                description: "Höchste Sicherheitsstandards für Ihr Kapital",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="animate-on-scroll group p-6 rounded-xl glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:glow"
              >
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gradient">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics" className="py-20 px-4 bg-black/30 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Unsere Erfolge in Zahlen
            </h2>
            <p className="text-gray-400">
              Echte Resultate, die für sich sprechen
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "99.9%", label: "Uptime" },
              { value: "0.1s", label: "Ausführungszeit" },
              { value: "24/7", label: "Support" },
              { value: "50k+", label: "Trades" },
            ].map((stat, index) => (
              <div
                key={index}
                className="animate-on-scroll text-center p-6 rounded-xl glass-effect hover:glow transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-50" />
        <div className="max-w-4xl mx-auto text-center animate-on-scroll relative z-10">
          <div className="glass-effect p-8 rounded-2xl glow">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Bereit für automatisiertes Trading?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Starten Sie jetzt mit unCoded Trading Bot und erleben Sie die Zukunft des Tradings
            </p>
            <button className="group inline-flex items-center space-x-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all glow">
              <span>Kostenlos Testen</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-primary pulse-ring" />
            </div>
            <span className="font-bold text-gradient">unCoded</span>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 unCoded Trading Bot. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
