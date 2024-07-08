import React from 'react';
import { useCart } from '../../appContext/CartContext'; // Import the custom hook
// import './cartStyles.css'; // Create styles for the cart page

const CartPage = () => {
    const { cart, updateQuantity } = useCart(); // Use the custom hook to access cart and updateQuantity

    return (
        <div className='cart-page'>
            {cart.length > 0 ? (
                cart.map(item => (
                    <div className='cart-item' key={item.id}>
                        <img src={item.itemImage} alt={item.item_image} />
                        <div className='cart-item-details'>
                            <p>{item.item_name}</p>
                            <p>{item.item_price}</p>
                            <div className='quantity-controls'>
                                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    );
};

export default CartPage;
