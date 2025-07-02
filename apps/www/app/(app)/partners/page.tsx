import { Metadata } from 'next'
import PartnersHeroSimple from '@/components/partners-hero-simple'

export const metadata: Metadata = {
    title: 'Partnership Opportunities - Join Our Network',
    description: 'Explore partnership opportunities with our drone cooperative. Multiple partnership models available.',
}

export default function PartnersPage() {
    return (
        <>
            <PartnersHeroSimple />
            <div className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
                {/* Partnership Types */}
                <section id="current" className="mb-12">
                    <h2 className="text-3xl font-bold mb-8">Partnership Models</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Technology Partners */}
                        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-blue-100 rounded-lg mb-6 flex items-center justify-center">
                                <span className="text-blue-600 text-6xl">🔬</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Technology Partners</h3>
                            <p className="text-gray-600 mb-4">
                                Collaborate on R&D, integrate cutting-edge technologies, and co-develop 
                                innovative drone solutions for emerging markets.
                            </p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                                    Joint research projects
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                                    Technology integration
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                                    Co-marketing opportunities
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                                    Revenue sharing models
                                </div>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                Learn More
                            </button>
                        </div>

                        {/* Service Partners */}
                        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-green-100 rounded-lg mb-6 flex items-center justify-center">
                                <span className="text-green-600 text-6xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Service Partners</h3>
                            <p className="text-gray-600 mb-4">
                                Expand service capabilities through strategic alliances, 
                                referral programs, and complementary service offerings.
                            </p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                                    Referral programs
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                                    Cross-service bundling
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                                    Geographic expansion
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                                    Shared resources
                                </div>
                            </div>
                            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                                Learn More
                            </button>
                        </div>

                        {/* Distribution Partners */}
                        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-purple-100 rounded-lg mb-6 flex items-center justify-center">
                                <span className="text-purple-600 text-6xl">🌐</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Distribution Partners</h3>
                            <p className="text-gray-600 mb-4">
                                Become a regional distributor or reseller of our services 
                                and investment opportunities in your local market.
                            </p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                                    Exclusive territories
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                                    Marketing support
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                                    Training programs
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                                    Commission structure
                                </div>
                            </div>
                            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                                Learn More
                            </button>
                        </div>

                        {/* Financial Partners */}
                        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-orange-100 rounded-lg mb-6 flex items-center justify-center">
                                <span className="text-orange-600 text-6xl">💰</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Financial Partners</h3>
                            <p className="text-gray-600 mb-4">
                                Partner with us as institutional investors, lenders, 
                                or financial service providers to support cooperative growth.
                            </p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                                    Investment partnerships
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                                    Equipment financing
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                                    Risk sharing models
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                                    Portfolio diversification
                                </div>
                            </div>
                            <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                                Learn More
                            </button>
                        </div>

                        {/* Academic Partners */}
                        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-red-100 rounded-lg mb-6 flex items-center justify-center">
                                <span className="text-red-600 text-6xl">🎓</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Academic Partners</h3>
                            <p className="text-gray-600 mb-4">
                                Collaborate with universities and research institutions on 
                                education, research, and workforce development initiatives.
                            </p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                                    Research collaborations
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                                    Student internships
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                                    Training programs
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                                    Grant opportunities
                                </div>
                            </div>
                            <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                                Learn More
                            </button>
                        </div>

                        {/* Government Partners */}
                        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                                <span className="text-gray-600 text-6xl">🏛️</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Government Partners</h3>
                            <p className="text-gray-600 mb-4">
                                Work with government agencies on public services, 
                                economic development, and regulatory compliance initiatives.
                            </p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-gray-600 rounded-full mr-2"></div>
                                    Public-private partnerships
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-gray-600 rounded-full mr-2"></div>
                                    Emergency services
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-gray-600 rounded-full mr-2"></div>
                                    Infrastructure monitoring
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-gray-600 rounded-full mr-2"></div>
                                    Economic development
                                </div>
                            </div>
                            <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </section>

                {/* Partner Benefits */}
                <section className="mb-12 bg-blue-50 rounded-lg p-8">
                    <h2 className="text-3xl font-bold mb-8 text-center">Why Partner With Us?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                🚀
                            </div>
                            <h3 className="font-semibold mb-2">Innovation Access</h3>
                            <p className="text-gray-600 text-sm">
                                Access to cutting-edge drone technology and collaborative innovation opportunities
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                📈
                            </div>
                            <h3 className="font-semibold mb-2">Market Growth</h3>
                            <p className="text-gray-600 text-sm">
                                Tap into the rapidly growing drone services market with established infrastructure
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                🌐
                            </div>
                            <h3 className="font-semibold mb-2">Network Effect</h3>
                            <p className="text-gray-600 text-sm">
                                Benefit from our extensive network of members, clients, and industry connections
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                🤝
                            </div>
                            <h3 className="font-semibold mb-2">Shared Success</h3>
                            <p className="text-gray-600 text-sm">
                                Participate in cooperative ownership model with aligned incentives and shared returns
                            </p>
                        </div>
                    </div>
                </section>

                {/* Current Partners */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-8">Our Current Partners</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="border rounded-lg p-6">
                            <div className="h-24 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                                <span className="text-blue-600 font-bold text-lg">TechCorp Systems</span>
                            </div>
                            <h3 className="font-semibold mb-2">Technology Partner</h3>
                            <p className="text-gray-600 text-sm mb-3">
                                Joint development of AI-powered autonomous navigation systems for agricultural drones.
                            </p>
                            <div className="text-xs text-gray-500">Partnership since 2022</div>
                        </div>

                        <div className="border rounded-lg p-6">
                            <div className="h-24 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                                <span className="text-green-600 font-bold text-lg">AgriService Pro</span>
                            </div>
                            <h3 className="font-semibold mb-2">Service Partner</h3>
                            <p className="text-gray-600 text-sm mb-3">
                                Regional distribution and service delivery partner covering Midwest agricultural markets.
                            </p>
                            <div className="text-xs text-gray-500">Partnership since 2023</div>
                        </div>

                        <div className="border rounded-lg p-6">
                            <div className="h-24 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                                <span className="text-purple-600 font-bold text-lg">State University</span>
                            </div>
                            <h3 className="font-semibold mb-2">Academic Partner</h3>
                            <p className="text-gray-600 text-sm mb-3">
                                Research collaboration on precision agriculture and student internship programs.
                            </p>
                            <div className="text-xs text-gray-500">Partnership since 2021</div>
                        </div>

                        <div className="border rounded-lg p-6">
                            <div className="h-24 bg-orange-100 rounded-lg mb-4 flex items-center justify-center">
                                <span className="text-orange-600 font-bold text-lg">Regional Bank</span>
                            </div>
                            <h3 className="font-semibold mb-2">Financial Partner</h3>
                            <p className="text-gray-600 text-sm mb-3">
                                Equipment financing and investment banking services for cooperative expansion.
                            </p>
                            <div className="text-xs text-gray-500">Partnership since 2022</div>
                        </div>

                        <div className="border rounded-lg p-6">
                            <div className="h-24 bg-red-100 rounded-lg mb-4 flex items-center justify-center">
                                <span className="text-red-600 font-bold text-lg">City Planning Dept</span>
                            </div>
                            <h3 className="font-semibold mb-2">Government Partner</h3>
                            <p className="text-gray-600 text-sm mb-3">
                                Infrastructure monitoring and emergency response services for municipal operations.
                            </p>
                            <div className="text-xs text-gray-500">Partnership since 2023</div>
                        </div>

                        <div className="border rounded-lg p-6">
                            <div className="h-24 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                <span className="text-gray-600 font-bold text-lg">+ Your Company</span>
                            </div>
                            <h3 className="font-semibold mb-2">Future Partner</h3>
                            <p className="text-gray-600 text-sm mb-3">
                                Join our growing network of partners and create shared value in the drone industry.
                            </p>
                            <div className="text-xs text-blue-600">Apply now →</div>
                        </div>
                    </div>
                </section>

                {/* Partnership Application */}
                <section id="apply" className="bg-gray-50 rounded-lg p-8">
                    <h2 className="text-3xl font-bold mb-8 text-center">Apply for Partnership</h2>
                    <div className="max-w-3xl mx-auto">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Company Name *</label>
                                    <input 
                                        type="text" 
                                        required
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your company name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Industry *</label>
                                    <select 
                                        required
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select industry</option>
                                        <option value="technology">Technology</option>
                                        <option value="agriculture">Agriculture</option>
                                        <option value="financial">Financial Services</option>
                                        <option value="academic">Academic/Research</option>
                                        <option value="government">Government</option>
                                        <option value="consulting">Consulting</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Contact Person *</label>
                                    <input 
                                        type="text" 
                                        required
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="Full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Title/Position *</label>
                                    <input 
                                        type="text" 
                                        required
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="Job title"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                                    <input 
                                        type="email" 
                                        required
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="business@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Partnership Type *</label>
                                <select 
                                    required
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select partnership type</option>
                                    <option value="technology">Technology Partner</option>
                                    <option value="service">Service Partner</option>
                                    <option value="distribution">Distribution Partner</option>
                                    <option value="financial">Financial Partner</option>
                                    <option value="academic">Academic Partner</option>
                                    <option value="government">Government Partner</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Partnership Proposal *</label>
                                <textarea 
                                    rows={6}
                                    required
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Describe your partnership proposal, including what you bring to the collaboration and what you hope to achieve..."
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Company Size</label>
                                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
                                    <option value="">Select company size</option>
                                    <option value="startup">Startup (1-10 employees)</option>
                                    <option value="small">Small (11-50 employees)</option>
                                    <option value="medium">Medium (51-200 employees)</option>
                                    <option value="large">Large (201-1000 employees)</option>
                                    <option value="enterprise">Enterprise (1000+ employees)</option>
                                </select>
                            </div>

                            <div className="flex items-start space-x-3">
                                <input 
                                    type="checkbox" 
                                    id="terms"
                                    required
                                    className="mt-1"
                                />
                                <label htmlFor="terms" className="text-sm text-gray-600">
                                    I agree to the terms and conditions and understand that this application will be reviewed by our partnership team *
                                </label>
                            </div>

                            <button 
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Submit Partnership Application
                            </button>
                        </form>

                        <div className="mt-8 text-center text-gray-600">
                            <p className="mb-2">Questions about partnerships?</p>
                            <a href="mailto:partners@dronecooperative.com" className="text-blue-600 hover:underline">
                                Contact our partnership team
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </>
    )
}
