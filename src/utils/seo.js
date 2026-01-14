import { SITE_CONFIG } from '../config/constants'

/**
 * Update document meta tags for SEO
 * @param {object} meta - Meta tag values
 */
export const updateMetaTags = (meta = {}) => {
    const {
        title = SITE_CONFIG.name,
        description = SITE_CONFIG.description,
        image = `${SITE_CONFIG.url}images/og-image.jpg`,
        url = SITE_CONFIG.url
    } = meta

    // Update title
    document.title = title

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
        metaDescription.setAttribute('content', description)
    }

    // Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', title)
    updateMetaTag('meta[property="og:description"]', description)
    updateMetaTag('meta[property="og:image"]', image)
    updateMetaTag('meta[property="og:url"]', url)

    // Update Twitter tags
    updateMetaTag('meta[property="twitter:title"]', title)
    updateMetaTag('meta[property="twitter:description"]', description)
    updateMetaTag('meta[property="twitter:image"]', image)
}

/**
 * Update a specific meta tag
 * @param {string} selector - CSS selector for the meta tag
 * @param {string} content - Content to set
 */
const updateMetaTag = (selector, content) => {
    const element = document.querySelector(selector)
    if (element) {
        element.setAttribute('content', content)
    }
}

/**
 * Update meta tags for a product
 * @param {object} product - Product object
 */
export const updateProductMeta = (product) => {
    const productImageUrl = `${SITE_CONFIG.url}${product.image}`

    updateMetaTags({
        title: `${product.name} - ${SITE_CONFIG.name}`,
        description: `${product.description} Shop ${product.name} at ${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}.`,
        image: productImageUrl,
        url: `${SITE_CONFIG.url}#/shop/${product.slug}`
    })
}

/**
 * Reset meta tags to default
 */
export const resetMetaTags = () => {
    updateMetaTags()
}
