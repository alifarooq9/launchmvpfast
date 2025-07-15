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
    
    // Core Platform Features
    {
      type: 'category',
      label: 'Core Platform Features',
      items: [
        'member-content-economy',
        'creator-implementation-guide',
        'business-institution-licensing',
        'integration-summary',
        'api-integration-framework',
      ],
    },
    
    // Technical Architecture
    {
      type: 'category',
      label: 'Technical Architecture',
      items: [
        'fediflow_technical_design',
        'technical-implementation-details',
      ],
    },
    
    // Ecosystem Architecture
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
    
    // Academic Services
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
    
    // Industry Modules
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
        {
          type: 'category',
          label: 'Business Institution Module',
          items: [
            'business-institution-licensing',
          ],
        },
      ],
    },
    
    // Partnership & Business Integration
    {
      type: 'category',
      label: 'Partnership & Business Integration',
      items: [
        'partnership-overview',
        'api-integration-framework',
      ],
    },
    
    // Revenue & Monetization Strategy
    {
      type: 'category',
      label: 'Revenue & Monetization Strategy',
      items: [
        'monetization-strategy/index',
        'revenue_architecture_technical',
        'monetization-strategy/roi-value-creation-framework',
        'monetization-strategy/comprehensive-pricing-strategy',
        'economy-overview',
      ],
    },
    
    // Value Propositions
    {
      type: 'category',
      label: 'Value Propositions',
      items: [
        'value-propositions/unified-federated-identity',
        'value-propositions/cross-platform-content-amplification', 
        'value-propositions/ai-powered-community-insights',
        'value-propositions/hyper-local-business-integration',
        'value-propositions/values-aligned-governance',
      ],
    },
    
    // Implementation & Scaling
    {
      type: 'category',
      label: 'Implementation & Scaling',
      items: [
        'implementation',
        'implementation-scaling-strategy',
        'go-to-market',
        'partnership-overview',
      ],
    },
    
    // Business Planning
    {
      type: 'category',
      label: 'Business Planning',
      items: [
        'financial-projections',
        'competitive-analysis',
        'risk-management-mitigation',
        'risk-analysis',
        'team-organization',
      ],
    },

    // Reader Aids & Reference Materials
    {
      type: 'category',
      label: '📖 Reader Aids & Resources',
      items: [
        'table-of-contents',
        'glossary',
        'bibliography',
        'technical-appendix',
        'business-appendix',
        'index-page',
        'copyright',
        'dedication',
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
  ],
};

export default sidebars;
