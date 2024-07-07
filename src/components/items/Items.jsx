import React from 'react'
import { assets } from '../../assets/assets'
import { item_list } from '../../assets/assets'
import './styles.css'

const Items = () => {
    return (
        <div className='item-display'>

            <div className='item-img-container'>

                {
                    item_list.map((image) => (
                        <div className='item-container' key={image.id}>
                            <div>
                                <img src={image.item_image} alt='' />
                            </div>
                            <div className='item-content'>
                                <div>
                                    <p className='item-name'>{image.item_name}</p>
                                    <p className='item-price'>{image.item_price}</p>
                                </div>
                                <div >
                                    <img src={image.cart_icon} alt="" />
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