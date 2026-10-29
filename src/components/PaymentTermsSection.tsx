import React from 'react';
import { 
  CreditCard, 
  Clock, 
  Repeat, 
  ShieldCheck, 
  Wallet, 
  PieChart, 
  PlayCircle, 
  AlertCircle 
} from 'lucide-react';
import { PAYMENT_TERMS, PAYMENT_NOTE } from '../data/marketingData';

export const PaymentTermsSection: React.FC = () => {
  const termIcons = [
    <CreditCard key="1" className="w-5 h-5 text-[#0CBF83]" />,
    <Clock key="2" className="w-5 h-5 text-[#0CBF83]" />,
    <Repeat key="3" className="w-5 h-5 text-[#0CBF83]" />,
    <ShieldCheck key="4" className="w-5 h-5 text-[#0CBF83]" />,
    <Wallet key="5" className="w-5 h-5 text-[#0CBF83]" />,
    <PieChart key="6" className="w-5 h-5 text-[#0CBF83]" />,
    <PlayCircle key="7" className="w-5 h-5 text-[#0CBF83]" />,
  ];

  return (
    <section id="terms" className="py-20 md:py-28 bg-[#F5F8FC] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0CBF83] mb-2">
            Contractual Clarity
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00235A] tracking-tight">
            Simple & Transparent Payment Terms
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Clear guidelines for payments, client account ownership, and project kickoff so expectations remain transparent from day one.
          </p>
        </div>

        {/* Payment Terms Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAYMENT_TERMS.map((term, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-[#0CBF83]/50 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F8FC] border border-slate-200/60 flex items-center justify-center">
                    {termIcons[index]}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400">
                    Term 0{index + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#00235A] tracking-tight">
                  {term.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {term.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-400">
                <span>Standard Agreement</span>
                <span className="text-[#0CBF83] font-semibold">Active policy</span>
              </div>
            </div>
          ))}

          {/* Quick Recap Card */}
          <div className="bg-[#00235A] text-white rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#0CBF83] mb-2">
                Client Advantage
              </div>
              <h3 className="text-lg font-bold">100% Account Ownership</h3>
              <p className="mt-2 text-xs text-slate-200 leading-relaxed">
                You retain full administrative control of your ad accounts, pixel data, custom audiences, and social media pages at all times.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-300">
              No locked accounts or proprietary barriers.
            </div>
          </div>
        </div>

        {/* Exclusions Notice Banner (exact copy from prompt) */}
        <div className="mt-10 p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 flex items-start gap-3.5 max-w-4xl mx-auto shadow-2xs">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <span className="font-bold">Important Notice: </span>
            {PAYMENT_NOTE}
          </div>
        </div>
      </div>
    </section>
  );
};
