import React from 'react';
import { useCart } from '../../appContext/CartContext'; // Import the custom hook
import './styles.css'; // Create styles for the cart page
import { assets, item_list } from '../../assets/assets';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';


const CartPage = () => {
    const { cart, updateQuantity } = useCart(); // Use the custom hook to access cart and updateQuantity

    const getImage = (imagePath) => {
        try {
            return require(`${imagePath}`);
        } catch (err) {
            console.error("Error loading image: ", err);
            return null;
        }
    };

    return (
        <div className='cart-page'>
            <div className='cart-page-container'>
                <h2>Your cart</h2>
                <div>
                    {cart.length > 0 ? (
                        cart.map(item => (
                            <div className='cart-item' key={item.id}>
                                <div>
                                    <img src={getImage(item.item_image)} alt={item.item_image} />
                                </div>

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


                <div>
                    <h3>Product</h3>
                </div>

                <div className='iii'>
                    <div className='ooo'>
                        <div style={{ width: "100px", height: 'auto' }} className='oooimg'>
                            <img style={{ width: "100%", height: 'auto' }} src={assets.image_8} alt="" />
                        </div>
                        <div className='lll'>
                            <div>
                                <p>Bo Soft Strap</p>
                                <p>color cotton </p>
                            </div>
                            <div style={{ display: "flex", }}>
                                <div className='dispay'>
                                    <img style={{ width: "80px", height: 'auto' }} src={assets.quantity} alt="" />
                                </div>
                                <div className='dispay'>
                                    <img src={assets.deletez} alt="" />
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='dispay'>
                        66,700.00
                    </div>
                </div>
                <div className='iii'>
                    <div className='ooo'>
                        <div style={{ width: "100px", height: 'auto' }} className='oooimg'>
                            <img style={{ width: "100%", height: 'auto' }} src={assets.image_11} alt="" />
                        </div>
                        <div className='lll'>
                            <div>
                                <p>Bo Soft Strap</p>
                                <p>color cotton </p>
                            </div>
                            <div style={{ display: "flex", }}>
                                <div className='dispay'>
                                    <img style={{ width: "80px", height: 'auto' }} src={assets.quantity} alt="" />
                                </div>
                                <div className='dispay'>
                                    <img src={assets.deletez} alt="" />
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='dispay'>
                        55,900,00
                    </div>
                </div>
            </div>

            <div className='totalll'>
                <div className='jjm' >
                    <p>Subtotal  ₦131,500.00</p>
                    <p>big Hobo Strap</p>
                    <div>
                        <Link to='/CheckOut'>
                            <button>
                                check out
                            </button>
                        </Link>
                    </div>
                </div>
            </div>





            <div className='kkk'>
                <div>
                    <p>You may also like</p>
                    <div className='umaylikeimg'>
                        <div className='umaylikeimg-img-container'>
                            <div >
                                <img src={assets.shoe1} alt="" />
                            </div>
                            <div className='item-content'>
                                <div>
                                    <p className='item-name'>Hobo <small></small></p>
                                    <p className='item-price'>95000.000</p>
                                </div>
                                <div className='' >
                                    <img src={assets.cart} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='umaylikeimg-img-container'>
                            <div >
                                <img src={assets.shoe2} alt="" />
                            </div>
                            <div className='item-content'>
                                <div>
                                    <p className='item-name'>Bo Soft Strap </p>
                                    <p className='item-price'>36500.000</p>
                                </div>
                                <div className='' >
                                    <img src={assets.cart} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='umaylikeimg-img-container'>
                            <div >
                                <img src={assets.shoe3} alt="" />
                            </div>
                            <div className='item-content'>
                                <div>
                                    <p className='item-name'>Hobo small</p>
                                    <p className='item-price'>25000.000</p>
                                </div>
                                <div className='' >
                                    <img src={assets.cart} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='umaylikeimg-img-container'>
                            <div >
                                <img src={assets.shoe4} alt="" />
                            </div>
                            <div className='item-content'>
                                <div>
                                    <p className='item-name'>Hobo small</p>
                                    <p className='item-price'>95000.000</p>
                                </div>
                                <div className='' >
                                    <img src={assets.cart} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <div style={{ margin: 'auto' }} className='viewall'> <h4>View All</h4></div>

                </div>

            </div>


        </div>

    );
};

export default CartPage;
