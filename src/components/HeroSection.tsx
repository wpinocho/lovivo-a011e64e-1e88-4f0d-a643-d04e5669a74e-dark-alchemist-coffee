import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '2s'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div 
            className="space-y-8 z-10"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: 1 - scrollY / 500
            }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm text-muted-foreground border border-white/10">
              <span className="h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
              Premium Adaptogenic Coffee
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-playfair font-bold leading-tight">
              <span style={{ fontWeight: '100', letterSpacing: '0px', fontFamily: 'Arial, sans-serif' }} className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
                Neural Fuel
              </span>
              <br />
              <span className="text-foreground">for the Modern</span>
              <br />
              <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
                Alchemist
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Clean energy. No jitters. Just flow. Scientifically formulated with adaptogens to enhance focus, reduce stress, and optimize performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="shimmer glow-primary bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full group"
              >
                Explore Blends
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-card border-white/20 hover:border-white/40 text-lg px-8 py-6 rounded-full"
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">500mg</div>
                <div className="text-sm text-muted-foreground">Adaptogens</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">Zero</div>
                <div className="text-sm text-muted-foreground">Jitters</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Organic</div>
              </div>
            </div>
          </div>

          {/* 3D Product Image with Parallax */}
          <div 
            className="relative z-10"
            style={{
              transform: `
                perspective(1000px) 
                rotateY(${mousePosition.x * 0.5}deg) 
                rotateX(${-mousePosition.y * 0.5}deg)
                translateY(${scrollY * 0.2}px)
              `,
              transition: 'transform 0.3s ease-out',
              letterSpacing: '0px',
              paddingTop: 'px',
              paddingBottom: '400px',
            }}
          >
            <div className="relative">
              {/* Glow effect behind product */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 blur-3xl rounded-full scale-150" />
              
              {/* Product image */}
              <img 
                src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/1f8ba537-8c69-4ea6-8f18-0b6127967c8a/1768497692868-2mbih6q3bua.png" 
                alt="Premium Adaptogenic Coffee" 
                className="relative z-10 w-full h-auto drop-shadow-2xl"
              />

              {/* Floating info cards - brought to front with higher z-index */}
              <div 
                className="absolute top-1/4 -left-8 glass-card p-4 rounded-2xl glow-primary animate-float z-20"
                style={{ animationDelay: '0s' }}
              >
                <div className="text-sm font-semibold text-foreground">Lion's Mane</div>
                <div className="text-xs text-muted-foreground">Enhanced Focus</div>
              </div>

              <div 
                className="absolute top-1/2 -right-8 glass-card p-4 rounded-2xl glow-accent animate-float z-20"
                style={{ animationDelay: '1s' }}
              >
                <div className="text-sm font-semibold text-foreground">Ashwagandha</div>
                <div className="text-xs text-muted-foreground">Stress Relief</div>
              </div>

              <div 
                className="absolute bottom-1/4 left-1/4 glass-card p-4 rounded-2xl glow-secondary animate-float z-20"
                style={{ animationDelay: '2s' }}
              >
                <div className="text-sm font-semibold text-foreground">Chaga</div>
                <div className="text-xs text-muted-foreground">Immune Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</div>
        <div className="h-8 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

// Add animation to tailwind
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
`;
document.head.appendChild(style);