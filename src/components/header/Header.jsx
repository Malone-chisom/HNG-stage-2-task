import React from 'react'
import './header.css'
import { assets } from '../../assets/assets'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-contents">
                <h2>AHIA is your One Stop Fashion Store</h2>
                <p>You want it? We have it.</p>
                <div>
                    <button>
                        SHOP NOW
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header