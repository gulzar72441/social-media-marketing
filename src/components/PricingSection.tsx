import React, { useState } from 'react';
import { Check, Star, Video, Image, Globe, ArrowRight, Table } from 'lucide-react';
import { PRICING_PACKAGES, PricingPlan } from '../data/marketingData';

interface PricingSectionProps {
  onSelectPlan: (planId: 'startup' | 'business' | 'enterprise') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [viewMode, setViewMode] = useState<'cards' | 'matrix'>('cards');

  return (
    <section id="packages" className="py-20 md:py-28 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0CBF83] mb-2">
            Transparent Retainers in PKR
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00235A] tracking-tight">
            Choose the Right Package for Your Business
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Flexible monthly packages to support your brand visibility, content strategy, audience growth, and advertising goals.
          </p>

          {/* View mode toggle */}
          <div className="mt-8 inline-flex items-center p-1 bg-white border border-slate-200 rounded-xl shadow-2xs">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                viewMode === 'cards'
                  ? 'bg-[#00235A] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#00235A]'
              }`}
            >
              Package Cards
            </button>
            <button
              onClick={() => setViewMode('matrix')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                viewMode === 'matrix'
                  ? 'bg-[#00235A] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#00235A]'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>Full Comparison Matrix</span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards View */}
        {viewMode === 'cards' && (
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_PACKAGES.map((pkg) => {
              const isRec = pkg.isRecommended;

              return (
                <div
                  key={pkg.id}
                  className={`relative rounded-2xl transition-all duration-200 flex flex-col justify-between ${
                    isRec
                      ? 'bg-white border-2 border-[#0CBF83] shadow-xl lg:-translate-y-2'
                      : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
                  } p-6 sm:p-8`}
                >
                  {/* Recommended Badge */}
                  {isRec && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0CBF83] text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                      <Star className="w-3 h-3 fill-white" />
                      <span>Recommended</span>
                    </div>
                  )}

                  <div>
                    {/* Package Name & Tagline */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-extrabold text-[#00235A] tracking-tight">
                        {pkg.name}
                      </h3>
                      <span className="text-xs font-semibold text-slate-500">
                        {pkg.platforms.length} Platforms
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-slate-500 leading-normal min-h-[32px]">
                      {pkg.tagline}
                    </p>

                    {/* Price in PKR */}
                    <div className="mt-6 pt-5 border-t border-slate-100 flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#00235A] tracking-tight">
                        {pkg.priceFormatted}
                      </span>
                      <span className="text-sm font-semibold text-slate-500">
                        {pkg.cadence}
                      </span>
                    </div>

                    {/* Core Metric Badges */}
                    <div className="mt-6 grid grid-cols-3 gap-2 bg-[#F5F8FC] p-3 rounded-xl border border-slate-200/60 text-center">
                      <div className="p-1">
                        <div className="flex items-center justify-center gap-1 text-[#00235A] font-extrabold text-base">
                          <Video className="w-3.5 h-3.5 text-[#0CBF83]" />
                          <span>{pkg.metrics.videos}</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-medium block">
                          Short Videos
                        </span>
                      </div>

                      <div className="p-1 border-x border-slate-200/70">
                        <div className="flex items-center justify-center gap-1 text-[#00235A] font-extrabold text-base">
                          <Image className="w-3.5 h-3.5 text-[#0CBF83]" />
                          <span>{pkg.metrics.creatives}</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-medium block">
                          Creatives
                        </span>
                      </div>

                      <div className="p-1">
                        <div className="flex items-center justify-center gap-1 text-[#00235A] font-extrabold text-base">
                          <Globe className="w-3.5 h-3.5 text-[#0CBF83]" />
                          <span>{pkg.metrics.platformCount}</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-medium block">
                          Networks
                        </span>
                      </div>
                    </div>

                    {/* Platforms List */}
                    <div className="mt-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Supported Platforms
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.platforms.map((platform, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-[#00235A] border border-slate-200/60"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="mt-6 pt-5 border-t border-slate-100">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Monthly Deliverables
                      </div>
                      <ul className="space-y-2.5">
                        {pkg.deliverables.map((item, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 leading-snug"
                          >
                            <div className="w-4 h-4 rounded-full bg-[#0CBF83]/15 text-[#0CBF83] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                            <span className="font-normal">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card CTA Button */}
                  <div className="mt-8 pt-5 border-t border-slate-100">
                    <button
                      onClick={() => onSelectPlan(pkg.id)}
                      className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm shadow-sm transition-all duration-150 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                        isRec
                          ? 'bg-[#0CBF83] hover:bg-[#0aa571] text-white focus-visible:ring-[#0CBF83]'
                          : 'bg-[#00235A] hover:bg-[#001a43] text-white focus-visible:ring-[#00235A]'
                      }`}
                    >
                      <span>{pkg.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-center text-[11px] text-slate-400 mt-2">
                      Pre-selects this plan in the inquiry form
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Side-by-Side Comparison Matrix */}
        {viewMode === 'matrix' && (
          <div className="mt-12 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#00235A] text-white">
                    <th className="p-4 sm:p-5 text-sm font-bold w-1/4">Key Features & Metrics</th>
                    {PRICING_PACKAGES.map((pkg) => (
                      <th key={pkg.id} className="p-4 sm:p-5 text-center w-1/4">
                        <div className="text-base font-extrabold">{pkg.name}</div>
                        <div className="text-xs text-[#0CBF83] font-semibold mt-0.5">
                          {pkg.priceFormatted} {pkg.cadence}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                  <tr className="bg-slate-50/70 font-semibold text-[#00235A]">
                    <td className="p-4">Short-Form Videos</td>
                    <td className="p-4 text-center font-bold">12 Videos</td>
                    <td className="p-4 text-center font-bold text-[#0CBF83] bg-[#0CBF83]/5">15 Videos</td>
                    <td className="p-4 text-center font-bold">20 Videos</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#00235A]">Custom Social Creatives</td>
                    <td className="p-4 text-center font-bold">3 Creatives</td>
                    <td className="p-4 text-center font-bold text-[#0CBF83] bg-[#0CBF83]/5">5 Creatives</td>
                    <td className="p-4 text-center font-bold">10 Creatives</td>
                  </tr>
                  <tr className="bg-slate-50/70">
                    <td className="p-4 font-semibold text-[#00235A]">Supported Platforms</td>
                    <td className="p-4 text-center">Facebook, IG, YouTube</td>
                    <td className="p-4 text-center font-semibold text-[#00235A] bg-[#0CBF83]/5">
                      Facebook, IG, YouTube, TikTok
                    </td>
                    <td className="p-4 text-center font-semibold text-[#00235A]">
                      Facebook, IG, YouTube, TikTok, GMB
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#00235A]">Paid Ads Management</td>
                    <td className="p-4 text-center">Basic Meta Ads Setup & Monitoring</td>
                    <td className="p-4 text-center bg-[#0CBF83]/5">Meta Ads Lead-Gen & Weekly Optimization</td>
                    <td className="p-4 text-center">Meta Ads + Retargeting & Creative Testing</td>
                  </tr>
                  <tr className="bg-slate-50/70">
                    <td className="p-4 font-semibold text-[#00235A]">Monthly Content Calendar</td>
                    <td className="p-4 text-center">Included</td>
                    <td className="p-4 text-center bg-[#0CBF83]/5">Included with Publishing Schedule</td>
                    <td className="p-4 text-center">Advanced Strategy & Content Scheduling</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#00235A]">Community Management</td>
                    <td className="p-4 text-center text-slate-400">—</td>
                    <td className="p-4 text-center bg-[#0CBF83]/5">Basic Inquiry Coordination</td>
                    <td className="p-4 text-center font-semibold text-[#00235A]">Priority Coordination</td>
                  </tr>
                  <tr className="bg-slate-50/70">
                    <td className="p-4 font-semibold text-[#00235A]">Performance Reporting</td>
                    <td className="p-4 text-center">Standard Monthly Report</td>
                    <td className="p-4 text-center bg-[#0CBF83]/5">Monthly Reporting & Tracking</td>
                    <td className="p-4 text-center">Comprehensive Report + Strategy Review</td>
                  </tr>
                  <tr>
                    <td className="p-4">Action</td>
                    {PRICING_PACKAGES.map((pkg) => (
                      <td key={pkg.id} className="p-4 text-center">
                        <button
                          onClick={() => onSelectPlan(pkg.id)}
                          className="px-4 py-2 rounded-lg bg-[#00235A] hover:bg-[#001a43] text-white text-xs font-bold transition-colors"
                        >
                          {pkg.ctaText}
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Pricing Transparency Note */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-500 leading-relaxed">
            * All packages are billed monthly in Pakistani Rupees (PKR). Advertising budgets are paid directly by the client to advertising platforms.
          </p>
        </div>
      </div>
    </section>
  );
};
