import React from 'react'
import './navbar.css';
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <div className='navbar-inner'>
                    <div className='navbr-left'>
                        <div>
                            <Link to='/'>
                                <img src={assets.logo} alt="" />
                            </Link>
                        </div>
                        <div className='nav-links'>
                            <div>
                                Bags
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor"
                                        className="size-6">
                                        <path strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>

                                </span>
                            </div>
                            <div>
                                Shoes
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor"
                                        className="size-6">
                                        <path strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>

                                </span>
                            </div>
                            <div>Join Marketplace</div>
                        </div>

                    </div>
                    <div className='icons'>

                        <div>
                            <Link to="/cart">
                                <img src={assets.cart} alt="" />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar