import { Metadata } from 'next'
import { AboutPageNavbar } from '@/components/about-page-navbar'
import AboutHeroSimple from '@/components/about-hero-simple'

export const metadata: Metadata = {
    title: 'About Us - Cooperative Mission & Impact',
    description: 'Learn about our cooperative mission, team, and the impact we\'re making in the drone services industry.',
}

export default function AboutPage() {
    return (
        <>
            <AboutPageNavbar />
            <AboutHeroSimple />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Mission & Vision Section */}
                    <section id="mission" className="mb-16">
                    <h1 className="text-4xl font-bold mb-8 text-center">About Our Cooperative</h1>
                    
                    {/* Mission & Vision Container */}
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <h2 className="text-3xl font-bold mb-8 text-center">Mission & Vision</h2>
                        
                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Mission Card */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <div className="flex items-center mb-4">
                                    <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center mr-3">
                                        <span className="text-background text-sm font-bold">M</span>
                                    </div>
                                    <h3 className="text-xl font-semibold">Our Mission</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    The Haiti Drone Cooperative exists to <strong>democratize access to cutting-edge drone technology</strong> through 
                                    community ownership, creating sustainable economic opportunities for Haitians both at home and in the 
                                    diaspora. We believe that by pooling resources and sharing ownership, we can build the technological 
                                    infrastructure Haiti needs while ensuring that <strong>profits flow back to the communities</strong> that make it possible.
                                </p>
                            </div>
                            
                            {/* Vision Card */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <div className="flex items-center mb-4">
                                    <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center mr-3">
                                        <span className="text-background text-sm font-bold">V</span>
                                    </div>
                                    <h3 className="text-xl font-semibold">Our Vision</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    We envision a Haiti where advanced drone technology serves every community - from <strong>precision agriculture 
                                    in the Artibonite Valley</strong> to <strong>emergency response during hurricane season</strong>. Through cooperative ownership, 
                                    we're building an ecosystem where micro-investments of as little as <strong>131 HTG ($1 USD)</strong> can grow into 
                                    meaningful returns while modernizing Haiti's infrastructure and service capabilities.
                                </p>
                            </div>
                        </div>
                        
                        {/* Key Values */}
                        <div className="mt-8 pt-8 border-t">
                            <h4 className="text-lg font-semibold mb-4 text-center">Our Core Values</h4>
                            <div className="flex flex-wrap justify-center gap-4">
                                <span className="bg-muted text-foreground px-3 py-1 rounded-full text-sm font-medium">
                                    Community Ownership
                                </span>
                                <span className="bg-muted text-foreground px-3 py-1 rounded-full text-sm font-medium">
                                    Economic Empowerment
                                </span>
                                <span className="bg-muted text-foreground px-3 py-1 rounded-full text-sm font-medium">
                                    Technology Access
                                </span>
                                <span className="bg-muted text-foreground px-3 py-1 rounded-full text-sm font-medium">
                                    Sustainable Development
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Profiles Section */}
                <section id="team" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Leadership Team</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
                        <strong>Executive Leadership (Positions Open - Join Our Founding Team)</strong>
                    </p>
                    
                    {/* Executive Leadership */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                        {/* CEO */}
                        <div className="bg-background rounded-lg p-6 shadow-sm border">
                            <div className="text-center mb-4">
                                <div className="w-20 h-20 bg-foreground rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-background text-2xl font-bold">CEO</span>
                                </div>
                                <h3 className="text-lg font-semibold">Chief Executive Officer</h3>
                                <p className="text-sm text-muted-foreground mb-3">(Seeking Candidate)</p>
                            </div>
                            
                            <div className="space-y-3 text-sm">
                                <div>
                                    <strong className="text-foreground">Required Background:</strong>
                                    <p className="text-muted-foreground">MBA + 5+ years business development experience</p>
                                </div>
                                
                                <div>
                                    <strong className="text-foreground">Responsibilities:</strong>
                                    <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                        <li>Lead strategic vision and execution</li>
                                        <li>Manage investor relations and partnerships</li>
                                        <li>Oversee cooperative governance and democratic processes</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <strong className="text-foreground">Compensation:</strong>
                                    <p className="text-muted-foreground">Coming Soon</p>
                                </div>
                            </div>
                        </div>

                        {/* CTO */}
                        <div className="bg-background rounded-lg p-6 shadow-sm border">
                            <div className="text-center mb-4">
                                <div className="w-20 h-20 bg-foreground rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-background text-2xl font-bold">CTO</span>
                                </div>
                                <h3 className="text-lg font-semibold">Chief Technology Officer</h3>
                                <p className="text-sm text-muted-foreground mb-3">(Seeking Candidate)</p>
                            </div>
                            
                            <div className="space-y-3 text-sm">
                                <div>
                                    <strong className="text-foreground">Required Background:</strong>
                                    <p className="text-muted-foreground">Engineering degree + drone/aviation experience</p>
                                </div>
                                
                                <div>
                                    <strong className="text-foreground">Responsibilities:</strong>
                                    <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                        <li>Technology strategy and R&D direction</li>
                                        <li>System integration and platform development</li>
                                        <li>Equipment acquisition and deployment</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <strong className="text-foreground">Compensation:</strong>
                                    <p className="text-muted-foreground">Coming Soon</p>
                                </div>
                            </div>
                        </div>

                        {/* COO */}
                        <div className="bg-background rounded-lg p-6 shadow-sm border">
                            <div className="text-center mb-4">
                                <div className="w-20 h-20 bg-foreground rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-background text-2xl font-bold">COO</span>
                                </div>
                                <h3 className="text-lg font-semibold">Chief Operations Officer</h3>
                                <p className="text-sm text-muted-foreground mb-3">(Seeking Candidate)</p>
                            </div>
                            
                            <div className="space-y-3 text-sm">
                                <div>
                                    <strong className="text-foreground">Required Background:</strong>
                                    <p className="text-muted-foreground">Aviation/logistics operations experience</p>
                                </div>
                                
                                <div>
                                    <strong className="text-foreground">Responsibilities:</strong>
                                    <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                        <li>Daily operations and service delivery</li>
                                        <li>Safety protocols and compliance management</li>
                                        <li>Fleet management and optimization</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <strong className="text-foreground">Compensation:</strong>
                                    <p className="text-muted-foreground">Coming Soon</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Advisory Board */}
                    <div className="bg-muted/50 rounded-xl p-6 mb-8 border">
                        <h3 className="text-2xl font-bold mb-6 text-center">Advisory Board (Being Assembled)</h3>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Technology Advisors */}
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Technology Advisors</h4>
                                <div className="space-y-3">
                                    <div className="bg-background rounded-lg p-4 border">
                                        <h5 className="font-medium">Drone Technology Expert</h5>
                                        <p className="text-sm text-muted-foreground">Open Position</p>
                                    </div>
                                    <div className="bg-background rounded-lg p-4 border">
                                        <h5 className="font-medium">Blockchain & Web3 Specialist</h5>
                                        <p className="text-sm text-muted-foreground">Open Position</p>
                                    </div>
                                    <div className="bg-background rounded-lg p-4 border">
                                        <h5 className="font-medium">Agricultural Technology Advisor</h5>
                                        <p className="text-sm text-muted-foreground">Open Position</p>
                                    </div>
                                </div>
                            </div>

                            {/* Market Advisors */}
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Market Advisors</h4>
                                <div className="space-y-3">
                                    <div className="bg-background rounded-lg p-4 border">
                                        <h5 className="font-medium">Haiti Market Specialist</h5>
                                        <p className="text-sm text-muted-foreground">Open Position</p>
                                    </div>
                                    <div className="bg-background rounded-lg p-4 border">
                                        <h5 className="font-medium">Diaspora Investment Expert</h5>
                                        <p className="text-sm text-muted-foreground">Open Position</p>
                                    </div>
                                    <div className="bg-background rounded-lg p-4 border">
                                        <h5 className="font-medium">Regulatory & Compliance Advisor</h5>
                                        <p className="text-sm text-muted-foreground">Open Position</p>
                                    </div>
                                </div>
                            </div>

                            {/* Community Representatives */}
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Community Representatives</h4>
                                <div className="space-y-3">
                                    <div className="bg-background rounded-lg p-4 border">
                                        <h5 className="font-medium">Rural Communities Representative</h5>
                                        <p className="text-sm text-muted-foreground">Open Position</p>
                                    </div>
                                    <div className="bg-background rounded-lg p-4 border">
                                        <h5 className="font-medium">Urban Services Representative</h5>
                                        <p className="text-sm text-muted-foreground">Open Position</p>
                                    </div>
                                    <div className="bg-background rounded-lg p-4 border">
                                        <h5 className="font-medium">Agricultural Sector Representative</h5>
                                        <p className="text-sm text-muted-foreground">Open Position</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact CTA */}
                        <div className="mt-8 p-6 bg-foreground rounded-lg text-center">
                            <h4 className="text-lg font-semibold text-background mb-2">Join Our Founding Team</h4>
                            <p className="text-background/80 mb-4">Interested in joining our leadership team?</p>
                            <a 
                                href="mailto:leadership@haitidronecooperative.com" 
                                className="inline-block bg-background text-foreground px-6 py-2 rounded-lg font-medium hover:bg-background/90 transition-colors"
                            >
                                Contact us at leadership@haitidronecooperative.com
                            </a>
                        </div>
                    </div>
                </section>

                {/* Why Choose a Cooperative Model Section */}
                <section id="cooperative" className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Why Choose a Cooperative Model?</h2>
                    
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Democratic Decision Making */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-background text-2xl font-bold">🗳️</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Democratic Decision Making</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Every member has voting rights proportional to their investment, ensuring community-driven decisions 
                                    that prioritize local needs over external profit maximization.
                                </p>
                            </div>

                            {/* Shared Risk & Reward */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-background text-2xl font-bold">⚖️</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Shared Risk & Reward</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Collective ownership spreads investment risk while ensuring returns benefit the community. 
                                    Success belongs to everyone, not just a few shareholders.
                                </p>
                            </div>

                            {/* Local Ownership */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-background text-2xl font-bold">🏠</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Local Ownership</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Keeps technology assets and profits within Haiti, supporting local economic development 
                                    rather than extracting value to foreign corporations.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t">
                            <div className="text-center">
                                <h4 className="text-lg font-semibold mb-4">The Cooperative Advantage</h4>
                                <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                                    Unlike traditional corporations focused on maximizing shareholder returns, cooperatives prioritize 
                                    member benefits and community impact. This model has proven successful in agriculture, banking, 
                                    and technology sectors worldwide, creating sustainable wealth for communities rather than individuals.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Impact Metrics Section */}
                <section id="values" className="mb-12">
                    <h2 className="text-3xl font-bold mb-8 text-center">Impact Metrics</h2>
                    
                    {/* Current Development Status */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold mb-6 text-center">Current Development Status</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <div className="text-center">
                                    <div className="text-2xl font-bold mb-2">Foundation & Development</div>
                                    <div className="text-sm text-muted-foreground">Project Phase</div>
                                </div>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <div className="text-center">
                                    <div className="text-2xl font-bold mb-2">95% Complete</div>
                                    <div className="text-sm text-muted-foreground">Technical Architecture</div>
                                </div>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <div className="text-center">
                                    <div className="text-2xl font-bold mb-2">In Development</div>
                                    <div className="text-sm text-muted-foreground">Smart Contracts</div>
                                </div>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <div className="text-center">
                                    <div className="text-2xl font-bold mb-2">Ready for Acquisition</div>
                                    <div className="text-sm text-muted-foreground">Pilot Equipment</div>
                                </div>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <div className="text-center">
                                    <div className="text-2xl font-bold mb-2">Being Established</div>
                                    <div className="text-sm text-muted-foreground">Community Partnerships</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projected First-Year Impact */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold mb-6 text-center">Projected First-Year Impact</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                            <div className="bg-muted/50 rounded-lg p-6 border">
                                <div className="text-center">
                                    <div className="text-2xl font-bold mb-2">131M HTG</div>
                                    <div className="text-lg font-medium text-muted-foreground mb-1">($1M USD)</div>
                                    <div className="text-sm text-muted-foreground">Target Investment</div>
                                </div>
                            </div>
                            <div className="bg-muted/50 rounded-lg p-6 border">
                                <div className="text-center">
                                    <div className="text-2xl font-bold mb-2">500-1,000</div>
                                    <div className="text-sm text-muted-foreground">Expected Cooperative Members</div>
                                </div>
                            </div>
                            <div className="bg-muted/50 rounded-lg p-6 border">
                                <div className="text-center">
                                    <div className="text-2xl font-bold mb-2">15-25</div>
                                    <div className="text-sm text-muted-foreground">Drones Across 3 Operational Hubs</div>
                                </div>
                            </div>
                            <div className="bg-muted/50 rounded-lg p-6 border">
                                <div className="text-center">
                                    <div className="text-lg font-bold mb-2">Port-au-Prince, Cap-Haïtien, Les Cayes</div>
                                    <div className="text-sm text-muted-foreground">Service Coverage Regions</div>
                                </div>
                            </div>
                            <div className="bg-muted/50 rounded-lg p-6 border">
                                <div className="text-center">
                                    <div className="text-2xl font-bold mb-2">20-35</div>
                                    <div className="text-sm text-muted-foreground">Direct Employment Positions</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Long-term Vision */}
                    <div className="bg-muted/50 rounded-xl p-8 border">
                        <h3 className="text-2xl font-bold mb-6 text-center">Long-term Vision (5 Years)</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <div className="text-center">
                                    <div className="text-2xl font-bold mb-2">655M+ HTG</div>
                                    <div className="text-lg font-medium text-muted-foreground mb-1">($5M+ USD)</div>
                                    <div className="text-sm text-muted-foreground">Total Assets Under Management</div>
                                </div>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <div className="text-center">
                                    <div className="text-2xl font-bold mb-2">5,000+</div>
                                    <div className="text-sm text-muted-foreground">Active Cooperative Members</div>
                                </div>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <div className="text-center">
                                    <div className="text-2xl font-bold mb-2">50+</div>
                                    <div className="text-sm text-muted-foreground">Specialized Drones</div>
                                </div>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <div className="text-center">
                                    <div className="text-2xl font-bold mb-2">All 10</div>
                                    <div className="text-sm text-muted-foreground">Departments of Haiti</div>
                                </div>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <div className="text-center">
                                    <div className="text-2xl font-bold mb-2">1,000+</div>
                                    <div className="text-sm text-muted-foreground">Indirect Jobs Supported</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Principles Section */}
                <section id="governance" className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Core Principles</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Community Ownership */}
                        <div className="bg-background rounded-lg p-6 shadow-sm border">
                            <div className="flex items-start mb-4">
                                <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <span className="text-background text-lg font-bold">👥</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Community Ownership</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Every investor, regardless of investment size, has a voice in cooperative decisions
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Technological Accessibility */}
                        <div className="bg-background rounded-lg p-6 shadow-sm border">
                            <div className="flex items-start mb-4">
                                <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <span className="text-background text-lg font-bold">📡</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Technological Accessibility</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Making advanced drone services available to rural and underserved communities
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Economic Inclusion */}
                        <div className="bg-background rounded-lg p-6 shadow-sm border">
                            <div className="flex items-start mb-4">
                                <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <span className="text-background text-lg font-bold">💰</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Economic Inclusion</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Creating pathways for diaspora investment and local wealth building
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Environmental Stewardship */}
                        <div className="bg-background rounded-lg p-6 shadow-sm border">
                            <div className="flex items-start mb-4">
                                <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <span className="text-background text-lg font-bold">🌱</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Environmental Stewardship</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Using technology to promote sustainable practices across industries
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Transparency */}
                        <div className="bg-background rounded-lg p-6 shadow-sm border">
                            <div className="flex items-start mb-4">
                                <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <span className="text-background text-lg font-bold">🔍</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Transparency</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Open-source operations with blockchain-verified transactions and community governance
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Innovation */}
                        <div className="bg-background rounded-lg p-6 shadow-sm border">
                            <div className="flex items-start mb-4">
                                <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <span className="text-background text-lg font-bold">⚡</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Continuously advancing drone technology to serve Haiti's evolving needs
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* History Section */}
                <section id="commitment" className="mb-16">
                    <h2 className="text-3xl font-bold mb-6">Our History</h2>
                    <div className="prose lg:prose-lg max-w-none">
                        <p>
                            Founded with the vision of democratizing drone technology access, our cooperative has grown 
                            from a small group of forward-thinking individuals to a thriving community of investors and 
                            service users.
                        </p>
                        {/* Timeline will be added here */}
                    </div>
                </section>

                {/* Location Section */}
                <section id="location" className="mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-center">Our Location</h2>
                    <div className="bg-muted/50 rounded-xl p-8 border text-center">
                        <p className="text-lg text-muted-foreground mb-4">
                            Based in Haiti, serving all 10 departments with planned expansion throughout the Caribbean region.
                        </p>
                        <p className="text-muted-foreground">
                            Headquarters: Port-au-Prince, Haiti<br/>
                            Operational Hubs: Cap-Haïtien, Les Cayes (planned)
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact">
                    <h2 className="text-3xl font-bold mb-6 text-center">Get Involved</h2>
                    <div className="bg-foreground rounded-xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-background mb-4">Ready to Join Our Mission?</h3>
                        <p className="text-background/80 mb-6 max-w-2xl mx-auto">
                            Whether you're interested in investing, partnering, or learning more about our cooperative model, 
                            we'd love to hear from you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="/invest" 
                                className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-medium hover:bg-background/90 transition-colors"
                            >
                                Invest with Us
                            </a>
                            <a 
                                href="/contact" 
                                className="inline-block border border-background text-background px-8 py-3 rounded-lg font-medium hover:bg-background/10 transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </>
    )
}
