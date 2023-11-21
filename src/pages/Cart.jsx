import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../UI/common-section/CommonSection'
import { useSelector } from 'react-redux'
import '../styles/Cart.css'
import { CartActions } from '../store/shopping-cart/cartSlices'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items)
    const totalAmount = useSelector(state => state.cart.totalamount)

    const Tr = (props) => {
        const { id, title, image01, price, quantity } = props.item
        const dispatch = useDispatch();

        const deleteItem = () => {
            dispatch(CartActions.deleteItem(id))
        }
        return (
            <tr>
                <td className='text-center cart__img-box'>
                    <img src={image01} alt='' />
                </td>
                <td className='text-center'>{title}</td>
                <td className='text-center'>${price}</td>
                <td className='text-center'>{quantity}</td>
                <td className='text-center cart__del-item' onClick={deleteItem}><i class="ri-delete-bin-5-line"></i></td>
            </tr>
        )
    }

    return (
        <Helmet title='Cart'>
            <CommonSection title='Your-Cart' />
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            {cartItems.length === 0 ? <h5 className='text-center text-capitalize'>No items are found</h5> : (
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Title</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map(item => (
                                            <Tr item={item} key={item.id} />
                                        ))}
                                    </tbody>
                                </table>
                            )}
                            <div>
                                <h6 className='cart__subtotal'>SubTotal :$<span>{totalAmount}</span></h6>
                                <p>Taxes and shipping will calculate at checkout</p>
                                <div className='cart__page-btn'>
                                    <button className='addToCart__btn me-3'><Link to='/foods'>Continue Shopping</Link></button>
                                    <button className='addToCart__btn'><Link to='/checkout'>Proceed to checkout</Link></button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Cart