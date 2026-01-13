/**
 * Convert a string to a URL-friendly slug
 * @param {string} text - Text to convert to slug
 * @returns {string} URL-friendly slug
 */
export const createSlug = (text) => {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
}

/**
 * Find a product by its slug
 * @param {Array} products - Array of product objects
 * @param {string} slug - Product slug to search for
 * @returns {Object|undefined} Product object or undefined
 */
export const getProductBySlug = (products, slug) => {
    return products.find(p => (p.slug || createSlug(p.name)) === slug)
}
