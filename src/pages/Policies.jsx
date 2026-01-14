import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ANIMATIONS, SHIPPING } from '../config/constants'
import { updateMetaTags } from '../utils/seo'

export default function Policies() {
    useEffect(() => {
        updateMetaTags({
            title: 'Policies - Coke on Cock',
            description: 'Shipping, returns, and the fine print. Legal stuff, but made easy.'
        })
    }, [])

    const [activeTab, setActiveTab] = useState('shipping')

    const tabs = [
        { id: 'shipping', name: 'Shipping & Returns' },
        { id: 'privacy', name: 'Privacy' },
        { id: 'terms', name: 'Terms' }
    ]

    return (
        <div className="min-h-screen">
            <section className="container mx-auto px-4 py-16 md:py-24">
                <motion.div
                    {...ANIMATIONS.fadeInUp}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-bold font-display mb-8">
                        THE <span className="text-matrix">FINE PRINT</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-12 font-mono">
                        Legal stuff, but make it sexy.
                    </p>

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-4 mb-12 border-b-4 border-white pb-4">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 font-bold uppercase border-4 transition-all ${activeTab === tab.id
                                    ? 'bg-matrix text-black border-black'
                                    : 'bg-black text-white border-white hover:border-matrix'
                                    }`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        {activeTab === 'shipping' && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-hotpink mb-4">Shipping</h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        We ship worldwide. Your signal goes global.
                                    </p>
                                    <ul className="space-y-3 mt-4 text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-matrix mr-3">→</span>
                                            <span><strong>Free shipping</strong> on orders over €{SHIPPING.freeShippingThreshold}. Because we like commitment.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-hotpink mr-3">→</span>
                                            <span><strong>Processing time:</strong> 2-5 business days. We're not Amazon, we're worth the wait.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-cyan mr-3">→</span>
                                            <span><strong>Delivery:</strong> 5-14 days depending on location. Track your package like you track your ex.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-t-2 border-gray-700 pt-8">
                                    <h2 className="text-3xl font-bold text-cyan mb-4">Returns</h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        Changed your mind? We get it. Nights are unpredictable.
                                    </p>
                                    <ul className="space-y-3 mt-4 text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-matrix mr-3">→</span>
                                            <span><strong>30-day return window.</strong> Unworn, unwashed, tags attached. Like it never happened.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-hotpink mr-3">→</span>
                                            <span><strong>No questions asked.</strong> We're not your therapist.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-cyan mr-3">→</span>
                                            <span><strong>Refund or exchange.</strong> Your choice. We're flexible like that.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-white mr-3">→</span>
                                            <span><strong>Return shipping:</strong> On you. Unless we fucked up, then it's on us.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gray-900 border-4 border-matrix p-6 mt-8">
                                    <p className="text-lg font-mono text-matrix">
                                        <strong>Note:</strong> Sale items and accessories (stickers, patches) are final sale.
                                        You knew what you were getting into.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'privacy' && (
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-hotpink mb-4">Privacy Policy</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    We collect your data. But we're not creeps about it.
                                </p>

                                <div className="space-y-4 text-gray-300">
                                    <div>
                                        <h3 className="text-xl font-bold text-matrix mb-2">What We Collect</h3>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Name, email, shipping address (to send you stuff)</li>
                                            <li>Payment info (processed securely, we never see your card)</li>
                                            <li>Order history (so you can reorder that tee you love)</li>
                                            <li>IP address and browser data (standard web stuff)</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-cyan mb-2">What We Do With It</h3>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Process and ship your orders</li>
                                            <li>Send you updates (if you opt in)</li>
                                            <li>Improve the site experience</li>
                                            <li>Comply with legal requirements</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-hotpink mb-2">What We Don't Do</h3>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Sell your data to third parties</li>
                                            <li>Spam you with bullshit</li>
                                            <li>Share your info without permission</li>
                                            <li>Judge your purchase history (we've all been there)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-gray-900 border-4 border-hotpink p-6 mt-8">
                                    <p className="text-lg font-mono">
                                        <strong>Your Rights:</strong> You can request your data, delete it, or opt out anytime.
                                        Email us at privacy@cokeoncock.com. We'll handle it.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'terms' && (
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-cyan mb-4">Terms of Service</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    The boring legal stuff. Read it or don't, but you're agreeing to it.
                                </p>

                                <div className="space-y-6 text-gray-300">
                                    <div>
                                        <h3 className="text-xl font-bold text-matrix mb-2">Use of Site</h3>
                                        <p>
                                            This site is for buying clothes and looking at provocative branding.
                                            Don't hack it, don't scrape it, don't be a dick. Standard internet rules apply.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-hotpink mb-2">Product Descriptions</h3>
                                        <p>
                                            We try to be accurate. Colors might look different on your screen.
                                            Fits might vary slightly. We're making clothes, not promises.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-cyan mb-2">Pricing</h3>
                                        <p>
                                            Prices are in EUR (€) unless stated otherwise. We reserve the right to change prices.
                                            If we fuck up a price, we'll cancel the order and refund you. No hard feelings.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Intellectual Property</h3>
                                        <p>
                                            Our designs, logos, and copy are ours. Don't steal them.
                                            If you want to collab, DM us on Instagram like a normal person.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-matrix mb-2">Limitation of Liability</h3>
                                        <p>
                                            We're not responsible for what happens when you wear our stuff.
                                            If it starts a conversation, great. If it starts a fight, that's on you.
                                            Wear with confidence and handle the consequences.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gray-900 border-4 border-cyan p-6 mt-8">
                                    <p className="text-lg font-mono">
                                        <strong>Questions?</strong> Email legal@cokeoncock.com.
                                        We'll respond when we're not at the club.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </section>

            {/* Bottom Spacer */}
            <div className="h-20"></div>
        </div>
    )
}
