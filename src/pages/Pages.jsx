import React from 'react'
import { Routes, Route } from 'react-router-dom';
// import CheckOut from './checkOUtAddress/CheckOut';
import Home from './home/Home';
import CartPage from './cartPage/CartPage';
import CheckOut from './checkOUtAddress/CheckOut';
import Sucess from './home/Sucess';





const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/CheckOut' element={<CheckOut />} />
                <Route path='/PaymentSuccessPage' element={<Sucess />} />

            </Routes>

        </div>
    )
}

export default Pages