import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  Mail, 
  Building2, 
  User, 
  MessageSquare, 
  Copy, 
  Check, 
  Sparkles,
  ExternalLink,
  Code
} from 'lucide-react';
import { INDUSTRIES_LIST, PRICING_PACKAGES } from '../data/marketingData';

interface ContactSectionProps {
  selectedPackage: 'startup' | 'business' | 'enterprise';
  onPackageChange: (pkg: 'startup' | 'business' | 'enterprise') => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  industry: string;
  preferredPackage: 'startup' | 'business' | 'enterprise';
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  industry?: string;
  message?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedPackage,
  onPackageChange,
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    industry: INDUSTRIES_LIST[0],
    preferredPackage: selectedPackage,
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [copied, setCopied] = useState(false);
  const [showEndpointGuide, setShowEndpointGuide] = useState(false);

  // Sync internal form package with selectedPackage prop
  useEffect(() => {
    setFormData((prev) => ({ ...prev, preferredPackage: selectedPackage }));
  }, [selectedPackage]);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (minimum 2 characters)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^[+0-9\s-]{7,20}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone or WhatsApp number (digits & country code)';
    }

    if (!formData.businessName.trim()) {
      errs.businessName = 'Please enter your business or company name';
    }

    if (!formData.industry) {
      errs.industry = 'Please select your industry';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide details about your requirements (at least 10 characters)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate interactive submission state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleCopySummary = () => {
    if (!submittedData) return;
    const currentPkg = PRICING_PACKAGES.find((p) => p.id === submittedData.preferredPackage);
    const summaryText = `NEW INQUIRY SUMMARY:
Full Name: ${submittedData.fullName}
Email: ${submittedData.email}
Phone / WhatsApp: ${submittedData.phone}
Business: ${submittedData.businessName}
Industry: ${submittedData.industry}
Package: ${currentPkg?.name} (${currentPkg?.priceFormatted} / month)
Message: ${submittedData.message}`;

    navigator.clipboard.writeText(summaryText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const getWhatsAppShareUrl = () => {
    if (!submittedData) return '#';
    const currentPkg = PRICING_PACKAGES.find((p) => p.id === submittedData.preferredPackage);
    const text = `Hi, I would like to inquire about the ${currentPkg?.name} Package (${currentPkg?.priceFormatted}/mo).\n\nName: ${submittedData.fullName}\nBusiness: ${submittedData.businessName}\nIndustry: ${submittedData.industry}\nRequirements: ${submittedData.message}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0CBF83] mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00235A] tracking-tight">
            Let&apos;s Grow Your Business Together
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Tell us about your business and goals. We&apos;ll help you choose the right package for your needs.
          </p>
        </div>

        {/* Form Container */}
        <div className="mt-12 bg-[#F5F8FC] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          {!submittedData ? (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Package Selector (synced with pricing section) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#00235A] mb-2">
                  Preferred Package <span className="text-[#0CBF83]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PRICING_PACKAGES.map((pkg) => {
                    const isSelected = formData.preferredPackage === pkg.id;
                    return (
                      <button
                        type="button"
                        key={pkg.id}
                        onClick={() => {
                          onPackageChange(pkg.id);
                          setFormData({ ...formData, preferredPackage: pkg.id });
                        }}
                        className={`p-3.5 rounded-xl border text-left transition-all duration-150 flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#00235A] text-white border-[#00235A] shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="font-bold text-sm">{pkg.name}</span>
                          {isSelected && <Check className="w-4 h-4 text-[#0CBF83]" />}
                        </div>
                        <span
                          className={`text-xs mt-1 font-semibold ${
                            isSelected ? 'text-[#0CBF83]' : 'text-slate-500'
                          }`}
                        >
                          {pkg.priceFormatted}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 1: Full Name & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold text-[#00235A] mb-1.5"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Tariq Ahmed"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white text-slate-800 text-sm border focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-slate-200 focus:border-[#00235A] focus:ring-[#00235A]/10'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-xs font-bold text-[#00235A] mb-1.5"
                  >
                    Business Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="businessName"
                      type="text"
                      placeholder="e.g. Apex Apparel / NextGen Tech"
                      value={formData.businessName}
                      onChange={(e) =>
                        setFormData({ ...formData, businessName: e.target.value })
                      }
                      className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white text-slate-800 text-sm border focus:outline-none focus:ring-2 transition-all ${
                        errors.businessName
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-slate-200 focus:border-[#00235A] focus:ring-[#00235A]/10'
                      }`}
                    />
                  </div>
                  {errors.businessName && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.businessName}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Email & Phone/WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-[#00235A] mb-1.5"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white text-slate-800 text-sm border focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-slate-200 focus:border-[#00235A] focus:ring-[#00235A]/10'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold text-[#00235A] mb-1.5"
                  >
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white text-slate-800 text-sm border focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-slate-200 focus:border-[#00235A] focus:ring-[#00235A]/10'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Row 3: Industry Dropdown */}
              <div>
                <label
                  htmlFor="industry"
                  className="block text-xs font-bold text-[#00235A] mb-1.5"
                >
                  Industry <span className="text-red-500">*</span>
                </label>
                <select
                  id="industry"
                  value={formData.industry}
                  onChange={(e) =>
                    setFormData({ ...formData, industry: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white text-slate-800 text-sm border border-slate-200 focus:outline-none focus:border-[#00235A] focus:ring-2 focus:ring-[#00235A]/10"
                >
                  {INDUSTRIES_LIST.map((ind, i) => (
                    <option key={i} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 4: Message / Project Requirements */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-[#00235A] mb-1.5"
                >
                  Message / Project Requirements <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Briefly describe your current social media goals, current platforms, and timeline..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white text-slate-800 text-sm border focus:outline-none focus:ring-2 transition-all ${
                      errors.message
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-slate-200 focus:border-[#00235A] focus:ring-[#00235A]/10'
                    }`}
                  />
                </div>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#0CBF83] hover:bg-[#0aa571] text-white font-bold text-sm shadow-sm transition-all duration-150 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0CBF83] disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Validating inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Clearly labeled demo/real endpoint notice */}
              <div className="pt-2 text-center">
                <p className="text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Notice:</span> Interactive client submission preview. Your inquiry details will be formatted for instant WhatsApp coordination and direct copy.
                </p>
              </div>
            </form>
          ) : (
            /* Submission Success & Review State */
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 text-center animate-in fade-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-[#0CBF83]/15 text-[#0CBF83] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#0CBF83]">
                Inquiry Validated & Formatted
              </span>
              <h3 className="text-2xl font-extrabold text-[#00235A] mt-1">
                Thank You, {submittedData.fullName}!
              </h3>
              <p className="mt-2 text-sm text-slate-600 max-w-lg mx-auto">
                Your project requirements for <span className="font-semibold text-[#00235A]">{submittedData.businessName}</span> have been structured for the{' '}
                <span className="font-bold text-[#0CBF83]">
                  {PRICING_PACKAGES.find((p) => p.id === submittedData.preferredPackage)?.name} Package
                </span>.
              </p>

              {/* Inquiry Details Summary Box */}
              <div className="mt-6 p-4 rounded-xl bg-[#F5F8FC] border border-slate-200 text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-slate-200/70 pb-1.5">
                  <span className="text-slate-500">Selected Plan:</span>
                  <span className="font-bold text-[#00235A]">
                    {PRICING_PACKAGES.find((p) => p.id === submittedData.preferredPackage)?.name} (
                    {PRICING_PACKAGES.find((p) => p.id === submittedData.preferredPackage)?.priceFormatted}/mo)
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200/70 pb-1.5">
                  <span className="text-slate-500">Industry:</span>
                  <span className="font-semibold text-slate-700">{submittedData.industry}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/70 pb-1.5">
                  <span className="text-slate-500">Contact Email:</span>
                  <span className="font-semibold text-slate-700">{submittedData.email}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/70 pb-1.5">
                  <span className="text-slate-500">Phone / WhatsApp:</span>
                  <span className="font-semibold text-slate-700">{submittedData.phone}</span>
                </div>
                <div className="pt-1">
                  <span className="text-slate-500 block mb-1">Message:</span>
                  <p className="text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/70 text-xs italic">
                    &ldquo;{submittedData.message}&rdquo;
                  </p>
                </div>
              </div>

              {/* Interactive Actions */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={getWhatsAppShareUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0CBF83] hover:bg-[#0aa571] text-white text-xs font-bold transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopySummary}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-[#00235A] hover:bg-slate-50 text-xs font-bold transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-[#0CBF83]" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                </button>

                <button
                  onClick={() => setSubmittedData(null)}
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-slate-500 hover:text-slate-800 text-xs font-semibold"
                >
                  Edit Inquiry
                </button>
              </div>

              {/* Easy Way to Connect Real Backend Endpoint */}
              <div className="mt-8 pt-5 border-t border-slate-100 text-left">
                <button
                  type="button"
                  onClick={() => setShowEndpointGuide(!showEndpointGuide)}
                  className="text-xs text-slate-500 hover:text-[#00235A] flex items-center gap-1.5 font-semibold mx-auto"
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>{showEndpointGuide ? 'Hide' : 'How to connect a real form service / webhook'}</span>
                </button>

                {showEndpointGuide && (
                  <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                    <p className="font-semibold text-[#00235A]">
                      Integration Options:
                    </p>
                    <p>
                      1. <strong>Formspree / Basin / Web3Forms:</strong> Replace the submission handler with a POST request to your endpoint URL.
                    </p>
                    <p>
                      2. <strong>Express Backend / Webhook:</strong> Use <code>fetch(&apos;/api/inquiry&apos;, &#123; method: &apos;POST&apos;, body: JSON.stringify(formData) &#125;)</code>.
                    </p>
                    <p>
                      3. <strong>Zapier / Make Webhook:</strong> Directly stream leads to your CRM, Google Sheets, or Slack notification channel.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
