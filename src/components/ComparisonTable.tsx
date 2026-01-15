import { Check, X } from 'lucide-react';

const comparisons = [
  { feature: 'Energy Boost', regular: true, adaptogenic: true },
  { feature: 'No Jitters', regular: false, adaptogenic: true },
  { feature: 'No Crash', regular: false, adaptogenic: true },
  { feature: 'Enhanced Focus', regular: false, adaptogenic: true },
  { feature: 'Stress Relief', regular: false, adaptogenic: true },
  { feature: 'Immune Support', regular: false, adaptogenic: true },
  { feature: 'Antioxidants', regular: true, adaptogenic: true },
  { feature: 'Sustained Performance', regular: false, adaptogenic: true },
];

export const ComparisonTable = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Why Choose Adaptogenic?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not all coffee is created equal. See the difference.
          </p>
        </div>

        <div className="glass-card overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-white/10">
            <div className="p-6"></div>
            <div className="p-6 text-center border-x border-white/10">
              <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Regular</div>
              <div className="text-xl font-semibold text-muted-foreground">Coffee</div>
            </div>
            <div className="p-6 text-center bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
              <div className="absolute inset-0 shimmer" />
              <div className="text-sm text-primary uppercase tracking-wider mb-2 relative z-10">Our</div>
              <div className="text-xl font-bold text-foreground relative z-10">Adaptogenic Blend</div>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((item, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-3 border-b border-white/10 hover:bg-white/5 transition-colors ${
                index === comparisons.length - 1 ? 'border-b-0' : ''
              }`}
            >
              <div className="p-6 font-medium text-foreground flex items-center">
                {item.feature}
              </div>
              <div className="p-6 border-x border-white/10 flex items-center justify-center">
                {item.regular ? (
                  <Check className="h-6 w-6 text-muted-foreground" />
                ) : (
                  <X className="h-6 w-6 text-muted-foreground/40" />
                )}
              </div>
              <div className="p-6 flex items-center justify-center bg-gradient-to-r from-transparent to-primary/5">
                {item.adaptogenic ? (
                  <div className="relative">
                    <Check className="h-6 w-6 text-primary relative z-10" />
                    <div className="absolute inset-0 bg-primary/30 blur-lg rounded-full scale-150" />
                  </div>
                ) : (
                  <X className="h-6 w-6 text-muted-foreground/40" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Experience the difference. Your body will thank you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="shimmer glow-primary bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-semibold transition-colors">
              Shop Now
            </button>
            <button className="glass-card border-white/20 hover:border-white/40 px-8 py-4 rounded-full font-semibold transition-colors">
              Read Research
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};