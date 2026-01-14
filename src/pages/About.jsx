import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ANIMATIONS } from '../config/constants'
import { updateMetaTags } from '../utils/seo'

export default function About() {
    useEffect(() => {
        updateMetaTags({
            title: 'Our Story - Coke on Cock',
            description: 'Born in Berlin nights where strangers become allies. A uniform for participants, not observers.'
        })
    }, [])
    return (
        <div className="min-h-screen">
            {/* Hero Section - The Origin */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <motion.div
                    {...ANIMATIONS.fadeInUp}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-8">
                        THE <span className="text-matrix">ORIGIN</span>
                    </h1>

                    {/* Poetic Origin Story - The Bathroom Line Scene */}
                    <div className="space-y-6 text-lg md:text-xl text-gray-300 font-mono leading-relaxed">
                        <p>
                            The bathroom line at Berghain snakes like a confession booth.
                        </p>
                        <p>
                            Bass rattles in the distance.
                        </p>
                        <p>
                            Someone's rolling.
                        </p>
                        <p>
                            Someone's kissing.
                        </p>
                        <p>
                            Someone's pissing into someone else's face.
                        </p>
                        <p className="mt-8">
                            She leans in, eyes sharp. She commands:
                        </p>
                        <p className="text-hotpink italic">
                            "Lets do a line together"
                        </p>
                        <p>
                            You nod.
                        </p>
                        <p className="text-cyan italic">
                            "Where?"
                        </p>
                        <p>
                            She doesn't blink.
                        </p>
                        <p className="text-matrix text-2xl md:text-3xl font-bold my-8">
                            "On your cock."
                        </p>
                        <p>
                            Not a joke. An invitation.
                        </p>
                        <p>
                            Not shock value. Adult playfulness.
                        </p>
                        <p>
                            Not performance. Permission.
                        </p>
                        <p className="text-white text-xl md:text-2xl font-bold mt-12">
                            That's the spirit we wear.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Divider */}
            <div className="container mx-auto px-4">
                <div className="h-px bg-gradient-to-r from-transparent via-hotpink to-transparent"></div>
            </div>

            {/* Brand Philosophy */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <motion.div
                    {...ANIMATIONS.fadeInView}
                    className="max-w-4xl mx-auto"
                >
                    {/* <h2 className="text-3xl md:text-5xl font-bold font-display mb-12">
                        WHAT WE <span className="text-cyan">BELIEVE</span>
                    </h2> */}

                    <div className="space-y-12">
                        {/* Strategic Premise */}
                        {/* <div>
                            <h3 className="text-xl md:text-2xl font-bold text-matrix mb-4">Social Accelerant</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                This brand is a social accelerant. It turns nightlife into a shared language.
                                The name is a provocation and a filter—it calls in people who want charged environments,
                                fast bonding, and flirtation that is public, playful, and unapologetic.
                            </p>
                        </div> */}

                        {/* Why We Exist */}
                        {/* <div>
                            <h3 className="text-xl md:text-2xl font-bold text-hotpink mb-4">Permission to Want</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                We exist to make desire socially legible. Not hidden, not ironic, not polite.
                                We create group electricity—the feeling that the room is conspiring in your favor.
                                We celebrate adult play, dirty humor, and lust as confidence.
                            </p>
                        </div> */}

                        {/* How We Do It */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-cyan mb-4">How We Do It</h3>
                            <ul className="space-y-3 text-gray-300 text-lg">
                                <li className="flex items-start">
                                    <span className="text-matrix mr-3">→</span>
                                    <span><strong>Social signaling.</strong> Clothing as a readable invitation</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-hotpink mr-3">→</span>
                                    <span><strong>Ritual.</strong> Drops that map to nights, circles, and moments, not seasons</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-cyan mr-3">→</span>
                                    <span><strong>Humor with teeth.</strong> The brand smirks, it does not explain itself</span>
                                </li>
                            </ul>
                        </div>

                        {/* Messaging Pillars */}
                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                            <div className="border-4 border-matrix p-6">
                                <h4 className="text-xl font-bold text-matrix mb-3">The Invitation</h4>
                                <p className="text-gray-300">You wear it to start things.</p>
                            </div>
                            <div className="border-4 border-hotpink p-6">
                                <h4 className="text-xl font-bold text-hotpink mb-3">The Circle</h4>
                                <p className="text-gray-300">You wear it to find your circle faster, to enter one, to be claimed by one.</p>
                            </div>
                            <div className="border-4 border-cyan p-6">
                                <h4 className="text-xl font-bold text-cyan mb-3">The Room</h4>
                                <p className="text-gray-300">You wear it to change the temperature of the space.</p>
                            </div>
                            <div className="border-4 border-white p-6">
                                <h4 className="text-xl font-bold text-white mb-3">The Joke</h4>
                                <p className="text-gray-300">You wear it because it's funny, rude, and true.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Divider */}
            <div className="container mx-auto px-4">
                <div className="h-px bg-gradient-to-r from-transparent via-cyan to-transparent"></div>
            </div>

            {/* Brand Voice */}
            {/* <section className="container mx-auto px-4 py-16 md:py-24">
                <motion.div
                    {...ANIMATIONS.fadeInView}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-12">
                        HOW WE <span className="text-matrix">SPEAK</span>
                    </h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-hotpink mb-4">Voice</h3>
                            <p className="text-gray-300 text-lg">
                                Short. Sharp. Hungry.<br />
                                More invitation than explanation.<br />
                                Flirt like you mean it.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-lg font-bold text-matrix mb-3">Always</h4>
                                <p className="text-gray-400">Blunt, playful, intimate, confident</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-hotpink mb-3">Never</h4>
                                <p className="text-gray-400">Educational, wholesome, apologetic, clinical</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 border-4 border-white p-8 mt-8">
                            <h4 className="text-xl font-bold mb-6">Sample Lines</h4>
                            <div className="grid md:grid-cols-3 gap-6 text-gray-300">
                                <div>
                                    <p className="text-matrix font-bold mb-2">Openers</p>
                                    <p className="text-sm space-y-1">
                                        "Step closer."<br />
                                        "Make it obvious."<br />
                                        "Come with intent."
                                    </p>
                                </div>
                                <div>
                                    <p className="text-hotpink font-bold mb-2">Circle Language</p>
                                    <p className="text-sm space-y-1">
                                        "Pull someone in."<br />
                                        "Enter if you dare."<br />
                                        "Make your own circle."
                                    </p>
                                </div>
                                <div>
                                    <p className="text-cyan font-bold mb-2">Room Control</p>
                                    <p className="text-sm space-y-1">
                                        "Turn the room."<br />
                                        "Raise the temperature."<br />
                                        "Eyes up."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section> */}

            {/* Final Statement */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <motion.div
                    {...ANIMATIONS.fadeInView}
                    className="max-w-3xl mx-auto text-center"
                >
                    <p className="text-2xl md:text-4xl font-bold font-display leading-tight">
                        Born in nights where strangers become allies.
                    </p>
                    <p className="text-xl md:text-2xl text-gray-400 mt-6 font-mono">
                        A uniform for participants.
                    </p>
                    <p className="text-lg md:text-xl text-hotpink mt-4 font-mono">
                        If you get it, you're already in.
                    </p>
                </motion.div>
            </section>

            {/* Bottom Spacer */}
            <div className="h-20"></div>
        </div>
    )
}
