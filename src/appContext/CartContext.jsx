import React, { createContext, useState, useContext } from 'react';
import Items from '../components/items/Items';
// Create Context
const CartContext = createContext();

// Custom hook for accessing cart context
export const useCart = () => useContext(CartContext);

// Cart Provider Component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prevCart => [...prevCart, { ...item, quantity: 1 }]);
    };

    const updateQuantity = (id, quantity) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + quantity } : item
            ).filter(item => item.quantity > 0)
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
