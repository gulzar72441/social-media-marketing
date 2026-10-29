import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#00235A] text-white border-t border-[#001a43]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0CBF83] text-[#00235A] font-extrabold flex items-center justify-center text-sm">
                SM
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Social Media Marketing
              </span>
            </div>

            {/* Exact short description from prompt */}
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Creative content, strategic social media management, and performance-focused advertising for growing businesses.
            </p>

            {/* Separate ad spend notice */}
            <div className="pt-2 text-xs text-slate-400">
              <span className="text-[#0CBF83] font-semibold">Note:</span> Advertising spend is billed separately and paid directly to advertising platforms by the client.
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0CBF83]">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('packages')}
                  className="hover:text-white transition-colors"
                >
                  Packages & Pricing (PKR)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('how-it-works')}
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('terms')}
                  className="hover:text-white transition-colors"
                >
                  Payment Terms
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Back to top */}
          <div className="md:col-span-2 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all duration-150 flex items-center gap-2 text-xs font-semibold"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-[#0CBF83]" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Social Media Marketing. All rights reserved.</p>
          <p className="text-slate-400">
            Professional Multi-Industry Marketing Packages
          </p>
        </div>
      </div>
    </footer>
  );
};
