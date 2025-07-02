import { Metadata } from 'next'
import { ImpactPageNavbar } from '@/components/impact-page-navbar'
import ImpactHeroSimple from '@/components/impact-hero-simple'

export const metadata: Metadata = {
    title: 'Real-Time Impact Dashboard - Measuring Our Collective Success',
    description: 'Track the Haiti Drone Cooperative\'s performance and transformative impact across communities through transparent, blockchain-verified metrics.',
}

export default function ImpactPage() {
    return (
        <>
            <ImpactPageNavbar />
            <ImpactHeroSimple />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">

                {/* Live Cooperative Performance Metrics */}
                <section id="financial" className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Live Cooperative Performance Metrics</h2>
                    
                    {/* Financial Performance */}
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <h3 className="text-2xl font-bold mb-6">Financial Performance (Updated Real-Time)</h3>
                        <div className="grid lg:grid-cols-3 gap-6">
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="text-3xl font-bold text-foreground mb-2">In Development Phase</div>
                                <div className="text-muted-foreground">Total Assets Under Management</div>
                                <div className="text-sm text-green-600 mt-1">Target Initial Capital: 1,310,000,000 HTG ($10M USD)</div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="text-3xl font-bold text-foreground mb-2">Accepting Commitments</div>
                                <div className="text-muted-foreground">Pre-Launch Investment Status</div>
                                <div className="text-sm text-green-600 mt-1">Early Access Available</div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="text-3xl font-bold text-green-600 mb-2">18.5%</div>
                                <div className="text-muted-foreground">Average Projected Return</div>
                                <div className="text-sm text-green-600 mt-1">Annual return projection</div>
                            </div>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-6 mt-6">
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="text-2xl font-bold text-foreground mb-2">+25% monthly</div>
                                <div className="text-muted-foreground">Launch Phase Target Investment Growth</div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="text-2xl font-bold text-foreground mb-2">6 service streams</div>
                                <div className="text-muted-foreground">Revenue Diversification Planned</div>
                            </div>
                        </div>
                    </div>

                    {/* Membership & Community Growth */}
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <h3 className="text-2xl font-bold mb-6">Membership & Community Growth</h3>
                        <div className="grid lg:grid-cols-3 gap-6">
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="text-3xl font-bold text-foreground mb-2">Registration Open</div>
                                <div className="text-muted-foreground">Cooperative Members</div>
                                <div className="text-sm text-green-600 mt-1">Target Year 1: 1,000 active investors</div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="text-3xl font-bold text-foreground mb-2">2M+ Diaspora</div>
                                <div className="text-muted-foreground">Marketing Reach</div>
                                <div className="text-sm text-green-600 mt-1">Haitian diaspora worldwide</div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="text-3xl font-bold text-foreground mb-2">15+ Organizations</div>
                                <div className="text-muted-foreground">Local Community Partners</div>
                                <div className="text-sm text-green-600 mt-1">Partnership development</div>
                            </div>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-6 mt-6">
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="text-2xl font-bold text-foreground mb-2">All 10 Departments</div>
                                <div className="text-muted-foreground">Geographic Reach Target</div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="text-2xl font-bold text-green-600 mb-2">131 HTG ($1)</div>
                                <div className="text-muted-foreground">Minimum Investment for Universal Access</div>
                            </div>
                        </div>
                    </div>

                    {/* Equipment & Technology Status */}
                    <div id="operations" className="bg-muted/50 rounded-xl p-8 border">
                        <h3 className="text-2xl font-bold mb-6">Equipment & Technology Status</h3>
                        <div className="grid lg:grid-cols-3 gap-6">
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="text-3xl font-bold text-foreground mb-2">Procurement Phase</div>
                                <div className="text-muted-foreground">Fleet Development</div>
                                <div className="text-sm text-green-600 mt-1">Target: 25 drones, 3 operational hubs</div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="text-3xl font-bold text-foreground mb-2">85%+</div>
                                <div className="text-muted-foreground">Equipment Utilization Target</div>
                                <div className="text-sm text-green-600 mt-1">Operational efficiency goal</div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="text-3xl font-bold text-foreground mb-2">7 Categories</div>
                                <div className="text-muted-foreground">Specialized Service Capability</div>
                                <div className="text-sm text-green-600 mt-1">Planned service offerings</div>
                            </div>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-6 mt-6">
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="text-2xl font-bold text-foreground mb-2">Establishing</div>
                                <div className="text-muted-foreground">Technology Partnerships & Supplier Relations</div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="text-2xl font-bold text-foreground mb-2">R&D Partnerships</div>
                                <div className="text-muted-foreground">Innovation Pipeline Development</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projected Community Impact */}
                <section id="community" className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Projected Community Impact</h2>
                    
                    {/* Economic Development Metrics */}
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <h3 className="text-2xl font-bold mb-6">Economic Development Metrics</h3>
                        
                        {/* Direct Economic Impact */}
                        <div className="mb-8">
                            <h4 className="text-xl font-semibold mb-4">Direct Economic Impact</h4>
                            <div className="grid lg:grid-cols-3 gap-6">
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h5 className="text-lg font-semibold mb-3">Local Jobs Created</h5>
                                    <div className="text-2xl font-bold text-green-600 mb-2">35-50 positions</div>
                                    <p className="text-sm text-muted-foreground">Direct positions in Year 1</p>
                                </div>
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h5 className="text-lg font-semibold mb-3">Target Annual Payroll</h5>
                                    <div className="text-2xl font-bold text-green-600 mb-2">157M HTG</div>
                                    <p className="text-sm text-muted-foreground">($1.2M) by Year 2</p>
                                </div>
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h5 className="text-lg font-semibold mb-3">Local Contractor Spending</h5>
                                    <div className="text-2xl font-bold text-green-600 mb-2">65.5M HTG</div>
                                    <p className="text-sm text-muted-foreground">($500K) annually projected</p>
                                </div>
                            </div>
                            
                            <div className="grid lg:grid-cols-2 gap-6 mt-6">
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h5 className="text-lg font-semibold mb-3">Tax Contribution</h5>
                                    <div className="text-2xl font-bold text-green-600 mb-2">26.2M HTG ($200K)</div>
                                    <p className="text-sm text-muted-foreground">Annually to local governments</p>
                                </div>
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h5 className="text-lg font-semibold mb-3">Supplier Network</h5>
                                    <div className="text-2xl font-bold text-green-600 mb-2">25+</div>
                                    <p className="text-sm text-muted-foreground">Local businesses integrated into operations</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Indirect Economic Benefits */}
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Indirect Economic Benefits</h4>
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h5 className="text-lg font-semibold mb-3">Service Cost Reduction</h5>
                                    <div className="text-2xl font-bold text-green-600 mb-2">30-50% savings</div>
                                    <p className="text-sm text-muted-foreground">vs international providers</p>
                                </div>
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h5 className="text-lg font-semibold mb-3">Market Access</h5>
                                    <div className="text-2xl font-bold text-green-600 mb-2">Rural communities</div>
                                    <p className="text-sm text-muted-foreground">gaining access to advanced services</p>
                                </div>
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h5 className="text-lg font-semibold mb-3">Technology Transfer</h5>
                                    <div className="text-2xl font-bold text-green-600 mb-2">Training programs</div>
                                    <p className="text-sm text-muted-foreground">creating local expertise</p>
                                </div>
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h5 className="text-lg font-semibold mb-3">Business Development</h5>
                                    <div className="text-2xl font-bold text-green-600 mb-2">100+</div>
                                    <p className="text-sm text-muted-foreground">local businesses supported through services</p>
                                </div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border mt-6">
                                <h5 className="text-lg font-semibold mb-3">Agricultural Productivity</h5>
                                <div className="text-2xl font-bold text-green-600 mb-2">15-25% yield improvements</div>
                                <p className="text-sm text-muted-foreground">for farming partners</p>
                            </div>
                        </div>
                    </div>

                    {/* Social & Cultural Impact */}
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <h3 className="text-2xl font-bold mb-6">Social & Cultural Impact</h3>
                        
                        {/* Community Empowerment */}
                        <div className="mb-8">
                            <h4 className="text-xl font-semibold mb-4">Community Empowerment</h4>
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h5 className="text-lg font-semibold mb-3">Democratic Participation</h5>
                                    <p className="text-sm text-muted-foreground">Every investor votes on cooperative decisions</p>
                                </div>
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h5 className="text-lg font-semibold mb-3">Financial Inclusion</h5>
                                    <p className="text-sm text-muted-foreground">Micro-investment opportunities for all economic levels</p>
                                </div>
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h5 className="text-lg font-semibold mb-3">Education & Training</h5>
                                    <div className="text-xl font-bold text-green-600 mb-2">100+</div>
                                    <p className="text-sm text-muted-foreground">local residents trained in drone technology</p>
                                </div>
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h5 className="text-lg font-semibold mb-3">Youth Engagement</h5>
                                    <div className="text-xl font-bold text-green-600 mb-2">50+</div>
                                    <p className="text-sm text-muted-foreground">students in scholarship and internship programs</p>
                                </div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border mt-6">
                                <h5 className="text-lg font-semibold mb-3">Gender Equality</h5>
                                <div className="text-xl font-bold text-green-600 mb-2">40%+ target</div>
                                <p className="text-sm text-muted-foreground">for women in leadership and technical roles</p>
                            </div>
                        </div>
                        
                        {/* Infrastructure Development */}
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Infrastructure Development</h4>
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h5 className="text-lg font-semibold mb-3">Rural Connectivity</h5>
                                    <div className="text-xl font-bold text-green-600 mb-2">50+</div>
                                    <p className="text-sm text-muted-foreground">remote communities gaining internet access</p>
                                </div>
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h5 className="text-lg font-semibold mb-3">Emergency Preparedness</h5>
                                    <p className="text-sm text-muted-foreground">Enhanced disaster response capabilities</p>
                                </div>
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h5 className="text-lg font-semibold mb-3">Agricultural Modernization</h5>
                                    <div className="text-xl font-bold text-green-600 mb-2">500+</div>
                                    <p className="text-sm text-muted-foreground">farmers benefiting from precision agriculture</p>
                                </div>
                                <div className="bg-background rounded-lg p-6 shadow-sm border">
                                    <h5 className="text-lg font-semibold mb-3">Infrastructure Monitoring</h5>
                                    <p className="text-sm text-muted-foreground">Proactive maintenance for critical infrastructure</p>
                                </div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border mt-6">
                                <h5 className="text-lg font-semibold mb-3">Healthcare Support</h5>
                                <p className="text-sm text-muted-foreground">Medical supply delivery to remote areas</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Environmental Impact Projections */}
                <section id="growth" className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Environmental Impact Projections</h2>
                    
                    {/* Sustainable Technology Adoption */}
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <h3 className="text-2xl font-bold mb-6">Sustainable Technology Adoption</h3>
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Carbon Footprint Reduction</h4>
                                <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                                <p className="text-sm text-muted-foreground">lower emissions vs traditional methods</p>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Precision Agriculture Impact</h4>
                                <div className="text-3xl font-bold text-green-600 mb-2">25%</div>
                                <p className="text-sm text-muted-foreground">reduction in pesticide and fertilizer use</p>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Water Conservation</h4>
                                <div className="text-3xl font-bold text-green-600 mb-2">30%</div>
                                <p className="text-sm text-muted-foreground">improvement in irrigation efficiency</p>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Deforestation Monitoring</h4>
                                <div className="text-3xl font-bold text-green-600 mb-2">Real-time</div>
                                <p className="text-sm text-muted-foreground">forest change detection capabilities</p>
                            </div>
                        </div>
                        
                        <div className="bg-background rounded-lg p-6 shadow-sm border mt-6">
                            <h4 className="text-lg font-semibold mb-3">Coastal Protection</h4>
                            <p className="text-sm text-muted-foreground">Regular monitoring of erosion and sea level changes</p>
                        </div>
                    </div>

                    {/* Resource Optimization */}
                    <div className="bg-muted/50 rounded-xl p-8 border">
                        <h3 className="text-2xl font-bold mb-6">Resource Optimization</h3>
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Fuel Efficiency</h4>
                                <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
                                <p className="text-sm text-muted-foreground">less fuel consumption vs traditional aircraft</p>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Waste Reduction</h4>
                                <p className="text-sm text-muted-foreground">Digital-first documentation reducing paper use</p>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Equipment Longevity</h4>
                                <div className="text-3xl font-bold text-green-600 mb-2">8-10 years</div>
                                <p className="text-sm text-muted-foreground">operational life with proper maintenance</p>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Renewable Energy</h4>
                                <p className="text-sm text-muted-foreground">Solar-powered charging stations at all hubs</p>
                            </div>
                        </div>
                        
                        <div className="bg-background rounded-lg p-6 shadow-sm border mt-6">
                            <h4 className="text-lg font-semibold mb-3">Circular Economy</h4>
                            <p className="text-sm text-muted-foreground">Equipment recycling and refurbishment programs</p>
                        </div>
                    </div>
                </section>

                {/* Geographic Coverage & Service Areas */}
                <section id="coverage" className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Geographic Coverage & Service Areas</h2>
                    
                    {/* Phase 1 Operations */}
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <h3 className="text-2xl font-bold mb-6">Phase 1 Operations (Year 1)</h3>
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-xl font-semibold mb-4">Port-au-Prince Hub</h4>
                                <p className="text-muted-foreground mb-4">Ouest and Sud-Est departments</p>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Urban services:</strong>
                                        <p className="text-muted-foreground">Infrastructure inspection, security, emergency response</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Population served:</strong>
                                        <p className="text-muted-foreground">4.3M+ residents</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Service radius:</strong>
                                        <p className="text-muted-foreground">100km from hub</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-xl font-semibold mb-4">Cap-Haïtien Hub</h4>
                                <p className="text-muted-foreground mb-4">Nord and Nord-Est departments</p>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Rural focus:</strong>
                                        <p className="text-muted-foreground">Agricultural services, connectivity, mapping</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Population served:</strong>
                                        <p className="text-muted-foreground">1.8M+ residents</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Agricultural coverage:</strong>
                                        <p className="text-muted-foreground">50,000+ hectares</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phase 2 & 3 Expansion */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <h3 className="text-2xl font-bold mb-6">Phase 2 Expansion (Year 2)</h3>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-xl font-semibold mb-4">Les Cayes Hub</h4>
                                <p className="text-muted-foreground mb-4">Sud, Grand'Anse, and Nippes departments</p>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Coastal services:</strong>
                                        <p className="text-muted-foreground">Maritime monitoring, tourism support</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Emergency coverage:</strong>
                                        <p className="text-muted-foreground">Hurricane and disaster response</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Population served:</strong>
                                        <p className="text-muted-foreground">2.1M+ residents</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <h3 className="text-2xl font-bold mb-6">Phase 3 Coverage (Year 3)</h3>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-xl font-semibold mb-4">Complete National Network</h4>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Coverage:</strong>
                                        <p className="text-muted-foreground">All 10 departments covered</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Specialized Services:</strong>
                                        <p className="text-muted-foreground">Advanced applications based on regional needs</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Cross-Border Operations:</strong>
                                        <p className="text-muted-foreground">Potential services in Dominican Republic</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Total Population Served:</strong>
                                        <div className="text-xl font-bold text-green-600">11M+ Haitian residents</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Success Stories & Case Studies */}
                <section id="goals" className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Success Stories & Case Studies</h2>
                    
                    <div className="grid lg:grid-cols-1 gap-8">
                        {/* Agricultural Transformation Project */}
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                    <span className="text-background text-xl font-bold">🌾</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Agricultural Transformation Project (Projected)</h3>
                                    <p className="text-muted-foreground">Partnership with Artibonite Valley Farmers</p>
                                </div>
                            </div>
                            
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="bg-background rounded-lg p-4 shadow-sm border">
                                        <h4 className="font-semibold mb-2">Investment</h4>
                                        <p className="text-sm text-muted-foreground">131,000,000 HTG ($1M) in agricultural drone fleet</p>
                                    </div>
                                    <div className="bg-background rounded-lg p-4 shadow-sm border">
                                        <h4 className="font-semibold mb-2">Farmers Served</h4>
                                        <p className="text-sm text-muted-foreground">300+ individual farmers and 12 cooperatives</p>
                                    </div>
                                    <div className="bg-background rounded-lg p-4 shadow-sm border">
                                        <h4 className="font-semibold mb-2">Technology Impact</h4>
                                        <p className="text-sm text-muted-foreground">Precision agriculture increasing yields by 22%</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-background rounded-lg p-4 shadow-sm border">
                                        <h4 className="font-semibold mb-2">Economic Benefit</h4>
                                        <p className="text-sm text-muted-foreground">$2.5M additional annual income for farming communities</p>
                                    </div>
                                    <div className="bg-background rounded-lg p-4 shadow-sm border">
                                        <h4 className="font-semibold mb-2">Environmental Gain</h4>
                                        <p className="text-sm text-muted-foreground">30% reduction in chemical input usage</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Emergency Response Enhancement */}
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                    <span className="text-background text-xl font-bold">🚨</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Emergency Response Enhancement (Planned)</h3>
                                    <p className="text-muted-foreground">Partnership with National Emergency Management</p>
                                </div>
                            </div>
                            
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="bg-background rounded-lg p-4 shadow-sm border">
                                        <h4 className="font-semibold mb-2">Capability</h4>
                                        <p className="text-sm text-muted-foreground">Rapid assessment and communication restoration</p>
                                    </div>
                                    <div className="bg-background rounded-lg p-4 shadow-sm border">
                                        <h4 className="font-semibold mb-2">Response Time</h4>
                                        <p className="text-sm text-muted-foreground">Sub-2-hour deployment anywhere in Haiti</p>
                                    </div>
                                    <div className="bg-background rounded-lg p-4 shadow-sm border">
                                        <h4 className="font-semibold mb-2">Lives Impacted</h4>
                                        <p className="text-sm text-muted-foreground">Potentially 500,000+ residents during emergencies</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-background rounded-lg p-4 shadow-sm border">
                                        <h4 className="font-semibold mb-2">Cost Savings</h4>
                                        <p className="text-sm text-muted-foreground">60% reduction in emergency response costs</p>
                                    </div>
                                    <div className="bg-background rounded-lg p-4 shadow-sm border">
                                        <h4 className="font-semibold mb-2">International Recognition</h4>
                                        <p className="text-sm text-muted-foreground">Model for Caribbean disaster preparedness</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Diaspora Investment Success */}
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                    <span className="text-background text-xl font-bold">🌍</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Diaspora Investment Success (Development)</h3>
                                    <p className="text-muted-foreground">Connecting Diaspora with Homeland Development</p>
                                </div>
                            </div>
                            
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="bg-background rounded-lg p-4 shadow-sm border">
                                        <h4 className="font-semibold mb-2">Diaspora Investors</h4>
                                        <p className="text-sm text-muted-foreground">Targeting 10,000+ investors across US, Canada, France</p>
                                    </div>
                                    <div className="bg-background rounded-lg p-4 shadow-sm border">
                                        <h4 className="font-semibold mb-2">Investment Flow</h4>
                                        <p className="text-sm text-muted-foreground">$50M+ potential capital from diaspora communities</p>
                                    </div>
                                    <div className="bg-background rounded-lg p-4 shadow-sm border">
                                        <h4 className="font-semibold mb-2">Cultural Connection</h4>
                                        <p className="text-sm text-muted-foreground">Quarterly visits and impact tours for investors</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-background rounded-lg p-4 shadow-sm border">
                                        <h4 className="font-semibold mb-2">Economic Bridge</h4>
                                        <p className="text-sm text-muted-foreground">Technology transfer and knowledge sharing programs</p>
                                    </div>
                                    <div className="bg-background rounded-lg p-4 shadow-sm border">
                                        <h4 className="font-semibold mb-2">Generational Impact</h4>
                                        <p className="text-sm text-muted-foreground">Building long-term ties between diaspora and Haiti</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Real-Time Activity Feed */}
                <section id="realtime" className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Real-Time Activity Feed</h2>
                    
                    {/* Development Phase Activities */}
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <h3 className="text-2xl font-bold mb-6">Development Phase Activities (Current)</h3>
                        <div className="grid lg:grid-cols-3 gap-6">
                            <div className="space-y-4">
                                <div className="bg-background rounded-lg p-4 shadow-sm border flex items-center">
                                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                    <span className="text-sm">Technical architecture completed and documented</span>
                                </div>
                                <div className="bg-background rounded-lg p-4 shadow-sm border flex items-center">
                                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                    <span className="text-sm">Legal framework established for cooperative structure</span>
                                </div>
                                <div className="bg-background rounded-lg p-4 shadow-sm border flex items-center">
                                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                    <span className="text-sm">Initial market research and feasibility studies completed</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-background rounded-lg p-4 shadow-sm border flex items-center">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                    <span className="text-sm">Equipment supplier partnerships being negotiated</span>
                                </div>
                                <div className="bg-background rounded-lg p-4 shadow-sm border flex items-center">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                    <span className="text-sm">Regulatory approvals and aviation certifications in progress</span>
                                </div>
                                <div className="bg-background rounded-lg p-4 shadow-sm border flex items-center">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                    <span className="text-sm">Team recruitment for key leadership positions</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-background rounded-lg p-4 shadow-sm border flex items-center">
                                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                                    <span className="text-sm">Initial funding round planned for Q2 2025</span>
                                </div>
                                <div className="bg-background rounded-lg p-4 shadow-sm border flex items-center">
                                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                                    <span className="text-sm">First equipment acquisition targeted for Q3 2025</span>
                                </div>
                                <div className="bg-background rounded-lg p-4 shadow-sm border flex items-center">
                                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                                    <span className="text-sm">Pilot operations launch scheduled for Q4 2025</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Milestones */}
                    <div className="bg-muted/50 rounded-xl p-8 border">
                        <h3 className="text-2xl font-bold mb-6">Upcoming Milestones (Next 12 Months)</h3>
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="bg-background rounded-lg p-4 shadow-sm border flex items-center">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                    <span className="text-sm">Complete leadership team assembly</span>
                                </div>
                                <div className="bg-background rounded-lg p-4 shadow-sm border flex items-center">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                    <span className="text-sm">Secure initial 131M HTG ($1M) in cooperative investments</span>
                                </div>
                                <div className="bg-background rounded-lg p-4 shadow-sm border flex items-center">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                    <span className="text-sm">Establish first operational hub in Port-au-Prince</span>
                                </div>
                                <div className="bg-background rounded-lg p-4 shadow-sm border flex items-center">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                    <span className="text-sm">Begin service delivery with initial 5-drone fleet</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-background rounded-lg p-4 shadow-sm border flex items-center">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                    <span className="text-sm">Onboard first 100 cooperative members</span>
                                </div>
                                <div className="bg-background rounded-lg p-4 shadow-sm border flex items-center">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                    <span className="text-sm">Generate first revenue and investor returns</span>
                                </div>
                                <div className="bg-background rounded-lg p-4 shadow-sm border flex items-center">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                    <span className="text-sm">Expand to second operational hub</span>
                                </div>
                                <div className="bg-background rounded-lg p-4 shadow-sm border flex items-center">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                    <span className="text-sm">Achieve 50% of Year 1 revenue targets</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Transparency & Accountability */}
                <section id="transparency" className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Transparency & Accountability</h2>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Open Source Operations */}
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <h3 className="text-2xl font-bold mb-6">Open Source Operations</h3>
                            <div className="space-y-4">
                                <div className="bg-background rounded-lg p-4 shadow-sm border">
                                    <h4 className="font-semibold mb-2">Blockchain Verification</h4>
                                    <p className="text-sm text-muted-foreground">All financial transactions publicly verifiable</p>
                                </div>
                                <div className="bg-background rounded-lg p-4 shadow-sm border">
                                    <h4 className="font-semibold mb-2">Real-Time Reporting</h4>
                                    <p className="text-sm text-muted-foreground">Live dashboard updates with authentic data</p>
                                </div>
                                <div className="bg-background rounded-lg p-4 shadow-sm border">
                                    <h4 className="font-semibold mb-2">Community Governance</h4>
                                    <p className="text-sm text-muted-foreground">Democratic decision-making for all major choices</p>
                                </div>
                                <div className="bg-background rounded-lg p-4 shadow-sm border">
                                    <h4 className="font-semibold mb-2">Regular Auditing</h4>
                                    <p className="text-sm text-muted-foreground">Quarterly financial and operational audits</p>
                                </div>
                                <div className="bg-background rounded-lg p-4 shadow-sm border">
                                    <h4 className="font-semibold mb-2">Impact Measurement</h4>
                                    <p className="text-sm text-muted-foreground">Third-party verification of social and environmental impact</p>
                                </div>
                            </div>
                        </div>

                        {/* Investor Protection & Rights */}
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <h3 className="text-2xl font-bold mb-6">Investor Protection & Rights</h3>
                            <div className="space-y-4">
                                <div className="bg-background rounded-lg p-4 shadow-sm border">
                                    <h4 className="font-semibold mb-2">Legal Structure</h4>
                                    <p className="text-sm text-muted-foreground">Fully compliant cooperative incorporation</p>
                                </div>
                                <div className="bg-background rounded-lg p-4 shadow-sm border">
                                    <h4 className="font-semibold mb-2">Insurance Coverage</h4>
                                    <p className="text-sm text-muted-foreground">Comprehensive protection for all assets and operations</p>
                                </div>
                                <div className="bg-background rounded-lg p-4 shadow-sm border">
                                    <h4 className="font-semibold mb-2">Dispute Resolution</h4>
                                    <p className="text-sm text-muted-foreground">Clear procedures for addressing conflicts</p>
                                </div>
                                <div className="bg-background rounded-lg p-4 shadow-sm border">
                                    <h4 className="font-semibold mb-2">Exit Options</h4>
                                    <p className="text-sm text-muted-foreground">Liquidity provisions for investment redemption</p>
                                </div>
                                <div className="bg-background rounded-lg p-4 shadow-sm border">
                                    <h4 className="font-semibold mb-2">Representation</h4>
                                    <p className="text-sm text-muted-foreground">Investor representatives on board of directors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section id="cta" className="bg-foreground rounded-xl p-8 text-center">
                    <h2 className="text-3xl font-bold text-background mb-4">Join the Impact Revolution</h2>
                    <p className="text-background/80 mb-6 max-w-2xl mx-auto">
                        Be part of measurable, transparent change in Haiti. Track your investment's real-world impact 
                        through our live dashboard and democratic governance platform.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="/invest" 
                            className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-medium hover:bg-background/90 transition-colors"
                        >
                            View Investment Opportunities
                        </a>
                        <a 
                            href="/contact" 
                            className="inline-block border border-background text-background px-8 py-3 rounded-lg font-medium hover:bg-background/10 transition-colors"
                        >
                            Request Impact Report
                        </a>
                    </div>
                </section>
            </div>
        </div>
        </>
    )
}
