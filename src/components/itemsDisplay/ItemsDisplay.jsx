import React from 'react'
import { assets } from '../../assets/assets'
import './styles.css'
import Items from '../items/Items'

const ItemsDispay = () => {
    return (
        <div className='item-display-container'>
            <div className='top'>
                <p>bags</p>
                <p>Shoes</p>
            </div>
            <div>
                <Items />
            </div>

        </div>
    )
}

export default ItemsDispay