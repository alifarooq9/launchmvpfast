import { Metadata } from 'next'
import ContactHero from '@/components/contact-hero'

export const metadata: Metadata = {
    title: 'Contact & Community Outreach: Connect with the Haiti Drone Cooperative',
    description: 'Connect with our revolutionary cooperative movement. Investment support, partnerships, community engagement, and building shared ownership of transformative technology.',
}

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-blue-600 text-xl">📧</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">General Inquiries</h3>
                                            <p className="text-gray-600 mb-2">For general questions and information</p>
                                            <a href="mailto:info@dronecooperative.com" className="text-blue-600 hover:underline">
                                                info@dronecooperative.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-green-600 text-xl">💼</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Investment Support</h3>
                                            <p className="text-gray-600 mb-2">Questions about investments and membership</p>
                                            <a href="mailto:invest@dronecooperative.com" className="text-blue-600 hover:underline">
                                                invest@dronecooperative.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-orange-600 text-xl">🛠️</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Technical Support</h3>
                                            <p className="text-gray-600 mb-2">Service requests and technical assistance</p>
                                            <a href="mailto:support@dronecooperative.com" className="text-blue-600 hover:underline">
                                                support@dronecooperative.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-purple-600 text-xl">🤝</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Partnerships</h3>
                                            <p className="text-gray-600 mb-2">Business partnerships and collaborations</p>
                                            <a href="mailto:partners@dronecooperative.com" className="text-blue-600 hover:underline">
                                                partners@dronecooperative.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-red-600 text-xl">📞</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Phone Support</h3>
                                            <p className="text-gray-600 mb-2">Monday-Friday, 9AM-5PM EST</p>
                                            <a href="tel:+1-555-DRONE-CO" className="text-blue-600 hover:underline">
                                                +1 (555) DRONE-CO
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Office Locations */}
                            <section>
                                <h2 className="text-2xl font-bold mb-6">Office Locations</h2>
                                <div className="space-y-6">
                                    <div className="border rounded-lg p-6">
                                        <h3 className="font-semibold mb-2">Headquarters</h3>
                                        <p className="text-gray-600 mb-2">
                                            123 Innovation Drive<br />
                                            Tech Valley, CA 94025<br />
                                            United States
                                        </p>
                                        <p className="text-sm text-gray-500">Main operations and administration</p>
                                    </div>

                                    <div className="border rounded-lg p-6">
                                        <h3 className="font-semibold mb-2">Midwest Operations</h3>
                                        <p className="text-gray-600 mb-2">
                                            456 Agricultural Way<br />
                                            Farmington, IA 52626<br />
                                            United States
                                        </p>
                                        <p className="text-sm text-gray-500">Agricultural services hub</p>
                                    </div>

                                    <div className="border rounded-lg p-6">
                                        <h3 className="font-semibold mb-2">Southeast Center</h3>
                                        <p className="text-gray-600 mb-2">
                                            789 Industrial Blvd<br />
                                            Atlanta, GA 30309<br />
                                            United States
                                        </p>
                                        <p className="text-sm text-gray-500">Industrial inspection services</p>
                                    </div>
                                </div>
                            </section>

                            {/* Response Time Commitments */}
                            <section className="bg-blue-50 rounded-lg p-6">
                                <h2 className="text-xl font-bold mb-4">Our Response Commitments</h2>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span>General Inquiries</span>
                                        <span className="font-semibold">24 hours</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Investment Questions</span>
                                        <span className="font-semibold">4 hours</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Technical Support</span>
                                        <span className="font-semibold">2 hours</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Emergency Support</span>
                                        <span className="font-semibold">30 minutes</span>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Contact Forms */}
                        <div className="space-y-8">
                            {/* General Contact Form */}
                            <section className="border rounded-lg p-8">
                                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">First Name *</label>
                                            <input 
                                                type="text" 
                                                required
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Your first name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Last Name *</label>
                                            <input 
                                                type="text" 
                                                required
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Your last name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                                        <input 
                                            type="email" 
                                            required
                                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Company/Organization</label>
                                        <input 
                                            type="text" 
                                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Your company name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Subject *</label>
                                        <select 
                                            required
                                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="investment">Investment Information</option>
                                            <option value="services">Service Request</option>
                                            <option value="partnership">Partnership Opportunity</option>
                                            <option value="support">Technical Support</option>
                                            <option value="media">Media/Press Inquiry</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Message *</label>
                                        <textarea 
                                            rows={6}
                                            required
                                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Please provide details about your inquiry..."
                                        ></textarea>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <input 
                                            type="checkbox" 
                                            id="newsletter"
                                            className="mt-1"
                                        />
                                        <label htmlFor="newsletter" className="text-sm text-gray-600">
                                            I would like to receive updates about the cooperative and industry news
                                        </label>
                                    </div>

                                    <button 
                                        type="submit"
                                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </section>

                            {/* Support Request Form */}
                            <section className="bg-gray-50 rounded-lg p-8">
                                <h2 className="text-xl font-bold mb-6">Technical Support Request</h2>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Support Type</label>
                                        <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                                            <option>Equipment Issue</option>
                                            <option>Service Request</option>
                                            <option>Account Support</option>
                                            <option>Technical Question</option>
                                            <option>Emergency Support</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Priority Level</label>
                                        <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                                            <option>Low - General question</option>
                                            <option>Medium - Non-urgent issue</option>
                                            <option>High - Service impacting</option>
                                            <option>Critical - Emergency support needed</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Description</label>
                                        <textarea 
                                            rows={4}
                                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            placeholder="Describe the issue or request..."
                                        ></textarea>
                                    </div>

                                    <button 
                                        type="submit"
                                        className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                                    >
                                        Submit Support Request
                                    </button>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
