import React from 'react';
import { Search, Compass, Rocket, BarChart, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS } from '../data/marketingData';

interface HowItWorksSectionProps {
  onGetStarted: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onGetStarted }) => {
  const stepIcons = [
    <Search key="1" className="w-6 h-6 text-[#0CBF83]" />,
    <Compass key="2" className="w-6 h-6 text-[#0CBF83]" />,
    <Rocket key="3" className="w-6 h-6 text-[#0CBF83]" />,
    <BarChart key="4" className="w-6 h-6 text-[#0CBF83]" />,
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0CBF83] mb-2">
            Structured Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00235A] tracking-tight">
            From Strategy to Execution
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A reliable 4-stage process ensuring consistent creative quality, timely publishing, and performance tracking.
          </p>
        </div>

        {/* 4-Step Cards Layout / Progressive Timeline */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-[#F5F8FC]/60 rounded-2xl p-7 border border-slate-200/80 hover:border-[#0CBF83]/50 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              {/* Connector line for desktop (between cards) */}
              {index < 3 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-200 text-slate-400 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}

              <div>
                {/* Step badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:border-[#0CBF83]/30 transition-colors">
                    {stepIcons[index]}
                  </div>
                  <span className="font-extrabold text-2xl text-[#00235A]/20 group-hover:text-[#0CBF83] transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Step Title - exact copy */}
                <h3 className="text-lg font-bold text-[#00235A] tracking-tight">
                  {step.title}
                </h3>

                {/* Step Description - exact copy */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom indicator */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-[#00235A]">Phase 0{index + 1}</span>
                <span className="text-[#0CBF83] font-medium">Clear milestones</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-14 text-center">
          <button
            onClick={onGetStarted}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00235A] hover:bg-[#001a43] text-white font-semibold text-sm shadow-sm transition-all"
          >
            <span>Start Your Discovery Process</span>
            <ArrowRight className="w-4 h-4 text-[#0CBF83]" />
          </button>
        </div>
      </div>
    </section>
  );
};
