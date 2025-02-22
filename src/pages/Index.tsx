
import { Navigation } from "@/components/Navigation";
import { ArrowRight, Shield, Zap, FileText } from "lucide-react";
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
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -top-48 -left-48" />
          <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -bottom-48 -right-48" />
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-on-scroll mb-6">
            <div className="inline-block px-3 py-1 rounded-full glass-effect text-primary text-sm mb-4">
              🔴 Live
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Trading Redefined
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              unCoded ist der leistungsstärkste Trading Bot, der Geschwindigkeit, 
              Anreize und erstklassige Infrastruktur vereint. Powered by <span className="text-primary">AI</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <ArrowRight className="w-12 h-12" />,
              title: "Upgrade",
              description: "Upgrade your FTM to S on a 1:1 basis through our upgrade portal.",
              gradient: "from-blue-500 to-orange-500"
            },
            {
              icon: <Zap className="w-12 h-12" />,
              title: "Bridge",
              description: "Bridge to Sonic with any asset, from any chain, using our bridge tool.",
              gradient: "from-primary to-primary/70"
            },
            {
              icon: <Shield className="w-12 h-12" />,
              title: "Stake",
              description: "Stake S tokens to secure the Sonic network and earn rewards.",
              gradient: "from-blue-500 to-orange-500"
            },
            {
              icon: <FileText className="w-12 h-12" />,
              title: "Docs",
              description: "Check out Sonic's official documentation and start building.",
              gradient: "from-primary to-primary/70"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl glass-effect hover:bg-white/5 transition-all duration-300"
            >
              <div className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-10 w-fit`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
