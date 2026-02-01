import { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, Target, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220_25%_8%/0.7)] via-[hsl(220_25%_8%/0.5)] to-[hsl(220_25%_8_/1)]" />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))',
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[hsl(190_90%_50%)] rounded-full animate-pulse-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(190_90%_50%/0.1)] border border-[hsl(190_90%_50%/0.3)] mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-[hsl(190_90%_50%)]" />
          <span className="text-sm text-[hsl(190_90%_50%)]">
            Cebu's Premier STEM Content Partner
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">World-Class</span>
          <br />
          <span className="text-gradient">Science</span>
          <span className="text-white">, Homegrown in </span>
          <span className="text-gradient-gold">Cebu</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-[hsl(220_10%_70%)] max-w-3xl mx-auto mb-4">
          Specialized in Philippine K-12 STEM Curriculum Content Creation
        </p>
        <p className="text-base text-[hsl(220_10%_50%)] max-w-2xl mx-auto mb-12">
          Empowering DepEd's vision with cutting-edge visualizations, interactive learning materials, 
          and world-class educational content tailored for Filipino students.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            onClick={() => scrollToSection('#k12-courses')}
            className="bg-gradient-to-r from-[hsl(190_90%_50%)] to-[hsl(280_70%_55%)] text-[hsl(220_25%_8%)] font-semibold text-lg px-8 py-6 hover:shadow-[0_0_30px_hsl(190_90%_50%/0.5)] transition-all hover:scale-105"
          >
            <Target className="w-5 h-5 mr-2" />
            Explore Our Curriculum
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('#contact')}
            className="border-[hsl(190_90%_50%/0.5)] text-white hover:bg-[hsl(190_90%_50%/0.1)] text-lg px-8 py-6"
          >
            <Lightbulb className="w-5 h-5 mr-2" />
            Partner With Us
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: 'K-12', label: 'Full Curriculum Coverage' },
            { value: 'STEM', label: 'Science, Tech, Eng, Math' },
            { value: 'DepEd', label: 'Aligned with Standards' },
            { value: 'Cebu', label: 'Proudly Philippine Made' },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-[hsl(220_20%_12_/0.8)] border border-[hsl(190_90%_50%/0.2)] backdrop-blur-sm hover:border-[hsl(190_90%_50%/0.4)] transition-all"
            >
              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[hsl(220_10%_60%)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('#k12-courses')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[hsl(220_10%_50%)] hover:text-[hsl(190_90%_50%)] transition-colors animate-bounce"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 border-l-2 border-t-2 border-[hsl(190_90%_50%/0.3)] rounded-tl-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-r-2 border-b-2 border-[hsl(280_70%_55%/0.3)] rounded-br-3xl pointer-events-none" />
    </section>
  );
}
