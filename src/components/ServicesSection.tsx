import React, { useState } from 'react';
import { 
  Share2, 
  Video, 
  FileText, 
  Target, 
  Layers, 
  BarChart3, 
  Check, 
  ArrowRight,
  Briefcase
} from 'lucide-react';
import { SERVICES } from '../data/marketingData';

interface ServicesSectionProps {
  onSelectServiceCTA: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceCTA }) => {
  // Service icons mapping
  const serviceIcons = [
    <Share2 key="smm" className="w-6 h-6 text-[#0CBF83]" />,
    <Video key="content" className="w-6 h-6 text-[#0CBF83]" />,
    <FileText key="copywriting" className="w-6 h-6 text-[#0CBF83]" />,
    <Target key="ads" className="w-6 h-6 text-[#0CBF83]" />,
    <Layers key="platform" className="w-6 h-6 text-[#0CBF83]" />,
    <BarChart3 key="analytics" className="w-6 h-6 text-[#0CBF83]" />,
  ];

  // Industry relevance selector to demonstrate multi-industry suitability
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All Businesses');
  const industryTabs = [
    'All Businesses',
    'Startups & Tech',
    'E-Commerce & Retail',
    'Service Providers',
    'Established Brands',
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0CBF83] mb-2">
            End-To-End Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00235A] tracking-tight">
            Everything You Need to Grow Online
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A complete set of digital marketing services designed to strengthen your online presence and support your business goals.
          </p>
        </div>

        {/* Multi-Industry Suitability Filter / Reassurance */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <div className="text-xs font-semibold text-slate-500 mr-2 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-[#00235A]" />
            <span>Tailored for:</span>
          </div>
          {industryTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedIndustry(tab)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 ${
                selectedIndustry === tab
                  ? 'bg-[#00235A] text-white shadow-xs'
                  : 'bg-[#F5F8FC] text-slate-600 hover:text-[#00235A] hover:bg-slate-200/60'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Six Service Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group bg-[#F5F8FC]/50 hover:bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-[#0CBF83]/50 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header with icon and index */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 group-hover:border-[#0CBF83]/30 flex items-center justify-center shadow-xs transition-colors">
                    {serviceIcons[index]}
                  </div>
                  <span className="text-xs font-bold text-slate-400 group-hover:text-[#00235A] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#00235A] tracking-tight group-hover:text-[#00235A] transition-colors">
                  {service.title}
                </h3>

                {/* Description - EXACT copy from prompt */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Deliverable Highlights */}
                <div className="mt-6 pt-5 border-t border-slate-200/70">
                  <ul className="space-y-2">
                    {service.deliverablesSummary.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-4 h-4 text-[#0CBF83] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-7 pt-4">
                <button
                  onClick={onSelectServiceCTA}
                  className="w-full py-2.5 px-4 rounded-lg bg-white group-hover:bg-[#00235A] text-[#00235A] group-hover:text-white border border-slate-200 group-hover:border-[#00235A] text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-200 shadow-2xs"
                >
                  <span>Included in Monthly Packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Informative reassurance bar */}
        <div className="mt-14 p-6 rounded-2xl bg-[#F5F8FC] border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#00235A] text-white flex items-center justify-center shrink-0">
              <Check className="w-5 h-5 text-[#0CBF83]" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#00235A]">
                Unified Execution Across All Channels
              </div>
              <div className="text-xs text-slate-600">
                All six disciplines are combined into structured, predictable monthly plans with no hidden agency retainers.
              </div>
            </div>
          </div>
          <button
            onClick={onSelectServiceCTA}
            className="shrink-0 px-5 py-2.5 rounded-lg bg-[#0CBF83] hover:bg-[#0aa571] text-white text-xs font-bold shadow-xs transition-colors"
          >
            Compare All Packages
          </button>
        </div>
      </div>
    </section>
  );
};
