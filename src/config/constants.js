// Social Media Links
export const SOCIAL_LINKS = {
    instagram: 'https://instagram.com/cokeoncock',
    twitter: 'https://twitter.com/cokeoncock',
    tiktok: 'https://tiktok.com/@cokeoncock'
}

// Contact Information
export const CONTACT = {
    email: 'orders@cokeoncock.com',
    orderEmail: 'orders@cokeoncock.com'
}

// Site Configuration
export const SITE_CONFIG = {
    name: 'CokeOnCock',
    tagline: 'Social Heat Streetwear',
    description: 'Wear your intentions. A neo-brutalist landing page for a nightlife-first streetwear label.',
    url: import.meta.env.VITE_SITE_URL || 'https://endemicmedia.github.io/cokeoncock/'
}

// Brand Colors
export const COLORS = {
    matrix: '#00FF41',
    hotpink: '#FF006E',
    cyan: '#00F0FF',
    black: '#000000',
    white: '#FFFFFF'
}

// Shipping & Pricing
export const SHIPPING = {
    freeShippingThreshold: 100, // euros
    currency: 'EUR',
    currencySymbol: '€'
}

// Animation Variants (Framer Motion)
export const ANIMATIONS = {
    fadeInUp: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    },
    fadeInUpFast: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 }
    },
    fadeInView: {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true }
    },
    hoverLift: {
        whileHover: { y: -4 },
        transition: { duration: 0.2 }
    },
    hoverScale: {
        whileHover: { scale: 1.05 },
        transition: { duration: 0.2 }
    },
    hoverScaleSmall: {
        whileHover: { scale: 1.02 },
        transition: { duration: 0.2 }
    },
    tapScale: {
        whileTap: { scale: 0.95 }
    },
    buttonHover: {
        whileHover: { scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 0, 0.5)' },
        whileTap: { scale: 0.95 }
    }
}

// Navigation Routes
export const ROUTES = {
    home: '/',
    shop: '/shop',
    about: '/about',
    policies: '/policies',
    sizeGuide: '/size-guide'
}

// Product Categories
export const PRODUCT_CATEGORIES = {
    all: 'All Items',
    tshirt: 'T-Shirts',
    hoodie: 'Hoodies',
    tank: 'Tanks',
    longsleeve: 'Long Sleeves',
    crewneck: 'Sweatshirts',
    hat: 'Hats',
    beanie: 'Beanies',
    tote: 'Totes',
    sticker: 'Stickers',
    patch: 'Patches'
}

// Product Fits
export const PRODUCT_FITS = {
    regular: 'Regular',
    oversized: 'Oversized',
    fitted: 'Fitted',
    cropped: 'Cropped'
}

// Trust Badges
export const TRUST_BADGES = [
    {
        id: 'secure',
        icon: '🔒',
        title: 'Secure Checkout',
        description: 'Your data is safe'
    },
    {
        id: 'returns',
        icon: '↩️',
        title: '30-Day Returns',
        description: 'No questions asked'
    },
    {
        id: 'shipping',
        icon: '🌍',
        title: 'Worldwide Shipping',
        description: 'Free over €100'
    }
]

// Email Service Configuration
export const EMAIL_CONFIG = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
}

// Check if email service is configured
export const isEmailConfigured = () => {
    return EMAIL_CONFIG.serviceId !== 'YOUR_SERVICE_ID' &&
        EMAIL_CONFIG.templateId !== 'YOUR_TEMPLATE_ID' &&
        EMAIL_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY'
}
