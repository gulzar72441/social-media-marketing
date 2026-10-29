import React from 'react';
import { ArrowDown, Layers, Sparkles, TrendingUp, CheckCircle2, Play, Calendar, Share2, Video, BarChart2 } from 'lucide-react';

interface HeroProps {
  onExplorePackages: () => void;
  onWorkTogether: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePackages, onWorkTogether }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#F5F8FC]">
      {/* Subtle geometric background accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#00235A]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-[#0CBF83]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Pill-free category lead */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0CBF83] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#0CBF83] animate-pulse" />
              <span>Full-Service Digital Marketing & Advertising</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#00235A] tracking-tight leading-[1.12]">
              Build Your Brand.{' '}
              <span className="block text-[#0CBF83]">Grow Your Audience.</span>
              <span className="block">Drive Results.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              Strategic social media management, creative content, and performance-focused advertising to help your business strengthen its online presence and reach the right audience.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExplorePackages}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#0CBF83] hover:bg-[#0aa571] text-white font-semibold text-base shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0CBF83] focus-visible:ring-offset-2"
              >
                <span>Explore Packages</span>
                <ArrowDown className="ml-2 w-4 h-4" />
              </button>

              <button
                onClick={onWorkTogether}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-white border border-slate-300 hover:border-[#00235A] text-[#00235A] font-semibold text-base shadow-xs hover:bg-slate-50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00235A]"
              >
                Let&apos;s Work Together
              </button>
            </div>

            {/* Three Concise Benefits */}
            <div className="mt-12 pt-8 border-t border-slate-200/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#00235A]/5 flex items-center justify-center text-[#00235A] shrink-0">
                    <Layers className="w-5 h-5 text-[#00235A]" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-[#00235A]">Strategic Content</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Audience-focused plans</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0CBF83]/10 flex items-center justify-center text-[#0CBF83] shrink-0">
                    <Sparkles className="w-5 h-5 text-[#0CBF83]" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-[#00235A]">Creative Execution</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Videos & custom graphics</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#00235A]/5 flex items-center justify-center text-[#00235A] shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#00235A]" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-[#00235A]">Performance-Driven Marketing</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Targeted paid ad setup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tasteful Abstract Marketing Visual aligned with Brand Colors */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Board Container */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5 sm:p-6 transition-all duration-300">
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-[#0CBF83]" />
                    <span className="ml-2 text-xs font-semibold text-slate-500">
                      Campaign Orchestration & Content Hub
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#0CBF83] bg-[#0CBF83]/10 px-2 py-0.5 rounded">
                    Active Cycle
                  </span>
                </div>

                {/* Platform Matrix Indicator */}
                <div className="mt-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Omni-Channel Distribution
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { name: 'Meta / IG', active: true },
                      { name: 'YouTube', active: true },
                      { name: 'TikTok', active: true },
                      { name: 'Google Biz', active: true },
                    ].map((p, i) => (
                      <div
                        key={i}
                        className="bg-[#F5F8FC] border border-slate-200/80 rounded-lg p-2 text-center"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#0CBF83] mx-auto mb-1" />
                        <span className="text-[10px] font-semibold text-[#00235A] block leading-tight">
                          {p.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workflow Execution Pipeline Cards */}
                <div className="mt-5 space-y-3">
                  {/* Item 1: Short-form video */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between hover:border-[#0CBF83] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#00235A] text-white flex items-center justify-center shrink-0">
                        <Video className="w-4 h-4 text-[#0CBF83]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#00235A]">
                          Short-Form Video Production
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Reels, Shorts & TikTok format
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0CBF83]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Scheduled
                      </span>
                    </div>
                  </div>

                  {/* Item 2: Custom Creatives */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between hover:border-[#0CBF83] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#00235A] text-white flex items-center justify-center shrink-0">
                        <Share2 className="w-4 h-4 text-[#0CBF83]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#00235A]">
                          Custom Social Creatives
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Branded carousels & banners
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#00235A]">
                        <Play className="w-3.5 h-3.5 fill-[#00235A]" />
                        In Review
                      </span>
                    </div>
                  </div>

                  {/* Item 3: Paid Ads Campaign Management */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between hover:border-[#0CBF83] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#00235A] text-white flex items-center justify-center shrink-0">
                        <BarChart2 className="w-4 h-4 text-[#0CBF83]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#00235A]">
                          Paid Advertising & Targeting
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Audience reach & optimization
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0CBF83]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Optimized
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Schedule Snippet */}
                <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#00235A]" />
                    <span className="font-semibold text-[#00235A]">Monthly Publishing Schedule</span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-500">Structured Deliverables</span>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-5 -left-5 bg-[#00235A] text-white rounded-xl p-3.5 shadow-lg hidden sm:flex items-center gap-3 max-w-[260px] border border-navy/40">
                <div className="w-8 h-8 rounded-lg bg-[#0CBF83] text-white flex items-center justify-center shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold">Monthly Strategy</div>
                  <div className="text-[11px] text-slate-300">Consistent, transparent reporting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
