import { Metadata } from 'next'
import { ServicesPageNavbar } from '@/components/services-page-navbar'
import ServicesHeroSimple from '@/components/services-hero-simple'

export const metadata: Metadata = {
    title: 'Comprehensive Drone Solutions - Haiti Development Services',
    description: 'Professional drone services across telecommunications, agriculture, security, infrastructure, and emergency response sectors in Haiti.',
}

export default function ServicesPage() {
    return (
        <>
            <ServicesPageNavbar />
            <ServicesHeroSimple />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <section id="overview" className="mb-16">
                    <h1 className="text-4xl font-bold mb-8 text-center">Comprehensive Drone Solutions for Haiti's Development</h1>
                    
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-4xl mx-auto">
                            Our cooperative provides cutting-edge drone services across multiple sectors, combining advanced technology 
                            with local expertise to meet Haiti's unique needs while generating sustainable returns for our member-investors.
                        </p>
                    </div>
                </section>

                {/* Primary Service Categories */}
                <section id="telecommunications" className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Primary Service Categories</h2>
                    
                    {/* Telecommunications & Connectivity Support */}
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                <span className="text-background text-xl font-bold">📡</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Telecommunications & Connectivity Support</h3>
                                <p className="text-sm text-muted-foreground">Annual Revenue Potential: 26.2M - 65.5M HTG</p>
                            </div>
                        </div>
                        
                        <div className="grid lg:grid-cols-3 gap-6">
                            {/* Tower Inspection & Maintenance */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Tower Inspection & Maintenance</h4>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Target Clients:</strong>
                                        <p className="text-muted-foreground">Digicel, Natcom, Access Haiti, Hainet</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Services:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>Comprehensive tower structural inspections</li>
                                            <li>Equipment condition assessments</li>
                                            <li>Coverage area mapping and optimization</li>
                                            <li>Maintenance scheduling and monitoring</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Pricing:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>Standard Inspection: 65,500 - 196,500 HTG</li>
                                            <li>Monthly Monitoring: 262,000 - 655,000 HTG</li>
                                            <li>Emergency Response: 131,000 - 393,000 HTG</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Network Coverage Optimization */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Network Coverage Optimization</h4>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Services:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>Signal strength mapping across urban and rural areas</li>
                                            <li>Interference detection and analysis</li>
                                            <li>Optimal antenna placement recommendations</li>
                                            <li>Real-time network performance monitoring</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Emergency Communication Services */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Emergency Communication Services</h4>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Capabilities:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>Rapid deployment during natural disasters</li>
                                            <li>Temporary cell tower functionality</li>
                                            <li>Emergency internet hotspot provision</li>
                                            <li>Coordination with emergency services</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Internet Connectivity Services */}
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                <span className="text-background text-xl font-bold">🌐</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Internet Connectivity Services</h3>
                                <p className="text-sm text-muted-foreground">Annual Revenue Potential: 39.3M - 104.8M HTG</p>
                            </div>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* Rural Internet Deployment */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Rural Internet Deployment</h4>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Target Clients:</strong>
                                        <p className="text-muted-foreground">Remote communities, schools, health clinics</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Technology:</strong>
                                        <p className="text-muted-foreground">4G/5G relay systems, satellite uplink integration</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Pricing:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>Daily Hotspot Service: 6,600 - 26,200 HTG</li>
                                            <li>Monthly Coverage Plans: 65,500 - 262,000 HTG</li>
                                            <li>Educational Institution Discounts: 50% off</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Event & Emergency Connectivity */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Event & Emergency Connectivity</h4>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Services:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>Large gathering internet support</li>
                                            <li>Disaster response communication networks</li>
                                            <li>Temporary business connectivity solutions</li>
                                            <li>Government emergency communication support</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Infrastructure Inspection & Monitoring */}
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                <span className="text-background text-xl font-bold">🏗️</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Infrastructure Inspection & Monitoring</h3>
                                <p className="text-sm text-muted-foreground">Annual Revenue Potential: 19.7M - 52.4M HTG</p>
                            </div>
                        </div>
                        
                        <div className="grid lg:grid-cols-3 gap-6">
                            {/* Bridge & Road Assessment */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Bridge & Road Assessment</h4>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Target Clients:</strong>
                                        <p className="text-muted-foreground">Ministry of Public Works, local governments, construction companies</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Capabilities:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>Structural integrity analysis</li>
                                            <li>Traffic pattern analysis</li>
                                            <li>Construction progress monitoring</li>
                                            <li>Safety assessment and risk identification</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Pricing:</strong>
                                        <p className="text-muted-foreground">131,000 - 655,000 HTG per inspection</p>
                                    </div>
                                </div>
                            </div>

                            {/* Power Infrastructure Monitoring */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Power Infrastructure Monitoring</h4>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Services:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>Electrical grid inspection</li>
                                            <li>Power line condition assessment</li>
                                            <li>Transformer and substation monitoring</li>
                                            <li>Outage investigation and response</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Building & Construction Inspection */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Building & Construction Inspection</h4>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Services:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>Construction site progress monitoring</li>
                                            <li>Building condition assessments</li>
                                            <li>Safety compliance verification</li>
                                            <li>Insurance claim documentation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security & Surveillance Solutions */}
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                <span className="text-background text-xl font-bold">🛡️</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Security & Surveillance Solutions</h3>
                                <p className="text-sm text-muted-foreground">Annual Revenue Potential: 32.8M - 78.6M HTG</p>
                            </div>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* Perimeter Security Monitoring */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Perimeter Security Monitoring</h4>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Target Clients:</strong>
                                        <p className="text-muted-foreground">Industrial facilities, agricultural operations, events</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Services:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>24/7 automated perimeter monitoring</li>
                                            <li>Intrusion detection and alert systems</li>
                                            <li>Event security for large gatherings</li>
                                            <li>Asset protection for remote facilities</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Pricing:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>Daily Coverage: 39,300 - 104,800 HTG</li>
                                            <li>Monthly Contracts: 262,000 - 1,000,000 HTG</li>
                                            <li>Event Security: 131,000 - 524,000 HTG</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Agricultural & Industrial Security */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Agricultural & Industrial Security</h4>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Agricultural Security:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>Crop theft prevention</li>
                                            <li>Livestock monitoring and protection</li>
                                            <li>Irrigation system security</li>
                                            <li>Harvest timing coordination</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Industrial Security:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>Facility perimeter monitoring</li>
                                            <li>Construction site security</li>
                                            <li>Port and shipping surveillance</li>
                                            <li>Critical infrastructure protection</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Agricultural Services */}
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                <span className="text-background text-xl font-bold">🌱</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Agricultural Services</h3>
                                <p className="text-sm text-muted-foreground">Annual Revenue Potential: 13.1M - 39.3M HTG</p>
                            </div>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* Precision Agriculture Solutions */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Precision Agriculture Solutions</h4>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Target Clients:</strong>
                                        <p className="text-muted-foreground">Large farming operations, agricultural cooperatives, NGOs</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Technology:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>Multispectral imaging for crop health</li>
                                            <li>Precision spraying and fertilizer application</li>
                                            <li>Irrigation optimization and water management</li>
                                            <li>Pest and disease detection and monitoring</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Pricing:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>Per-field Survey: 26,200 - 65,500 HTG</li>
                                            <li>Seasonal Monitoring: 131,000 - 393,000 HTG</li>
                                            <li>Precision Application: 39,300 - 131,000 HTG</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Crop Monitoring & Livestock Management */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Crop Monitoring & Livestock Management</h4>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Crop Monitoring:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>Weekly crop health assessments</li>
                                            <li>Yield prediction and optimization</li>
                                            <li>Irrigation efficiency analysis</li>
                                            <li>Pest and disease early warning systems</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Livestock Management:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>Herd monitoring and tracking</li>
                                            <li>Pasture condition assessment</li>
                                            <li>Fence line and water source inspection</li>
                                            <li>Animal health and behavior analysis</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Emergency & Disaster Response Services */}
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                <span className="text-background text-xl font-bold">🚨</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Emergency & Disaster Response Services</h3>
                                <p className="text-sm text-muted-foreground">Annual Revenue Potential: 6.6M - 26.2M HTG</p>
                            </div>
                        </div>
                        
                        <div className="grid lg:grid-cols-3 gap-6">
                            {/* Disaster Assessment & Response */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Disaster Assessment & Response</h4>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Target Clients:</strong>
                                        <p className="text-muted-foreground">Government emergency services, UN organizations, NGOs</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Capabilities:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>Post-disaster damage assessment within 2 hours</li>
                                            <li>Search and rescue support operations</li>
                                            <li>Emergency supply delivery to inaccessible areas</li>
                                            <li>Communication relay in disaster zones</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Hurricane & Storm Preparation */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Hurricane & Storm Preparation</h4>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Services:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>Pre-storm infrastructure assessment</li>
                                            <li>Evacuation route planning and monitoring</li>
                                            <li>Real-time storm tracking and damage assessment</li>
                                            <li>Post-storm recovery planning and coordination</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Search & Rescue Operations */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Search & Rescue Operations</h4>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Services:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>Missing person location services</li>
                                            <li>Medical emergency response in remote areas</li>
                                            <li>Maritime search and rescue support</li>
                                            <li>Natural disaster victim location and assistance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Media & Documentation Services */}
                    <div className="bg-muted/50 rounded-xl p-8 mb-8 border">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mr-4">
                                <span className="text-background text-xl font-bold">📸</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Media & Documentation Services</h3>
                                <p className="text-sm text-muted-foreground">Annual Revenue Potential: 9.8M - 26.2M HTG</p>
                            </div>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* Aerial Photography & Videography */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Aerial Photography & Videography</h4>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Target Clients:</strong>
                                        <p className="text-muted-foreground">News organizations, tourism boards, real estate developers</p>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Services:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>Professional aerial photography for marketing</li>
                                            <li>Real estate listing enhancement</li>
                                            <li>Tourism promotion content creation</li>
                                            <li>News and documentary footage</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Mapping & Surveying */}
                            <div className="bg-background rounded-lg p-6 shadow-sm border">
                                <h4 className="text-lg font-semibold mb-3">Mapping & Surveying</h4>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-foreground">Services:</strong>
                                        <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                            <li>Topographical mapping and analysis</li>
                                            <li>Land boundary surveying</li>
                                            <li>Construction site documentation</li>
                                            <li>Environmental change monitoring</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Delivery Model */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Service Delivery Model</h2>
                    
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        {/* Quality Assurance Standards */}
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <h3 className="text-2xl font-bold mb-6">Quality Assurance Standards</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <span className="text-background text-xs font-bold">✓</span>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Certified Personnel:</strong>
                                        <p className="text-muted-foreground">All pilots hold commercial certifications and Haiti-specific training</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <span className="text-background text-xs font-bold">✓</span>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Equipment Maintenance:</strong>
                                        <p className="text-muted-foreground">Preventive maintenance schedules ensure 95%+ uptime</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <span className="text-background text-xs font-bold">✓</span>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Response Times:</strong>
                                        <p className="text-muted-foreground">Emergency services within 30 minutes, standard services within 24 hours</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <span className="text-background text-xs font-bold">✓</span>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Data Security:</strong>
                                        <p className="text-muted-foreground">All data encrypted and securely stored with client access controls</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Customer Support Framework */}
                        <div className="bg-muted/50 rounded-xl p-8 border">
                            <h3 className="text-2xl font-bold mb-6">Customer Support Framework</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <span className="text-background text-xs font-bold">📞</span>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">24/7 Emergency Hotline:</strong>
                                        <p className="text-muted-foreground">Immediate response for critical situations</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <span className="text-background text-xs font-bold">👤</span>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Dedicated Account Management:</strong>
                                        <p className="text-muted-foreground">Personal service coordinators for major clients</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <span className="text-background text-xs font-bold">🔧</span>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Technical Support:</strong>
                                        <p className="text-muted-foreground">Expert consultation on optimal service utilization</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <span className="text-background text-xs font-bold">📚</span>
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Training & Education:</strong>
                                        <p className="text-muted-foreground">Client training on interpreting and utilizing drone-collected data</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Geographic Coverage Strategy */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Geographic Coverage Strategy</h2>
                    
                    <div className="bg-muted/50 rounded-xl p-8 border">
                        <div className="grid lg:grid-cols-4 gap-6">
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-background text-lg font-bold">1</span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Phase 1</h3>
                                <p className="text-sm text-muted-foreground">Port-au-Prince metropolitan area and surrounding regions</p>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-background text-lg font-bold">2</span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Phase 2</h3>
                                <p className="text-sm text-muted-foreground">Cap-Haïtien and northern Haiti coverage</p>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-background text-lg font-bold">3</span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Phase 3</h3>
                                <p className="text-sm text-muted-foreground">Les Cayes and southern Haiti expansion</p>
                            </div>
                            
                            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
                                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-background text-lg font-bold">4</span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Phase 4</h3>
                                <p className="text-sm text-muted-foreground">Complete national coverage with specialized regional services</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="bg-foreground rounded-xl p-8 text-center">
                    <h2 className="text-3xl font-bold text-background mb-4">Ready to Get Started?</h2>
                    <p className="text-background/80 mb-6 max-w-2xl mx-auto">
                        Contact us to discuss how our drone services can meet your specific needs and contribute to Haiti's development.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="mailto:services@haitidronecooperative.com" 
                            className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-medium hover:bg-background/90 transition-colors"
                        >
                            Request Service Quote
                        </a>
                        <a 
                            href="/contact" 
                            className="inline-block border border-background text-background px-8 py-3 rounded-lg font-medium hover:bg-background/10 transition-colors"
                        >
                            Contact Our Team
                        </a>
                    </div>
                </section>
            </div>
        </div>
        </>
    )
}
