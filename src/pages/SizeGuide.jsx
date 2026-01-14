import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ANIMATIONS } from '../config/constants'
import { updateMetaTags } from '../utils/seo'

export default function SizeGuide() {
    useEffect(() => {
        updateMetaTags({
            title: 'Size Guide - Coke on Cock',
            description: 'Find your perfect fit with our comprehensive size guide for t-shirts, hoodies, and fitted cuts.'
        })
    }, [])
    const sizeCharts = {
        tshirts: {
            title: "T-Shirts & Tanks",
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
            measurements: [
                { label: "Chest (cm)", values: ["86-91", "91-96", "96-101", "101-106", "106-111", "111-116"] },
                { label: "Length (cm)", values: ["68", "70", "72", "74", "76", "78"] },
                { label: "Shoulder (cm)", values: ["42", "44", "46", "48", "50", "52"] }
            ]
        },
        hoodies: {
            title: "Hoodies & Sweatshirts",
            sizes: ["S", "M", "L", "XL", "XXL"],
            measurements: [
                { label: "Chest (cm)", values: ["96-101", "101-106", "106-111", "111-116", "116-121"] },
                { label: "Length (cm)", values: ["68", "70", "72", "74", "76"] },
                { label: "Sleeve (cm)", values: ["62", "64", "66", "68", "70"] }
            ]
        },
        fitted: {
            title: "Fitted & Cropped (Women's Cuts)",
            sizes: ["XS", "S", "M", "L", "XL"],
            measurements: [
                { label: "Bust (cm)", values: ["81-86", "86-91", "91-96", "96-101", "101-106"] },
                { label: "Waist (cm)", values: ["63-68", "68-73", "73-78", "78-83", "83-88"] },
                { label: "Length (cm)", values: ["40-45", "42-47", "44-49", "46-51", "48-53"] }
            ]
        }
    }

    return (
        <div className="min-h-screen">
            <section className="container mx-auto px-4 py-16 md:py-24">
                <motion.div
                    {...ANIMATIONS.fadeInUp}
                    className="max-w-6xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-bold font-display mb-8">
                        SIZE <span className="text-matrix">GUIDE</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-12 font-mono">
                        Find your fit. Wear it with intent.
                    </p>

                    {/* Fit Philosophy */}
                    <div className="bg-gray-900 border-4 border-hotpink p-8 mb-12">
                        <h2 className="text-2xl font-bold text-hotpink mb-4">Fit Philosophy</h2>
                        <div className="grid md:grid-cols-3 gap-6 text-gray-300">
                            <div>
                                <h3 className="font-bold text-matrix mb-2">Regular Fit</h3>
                                <p className="text-sm">Classic streetwear cut. Room to move, breathe, and make moves.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-cyan mb-2">Oversized</h3>
                                <p className="text-sm">Loose, dropped shoulders. Statement piece energy.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-hotpink mb-2">Fitted/Cropped</h3>
                                <p className="text-sm">Contoured cuts. Show skin, show confidence.</p>
                            </div>
                        </div>
                    </div>

                    {/* Size Charts */}
                    <div className="space-y-12">
                        {Object.entries(sizeCharts).map(([key, chart]) => (
                            <motion.div
                                key={key}
                                {...ANIMATIONS.fadeInView}
                                className="border-4 border-white p-6"
                            >
                                <h2 className="text-2xl md:text-3xl font-bold mb-6">{chart.title}</h2>

                                {/* Table */}
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b-2 border-matrix">
                                                <th className="py-3 px-4 font-bold">Size</th>
                                                {chart.sizes.map(size => (
                                                    <th key={size} className="py-3 px-4 font-bold text-center">{size}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {chart.measurements.map((row, idx) => (
                                                <tr key={idx} className="border-b border-gray-700">
                                                    <td className="py-3 px-4 text-gray-400">{row.label}</td>
                                                    {row.values.map((value, vIdx) => (
                                                        <td key={vIdx} className="py-3 px-4 text-center">{value}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* How to Measure */}
                    <motion.div
                        {...ANIMATIONS.fadeInView}
                        className="mt-12 bg-black border-4 border-cyan p-8"
                    >
                        <h2 className="text-2xl font-bold text-cyan mb-6">How to Measure</h2>
                        <div className="grid md:grid-cols-2 gap-8 text-gray-300">
                            <div>
                                <h3 className="font-bold text-matrix mb-3">Chest/Bust</h3>
                                <p className="text-sm">Measure around the fullest part of your chest, keeping the tape horizontal.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-hotpink mb-3">Waist</h3>
                                <p className="text-sm">Measure around your natural waistline, where you bend side to side.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-cyan mb-3">Length</h3>
                                <p className="text-sm">For tops: measure from highest point of shoulder to hem. For bottoms: measure from waist to ankle.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-3">Shoulder</h3>
                                <p className="text-sm">Measure from shoulder seam to shoulder seam across the back.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Fit Tips */}
                    <motion.div
                        {...ANIMATIONS.fadeInView}
                        className="mt-12 space-y-6"
                    >
                        <h2 className="text-2xl font-bold text-hotpink">Fit Tips</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="border-l-4 border-matrix pl-6">
                                <h3 className="font-bold text-matrix mb-2">Between sizes?</h3>
                                <p className="text-gray-300 text-sm">
                                    For regular/oversized: size up for a looser vibe.<br />
                                    For fitted/cropped: size down for maximum impact.
                                </p>
                            </div>
                            <div className="border-l-4 border-hotpink pl-6">
                                <h3 className="font-bold text-hotpink mb-2">Still unsure?</h3>
                                <p className="text-gray-300 text-sm">
                                    DM us on Instagram with your measurements. We'll help you find your fit.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Care Instructions */}
                    <motion.div
                        {...ANIMATIONS.fadeInView}
                        className="mt-12 bg-gray-900 border-4 border-white p-8"
                    >
                        <h2 className="text-2xl font-bold mb-4">Care Instructions</h2>
                        <p className="text-gray-300 mb-4">Keep your signal strong. Treat it right.</p>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li className="flex items-start">
                                <span className="text-matrix mr-3">→</span>
                                <span>Machine wash cold, inside out</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-hotpink mr-3">→</span>
                                <span>Tumble dry low or hang dry</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan mr-3">→</span>
                                <span>Don't iron directly on prints</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-white mr-3">→</span>
                                <span>Don't bleach (unless you're into that)</span>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            </section>

            {/* Bottom Spacer */}
            <div className="h-20"></div>
        </div>
    )
}
