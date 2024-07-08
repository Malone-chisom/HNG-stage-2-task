import React from 'react'
import { assets } from '../../assets/assets'
import { item_list } from '../../assets/assets'
import './styles.css'
import { useCart } from '../../appContext/CartContext'

const Items = () => {

    const { addToCart } = useCart();

    return (
        <div className='item-display'>

            <div className='item-img-container'>

                {
                    item_list.map((item) => (
                        <div className='item-container' key={item.id}>
                            <div>
                                <img src={item.item_image} alt='' />
                            </div>
                            <div className='item-content'>
                                <div>
                                    <p className='item-name'>{item.item_name}</p>
                                    <p className='item-price'>{item.item_price}</p>
                                </div>
                                <div className='' >
                                    <img src={item.cart_icon} onClick={() => addToCart(item)} alt="" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Items;