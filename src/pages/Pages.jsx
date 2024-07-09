import React from 'react'
import { Routes, Route } from 'react-router-dom';
// import CheckOut from './checkOUtAddress/CheckOut';
import Home from './home/Home';
import CartPage from './cartPage/CartPage';
import CheckOut from './checkOUtAddress/CheckOut';


const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/CheckOut' element={<CheckOut />} />

            </Routes>

        </div>
    )
}

export default Pages