export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'performance' | 'security' | 'intelligence';
  badge: string;
}

export interface Step {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  codeSnippet: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  metrics: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  priceMonthly: number;
  priceAnnual: number;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

export const statsData: StatItem[] = [
  { value: '99.999%', label: 'High Availability', sublabel: 'Enterprise multi-region SLA' },
  { value: '< 4ms', label: 'Global Edge Latency', sublabel: 'P99 response across 180+ PoPs' },
  { value: '10x', label: 'Faster Deployments', sublabel: 'From commit to production mesh' },
  { value: '62%', label: 'Cloud Cost Reduction', sublabel: 'Autonomous cluster rightsizing' },
];

export const trustedCompanies = [
  { name: 'HyperScale', symbol: '▲' },
  { name: 'NeuroCloud', symbol: '◈' },
  { name: 'Vortex Data', symbol: '⬡' },
  { name: 'ApexSystems', symbol: '◆' },
  { name: 'AetherAI', symbol: '⨁' },
  { name: 'QuantumForge', symbol: '❖' },
];

export const featuresData: Feature[] = [
  {
    id: 'autonomic-mesh',
    title: 'Autonomous Mesh Balancing',
    description: 'Dynamic traffic re-routing and workload distribution powered by deep reinforcement models with zero packet drops.',
    iconName: 'Cpu',
    category: 'performance',
    badge: 'Ultra Fast',
  },
  {
    id: 'neural-synthesis',
    title: 'Real-Time Neural Synthesis',
    description: 'Instant translation of declarative deployment specs into hardened, micro-isolated cloud containers across multi-clouds.',
    iconName: 'Zap',
    category: 'intelligence',
    badge: 'AI Native',
  },
  {
    id: 'zero-trust',
    title: 'Zero-Trust Perimeter Shield',
    description: 'Hardware-verified cryptographic identities, automated mTLS rotation, and continuous posture verification on every hop.',
    iconName: 'ShieldCheck',
    category: 'security',
    badge: 'SOC2 & HIPAA',
  },
  {
    id: 'predictive-cost',
    title: 'Predictive FinOps Optimizer',
    description: 'Preemptively spots compute inefficiencies and autotunes reserved instances to slash cloud expenses by over 60%.',
    iconName: 'TrendingUp',
    category: 'performance',
    badge: 'Auto ROI',
  },
  {
    id: 'instant-observability',
    title: 'Universal Telemetry Engine',
    description: 'Nanosecond distributed tracing, unified OpenTelemetry ingestion, and real-time anomaly detection with zero sampling loss.',
    iconName: 'Activity',
    category: 'intelligence',
    badge: 'Zero Overhead',
  },
  {
    id: 'self-healing',
    title: 'Autonomous Self-Healing',
    description: 'Instant rollback, canary isolating, and memory leak mitigation executing in milliseconds without human intervention.',
    iconName: 'RefreshCw',
    category: 'security',
    badge: 'Resilient',
  },
];

export const stepsData: Step[] = [
  {
    step: '01',
    title: 'Connect Repository & Cloud',
    subtitle: 'Zero Configuration Setup',
    description: 'Link your GitHub or GitLab repositories and authenticate your AWS, GCP, or Azure clusters in just 3 clicks.',
    codeSnippet: 'npx @synthex/cli init --provider=hybrid-cloud',
    iconName: 'GitBranch',
  },
  {
    step: '02',
    title: 'Autonomic Architecture Mapping',
    subtitle: 'Deep Dependency Discovery',
    description: 'Synthex inspects runtime binaries, container manifests, and database layers to synthesize an optimal topology graph.',
    codeSnippet: 'synthex analyze --target=production-mesh',
    iconName: 'Layers',
  },
  {
    step: '03',
    title: 'One-Click Global Edge Rollout',
    subtitle: 'Distributed Worldwide Routing',
    description: 'Instantly push your services across 180+ global edge locations with automatic TLS termination and anycast failover.',
    codeSnippet: 'synthex deploy --canary=10% --auto-promote',
    iconName: 'Globe',
  },
  {
    step: '04',
    title: 'Continuous Autonomous Tuning',
    subtitle: 'Self-Optimizing Reliability',
    description: 'Our neural agent tracks latency, throughput, and memory consumption 24/7, continuously tuning cluster resources.',
    codeSnippet: 'status: 100% HEALTHY • 0.2ms latency • 0 errors',
    iconName: 'Sparkles',
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Elena Rostova',
    role: 'Chief Technology Officer',
    company: 'FinPulse Systems',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    content: 'Synthex has fundamentally transformed our release cycle. Deployments that previously required 4 hours of coordination now occur seamlessly in under 90 seconds with zero downtime.',
    metrics: '99.999% uptime achieved',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcus Vance',
    role: 'Head of Infrastructure',
    company: 'Nexus Scale Dynamics',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    content: 'The autonomous FinOps optimization alone saved our engineering department over $340,000 in cloud compute during Q3. The level of real-time intelligence is unmatched in the industry.',
    metrics: '64% infrastructure cost cut',
    rating: 5,
  },
  {
    id: '3',
    name: 'Dr. Sarah Lin',
    role: 'VP of Engineering',
    company: 'OmniAI Labs',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    content: 'The zero-trust security perimeter and instant self-healing give our board complete peace of mind. We passed our SOC2 Type II audit in record time thanks to Synthex’s telemetry.',
    metrics: 'Passed SOC2 in 14 days',
    rating: 5,
  },
];

export const pricingPlansData: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Developer',
    tagline: 'Ideal for early-stage products, developers, and agile prototypes.',
    priceMonthly: 29,
    priceAnnual: 24,
    features: [
      'Up to 5 production services',
      'Automated CI/CD deployment mesh',
      'Global CDN & Edge routing (50 PoPs)',
      'Community Slack support',
      '7-day metrics retention',
      'Automated SSL & mTLS certificates',
    ],
    ctaText: 'Start 14-Day Trial',
  },
  {
    id: 'pro',
    name: 'Professional Scale',
    tagline: 'Best for growing businesses with high traffic and mission-critical SLAs.',
    priceMonthly: 89,
    priceAnnual: 69,
    isPopular: true,
    badge: 'Most Popular',
    features: [
      'Unlimited microservices & clusters',
      'Autonomous Neural self-healing agent',
      'Worldwide Edge mesh (180+ PoPs)',
      'Sub-millisecond latency routing',
      'FinOps auto-cost optimization',
      '90-day granular telemetry retention',
      'Priority 24/7 engineering SLA support',
      'Single Sign-On (SAML / Okta / Azure AD)',
    ],
    ctaText: 'Claim Pro Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise Cloud',
    tagline: 'Custom architectures for enterprise security, bespoke VPCs, and compliance.',
    priceMonthly: 249,
    priceAnnual: 199,
    badge: 'Enterprise Grade',
    features: [
      'Dedicated private cloud VPC deployment',
      'Custom hardware security module (HSM)',
      '99.999% uptime guarantee with financial penalty',
      'Dedicated Solutions Architect & Technical Account Mgr',
      'Unlimited telemetry & audit log archiving',
      'Custom data sovereignty & HIPAA / FedRAMP ready',
      'Bespoke AI model fine-tuning for your topology',
    ],
    ctaText: 'Contact Enterprise Sales',
  },
];

export const faqsData = [
  {
    q: 'How does Synthex integrate with existing AWS or Kubernetes stacks?',
    a: 'Synthex connects as an intelligent sidecar control-plane via standard Helm charts, Terraform providers, or our single-line CLI. There is zero vendor lock-in and zero requirement to rewrite your container images.',
  },
  {
    q: 'What makes Synthex different from standard cloud dashboards?',
    a: 'Traditional dashboards only display metrics after failures happen. Synthex employs continuous neural feedback loops to predict surges, heal broken pods, and dynamically route around outages autonomously.',
  },
  {
    q: 'Is there a free trial or proof-of-concept period available?',
    a: 'Yes, every tier includes a full 14-day unrestricted trial with access to our global edge mesh and priority technical onboarding assistance.',
  },
  {
    q: 'How does the billing discount for annual subscriptions work?',
    a: 'Selecting annual billing grants an immediate 20% discount across all tiers, invoiced upfront, along with complimentary architecture reviews.',
  },
];
