import { ErrorBoundary } from 'react-error-boundary'
import { motion } from 'framer-motion'

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md w-full bg-black border-4 border-hotpink p-8 text-center shadow-brutal"
            >
                <h2 className="text-4xl font-bold font-display text-hotpink mb-4">SYSTEM ERROR</h2>
                <div className="bg-gray-900 border-2 border-white p-4 mb-6 text-left">
                    <p className="text-matrix font-mono text-sm mb-2 uppercase">Trace Log:</p>
                    <p className="text-white font-mono text-xs overflow-auto max-h-40">
                        {error.message}
                    </p>
                </div>
                <p className="text-gray-400 font-mono text-sm mb-8">
                    The signal was lost. Reboot to restore the connection.
                </p>
                <button
                    onClick={resetErrorBoundary}
                    className="w-full py-4 bg-white text-black font-bold uppercase border-4 border-black hover:bg-matrix transition-colors"
                >
                    Reboot System
                </button>
            </motion.div>
        </div>
    )
}

export default function GlobalErrorBoundary({ children }) {
    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
                // Reset the state of your app here
                window.location.href = '/'
            }}
        >
            {children}
        </ErrorBoundary>
    )
}
