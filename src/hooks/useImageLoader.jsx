import { useState } from 'react'

/**
 * Custom hook for handling image loading with fallback
 * Eliminates duplicate image error handling logic
 * 
 * @param {string} src - Image source URL
 * @returns {object} - { imageError, handleImageError, ImageFallback }
 */
export default function useImageLoader(src) {
    const [imageError, setImageError] = useState(false)

    const handleImageError = () => {
        setImageError(true)
    }

    const ImageFallback = ({ productName, size = 'md' }) => {
        const sizeClasses = {
            sm: 'text-4xl',
            md: 'text-6xl',
            lg: 'text-9xl'
        }

        const textSizeClasses = {
            sm: 'text-xs',
            md: 'text-sm',
            lg: 'text-xl'
        }

        return (
            <div
                className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black"
                role="img"
                aria-label={`${productName} image unavailable`}
            >
                <div className="text-center p-6">
                    <p className={`${sizeClasses[size]} mb-4`} aria-hidden="true">🖤</p>
                    <p className={`${textSizeClasses[size]} text-gray-500 font-mono`}>
                        {productName}
                    </p>
                </div>
            </div>
        )
    }

    return {
        imageError,
        handleImageError,
        ImageFallback
    }
}
