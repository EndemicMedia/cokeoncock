import { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

/**
 * Modal Context Provider
 * Manages global modal state to avoid prop drilling
 */
export function ModalProvider({ children }) {
    const [activeModal, setActiveModal] = useState(null)
    const [modalData, setModalData] = useState(null)

    const openCart = () => {
        setActiveModal('cart')
        setModalData(null)
    }

    const openCheckout = () => {
        setActiveModal('checkout')
        setModalData(null)
    }

    const openProduct = (product) => {
        setActiveModal('product')
        setModalData(product)
    }

    const closeModal = () => {
        setActiveModal(null)
        setModalData(null)
    }

    const value = {
        activeModal,
        modalData,
        openCart,
        openCheckout,
        openProduct,
        closeModal,
        isCartOpen: activeModal === 'cart',
        isCheckoutOpen: activeModal === 'checkout',
        isProductOpen: activeModal === 'product'
    }

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}

/**
 * Hook to access modal context
 */
export function useModal() {
    const context = useContext(ModalContext)
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider')
    }
    return context
}
