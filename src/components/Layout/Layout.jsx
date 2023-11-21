import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Router from '../../routes/Router'
import Cart from '../../UI/cart/Cart'
import { useSelector } from 'react-redux'

const Layout = () => {

    const showCart = useSelector(state => state.UiCart.cartIsVisible)

    return (
        <>
            <Header />
            {showCart && <Cart />}
            <div>
                <Router />
            </div>
            <Footer />

        </>
    )
}

export default Layout