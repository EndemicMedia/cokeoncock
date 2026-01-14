import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import useFormValidation, { validators, composeValidators } from '../../hooks/useFormValidation'
import { ANIMATIONS } from '../../config/constants'

export default function EmailCapture({ onClose }) {
    const [submitted, setSubmitted] = useState(false)

    const validate = (values) => {
        const errors = {}
        const emailError = composeValidators(validators.required, validators.email)(values.email)
        if (emailError) errors.email = emailError
        return errors
    }

    const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } =
        useFormValidation({ email: '' }, validate)

    const onSubmit = async (formValues) => {
        // TODO: Integrate with EmailJS or Mailchimp
        console.log('Email captured:', formValues.email)
        setSubmitted(true)

        // Close after 2 seconds
        setTimeout(() => {
            if (onClose) onClose()
        }, 2000)
    }

    return (
        <motion.div
            {...ANIMATIONS.fadeInUp}
            className="bg-black border-4 border-matrix p-8 max-w-md mx-auto relative"
        >
            {/* Close Button */}
            {onClose && (
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:text-hotpink transition-colors"
                    aria-label="Close"
                >
                    <HiX className="text-2xl" />
                </button>
            )}

            <AnimatePresence mode="wait">
                {!submitted ? (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">
                            GET <span className="text-matrix">10% OFF</span>
                        </h3>
                        <p className="text-gray-400 mb-6 font-mono">
                            Join the circle. Early access to drops + exclusive codes.
                        </p>

                        <form onSubmit={(e) => {
                            e.preventDefault()
                            handleSubmit(onSubmit)
                        }}>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="your@email.com"
                                    className="input-brutal"
                                    aria-label="Email address"
                                    aria-invalid={touched.email && errors.email ? 'true' : 'false'}
                                />
                                {touched.email && errors.email && (
                                    <p className="text-hotpink text-sm mt-2">{errors.email}</p>
                                )}
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-matrix text-black font-bold uppercase border-4 border-black hover:bg-hotpink hover:text-white transition-colors disabled:opacity-50"
                            >
                                {isSubmitting ? 'Joining...' : 'Join the Circle'}
                            </motion.button>

                            <p className="text-xs text-gray-600 text-center mt-4">
                                We don't spam. Unsubscribe anytime.
                            </p>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                    >
                        <div className="text-6xl mb-4">✓</div>
                        <h3 className="text-2xl font-bold text-matrix mb-2">You're In</h3>
                        <p className="text-gray-400">Check your email for the code.</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
