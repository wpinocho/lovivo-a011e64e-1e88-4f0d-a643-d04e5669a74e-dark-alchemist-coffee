import { Brain, Heart, Shield } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const adaptogens = [
  {
    icon: Brain,
    name: "Melena de León",
    benefit: "Enfoque Mejorado",
    description: "Potencia la función cognitiva y la claridad mental con este poderoso hongo nootrópico.",
    color: "from-primary to-primary/50",
    glow: "glow-primary"
  },
  {
    icon: Heart,
    name: "Ashwagandha",
    benefit: "Alivio del Estrés",
    description: "Adaptógeno ancestral que reduce el cortisol y promueve energía calmada y sostenida.",
    color: "from-secondary to-secondary/50",
    glow: "glow-secondary"
  },
  {
    icon: Shield,
    name: "Chaga",
    benefit: "Apoyo Inmune",
    description: "Poderosos antioxidantes que fortalecen tu sistema inmunológico y bienestar general.",
    color: "from-accent to-accent/50",
    glow: "glow-accent"
  }
];

export const AdaptogenCards = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = containerRef.current?.querySelectorAll('[data-index]');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              La Ciencia
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Energía limpia. Sin nerviosismo. Solo flujo.
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-3 gap-8">
          {adaptogens.map((adaptogen, index) => {
            const Icon = adaptogen.icon;
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                data-index={index}
                className={`glass-card p-8 group hover:border-white/30 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon with gradient background */}
                <div className={`relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${adaptogen.color} p-0.5 ${adaptogen.glow} group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                    <Icon className="h-8 w-8 text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-playfair font-bold mb-2 text-foreground">
                  {adaptogen.name}
                </h3>
                <div className="text-sm text-primary font-medium mb-4 uppercase tracking-wider">
                  {adaptogen.benefit}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {adaptogen.description}
                </p>

                {/* Animated border on hover */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${adaptogen.color} blur-xl -z-10`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};