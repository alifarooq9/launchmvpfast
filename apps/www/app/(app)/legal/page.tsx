import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Legal Information - Terms, Privacy & Compliance',
    description: 'Legal information including terms of service, privacy policy, and regulatory compliance details.',
}

export default function LegalPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                {/* Hero Section */}
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-6">Legal Information</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Important legal information regarding our services, privacy practices, 
                        and regulatory compliance framework.
                    </p>
                </section>

                {/* Quick Navigation */}
                <section className="mb-12">
                    <div className="bg-gray-50 rounded-lg p-6">
                        <h2 className="text-xl font-bold mb-4">Quick Navigation</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <a href="#terms" className="text-blue-600 hover:underline">Terms of Service</a>
                            <a href="#privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
                            <a href="#compliance" className="text-blue-600 hover:underline">Regulatory Compliance</a>
                            <a href="#risks" className="text-blue-600 hover:underline">Risk Disclosures</a>
                        </div>
                    </div>
                </section>

                {/* Terms of Service */}
                <section id="terms" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Terms of Service</h2>
                    <div className="prose max-w-none">
                        <p className="text-gray-600 mb-4"><strong>Last Updated:</strong> July 1, 2025</p>
                        
                        <h3 className="text-xl font-semibold mt-6 mb-3">1. Acceptance of Terms</h3>
                        <p className="mb-4">
                            By accessing and using our services, you accept and agree to be bound by the terms 
                            and provision of this agreement. If you do not agree to abide by the above, please 
                            do not use this service.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">2. Cooperative Membership</h3>
                        <p className="mb-4">
                            Membership in our cooperative is voluntary and open to individuals and organizations 
                            who agree to accept the responsibilities of membership and who can make use of the 
                            cooperative's services.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">3. Investment Terms</h3>
                        <p className="mb-4">
                            All investments are subject to our investment agreement and prospectus. Investments 
                            carry risk of loss and returns are not guaranteed. Members should carefully review 
                            all investment documentation before making investment decisions.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">4. Service Provisions</h3>
                        <p className="mb-4">
                            We provide drone services subject to availability, weather conditions, and regulatory 
                            compliance. Service terms are outlined in individual service agreements.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">5. Limitation of Liability</h3>
                        <p className="mb-4">
                            Our liability is limited to the extent permitted by law. We are not liable for 
                            indirect, incidental, special, or consequential damages arising from the use of 
                            our services.
                        </p>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                            <p className="text-blue-800">
                                <strong>Note:</strong> These terms are subject to change. Members will be notified 
                                of significant changes via email and through member communications.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Privacy Policy */}
                <section id="privacy" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
                    <div className="prose max-w-none">
                        <p className="text-gray-600 mb-4"><strong>Last Updated:</strong> July 1, 2025</p>
                        
                        <h3 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h3>
                        <p className="mb-4">We collect information you provide directly to us, such as:</p>
                        <ul className="list-disc list-inside mb-4 space-y-1">
                            <li>Contact information (name, email, phone, address)</li>
                            <li>Financial information for investment purposes</li>
                            <li>Professional information for service delivery</li>
                            <li>Usage data from our website and platforms</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h3>
                        <p className="mb-4">We use collected information to:</p>
                        <ul className="list-disc list-inside mb-4 space-y-1">
                            <li>Provide and improve our services</li>
                            <li>Process investments and membership applications</li>
                            <li>Communicate about services and cooperative matters</li>
                            <li>Comply with legal and regulatory requirements</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-3">Data Protection</h3>
                        <p className="mb-4">
                            We implement appropriate security measures to protect your personal information 
                            against unauthorized access, alteration, disclosure, or destruction.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">Third-Party Sharing</h3>
                        <p className="mb-4">
                            We do not sell or rent your personal information to third parties. We may share 
                            information with service providers who assist in our operations, subject to 
                            confidentiality agreements.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">Your Rights</h3>
                        <p className="mb-4">You have the right to:</p>
                        <ul className="list-disc list-inside mb-4 space-y-1">
                            <li>Access your personal information</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your information</li>
                            <li>Opt out of marketing communications</li>
                        </ul>
                    </div>
                </section>

                {/* Regulatory Compliance */}
                <section id="compliance" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Regulatory Compliance</h2>
                    <div className="prose max-w-none">
                        <h3 className="text-xl font-semibold mt-6 mb-3">FAA Compliance</h3>
                        <p className="mb-4">
                            All drone operations are conducted in compliance with Federal Aviation Administration 
                            (FAA) regulations, including Part 107 rules for commercial drone operations. Our 
                            pilots are certified and our equipment is registered as required.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">Securities Regulations</h3>
                        <p className="mb-4">
                            Investment offerings are structured in compliance with applicable securities laws. 
                            We operate under cooperative law frameworks and applicable exemptions for 
                            cooperative securities offerings.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">State and Local Regulations</h3>
                        <p className="mb-4">
                            We comply with all applicable state and local regulations regarding drone operations, 
                            business licensing, and cooperative organizations in our operating jurisdictions.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">Insurance Requirements</h3>
                        <p className="mb-4">
                            We maintain comprehensive insurance coverage including general liability, 
                            professional liability, and equipment coverage as required by regulations 
                            and industry best practices.
                        </p>

                        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
                            <h4 className="font-semibold mb-2">Compliance Certifications</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                                    FAA Part 107 Remote Pilot Certification
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                                    State Cooperative Registration
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                                    Professional Liability Insurance
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                                    Industry Safety Standards
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Risk Disclosures */}
                <section id="risks" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Investment Risk Disclosures</h2>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Important Investment Risks</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Market Risk</h4>
                                <p className="text-gray-700">
                                    The drone services market is subject to economic conditions, technological 
                                    changes, and competitive pressures that may affect returns.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-2">Technology Risk</h4>
                                <p className="text-gray-700">
                                    Rapid technological advancement may render equipment obsolete or reduce 
                                    its competitive value sooner than expected.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-2">Regulatory Risk</h4>
                                <p className="text-gray-700">
                                    Changes in aviation regulations, securities laws, or other applicable 
                                    regulations may impact operations and returns.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-2">Operational Risk</h4>
                                <p className="text-gray-700">
                                    Weather conditions, equipment failures, and operational challenges may 
                                    affect service delivery and revenue generation.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-2">Liquidity Risk</h4>
                                <p className="text-gray-700">
                                    Cooperative membership interests may not be easily transferable, and 
                                    early withdrawal may be subject to restrictions or penalties.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded">
                            <p className="text-red-800 font-semibold">
                                All investments carry risk of loss. Past performance does not guarantee future results. 
                                Investors should carefully consider their risk tolerance and investment objectives 
                                before investing.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact for Legal Matters */}
                <section className="bg-gray-50 rounded-lg p-8">
                    <h2 className="text-2xl font-bold mb-6">Legal Inquiries</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold mb-2">General Legal Questions</h3>
                            <p className="text-gray-600 mb-2">
                                For questions about our legal policies or compliance matters:
                            </p>
                            <a href="mailto:legal@dronecooperative.com" className="text-blue-600 hover:underline">
                                legal@dronecooperative.com
                            </a>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Privacy Concerns</h3>
                            <p className="text-gray-600 mb-2">
                                For privacy-related questions or to exercise your data rights:
                            </p>
                            <a href="mailto:privacy@dronecooperative.com" className="text-blue-600 hover:underline">
                                privacy@dronecooperative.com
                            </a>
                        </div>
                    </div>
                    
                    <div className="mt-6 text-center text-gray-600">
                        <p>
                            This page provides general information only and does not constitute legal advice. 
                            Consult with qualified legal counsel for specific legal matters.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}
