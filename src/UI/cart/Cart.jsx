import React from 'react'
import { ListGroup } from 'reactstrap'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import '../../styles/Shopping-cart.css'
import { useDispatch } from 'react-redux'
import { CartUiActions } from '../../store/shopping-cart/cart-Product'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Cart = () => {
    const dispatch = useDispatch()

    const toggle = () => {
        dispatch(CartUiActions.toggle())
    }

    const cartProducts = useSelector(state => state.cart.items)

    const totalAmount = useSelector(state=> state.cart.totalamount)
    
    return (
        <div className="cart__container">
            <ListGroup className='cart'>
                <div className='cart__close' onClick={toggle}>
                    <span><i class="ri-close-line"></i></span>
                </div>

                <div className='cart__Item'>
                    {cartProducts.length === 0 ? <h6 className='text-center'>No products are found</h6> :
                        cartProducts.map((item, index) => (
                            <CartItem item = {item} key={index}/>
                        ))
                    }
                </div>

                <div className='cart__bottom'>
                    <h6>Subtotal: <span>₹ {totalAmount}</span></h6>
                    <button><Link to='/checkout'>Checkout</Link></button>
                </div>
            </ListGroup>
        </div>
    )
}

export default Cart