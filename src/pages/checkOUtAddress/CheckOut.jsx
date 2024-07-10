import React from 'react'
import { assets } from '../../assets/assets'
import './styles.css'
    ;
import { Link } from 'react-router-dom';




const CheckOut = () => {


    return (
        <div>

            <div>
                <div className='check-out'>
                    <div className='checkout-1'>
                        <h2>Check out</h2>
                        <div style={{ display: 'flex' }}>
                            <p>Shipping address</p>
                            <p>Payment</p>
                        </div>
                        <div>
                            shipping information`
                        </div>
                        <div>
                            <div>
                                <input type="text" name='fname' placeholder='First name' />
                                <input type="text" name='lname' placeholder='Last name' />
                            </div>
                            <div>
                                <input type="text" name="address" id="address" placeholder='address' />
                            </div>
                            <div>
                                <input type="text" name="apartment" id="apartment" placeholder='Apartment, suite, etc (optional)' />
                            </div>
                            <div>
                                <input type="text" id='city' name="city" placeholder='City' />
                            </div>
                            <div>
                                <input type="text" name='country' id="country" placeholder='Country' />
                                <input type="text" name='cityy' id="cityy" placeholder='City' />
                                <input type="text" name='' id="cityy" placeholder='City' />

                            </div>
                            <div>
                                <input type="text" name="optional" id="optional" />
                            </div>
                            <div>
                                <Link to="/PaymentSuccessPage ">
                                    <button style={{ borderRadius: '8px', border: 'none', backgroundColor: " #2A3517,", color: 'white', padding: '15px' }} >
                                        countinue with payment
                                    </button>
                                </Link>





                            </div>
                        </div>
                    </div>
                    <div className='checkout-2'>
                        <div className=''>
                            <div className='ooo'>
                                <div style={{ width: "100px", height: 'auto', marginRight: "10px" }} className='oooimg'>
                                    <img style={{ width: "100%", height: 'auto' }} src={assets.image_11} alt="" />
                                </div>
                                <div >
                                    <div >
                                        <p>Bo Soft Strap</p>
                                        <p>color cotton </p>

                                    </div>
                                    <div style={{ display: "flex", }}>
                                        <div >
                                            <img style={{ width: "80px", height: 'auto' }} src={assets.quantity} alt="" />
                                        </div>
                                        <div>
                                            <img src={assets.deletez} alt="" />
                                        </div>
                                    </div>
                                    <div className='checkout-flex'>
                                        <h3>36,500.00</h3>
                                        {/* <p>remove</p> */}
                                    </div>

                                </div>

                            </div>
                            <div>
                                {/* kfkfkkfk */}
                            </div>

                        </div>
                        <div className=''>
                            <div className='ooo'>
                                <div style={{ width: "100px", height: 'auto', marginRight: "10px" }} className='oooimg'>
                                    <img style={{ width: "100%", height: 'auto' }} src={assets.image_11} alt="" />
                                </div>
                                <div className=''>
                                    <div>
                                        <p>Bo Soft Strap</p>
                                        <p>color cotton </p>
                                    </div>
                                    <div style={{ display: "flex", }}>
                                        <div>
                                            <img style={{ width: "80px", height: 'auto' }} src={assets.quantity} alt="" />
                                        </div>
                                        <div>
                                            <img src={assets.deletez} alt="" />
                                        </div>
                                    </div>

                                </div>

                            </div>
                            {/* <div>
                                kfkfkkfk
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CheckOut