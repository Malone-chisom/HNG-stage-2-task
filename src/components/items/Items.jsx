import React from 'react'
import { assets } from '../../assets/assets'
import { item_list } from '../../assets/assets'
import './styles.css'
import { useCart } from '../../appContext/CartContext'
import axios from 'axios'

const Items = () => {

    const { addToCart } = useCart();

    // useEffect(() => {
    //     axios.get('https://timbu-get-all-products.reavdev.workers.dev/?organization_id=9ad65f77a7cd4743afe18860cad45f78&reverse_sort=false&page=1&size=10&Appid=4WVJ24YM4M5Q0P2&Apikey=e244455cc2fc4a3ca8e60f3981e6fd6720240713165657076297')
    //         .then(res => {
    //             setProducts(res.data)
                

    //         })
    //         .catch(Error => {
    //             console.log(Error)
    //         })
    // }, [])



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