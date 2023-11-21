import { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../UI/common-section/CommonSection'
import { useSelector } from 'react-redux'
import '../styles/Checkout.css'

const Checkout = () => {
  const cartAmount = useSelector(state => state.cart.totalamount)
  const shippingAmount = 30;
  const cartTotalAmount = cartAmount + shippingAmount;

  const cartItems = [];

  const [enterName, setEnteredName] = useState('')
  const [enterEmail, setEnteredEmail] = useState('')
  const [enterNumber, setEnteredNumber] = useState('')
  const [enterCity, setEnteredCity] = useState('')
  const [enterCountry, setEnteredCountry] = useState('')
  const [postalCode, setPostalCode] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    const shippingAddress = {
      name: enterName,
      email: enterEmail,
      number: enterNumber,
      city: enterCity,
      country: enterCountry,
      Zipcode: postalCode,
    }
    setEnteredCity('')
    setEnteredCountry('')
    setEnteredEmail('')
    setEnteredName('')
    setEnteredNumber('')
    setPostalCode('')

    cartItems.push(shippingAddress)
    console.log(cartItems)
 
  }

  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />
      <Container>
        <Row>
          <Col lg='8' md = '8'>
            <h6 className='mt-4'>Shipping Address</h6>
            <form className='checkout__cart ' onSubmit={submitHandler}>
              <div className='form__group'>
                <input type="text" placeholder='Enter your name' onChange={(e) => setEnteredName(e.target.value)} required />
              </div>
              <div className='form__group'>
                <input type="email" placeholder='Enter your email' onChange={(e) => setEnteredEmail(e.target.value)} required />
              </div>
              <div className='form__group'>
                <input type="number" placeholder='Phone number' onChange={(e) => setEnteredNumber(e.target.value)} required />
              </div>
              <div className='form__group'>
                <input type="text" placeholder='Country' onChange={(e) => setEnteredCountry(e.target.value)} required />
              </div>
              <div className='form__group'>
                <input type="text" placeholder='City' onChange={(e) => setEnteredCity(e.target.value)} required />
              </div>
              <div className='form__group'>
                <input type="number" placeholder='Postalcode' onChange={(e) => setPostalCode(e.target.value)} required />
              </div>

              <button type='submit' className='addToCart__btn mb-5'>Submit Now</button>
            </form>

          </Col>
          <Col lg='4' md = '4'>
            <div className='shipping__details mt-5 '>
              <h6 className='d-flex align-items-center justify-content-between mb-3'>
                Subtotal: <span>{cartAmount}</span>
              </h6>
              <h6 className='d-flex align-items-center justify-content-between mb-3'>
                Shipping: <span>{shippingAmount}</span>
              </h6>
              <div className='checkout__bill'>
                <h5 className='d-flex align-items-center justify-content-between mt-3'>
                  Total: <span>{cartTotalAmount}</span>
                </h5>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  )
}

export default Checkout