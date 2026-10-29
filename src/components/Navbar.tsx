import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onSelectPackage?: (planId: 'startup' | 'business' | 'enterprise') => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['services', 'packages', 'how-it-works', 'terms', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Name */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0CBF83] rounded-lg"
          >
            <div className="w-9 h-9 rounded-lg bg-[#00235A] flex items-center justify-center text-white font-bold text-lg shadow-sm transition-transform duration-200 group-hover:scale-105">
              <span className="text-[#0CBF83]">S</span>M
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-[#00235A] leading-tight">
                Social Media Marketing
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
                Digital Advertising & Growth
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {[
              { id: 'services', label: 'Services' },
              { id: 'packages', label: 'Packages' },
              { id: 'how-it-works', label: 'How It Works' },
              { id: 'terms', label: 'Payment Terms' },
              { id: 'contact', label: 'Contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                  activeSection === link.id
                    ? 'text-[#00235A] bg-slate-100/80'
                    : 'text-slate-600 hover:text-[#00235A] hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection('packages')}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#0CBF83] hover:bg-[#0aa571] text-white font-semibold text-sm shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0CBF83]"
            >
              <span>Get Started</span>
              <ArrowUpRight className="ml-1.5 w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#00235A] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0CBF83]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {[
              { id: 'services', label: 'Services' },
              { id: 'packages', label: 'Packages' },
              { id: 'how-it-works', label: 'How It Works' },
              { id: 'terms', label: 'Payment Terms' },
              { id: 'contact', label: 'Contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'bg-slate-100 text-[#00235A]'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-[#00235A]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100">
            <button
              onClick={() => scrollToSection('packages')}
              className="w-full py-3 rounded-lg bg-[#0CBF83] hover:bg-[#0aa571] text-white font-semibold text-center text-sm shadow-sm flex items-center justify-center gap-1.5"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
