import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/ProductCard.css'
import { useDispatch } from 'react-redux'
import { CartActions } from '../../store/shopping-cart/cartSlices'

const ProductCard = (props) => {
    const { id, title, price, image01 } = props.item
    
    const dispatch = useDispatch();

    const addtoCartHandler =()=>{
        dispatch(CartActions.addItemCart({
            id,
            title,
            price,
            image01,
        }))
    }

    return (
        <div className="product__item mb-4">
            <div className="product__img">
                <img src={image01} alt='product-img' className='w-50' />
            </div>
            <div className="product__content">
                <h5>
                    <Link to={`/foods/${id}`}>{title}</Link>
                </h5>
            </div>
            <div className='d-flex align-items-center justify-content-center gap-5'>
                <span className="product__price">₹ {price}</span>
                <button className='addToCart__btn' onClick={addtoCartHandler}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard