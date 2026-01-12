import emailjs from '@emailjs/browser'

// Initialize EmailJS (you'll need to replace these with actual credentials)
const SERVICE_ID = 'YOUR_SERVICE_ID' // Replace with EmailJS service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID' // Replace with EmailJS template ID
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY' // Replace with EmailJS public key

export const sendOrderEmail = async (orderData) => {
  try {
    const { name, email, instagram, items, total, notes } = orderData

    const itemsList = items
      .map(item => `${item.name} (${item.size}) x${item.quantity} - $${item.price * item.quantity}`)
      .join('\n')

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

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    )

    return { success: true, message: 'Order sent successfully!' }
  } catch (error) {
    console.error('Email send failed:', error)
    return { success: false, message: 'Failed to send order. Please try Instagram.' }
  }
}

// Alternative: Generate Instagram DM message
export const generateInstagramMessage = (orderData) => {
  const { name, email, items, total } = orderData

  const itemsList = items
    .map(item => `• ${item.name} (${item.size}) x${item.quantity}`)
    .join('\n')

  const message = `Hey! I want to order:

${itemsList}

Total: $${total}

Name: ${name}
Email: ${email}

Let me know how to complete the order!`

  return encodeURIComponent(message)
}

// Alternative: Generate email mailto link
export const generateEmailLink = (orderData) => {
  const { name, email, items, total, notes } = orderData

  const itemsList = items
    .map(item => `${item.name} (${item.size}) x${item.quantity} - $${item.price * item.quantity}`)
    .join('\n')

  const subject = 'New Order - Coke on Cock'
  const body = `Name: ${name}
Email: ${email}

Order:
${itemsList}

Total: $${total}

Notes: ${notes || 'None'}
`

  return `mailto:orders@cokeoncock.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
