import { useState, useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import '../styles/FoodDetail.css'
import products from '../assets/fake-data/products'
import ProductCard from '../UI/Product-card/ProductCard'
import { useDispatch } from 'react-redux'
import { CartActions } from '../store/shopping-cart/cartSlices'

const FoodDetail = () => {
  const [tab, setTab] = useState('desc')
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [reviewMsg, setReviewMsg] = useState('')
  const { id } = useParams()
  const product = products.find(item => item.id === id)
  const [previewImg, setPreviewImg] = useState(product.image01)
  const { title, image01, price, desc, category } = product

  const relatedProducts = products.filter(item => item.category === category)

  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(CartActions.addItemCart({
      id,
      price,
      image01,
      title,
    }))
  }

  useEffect(() => {
    setPreviewImg(product.image01)
  }, [product])

  useEffect(() => {
    window.scroll(0, 0)
  })

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(e)
    setEnteredEmail('')
    setEnteredName('')
    setReviewMsg('')
  }

  return (
    <Helmet title='Food-Details'>
      <CommonSection title={title} />

      <section>
        <Container>
          <Row>
            <Col lg='2' md='2'>
              <div className='products__img'>
                <div className="img__item mb-2" onClick={() => setPreviewImg(product.image01)}>
                  <img src={product.image01} alt='img01' className='w-50' />
                </div>
                <div className="img__item mb-2" onClick={() => setPreviewImg(product.image02)}>
                  <img src={product.image02} alt='img01' className='w-50' />
                </div>
                <div className="img__item mb-2" onClick={() => setPreviewImg(product.image03)}>
                  <img src={product.image03} alt='img01' className='w-50' />
                </div>
              </div>
            </Col>

            <Col lg='3' md='3' sm = '12'>
              <div className="product__img-item">
                <img src={previewImg} alt='img01' className='w-100' />
              </div>
            </Col>

            <Col lg='6' md = '6' sm= '6'>
              <div className='single__product-content'>
                <h2 className='product__title'>{title}</h2>
                <p className='product__price mb-2'>price <span>${price}</span></p>
                <p className='category mb-4'>Category: <span> {category}</span></p>
                <button className='addToCart__btn' onClick={addItem}>Add to cart</button>
              </div>
            </Col>

            <Col lg=' 12'>
              <div className='tab d-flex align-items-center gap-5 mt-3' >
                <h6 className={`${tab === 'desc' ? 'active__tab' : ''}`} onClick={() => setTab('desc')}>Description</h6>
                <h6 className={`${tab === 'rev' ? 'active__tab' : ''}`} onClick={() => setTab('rev')}>Review </h6>
              </div>

              {tab === 'desc' ? <div className='tab__content mb-5'>
                <p>{desc}</p>
              </div> :
                <div className='tab__form mb-5'>
                  <div className='review pt-5'>
                    <p className='user__name mb-0'>Jhon Doe</p>
                    <p className='user__email'>John1@gmail.com</p>
                    <p className='feedback__text'>great Product</p>
                  </div>

                  <div className='review'>
                    <p className='user__name mb-0'>Jhon Doe</p>
                    <p className='user__email'>John1@gmail.com</p>
                    <p className='feedback__text'>great Product</p>
                  </div>

                  <div className='review'>
                    <p className='user__name mb-0'>Jhon Doe</p>
                    <p className='user__email'>John1@gmail.com</p>
                    <p className='feedback__text'>great Product</p>
                  </div>

                  <form className='form mt-5' onSubmit={submitHandler}>
                    <div className='form__group'>
                      <input type="text" placeholder='Enter your name' value={enteredName} onChange={(e) => setEnteredName(e.target.value)} required />
                    </div>
                    <div className='form__group'>
                      <input type="text" placeholder='Enter your email' value={enteredEmail} onChange={(e) => setEnteredEmail(e.target.value)} required />
                    </div>
                    <div className='form__group'>
                      <textarea rows={5} type="text" placeholder='review your message' value={reviewMsg} onChange={(e) => setReviewMsg(e.target.value)} required />
                    </div>

                    <button type='submit' className='addToCart__btn'>Submit</button>
                  </form>
                </div>
              }
            </Col>

            <Col lg='12'>
              <div className=' mt-3 mb-5'>
                <h3 className='related__products'>You might also like it</h3>
              </div>
            </Col>

            {
              relatedProducts.map(item => (
                <Col lg='3' md = '4' key={item.id}>
                  <ProductCard item={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default FoodDetail