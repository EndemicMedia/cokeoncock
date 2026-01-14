import { useState } from 'react'

/**
 * Custom hook for form validation
 * Provides reusable validation logic for forms
 * 
 * @param {object} initialValues - Initial form values
 * @param {function} validate - Validation function
 * @returns {object} - Form state and handlers
 */
export default function useFormValidation(initialValues, validate) {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleBlur = (e) => {
        const { name } = e.target
        setTouched({
            ...touched,
            [name]: true
        })

        // Validate on blur
        if (validate) {
            const validationErrors = validate(values)
            setErrors(validationErrors)
        }
    }

    const handleSubmit = async (onSubmit) => {
        setIsSubmitting(true)

        // Mark all fields as touched
        const allTouched = Object.keys(values).reduce((acc, key) => {
            acc[key] = true
            return acc
        }, {})
        setTouched(allTouched)

        // Validate
        if (validate) {
            const validationErrors = validate(values)
            setErrors(validationErrors)

            if (Object.keys(validationErrors).length > 0) {
                setIsSubmitting(false)
                return false
            }
        }

        // Submit
        try {
            await onSubmit(values)
            return true
        } catch (error) {
            console.error('Form submission error:', error)
            return false
        } finally {
            setIsSubmitting(false)
        }
    }

    const resetForm = () => {
        setValues(initialValues)
        setErrors({})
        setTouched({})
        setIsSubmitting(false)
    }

    return {
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        resetForm,
        setValues
    }
}

// Common validation functions
export const validators = {
    required: (value) => {
        return value && value.trim() !== '' ? '' : 'This field is required'
    },

    email: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(value) ? '' : 'Please enter a valid email address'
    },

    minLength: (min) => (value) => {
        return value && value.length >= min ? '' : `Must be at least ${min} characters`
    },

    maxLength: (max) => (value) => {
        return value && value.length <= max ? '' : `Must be no more than ${max} characters`
    }
}

// Compose multiple validators
export const composeValidators = (...validators) => (value) => {
    for (const validator of validators) {
        const error = validator(value)
        if (error) return error
    }
    return ''
}
