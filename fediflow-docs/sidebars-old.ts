import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Manually created sidebar for FediFlow documentation
  tutorialSidebar: [
    'intro',
    'executive-summary',
    'market-analysis',
    'product-strategy',
    {
      type: 'category',
      label: 'Core Platform Features',
      items: [
        'member-content-economy',
        'creator-implementation-guide',
        'integration-summary',
      ],
    },
    {
      type: 'category',
      label: 'Technical Architecture',
      items: [
        'fediflow_technical_design',
        'technical-implementation-details',
      ],
    },
    {
      type: 'category',
      label: 'Ecosystem Architecture',
      items: [
        'ecosystem-architecture/index',
        'ecosystem-architecture/multi-layer-architecture',
        'ecosystem-architecture/industry-specific-modules',
        'ecosystem-architecture/integration-api-ecosystem',
        'ecosystem-architecture/advanced-technology-architecture',
      ],
    },
    {
      type: 'category',
      label: 'Academic Services',
      items: [
        'academic-services/index',
        'academic-services/community-services-architecture',
        'academic-services/student-lifecycle-management',
        'academic-services/faculty-research-collaboration',
        'academic-services/alumni-engagement-advancement',
        'academic-services/ai-powered-academic-services',
      ],
    },
    {
      type: 'category',
      label: 'Industry Modules',
      items: [
        'industry-modules/index',
        {
          type: 'category',
          label: 'Academic Excellence Module',
          items: [
            'industry-modules/academic/index',
            'industry-modules/academic/academic-excellence-module',
            'industry-modules/academic/academic-roi-value-propositions',
            'industry-modules/academic/academic-onboarding-platform',
            'industry-modules/academic/academic-value-added-services',
          ],
        },
        {
          type: 'category',
          label: 'Community Institutions Module',
          items: [
            'industry-modules/community/index',
            'industry-modules/community/community-engagement-platform',
            'industry-modules/community/civic-participation-tools',
            'industry-modules/community/resource-sharing-networks',
            'industry-modules/community/volunteer-coordination-systems',
            'industry-modules/community/cultural-preservation-tools',
            'industry-modules/community/interfaith-collaboration',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Revenue & Monetization',
      items: [
        'monetization-strategy/index',
        'revenue_architecture_technical',
        'monetization-strategy/roi-value-creation-framework',
        'monetization-strategy/comprehensive-pricing-strategy',
      ],
    },
    'go-to-market',
    'financial-projections',
    'competitive-analysis',
    'implementation-scaling-strategy',
    'risk-management-mitigation',
    'risk-analysis',
    'implementation',
    'team-organization',

    // Reader Aids & Reference Materials
    {
      type: 'category',
      label: '📖 Reference Materials',
      items: [
        'table-of-contents',
        'copyright',
        'dedication',
        'glossary',
        'bibliography',
        'technical-appendix',
        'business-appendix',
        'index-page',
      ],
    },

    // Testing & Examples
    {
      type: 'category',
      label: '🧪 Testing & Examples',
      items: [
        'mermaid-test',
      ],
    },
    {
      type: 'category',
      label: 'Local Partnerships Architecture',
      items: [
        'local-partnerships-architecture/vision-institutional-community-economic-integration',
        'local-partnerships-architecture/strategic-partnership-ecosystem',
        'local-partnerships-architecture/core-partnership-models',
        'local-partnerships-architecture/local-business-integration-framework',
        'local-partnerships-architecture/community-organization-partnership-model',
        'local-partnerships-architecture/partnership-revenue-models',
        'local-partnerships-architecture/multi-party-revenue-distribution',
        'local-partnerships-architecture/partnership-roi-analysis',
        'local-partnerships-architecture/implementation-timeline',
        'local-partnerships-architecture/partnership-development-phases',
        'local-partnerships-architecture/success-metrics-dashboard',
      ],
    },
  ],
};

export default sidebars;
