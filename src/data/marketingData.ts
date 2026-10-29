export interface Deliverable {
  text: string;
}

export interface PricingPlan {
  id: 'startup' | 'business' | 'enterprise';
  name: string;
  priceFormatted: string;
  priceNumber: number;
  cadence: string;
  isRecommended?: boolean;
  tagline: string;
  metrics: {
    videos: number;
    creatives: number;
    platformCount: number;
  };
  platforms: string[];
  deliverables: string[];
  ctaText: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverablesSummary: string[];
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface PaymentTerm {
  title: string;
  description: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'smm',
    title: 'Social Media Management',
    description:
      'Professional page management, content publishing, profile optimization, and consistent brand communication.',
    deliverablesSummary: [
      'Profile setup & optimization',
      'Consistent posting schedule',
      'Unified brand voice',
    ],
  },
  {
    id: 'content',
    title: 'Content Creation',
    description:
      'Engaging short-form videos, custom graphics, creative campaigns, and brand-focused visuals.',
    deliverablesSummary: [
      'Short-form vertical video editing',
      'Custom graphics & carousels',
      'Brand aesthetic alignment',
    ],
  },
  {
    id: 'copywriting',
    title: 'Copywriting & Content Strategy',
    description:
      'Captivating captions, content calendars, messaging, hashtag optimization, and audience-focused planning.',
    deliverablesSummary: [
      'Persuasive copy & captions',
      'Strategic monthly calendars',
      'Targeted hashtag sets',
    ],
  },
  {
    id: 'advertising',
    title: 'Paid Advertising',
    description:
      'Facebook and Instagram advertising setup, campaign management, audience targeting, and optimization.',
    deliverablesSummary: [
      'Meta ad campaign structuring',
      'Audience research & targeting',
      'Budget & performance monitoring',
    ],
  },
  {
    id: 'platform-management',
    title: 'Platform Management',
    description:
      'Consistent publishing and profile management across supported social media platforms.',
    deliverablesSummary: [
      'Cross-platform publishing',
      'Profile assets & highlights',
      'Channel consistency',
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics & Reporting',
    description:
      'Monthly performance reports, campaign insights, engagement tracking, and recommendations.',
    deliverablesSummary: [
      'Monthly comprehensive metrics',
      'Engagement & reach tracking',
      'Actionable recommendations',
    ],
  },
];

export const PRICING_PACKAGES: PricingPlan[] = [
  {
    id: 'startup',
    name: 'Startup',
    priceFormatted: 'PKR 60,000',
    priceNumber: 60000,
    cadence: '/ month',
    tagline: 'Ideal foundation for early-stage ventures and small businesses building their online presence.',
    metrics: {
      videos: 12,
      creatives: 3,
      platformCount: 3,
    },
    platforms: ['Facebook', 'Instagram', 'YouTube'],
    deliverables: [
      '12 short-form videos',
      '3 custom social media creatives',
      'Captivating copywriting',
      'Custom visual creation',
      'Paid ads management',
      'Page and profile management',
      'Hashtag optimization',
      'Monthly content calendar',
      '1 branded social media cover design',
      'YouTube Shorts publishing and basic channel management',
      'Basic Meta Ads setup and monitoring',
      'Standard monthly performance report',
    ],
    ctaText: 'Choose Startup',
  },
  {
    id: 'business',
    name: 'Business',
    priceFormatted: 'PKR 80,000',
    priceNumber: 80000,
    cadence: '/ month',
    isRecommended: true,
    tagline: 'Comprehensive growth and lead-generation package for established brands and scaling companies.',
    metrics: {
      videos: 15,
      creatives: 5,
      platformCount: 4,
    },
    platforms: ['Facebook', 'Instagram', 'YouTube', 'TikTok'],
    deliverables: [
      '15 short-form videos',
      '5 custom social media creatives',
      'Captivating copywriting and brand-focused content',
      'Custom visual creation',
      'Paid ads management and campaign optimization',
      'Page and profile management across four platforms',
      'Hashtag optimization',
      'Monthly content calendar and publishing schedule',
      '1 branded social media cover design',
      'YouTube Shorts and TikTok publishing',
      'Meta Ads lead-generation campaign management',
      'Audience targeting based on business goals and platform capabilities',
      'Weekly campaign monitoring and optimization',
      'Performance tracking and monthly reporting',
      'Basic community management and inquiry coordination',
    ],
    ctaText: 'Choose Business',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    priceFormatted: 'PKR 120,000',
    priceNumber: 120000,
    cadence: '/ month',
    tagline: 'Maximum market authority, retargeting testing, and priority community coordination.',
    metrics: {
      videos: 20,
      creatives: 10,
      platformCount: 5,
    },
    platforms: ['Facebook', 'Instagram', 'YouTube', 'TikTok', 'Google Business Profile (GMB)'],
    deliverables: [
      '20 short-form videos',
      '10 custom social media creatives',
      'Advanced monthly content strategy',
      'Captivating copywriting and brand-focused content',
      'Custom visual creation',
      'Paid ads management and performance optimization',
      'Page and profile management across five platforms',
      'Hashtag optimization and content scheduling',
      'Monthly content calendar',
      '1 branded social media cover design',
      'YouTube Shorts and TikTok publishing',
      'Google Business Profile updates and management',
      'Meta Ads campaign management',
      'Retargeting and creative testing, subject to audience and tracking availability',
      'Performance tracking and campaign analysis',
      'Competitor analysis and monthly strategy review',
      'Priority community management and inquiry coordination',
      'Comprehensive monthly performance report',
    ],
    ctaText: 'Choose Enterprise',
  },
];

export const HOW_IT_WORKS: StepItem[] = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description:
      "Understand the client's business, audience, goals, and requirements.",
  },
  {
    number: '02',
    title: 'Strategy & Creation',
    description:
      'Prepare the content calendar, creative direction, and campaign plan.',
  },
  {
    number: '03',
    title: 'Execution & Publishing',
    description:
      'Create content, manage platforms, and launch approved advertising campaigns.',
  },
  {
    number: '04',
    title: 'Optimization & Reporting',
    description:
      'Monitor performance, improve campaigns, and provide monthly insights.',
  },
];

export const PAYMENT_TERMS: PaymentTerm[] = [
  {
    title: '50% Advance Payment',
    description: 'Required before work begins.',
  },
  {
    title: 'Remaining 50% Payment',
    description: 'Due within 15 calendar days of the project start date.',
  },
  {
    title: 'Monthly Renewal',
    description: 'The next month\'s advance payment is due before the new monthly billing cycle begins.',
  },
  {
    title: 'Client-Owned Accounts',
    description: 'The client provides access to their own advertising accounts and relevant social media profiles.',
  },
  {
    title: 'Client Payment Method',
    description: 'Advertising billing details and payment methods must belong to the client.',
  },
  {
    title: 'Advertising Budget',
    description: 'Separate from the monthly service fee and paid directly by the client to the advertising platforms.',
  },
  {
    title: 'Project Kickoff',
    description: 'Work begins once the advance payment, account access, and required brand assets have been received.',
  },
];

export const PAYMENT_NOTE =
  'Professional photography, external video production, additional production expenses, and advertising spend are excluded unless agreed separately.';

export const INDUSTRIES_LIST = [
  'Startups & Tech',
  'E-Commerce & Retail',
  'Health & Wellness',
  'Real Estate & Construction',
  'Professional & B2B Services',
  'Food, Beverage & Hospitality',
  'Fashion & Lifestyle',
  'Personal Brand & Creator',
  'Manufacturing & Industrial',
  'Other / Emerging Sector',
];
