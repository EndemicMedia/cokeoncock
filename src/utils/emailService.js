import emailjs from '@emailjs/browser'
import { EMAIL_CONFIG, isEmailConfigured, CONTACT } from '../config/constants'

/**
 * Format cart items for display
 * @param {Array} items - Cart items
 * @param {object} options - Formatting options
 * @returns {string} Formatted items list
 */
const formatCartItems = (items, options = {}) => {
  const { includePrices = true, bullet = false, separator = '\n' } = options

  return items
    .map(item => {
      const prefix = bullet ? '• ' : ''
      const price = includePrices ? ` - $${(item.price * item.quantity).toFixed(2)}` : ''
      return `${prefix}${item.name} (${item.size}) x${item.quantity}${price}`
    })
    .join(separator)
}

/**
 * Send order email via EmailJS
 * @param {object} orderData - Order information
 * @returns {Promise<object>} Success/error response
 */
export const sendOrderEmail = async (orderData) => {
  if (!isEmailConfigured()) {
    console.warn('EmailJS not configured. Email sending disabled.')
    return {
      success: false,
      message: 'Email service not configured. Please use Instagram or Email link.'
    }
  }

  try {
    const { name, email, instagram, items, total, notes } = orderData
    const itemsList = formatCartItems(items, { includePrices: true })

    const templateParams = {
      to_name: 'Coke on Cock Team',
      from_name: name,
      from_email: email,
      instagram: instagram || 'Not provided',
      items: itemsList,
      total: `$${total}`,
      notes: notes || 'No additional notes',
      reply_to: email
    }

    await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    )

    return { success: true, message: 'Order sent successfully!' }
  } catch (error) {
    console.error('Email send failed:', error)
    return {
      success: false,
      message: 'Failed to send order. Please try Instagram or Email link.'
    }
  }
}

/**
 * Generate Instagram DM message
 * @param {object} orderData - Order information
 * @returns {string} Encoded message for Instagram
 */
export const generateInstagramMessage = (orderData) => {
  const { name, email, items, total } = orderData
  const itemsList = formatCartItems(items, { includePrices: false, bullet: true })

  const message = `Hey! I want to order:

${itemsList}

Total: $${total}

Name: ${name}
Email: ${email}

Let me know how to complete the order!`

  return encodeURIComponent(message)
}

/**
 * Generate email mailto link
 * @param {object} orderData - Order information
 * @returns {string} Mailto link
 */
export const generateEmailLink = (orderData) => {
  const { name, email, items, total, notes } = orderData
  const itemsList = formatCartItems(items, { includePrices: true })

  const subject = `New Order - ${name}`
  const body = `Name: ${name}
Email: ${email}

Order:
${itemsList}

Total: $${total}

Notes: ${notes || 'None'}
`

  return `mailto:${CONTACT.orderEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

