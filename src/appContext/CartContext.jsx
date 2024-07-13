import React, { createContext, useState, useContext, useEffect } from 'react';
import Items from '../components/items/Items';
// Create Context
const CartContext = createContext();

// Custom hook for accessing cart context
export const useCart = () => useContext(CartContext);

// Cart Provider Component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // const addToCart = (item) => {
    //     setCart(prevCart => [...prevCart, { ...item, quantity: 1 }]);
    // };

    const addToCart = (item) => {
        // Check if item with the same id already exists in cart
        const itemInCart = cart.find(cartItem => cartItem.id === item.id);

        if (itemInCart) {
            alert(`Item "${item.item_name}" has already been added to the cart.`);
            return; // Exit function early if item is already in cart
        }

        // If item is not in cart, add it with quantity 1
        setCart(prevCart => [...prevCart, { ...item, quantity: 1 }]);
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.item_price * item.quantity, 0);
    };

    useEffect(() => {
        console.log('Current Cart:', cart);
    }, [cart]);


    const updateQuantity = (id, quantity) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + quantity } : item
            ).filter(item => item.quantity > 0)
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, calculateTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
