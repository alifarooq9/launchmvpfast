import { Metadata } from 'next'
import { BlogPageNavbar } from '@/components/blog-page-navbar'
import BlogHeroSimple from '@/components/blog-hero-simple'

export const metadata: Metadata = {
    title: 'Blog & Educational Resources: Staying Connected Through News, Insights, and Education',
    description: 'Central hub for drone technology developments, cooperative progress, and educational content empowering our community with knowledge about Haiti\'s technology revolution.',
}

export default function BlogPage() {
    return (
        <>
            <BlogPageNavbar />
            <BlogHeroSimple />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <section id="overview" className="mb-16">
                    <h1 className="text-4xl font-bold mb-8 text-center">Blog & Educational Resources</h1>
                    <h2 className="text-2xl font-semibold mb-6 text-center text-muted-foreground">Staying Connected: News, Insights, and Education</h2>
                    
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-4xl mx-auto">
                            Our blog serves as the central hub for staying informed about drone technology developments, cooperative progress, 
                            and educational content designed to empower our community with knowledge about the revolutionary changes happening 
                            in Haiti's technology landscape.
                        </p>
                    </div>
                </section>

                {/* Featured Content Categories */}
                <section id="featured" className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Featured Content Categories</h2>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Educational Series */}
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                    <span className="text-background text-xl font-bold">🎓</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Educational Series</h3>
                                    <p className="text-muted-foreground">Drone Technology Fundamentals</p>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h4 className="text-lg font-semibold mb-3">Understanding Drone Technology: A Beginner's Guide</h4>
                                    <p className="text-sm text-muted-foreground mb-3">By: Technical Education Team • Published: Development Phase</p>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        This comprehensive series breaks down complex drone technology into accessible concepts for all community members, 
                                        regardless of technical background.
                                    </p>
                                    <div className="space-y-2 text-sm">
                                        <div><strong>Topics Covered:</strong></div>
                                        <ul className="text-muted-foreground space-y-1 ml-4">
                                            <li>• How drones work: Basic principles of flight and control</li>
                                            <li>• Types of drones and their specific applications</li>
                                            <li>• Understanding sensors: Cameras, GPS, and specialized equipment</li>
                                            <li>• Safety systems and autonomous operations</li>
                                            <li>• Maintenance and operational requirements</li>
                                            <li>• Regulatory framework and legal compliance</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h4 className="text-lg font-semibold mb-3">Agricultural Revolution: How Drones Transform Farming</h4>
                                    <p className="text-sm text-muted-foreground mb-3">By: Agricultural Specialists • Series Overview</p>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Explore the revolutionary impact of precision agriculture technology on farming productivity and sustainability.
                                    </p>
                                    <div className="space-y-2 text-sm">
                                        <div><strong>Series Components:</strong></div>
                                        <ul className="text-muted-foreground space-y-1 ml-4">
                                            <li>• Precision agriculture fundamentals and benefits</li>
                                            <li>• Crop monitoring and health assessment techniques</li>
                                            <li>• Irrigation optimization and water management</li>
                                            <li>• Pest and disease detection and treatment</li>
                                            <li>• Yield prediction and harvest optimization</li>
                                            <li>• Environmental impact and sustainability benefits</li>
                                            <li>• Case studies from successful drone agriculture programs</li>
                                            <li>• Financial analysis: ROI for farmers investing in drone services</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h4 className="text-lg font-semibold mb-3">Cooperative Economics: Understanding Shared Ownership</h4>
                                    <p className="text-sm text-muted-foreground mb-3">By: Economic Development Team • Educational Series</p>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Learn about the principles and practices of cooperative ownership and how it creates shared value for all participants.
                                    </p>
                                    <div className="space-y-2 text-sm">
                                        <div><strong>Educational Modules:</strong></div>
                                        <ul className="text-muted-foreground space-y-1 ml-4">
                                            <li>• History and principles of cooperative economics</li>
                                            <li>• Democratic governance and decision-making processes</li>
                                            <li>• Profit-sharing and revenue distribution models</li>
                                            <li>• Risk management in cooperative investments</li>
                                            <li>• Legal structure and member rights</li>
                                            <li>• Comparison with traditional investment models</li>
                                            <li>• Success stories from global cooperative movements</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* News & Updates */}
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                    <span className="text-background text-xl font-bold">📢</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">News & Updates</h3>
                                    <p className="text-muted-foreground">Cooperative Development</p>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h4 className="text-lg font-semibold mb-3">Technical Architecture Completion: Building the Foundation</h4>
                                    <p className="text-sm text-muted-foreground mb-3">Development Update • Current Phase</p>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Our technical team has completed the comprehensive architecture for the Haiti Drone Cooperative platform, 
                                        establishing the technological foundation for our revolutionary investment and operations model.
                                    </p>
                                    <div className="space-y-2 text-sm">
                                        <div><strong>Key Achievements:</strong></div>
                                        <ul className="text-muted-foreground space-y-1 ml-4">
                                            <li>• Complete system architecture design for multi-platform operations</li>
                                            <li>• Blockchain integration framework for transparent investment tracking</li>
                                            <li>• Open-source technology stack selection and integration planning</li>
                                            <li>• Microservices architecture enabling scalable operations</li>
                                            <li>• Security framework protecting investor data and cooperative assets</li>
                                            <li>• Mobile-first design ensuring accessibility across all device types</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h4 className="text-lg font-semibold mb-3">Regulatory Framework Development: Ensuring Compliance</h4>
                                    <p className="text-sm text-muted-foreground mb-3">Legal Update • Ongoing Process</p>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Working closely with Haitian aviation authorities and legal experts to establish the comprehensive regulatory 
                                        framework needed for safe and legal drone operations.
                                    </p>
                                    <div className="space-y-2 text-sm">
                                        <div><strong>Progress Areas:</strong></div>
                                        <ul className="text-muted-foreground space-y-1 ml-4">
                                            <li>• Aviation certification requirements and procedures</li>
                                            <li>• Commercial drone operation licensing</li>
                                            <li>• International compliance for diaspora investments</li>
                                            <li>• Cooperative incorporation and governance structure</li>
                                            <li>• Insurance and liability protection frameworks</li>
                                            <li>• Environmental and safety compliance protocols</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h4 className="text-lg font-semibold mb-3">Partnership Development: Building Community Connections</h4>
                                    <p className="text-sm text-muted-foreground mb-3">Community Outreach • Active Phase</p>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Establishing strategic partnerships with local organizations, government agencies, and international supporters 
                                        to create a strong foundation for cooperative success.
                                    </p>
                                    <div className="space-y-2 text-sm">
                                        <div><strong>Partnership Categories:</strong></div>
                                        <ul className="text-muted-foreground space-y-1 ml-4">
                                            <li>• Educational institutions for training and research</li>
                                            <li>• Agricultural cooperatives for service delivery</li>
                                            <li>• Government agencies for regulatory support and contracts</li>
                                            <li>• International development organizations for funding and expertise</li>
                                            <li>• Technology suppliers for equipment and support</li>
                                            <li>• Diaspora organizations for investment and community engagement</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industry Insights & Market Analysis */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Industry Insights: Market Analysis & Trends</h2>
                    
                    <div className="grid lg:grid-cols-1 gap-8">
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                    <span className="text-background text-xl font-bold">📈</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Market Analysis & Investment Climate</h3>
                                    <p className="text-muted-foreground">Expert insights for informed investment decisions</p>
                                </div>
                            </div>
                            
                            <div className="grid lg:grid-cols-3 gap-6">
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h4 className="text-lg font-semibold mb-3">Caribbean Drone Market Analysis</h4>
                                    <p className="text-sm text-muted-foreground mb-3">By: Market Research Team • Quarterly Analysis</p>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Comprehensive analysis of the emerging drone services market across the Caribbean region, 
                                        with specific focus on Haiti's unique opportunities.
                                    </p>
                                    <div className="space-y-2 text-sm">
                                        <div><strong>Market Segments:</strong></div>
                                        <ul className="text-muted-foreground space-y-1 ml-4">
                                            <li>• Government and infrastructure services</li>
                                            <li>• Agricultural technology adoption rates</li>
                                            <li>• Emergency services and disaster response</li>
                                            <li>• Telecommunications and connectivity</li>
                                            <li>• Tourism and media services</li>
                                            <li>• Competitive landscape analysis</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h4 className="text-lg font-semibold mb-3">Technology Trends Shaping the Future</h4>
                                    <p className="text-sm text-muted-foreground mb-3">By: Technology Advisory Board • Monthly Updates</p>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Stay current with the latest developments in drone technology and their implications 
                                        for cooperative investment opportunities.
                                    </p>
                                    <div className="space-y-2 text-sm">
                                        <div><strong>Trend Categories:</strong></div>
                                        <ul className="text-muted-foreground space-y-1 ml-4">
                                            <li>• Autonomous flight and AI integration</li>
                                            <li>• Sensor technology improvements</li>
                                            <li>• Battery life and efficiency developments</li>
                                            <li>• Regulatory changes and market access</li>
                                            <li>• Integration with IoT, 5G, satellite</li>
                                            <li>• Sustainability and environmental impact</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h4 className="text-lg font-semibold mb-3">Investment Climate Analysis</h4>
                                    <p className="text-sm text-muted-foreground mb-3">By: Financial Analysis Team • Quarterly Reports</p>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Analysis of global trends in diaspora investment and impact investing that create 
                                        favorable conditions for the Haiti Drone Cooperative model.
                                    </p>
                                    <div className="space-y-2 text-sm">
                                        <div><strong>Analysis Areas:</strong></div>
                                        <ul className="text-muted-foreground space-y-1 ml-4">
                                            <li>• Diaspora investment trends</li>
                                            <li>• Impact investing growth</li>
                                            <li>• Cross-border micro-investment regulations</li>
                                            <li>• Technology platforms enabling fractional ownership</li>
                                            <li>• Community-owned enterprise success factors</li>
                                            <li>• Risk assessment and mitigation strategies</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Stories */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Community Stories: Member Spotlights</h2>
                    <h3 className="text-xl font-semibold mb-6 text-center text-muted-foreground">Preparing for Success: Future Member Profiles</h3>
                    
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                    <span className="text-background text-xl font-bold">👨‍🌾</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold">The Agricultural Innovator</h4>
                                    <p className="text-sm text-muted-foreground">Profile Template • Agricultural Technology Advocate</p>
                                </div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <p className="text-sm text-muted-foreground mb-4 italic">
                                    "I've been farming in the Artibonite Valley for 20 years, and I've seen how technology can transform our productivity. 
                                    The cooperative model means I can access drone services that would be impossible to afford individually, while also 
                                    participating in the profits. It's exactly the kind of community-centered approach we need."
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div><strong>Planned Investment Focus:</strong></div>
                                    <p className="text-muted-foreground">Agricultural drone services and precision farming technology</p>
                                    <div><strong>Community Impact Goal:</strong></div>
                                    <p className="text-muted-foreground">Supporting 50+ local farmers with advanced technology access</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                    <span className="text-background text-xl font-bold">🌍</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold">The Diaspora Connector</h4>
                                    <p className="text-sm text-muted-foreground">Profile Template • US-Based Haitian Professional</p>
                                </div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <p className="text-sm text-muted-foreground mb-4 italic">
                                    "Living in Miami, I've always looked for ways to support Haiti's development that go beyond traditional aid. 
                                    The drone cooperative offers a sustainable investment opportunity that creates jobs, builds infrastructure, 
                                    and generates returns - exactly the kind of development Haiti needs."
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div><strong>Investment Profile:</strong></div>
                                    <p className="text-muted-foreground">Diaspora bond focusing on infrastructure development</p>
                                    <div><strong>Engagement Level:</strong></div>
                                    <p className="text-muted-foreground">Quarterly visits and investor conference participation</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                    <span className="text-background text-xl font-bold">💻</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold">The Technology Entrepreneur</h4>
                                    <p className="text-sm text-muted-foreground">Profile Template • Local Technology Advocate</p>
                                </div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <p className="text-sm text-muted-foreground mb-4 italic">
                                    "As someone working in Haiti's growing tech sector, I see the incredible potential for drone technology to 
                                    leapfrog traditional infrastructure limitations. Participating in the cooperative means supporting technological 
                                    advancement while building a sustainable business model."
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div><strong>Technical Contribution:</strong></div>
                                    <p className="text-muted-foreground">Platform development and technology advisory</p>
                                    <div><strong>Investment Focus:</strong></div>
                                    <p className="text-muted-foreground">Advanced equipment and R&D initiatives</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Deep Dives */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Technical Deep Dives: For Technology Enthusiasts</h2>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                    <span className="text-background text-xl font-bold">⚙️</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Open Source Architecture: Building Transparency</h3>
                                    <p className="text-sm text-muted-foreground">By: Development Team • Technical Series</p>
                                </div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <p className="text-sm text-muted-foreground mb-4">
                                    Detailed exploration of our open-source technology choices and their implications for cooperative 
                                    transparency and community participation.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div><strong>Technical Topics:</strong></div>
                                    <ul className="text-muted-foreground space-y-1 ml-4">
                                        <li>• Blockchain implementation for investment tracking</li>
                                        <li>• Smart contract architecture for automated operations</li>
                                        <li>• Mobile app development and offline functionality</li>
                                        <li>• Security frameworks and data protection</li>
                                        <li>• Integration with drone control systems</li>
                                        <li>• Real-time monitoring and reporting systems</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                    <span className="text-background text-xl font-bold">🔧</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Equipment Selection and Optimization</h3>
                                    <p className="text-sm text-muted-foreground">By: Operations Team • Equipment Analysis</p>
                                </div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <p className="text-sm text-muted-foreground mb-4">
                                    In-depth analysis of drone equipment selection criteria and optimization strategies for maximizing 
                                    cooperative returns and service quality.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div><strong>Analysis Areas:</strong></div>
                                    <ul className="text-muted-foreground space-y-1 ml-4">
                                        <li>• Equipment evaluation criteria and selection process</li>
                                        <li>• Cost-benefit analysis for different drone categories</li>
                                        <li>• Maintenance and operational efficiency optimization</li>
                                        <li>• Technology upgrade and replacement planning</li>
                                        <li>• Insurance and risk management for equipment</li>
                                        <li>• Performance monitoring and improvement strategies</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Educational Resources */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Educational Resources & Training Materials</h2>
                    
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <h3 className="text-xl font-bold mb-4">Investor Education Series</h3>
                            <div className="space-y-3 text-sm">
                                <div className="bg-background rounded-lg p-4 shadow-sm border">
                                    <ul className="text-muted-foreground space-y-2">
                                        <li>• Understanding cooperative investment principles</li>
                                        <li>• Risk assessment and portfolio diversification</li>
                                        <li>• Reading financial statements and performance metrics</li>
                                        <li>• Blockchain and cryptocurrency basics</li>
                                        <li>• Tax implications of cooperative investments</li>
                                        <li>• Exit strategies and liquidity options</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <h3 className="text-xl font-bold mb-4">Technology Training Resources</h3>
                            <div className="space-y-3 text-sm">
                                <div className="bg-background rounded-lg p-4 shadow-sm border">
                                    <ul className="text-muted-foreground space-y-2">
                                        <li>• Basic drone operation and safety procedures</li>
                                        <li>• Understanding drone applications across industries</li>
                                        <li>• Maintenance and troubleshooting basics</li>
                                        <li>• Data interpretation and analysis</li>
                                        <li>• Regulatory compliance and legal requirements</li>
                                        <li>• Career opportunities in drone technology</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <h3 className="text-xl font-bold mb-4">Community Engagement Tools</h3>
                            <div className="space-y-3 text-sm">
                                <div className="bg-background rounded-lg p-4 shadow-sm border">
                                    <ul className="text-muted-foreground space-y-2">
                                        <li>• Democratic participation in cooperative governance</li>
                                        <li>• Proposal creation and voting procedures</li>
                                        <li>• Conflict resolution and mediation processes</li>
                                        <li>• Cultural competency and cross-community collaboration</li>
                                        <li>• Leadership development and skill building</li>
                                        <li>• Networking and partnership development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter & Subscription Options */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Newsletter & Subscription Options</h2>
                    
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="bg-muted/50 rounded-xl p-8 border text-center">
                            <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-background text-xl font-bold">📅</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Weekly Development Updates</h3>
                            <div className="text-sm text-muted-foreground space-y-2">
                                <p>• Project milestones and progress reports</p>
                                <p>• Technical developments and breakthrough announcements</p>
                                <p>• Partnership announcements and community growth</p>
                                <p>• Investment opportunities and market analysis</p>
                                <p>• Member spotlights and community stories</p>
                            </div>
                        </div>
                        
                        <div className="bg-muted/50 rounded-xl p-8 border text-center">
                            <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-background text-xl font-bold">📊</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Monthly Industry Insights</h3>
                            <div className="text-sm text-muted-foreground space-y-2">
                                <p>• Comprehensive market analysis and trend reports</p>
                                <p>• Technology advancement analysis and implications</p>
                                <p>• Regulatory developments and policy changes</p>
                                <p>• Success stories and case studies from similar projects</p>
                                <p>• Educational content and skill development resources</p>
                            </div>
                        </div>
                        
                        <div className="bg-muted/50 rounded-xl p-8 border text-center">
                            <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-background text-xl font-bold">📈</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Quarterly Investment Reports</h3>
                            <div className="text-sm text-muted-foreground space-y-2">
                                <p>• Detailed financial performance analysis</p>
                                <p>• Equipment utilization and efficiency reports</p>
                                <p>• Market expansion and growth opportunities</p>
                                <p>• Risk assessment and mitigation updates</p>
                                <p>• Long-term strategic planning and vision updates</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter Signup */}
                <section className="bg-foreground rounded-xl p-8 text-center">
                    <h2 className="text-3xl font-bold text-background mb-4">Stay Connected with Our Community</h2>
                    <p className="text-background/80 mb-6 max-w-2xl mx-auto">
                        Subscribe to receive the latest updates, educational content, and exclusive insights 
                        from the Haiti Drone Cooperative community.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input 
                            type="email" 
                            placeholder="Enter your email address"
                            className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-background/20"
                        />
                        <button className="bg-background text-foreground px-8 py-3 rounded-lg font-medium hover:bg-background/90 transition-colors">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-sm text-background/60 mt-4">
                        Weekly updates • Educational content • Unsubscribe anytime
                    </p>
                </section>
            </div>
        </div>
        </>
    )
}
