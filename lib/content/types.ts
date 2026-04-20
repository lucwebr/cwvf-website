export type NavItem = {
  label: string;
  href: string;
};

export type ActionLink = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

export type SeoConfig = {
  title: string;
  description: string;
  path: string;
};

export type SiteSettings = {
  brandName: string;
  companyName: string;
  legalName: string;
  legalEntities: string[];
  tagline: string;
  brandIntro: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  addressLines: string[];
  openingHours: string[];
  navigation: NavItem[];
  footerServices: NavItem[];
  primaryCta: ActionLink;
  secondaryCta: ActionLink;
  seoTitleSuffix: string;
  seoDescription: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type ReviewSummary = {
  provider: string;
  ratingLabel: string;
  totalReviews: number;
  recentReviews: number;
  recentWindow: string;
  award: string;
  updatedLabel: string;
  sourceUrl: string;
};

export type HomePage = {
  eyebrow: string;
  title: string;
  intro: string;
  trustHighlights: string[];
  featuredServiceSlugs: string[];
  advisoryPrinciples: string[];
  processSteps: ProcessStep[];
  reviewSummary: ReviewSummary;
  seo: SeoConfig;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  kicker: string;
  summary: string;
  heroText: string;
  audience: string;
  highlights: string[];
  benefits: string[];
  process: string[];
  partner?: {
    eyebrow: string;
    title: string;
    description: string;
    logoSrc: string;
    logoAlt: string;
    href?: string;
  };
  seo: SeoConfig;
  faqSlugs: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  focusAreas: string[];
  initials: string;
  imageSrc?: string;
};

export type Testimonial = {
  quote: string;
  authorName: string;
  authorRole: string;
  location: string;
  source?: string;
};

export type FaqItem = {
  slug: string;
  question: string;
  answer: string;
  category: string;
};

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export type LegalPage = {
  slug: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  seo: SeoConfig;
};

export type SiteContent = {
  siteSettings: SiteSettings;
  homePage: HomePage;
  services: Service[];
  teamMembers: TeamMember[];
  testimonials: Testimonial[];
  faqs: FaqItem[];
  legalPages: LegalPage[];
};
