import { Metadata } from 'next'
import { InvestPageNavbar } from '@/components/invest-page-navbar'
import InvestHeroSimple from '@/components/invest-hero-simple'

export const metadata: Metadata = {
    title: 'Investment Process: From 131 HTG to Shared Prosperity',
    description: 'Join the Haiti Drone Cooperative through micro-investments starting at 131 HTG. Fractional ownership, smart contracts, and democratic governance.',
}

export default function InvestPage() {
    return (
        <>
            <InvestPageNavbar />
            <InvestHeroSimple />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <section id="overview" className="mb-16">
                    <h1 className="text-4xl font-bold mb-8 text-center">Investment Process: From 131 HTG to Shared Prosperity</h1>
                    
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-4xl mx-auto">
                            The Haiti Drone Cooperative offers unprecedented access to advanced technology investment through our revolutionary 
                            micro-investment platform. Whether you're a member of the Haitian diaspora looking to support your homeland or a 
                            local investor seeking technological advancement opportunities, our cooperative provides multiple pathways to participate 
                            in Haiti's drone technology revolution.
                        </p>
                    </div>
                </section>

                {/* Investment Process Steps */}
                <section id="process" className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">5-Step Investment Process</h2>
                    
                    {/* Step 1 */}
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                <span className="text-background text-xl font-bold">1</span>
                            </div>
                            <h3 className="text-2xl font-bold">Discover Investment Opportunities</h3>
                        </div>
                        
                        <p className="text-muted-foreground mb-6">
                            Browse our transparent marketplace of drone equipment and service investments. Every opportunity includes:
                        </p>
                        
                        <div className="grid lg:grid-cols-4 gap-6">
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Detailed ROI Projections</h4>
                                <p className="text-sm text-muted-foreground">Based on market analysis and historical performance data</p>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Risk Assessment</h4>
                                <p className="text-sm text-muted-foreground">Comprehensive evaluation of investment risks and mitigation strategies</p>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Equipment Specifications</h4>
                                <p className="text-sm text-muted-foreground">Technical details and service capabilities</p>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Market Demand Analysis</h4>
                                <p className="text-sm text-muted-foreground">Current and projected demand for specific services</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                <span className="text-background text-xl font-bold">2</span>
                            </div>
                            <h3 className="text-2xl font-bold">Choose Your Investment Level</h3>
                        </div>
                        
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Micro-Investments */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-xl font-semibold mb-4">Micro-Investments</h4>
                                <p className="text-sm text-muted-foreground mb-4">131-13,100 HTG / $1-$100</p>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Battery Module Shares:</strong>
                                        <p className="text-muted-foreground">1,310 HTG ($10) - Own 1/50th of a drone battery system</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Camera Shares:</strong>
                                        <p className="text-muted-foreground">2,620 HTG ($20) - Fractional ownership of imaging equipment</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Flight Controller Shares:</strong>
                                        <p className="text-muted-foreground">655 HTG ($5) - Participate in autopilot system ownership</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Service Hours:</strong>
                                        <p className="text-muted-foreground">131 HTG ($1) - Revenue rights to specific operational hours</p>
                                    </div>
                                </div>
                            </div>

                            {/* Standard Investments */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-xl font-semibold mb-4">Standard Investments</h4>
                                <p className="text-sm text-muted-foreground mb-4">13,100-131,000 HTG / $100-$1,000</p>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Equipment Bundles:</strong>
                                        <p className="text-muted-foreground">Combined ownership of complete drone subsystems</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Service Packages:</strong>
                                        <p className="text-muted-foreground">Revenue rights to specific service categories</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Geographic Territories:</strong>
                                        <p className="text-muted-foreground">Investment in specific regional operations</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Training Programs:</strong>
                                        <p className="text-muted-foreground">Investment in workforce development initiatives</p>
                                    </div>
                                </div>
                            </div>

                            {/* Diaspora Bonds */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-xl font-semibold mb-4">Diaspora Bonds</h4>
                                <p className="text-sm text-muted-foreground mb-4">131,000+ HTG / $1,000+</p>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Complete Equipment Units:</strong>
                                        <p className="text-muted-foreground">Full or majority ownership of individual drones</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Operational Franchises:</strong>
                                        <p className="text-muted-foreground">Rights to specific service territories</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Infrastructure Development:</strong>
                                        <p className="text-muted-foreground">Investment in hangars, training facilities, and support equipment</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Governance Tokens:</strong>
                                        <p className="text-muted-foreground">Enhanced voting rights and cooperative leadership opportunities</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                <span className="text-background text-xl font-bold">3</span>
                            </div>
                            <h3 className="text-2xl font-bold">Automated Aggregation & Smart Contracts</h3>
                        </div>
                        
                        <p className="text-muted-foreground mb-6">
                            Our blockchain-based platform automatically aggregates micro-investments to reach equipment purchase thresholds:
                        </p>
                        
                        <div className="grid lg:grid-cols-4 gap-6">
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-background text-lg font-bold">📊</span>
                                </div>
                                <h4 className="text-lg font-semibold mb-3">Individual Tracking</h4>
                                <p className="text-sm text-muted-foreground">Every contribution tracked on blockchain</p>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-background text-lg font-bold">🔄</span>
                                </div>
                                <h4 className="text-lg font-semibold mb-3">Automatic Pooling</h4>
                                <p className="text-sm text-muted-foreground">Platform combines investments to meet minimums</p>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-background text-lg font-bold">⚖️</span>
                                </div>
                                <h4 className="text-lg font-semibold mb-3">Proportional Ownership</h4>
                                <p className="text-sm text-muted-foreground">Smart contracts ensure accurate ownership percentages</p>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-background text-lg font-bold">🗳️</span>
                                </div>
                                <h4 className="text-lg font-semibold mb-3">Democratic Governance</h4>
                                <p className="text-sm text-muted-foreground">All investors vote on equipment deployment and strategy</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                <span className="text-background text-xl font-bold">4</span>
                            </div>
                            <h3 className="text-2xl font-bold">Equipment Deployment & Service Delivery</h3>
                        </div>
                        
                        <p className="text-muted-foreground mb-6">
                            Professional operations teams deploy and manage equipment:
                        </p>
                        
                        <div className="grid lg:grid-cols-4 gap-6">
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Strategic Placement</h4>
                                <p className="text-sm text-muted-foreground">Equipment positioned for optimal market coverage</p>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Professional Operation</h4>
                                <p className="text-sm text-muted-foreground">Certified pilots and technicians manage daily operations</p>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Quality Assurance</h4>
                                <p className="text-sm text-muted-foreground">Standardized procedures ensure consistent service delivery</p>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Real-time Monitoring</h4>
                                <p className="text-sm text-muted-foreground">Live tracking of equipment status and performance</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                <span className="text-background text-xl font-bold">5</span>
                            </div>
                            <h3 className="text-2xl font-bold">Revenue Distribution & Returns</h3>
                        </div>
                        
                        <p className="text-muted-foreground mb-6">
                            Automated smart contracts distribute revenue proportionally:
                        </p>
                        
                        <div className="grid lg:grid-cols-4 gap-6">
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Real-time Calculations</h4>
                                <p className="text-sm text-muted-foreground">Revenue distributed based on exact ownership percentages</p>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Multiple Currencies</h4>
                                <p className="text-sm text-muted-foreground">Returns available in HTG, USD, or cryptocurrency</p>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Reinvestment Options</h4>
                                <p className="text-sm text-muted-foreground">Automatic reinvestment programs for compound growth</p>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Transparency</h4>
                                <p className="text-sm text-muted-foreground">All transactions visible on blockchain explorer</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Equipment Catalog & Investment Opportunities */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Equipment Catalog & Investment Opportunities</h2>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Agricultural Drones */}
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                    <span className="text-background text-xl font-bold">🌾</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Agricultural Drones</h3>
                                    <p className="text-sm text-muted-foreground">Precision farming and crop monitoring</p>
                                </div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">DJI Agras T40: Advanced agricultural spraying drone</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Investment Range:</span>
                                        <span className="font-medium">131,000 - 1,310,000 HTG ($1,000 - $10,000)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Target ROI:</span>
                                        <span className="font-medium text-green-600">12-18% annually</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Market Focus:</span>
                                        <span className="font-medium">Artibonite Valley, Plateau Central</span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <strong className="text-foreground">Service Applications:</strong>
                                    <p className="text-muted-foreground text-sm">Crop monitoring, precision spraying, soil analysis</p>
                                </div>
                            </div>
                        </div>

                        {/* Survey & Mapping Drones */}
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                    <span className="text-background text-xl font-bold">📊</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Survey & Mapping Drones</h3>
                                    <p className="text-sm text-muted-foreground">High-precision surveying and inspection</p>
                                </div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">DJI Phantom 4 RTK: Professional mapping and surveying</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Investment Range:</span>
                                        <span className="font-medium">196,500 - 1,965,000 HTG ($1,500 - $15,000)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Target ROI:</span>
                                        <span className="font-medium text-green-600">15-22% annually</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Market Focus:</span>
                                        <span className="font-medium">Urban development, construction, government</span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <strong className="text-foreground">Service Applications:</strong>
                                    <p className="text-muted-foreground text-sm">Land surveying, construction monitoring, infrastructure inspection</p>
                                </div>
                            </div>
                        </div>

                        {/* Emergency Response Drones */}
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                    <span className="text-background text-xl font-bold">🚨</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Emergency Response Drones</h3>
                                    <p className="text-sm text-muted-foreground">Search and rescue, disaster response</p>
                                </div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">DJI Matrice 300 RTK: Professional emergency response platform</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Investment Range:</span>
                                        <span className="font-medium">655,000 - 2,620,000 HTG ($5,000 - $20,000)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Target ROI:</span>
                                        <span className="font-medium text-green-600">8-15% annually (impact-focused)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Market Focus:</span>
                                        <span className="font-medium">National emergency services, NGO partnerships</span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <strong className="text-foreground">Service Applications:</strong>
                                    <p className="text-muted-foreground text-sm">Emergency response, search and rescue, disaster assessment</p>
                                </div>
                            </div>
                        </div>

                        {/* Telecommunications Drones */}
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                    <span className="text-background text-xl font-bold">📡</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Telecommunications Drones</h3>
                                    <p className="text-sm text-muted-foreground">Connectivity and communication services</p>
                                </div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Custom LTE Relay Platforms: Mobile network extension systems</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Investment Range:</span>
                                        <span className="font-medium">262,000 - 1,310,000 HTG ($2,000 - $10,000)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Target ROI:</span>
                                        <span className="font-medium text-green-600">20-30% annually</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Market Focus:</span>
                                        <span className="font-medium">Rural connectivity, event coverage, emergency</span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <strong className="text-foreground">Service Applications:</strong>
                                    <p className="text-muted-foreground text-sm">Temporary internet hotspots, emergency communications</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Risk Assessment Framework */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Risk Assessment Framework</h2>
                    
                    <div className="grid lg:grid-cols-3 gap-8 mb-8">
                        {/* Low Risk */}
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <h3 className="text-xl font-bold mb-4">Low Risk (Conservative Portfolio)</h3>
                            <div className="space-y-4 text-sm">
                                <div>
                                    <strong className="text-foreground">Government Contracts:</strong>
                                    <p className="text-muted-foreground">Stable, predictable revenue from public sector</p>
                                </div>
                                <div>
                                    <strong className="text-foreground">Essential Services:</strong>
                                    <p className="text-muted-foreground">Critical infrastructure inspection and monitoring</p>
                                </div>
                                <div>
                                    <strong className="text-foreground">Long-term Agreements:</strong>
                                    <p className="text-muted-foreground">Multi-year service contracts with established clients</p>
                                </div>
                                <div className="pt-4 border-t">
                                    <strong className="text-foreground">Expected Returns:</strong>
                                    <span className="text-green-600 font-bold ml-2">8-12% annually</span>
                                </div>
                            </div>
                        </div>

                        {/* Medium Risk */}
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <h3 className="text-xl font-bold mb-4">Medium Risk (Balanced Portfolio)</h3>
                            <div className="space-y-4 text-sm">
                                <div>
                                    <strong className="text-foreground">Commercial Services:</strong>
                                    <p className="text-muted-foreground">Business-to-business drone services</p>
                                </div>
                                <div>
                                    <strong className="text-foreground">Seasonal Operations:</strong>
                                    <p className="text-muted-foreground">Agricultural services with seasonal revenue patterns</p>
                                </div>
                                <div>
                                    <strong className="text-foreground">Market Expansion:</strong>
                                    <p className="text-muted-foreground">New service offerings in established markets</p>
                                </div>
                                <div className="pt-4 border-t">
                                    <strong className="text-foreground">Expected Returns:</strong>
                                    <span className="text-green-600 font-bold ml-2">12-18% annually</span>
                                </div>
                            </div>
                        </div>

                        {/* Higher Risk */}
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <h3 className="text-xl font-bold mb-4">Higher Risk (Growth Portfolio)</h3>
                            <div className="space-y-4 text-sm">
                                <div>
                                    <strong className="text-foreground">New Technology:</strong>
                                    <p className="text-muted-foreground">Cutting-edge equipment with advanced capabilities</p>
                                </div>
                                <div>
                                    <strong className="text-foreground">Market Development:</strong>
                                    <p className="text-muted-foreground">Services in emerging or untested markets</p>
                                </div>
                                <div>
                                    <strong className="text-foreground">Innovation Projects:</strong>
                                    <p className="text-muted-foreground">R&D and experimental service offerings</p>
                                </div>
                                <div className="pt-4 border-t">
                                    <strong className="text-foreground">Expected Returns:</strong>
                                    <span className="text-green-600 font-bold ml-2">18-25% annually</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Risk Mitigation Strategies */}
                    <div className="bg-muted/50 rounded-xl p-8 border">
                        <h3 className="text-2xl font-bold mb-6 text-center">Risk Mitigation Strategies</h3>
                        <div className="grid lg:grid-cols-4 gap-6">
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-background text-lg font-bold">📊</span>
                                </div>
                                <h4 className="text-lg font-semibold mb-3">Diversification</h4>
                                <p className="text-sm text-muted-foreground">Spread investments across multiple equipment types and service sectors</p>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-background text-lg font-bold">🛡️</span>
                                </div>
                                <h4 className="text-lg font-semibold mb-3">Insurance Coverage</h4>
                                <p className="text-sm text-muted-foreground">Comprehensive equipment and liability insurance</p>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-background text-lg font-bold">🔍</span>
                                </div>
                                <h4 className="text-lg font-semibold mb-3">Market Research</h4>
                                <p className="text-sm text-muted-foreground">Thorough analysis of demand and competition</p>
                            </div>
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-background text-lg font-bold">🤝</span>
                                </div>
                                <h4 className="text-lg font-semibold mb-3">Community Partnership</h4>
                                <p className="text-sm text-muted-foreground">Strong relationships with local organizations and government</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-foreground rounded-xl p-8 text-center">
                    <h2 className="text-3xl font-bold text-background mb-4">Join the Drone Revolution</h2>
                    <p className="text-background/80 mb-6 max-w-2xl mx-auto">
                        Start your investment journey with as little as 131 HTG ($1). Share in the ownership, 
                        profits, and democratic governance of Haiti's technological advancement.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="mailto:invest@haitidronecooperative.com" 
                            className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-medium hover:bg-background/90 transition-colors"
                        >
                            Start Investing Today
                        </a>
                        <a 
                            href="/contact" 
                            className="inline-block border border-background text-background px-8 py-3 rounded-lg font-medium hover:bg-background/10 transition-colors"
                        >
                            Learn More
                        </a>
                    </div>
                </section>
            </div>
        </div>
        </>
    )
}
