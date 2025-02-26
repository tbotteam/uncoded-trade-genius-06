
import { Navigation } from "@/components/Navigation";
import { ArrowRight, ChartBar, Zap, Shield } from "lucide-react";
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
              Intelligent Trading Made Easy
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-stroke relative">
              <span className="text-gradient">unCoded Trading Bot</span>
              <div className="absolute -inset-1 bg-primary/20 blur-2xl opacity-50 -z-10" />
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto backdrop-blur-sm">
              Automate your Binance trading with advanced AI and maximize your returns
            </p>
          </div>
          
          <div className="animate-on-scroll flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group flex items-center space-x-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all glow">
              <span>Start Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 rounded-lg glass-effect hover:bg-white/10 transition-all border border-white/10">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-50" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Why unCoded Trading Bot?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the advantages of our advanced trading bot
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ChartBar className="w-6 h-6 text-primary" />,
                title: "Intelligent Analysis",
                description: "Advanced algorithms for precise market analysis",
              },
              {
                icon: <Zap className="w-6 h-6 text-primary" />,
                title: "Fast Execution",
                description: "Lightning-fast order execution for optimal results",
              },
              {
                icon: <Shield className="w-6 h-6 text-primary" />,
                title: "Safe & Reliable",
                description: "Highest security standards for your capital",
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
              Our Success in Numbers
            </h2>
            <p className="text-gray-400">
              Real results that speak for themselves
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "99.9%", label: "Uptime" },
              { value: "0.1s", label: "Execution Time" },
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
              Ready for Automated Trading?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Start with unCoded Trading Bot now and experience the future of trading
            </p>
            <button className="group inline-flex items-center space-x-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all glow">
              <span>Try for Free</span>
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
            © 2024 unCoded Trading Bot. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
