import { useState, useEffect } from 'react';
import { Menu, X, FlaskConical, Cpu, Cog, Calculator, GraduationCap, User } from 'lucide-react';

const navItems = [
  { label: 'About Us', href: '/about.html', icon: User, external: true },
  { label: 'K-12 Courses', href: '#k12-courses', icon: GraduationCap },
  { label: 'Science', href: '#science', icon: FlaskConical },
  { label: 'Technology', href: '#technology', icon: Cpu },
  { label: 'Engineering', href: '#engineering', icon: Cog },
  { label: 'Mathematics', href: '#mathematics', icon: Calculator },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[hsl(220_25%_8%/0.95)] backdrop-blur-lg border-b border-[hsl(190_90%_50%/0.2)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(190_90%_50%)] to-[hsl(280_70%_55%)] flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(190_90%_50%/0.5)] transition-shadow">
              <FlaskConical className="w-6 h-6 text-[hsl(220_25%_8%)]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white leading-tight">
                Sulbad STEM
              </span>
              <span className="text-[10px] text-[hsl(45_100%_55%)] leading-tight tracking-wide">
                Cost-Effective Digital Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (!item.external) {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }
                }}
                className="flex items-center gap-2 px-4 py-2 text-sm text-[hsl(220_10%_70%)] hover:text-white hover:bg-[hsl(190_90%_50%/0.1)] rounded-lg transition-all group"
              >
                <item.icon className="w-4 h-4 text-[hsl(190_90%_50%)] group-hover:scale-110 transition-transform" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[hsl(220_25%_8%/0.98)] backdrop-blur-lg border-t border-[hsl(190_90%_50%/0.2)]">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (!item.external) {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-3 text-left text-[hsl(220_10%_70%)] hover:text-white hover:bg-[hsl(190_90%_50%/0.1)] rounded-lg transition-all"
              >
                <item.icon className="w-5 h-5 text-[hsl(190_90%_50%)]" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
