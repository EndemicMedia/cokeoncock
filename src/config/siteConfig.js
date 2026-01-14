import { SITE_CONFIG, ROUTES } from './constants'

// Site Metadata for SEO
export const siteMetadata = {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    ogImage: `${SITE_CONFIG.url}images/og-image.jpg`,
    twitterHandle: '@cokeoncock'
}

// Navigation Structure
export const navigation = [
    { name: 'Home', path: ROUTES.home },
    { name: 'Shop', path: ROUTES.shop },
    { name: 'About', path: ROUTES.about },
    { name: 'Size Guide', path: ROUTES.sizeGuide },
    { name: 'Policies', path: ROUTES.policies }
]

// Footer Links
export const footerLinks = {
    shop: [
        { name: 'All Products', path: ROUTES.shop },
        { name: 'Size Guide', path: ROUTES.sizeGuide }
    ],
    about: [
        { name: 'Our Story', path: ROUTES.about },
        { name: 'Brand Philosophy', path: ROUTES.about }
    ],
    legal: [
        { name: 'Shipping & Returns', path: ROUTES.policies },
        { name: 'Privacy Policy', path: ROUTES.policies },
        { name: 'Terms of Service', path: ROUTES.policies }
    ]
}

// Feature Flags (for phased rollouts)
export const features = {
    emailCapture: true,
    instagramFeed: false, // Phase 2
    reviews: false, // Phase 2
    referralProgram: false // Phase 2
}
