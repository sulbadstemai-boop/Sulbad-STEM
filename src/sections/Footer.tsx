import { FlaskConical, Mail, MapPin, Heart, Facebook } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    title: 'Programs',
    links: [
      { label: 'Kindergarten', href: '#k12-courses' },
      { label: 'Elementary', href: '#k12-courses' },
      { label: 'Junior High', href: '#k12-courses' },
      { label: 'Senior High STEM', href: '#k12-courses' },
    ],
  },
  {
    title: 'Subjects',
    links: [
      { label: 'Science', href: '#science' },
      { label: 'Technology', href: '#technology' },
      { label: 'Engineering', href: '#engineering' },
      { label: 'Mathematics', href: '#mathematics' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about.html', external: true },
      { label: 'Our Team', href: '/about.html#team', external: true },
      { label: 'Contact', href: '/contact.html', external: true },
    ],
  },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[hsl(220_25%_6%)] border-t border-[hsl(220_15%_18%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(190_90%_50%)] to-[hsl(280_70%_55%)] flex items-center justify-center">
                <FlaskConical className="w-7 h-7 text-[hsl(220_25%_8%)]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Sulbad STEM</span>
                <span className="text-[10px] text-[hsl(45_100%_55%)] tracking-wide">Cost-Effective Digital Solutions</span>
              </div>
            </a>
            <p className="text-[hsl(220_10%_60%)] mb-6 max-w-sm">
              Cebu's Premier STEM Content Partner. Creating world-class educational 
              content aligned with Philippine K-12 curriculum standards.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[hsl(220_20%_12%)] flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[hsl(190_90%_50%)]" />
                </div>
                <a
                  href="mailto:sulbadstemai@gmail.com"
                  className="text-[hsl(220_10%_70%)] hover:text-[hsl(190_90%_50%)] transition-colors"
                >
                  sulbadstemai@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[hsl(220_20%_12%)] flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[hsl(280_70%_55%)]" />
                </div>
                <span className="text-[hsl(220_10%_70%)]">Cebu, Philippines</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[hsl(220_20%_12%)] flex items-center justify-center">
                  <Facebook className="w-4 h-4 text-[hsl(190_90%_50%)]" />
                </div>
                <a
                  href="https://www.facebook.com/SulbadSTEM/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(220_10%_70%)] hover:text-[hsl(190_90%_50%)] transition-colors"
                >
                  facebook.com/SulbadSTEM
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="text-[hsl(220_10%_60%)] hover:text-[hsl(190_90%_50%)] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-[hsl(220_10%_60%)] hover:text-[hsl(190_90%_50%)] transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[hsl(220_15%_18%)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[hsl(220_10%_50%)] text-center md:text-left">
              © {new Date().getFullYear()} Sulbad STEM. All rights reserved.
            </p>
            <p className="text-sm text-[hsl(220_10%_50%)] flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Cebu, Philippines
            </p>
            <p className="text-sm text-[hsl(220_10%_50%)]">
              Aligned with <span className="text-[hsl(190_90%_50%)]">DepEd K-12</span> Standards
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
