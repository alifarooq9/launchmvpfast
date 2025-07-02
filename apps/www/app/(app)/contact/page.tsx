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
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto">
                    {/* Featured Contact Form */}
                    <section className="mb-16">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Ready to join our cooperative movement? Have questions about investment opportunities? 
                                We're here to help you become part of Haiti's technological transformation.
                            </p>
                        </div>
                        
                        <div className="max-w-3xl mx-auto">
                            <div className="bg-muted/30 rounded-2xl p-8 border">
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold mb-3">First Name *</label>
                                            <input 
                                                type="text" 
                                                required
                                                className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                                                placeholder="Your first name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold mb-3">Last Name *</label>
                                            <input 
                                                type="text" 
                                                required
                                                className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                                                placeholder="Your last name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-3">Email Address *</label>
                                        <input 
                                            type="email" 
                                            required
                                            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-3">Phone Number</label>
                                        <input 
                                            type="tel" 
                                            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-3">Company/Organization</label>
                                        <input 
                                            type="text" 
                                            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                                            placeholder="Your company or organization"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-3">Subject *</label>
                                        <select 
                                            required
                                            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="investment">💰 Investment Opportunities</option>
                                            <option value="partnership">🤝 Partnership Inquiry</option>
                                            <option value="services">🛠️ Service Request</option>
                                            <option value="general">💬 General Information</option>
                                            <option value="support">📞 Technical Support</option>
                                            <option value="media">📰 Media/Press Inquiry</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-3">Message *</label>
                                        <textarea 
                                            rows={6}
                                            required
                                            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base resize-none"
                                            placeholder="Tell us about your interest in the Haiti Drone Cooperative. Whether you're looking to invest, partner with us, or learn more about our services, we'd love to hear from you..."
                                        ></textarea>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <input 
                                            type="checkbox" 
                                            id="newsletter"
                                            className="mt-1.5 w-4 h-4"
                                        />
                                        <label htmlFor="newsletter" className="text-sm text-muted-foreground leading-relaxed">
                                            I would like to receive updates about the Haiti Drone Cooperative, including investment opportunities, 
                                            community impact reports, and cooperative governance updates.
                                        </label>
                                    </div>

                                    <button 
                                        type="submit"
                                        className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
