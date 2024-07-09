import React from 'react'
import { assets } from '../../assets/assets'
import './styles.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <div className='footer-container'>
                    <div>
                        {/* <div className='footer-left'>
                            <div >
                                <h3>PAYMENTS METHODS</h3>
                                <div className='footer-left-1'>
                                    <div className=' ul-1'>
                                        <div>
                                            <img src={assets.mastercard} alt="" />
                                        </div>
                                        <div>
                                            <img src={assets.visa} alt="" />
                                        </div>
                                        <div>
                                            <img src={assets.paypal} alt="" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <h3>SHOP</h3>
                                <div className='footer-left-2'>
                                    <ul>
                                        <li>All Collections</li>
                                        <li>Shop Bags</li>
                                        <li>Shop Shoes</li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h3>COMPANY</h3>
                                <div className='footer-left-3'>
                                    <ul>
                                        <li>About Us</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className='footer-right'>
                        <div className='footer-right-container'>
                            <p>Subscribe to our Newsletter</p>
                            <form className='footer-form'>
                                <input type='text' name='name' placeholder='Name' required />
                                <input type='email' name='email' placeholder='Email Address' required />
                                <button type='submit'>Subscribe</button>
                            </form>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Footer