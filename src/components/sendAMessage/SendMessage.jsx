import React from 'react'
import './styles.css'
import { assets } from '../../assets/assets'


const SendMessage = () => {
    return (
        <div className='send-message-container'>
            <div className='line'>
                <img src={assets.line} alt="" />
            </div>
            <div className='send-message'>

                {/* <div> */}
                <div className='left-child'>
                    <div>
                        <p className='seller'>SELLER INFORMATION</p>
                        <div className='ppp'>
                            <div>
                                <img src={assets.profile} alt="" />
                            </div>
                            <div className=''>
                                <p className='yafeh'>YAFEH FASHION HOUSE</p>
                                <div className='take'>
                                    <div>
                                        <img src={assets.cart} alt="" />
                                    </div>
                                    <div>
                                        <p>
                                            Typically replies within 24 a day
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='btn'>

                            SEND MESSAGE

                        </div>
                    </div>
                </div>
                <div className='right-child'>
                    <div className='right-child-inner'>
                        <img className='rect' src={assets.rect} alt="" />
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default SendMessage