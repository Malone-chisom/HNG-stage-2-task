import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import CartPage from './cartPage/CartPage';

const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<CartPage />} />

            </Routes>

        </div>
    )
}

export default Pages