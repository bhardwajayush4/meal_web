import React from 'react'
import { ListGroupItem } from 'reactstrap'
// import ProductImg from '../../assets/images/product_01.1.jpg'
import '../../styles/CartItem.css'
import { CartActions } from '../../store/shopping-cart/cartSlices'
import { useDispatch } from 'react-redux'


const CartItem = ({item}) => {
    const {id, title, image01, totalprice, quantity, price} = item
    const dispatch = useDispatch()

    const increment = ()=>{
        dispatch(CartActions.addItemCart({
            id,
            title,
            price,
            image01,
        }))
    }

    const decrement = ()=>{
        dispatch(CartActions.removeItemCart(id))
    }

    const decrease = ()=>{
        dispatch(CartActions.deleteItem(id))
    }

    return (
        <ListGroupItem className='border-0 cart__item'>
            <div className="cart-item__info d-flex gap-2">
                <img src={image01} alt='Product-Img' />

                <div className="cart-Product__info w-100">
                    <div >
                        <h6 className='cart__product-title'>{title}</h6>
                        <p className='d-flex align-items-center gap-5 cart__product-price'>{quantity}X <span>₹ {totalprice}</span></p>
                    </div>
                    <div className='increase__decrease-btn'>
                        <span className='increase' onClick = {increment}><i class="ri-add-line"></i></span>
                        <span className='quantity'>{quantity}</span>
                        <span className='decrease' onClick={decrement}><i class="ri-subtract-line"></i></span>
                    </div>
                </div>

                <div className='mt-4' onClick={decrease}>
                    <span className='delete__btn'><i class="ri-close-line"></i></span>
                </div>
            </div>
        </ListGroupItem>
    )
}

export default CartItem