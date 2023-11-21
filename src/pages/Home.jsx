import { useEffect, useState } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import heroImg from '../assets/images/hero.png'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import Category from '../UI/category/Category'
import ServiceImg01 from '../assets/images/service-01.png'
import ServiceImg02 from '../assets/images/service-02.png'
import ServiceImg03 from '../assets/images/service-03.png'
import foodImg01 from '../assets/images/bread.png'
import foodImg02 from '../assets/images/hamburger.png'
import foodImg03 from '../assets/images/pizza.png'
import ProductCard from '../UI/Product-card/ProductCard'
import ProductData from '../assets/fake-data/products'
import whyImg from '../assets/images/location.png'
import networkImg from '../assets/images/network.png'
import Testimonial from '../Slider/Testimonial'

const cartData = [
  {
    displayName: 'Quick Delivery',
    Url: ServiceImg01,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, animi?',
  },
  {
    displayName: 'Super Dine in',
    Url: ServiceImg02,
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, incidunt.',
  },
  {
    displayName: 'Easy Pick Up',
    Url: ServiceImg03,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nostrum.',
  }
]

const Home = () => {

  const [category, setCategory] = useState('ALL')
  const [allproducts, setAllProducts] = useState(ProductData)
  const [hotpizzas, setHotPizzas] = useState([])

  useEffect(() => {
    const filtered4Pizzas = ProductData.filter(item => (item.category === 'Pizza'))
    const Slicepizza = filtered4Pizzas.slice(0, 4)
    setHotPizzas(Slicepizza)
  }, [])

  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(ProductData)
    }

    if (category === 'BREAD') {
      const filteredProducts = ProductData.filter(item => (item.category === 'Bread'))
      setAllProducts(filteredProducts)
    }
    if (category === 'BURGER') {
      const filteredProducts = ProductData.filter(item => (item.category === 'Burger'))
      setAllProducts(filteredProducts)
    }
    if (category === 'PIZZA') {
      const filteredProducts = ProductData.filter(item => (item.category === 'Pizza'))
      setAllProducts(filteredProducts)
    }
  }, [category])

  return (
    <Helmet title='Home'>
      <section className='Home'>
        <Container>
          <Row>
            <Col lg='6' md='6' className='pad__align'>
              <div className="hero__content">
                <h5 className='mb-3'>Easy Way To Make An Order</h5>
                <h1 className='mb-4 hero__title'>
                  <span>Hungry?</span> Just Wait <br />Food At <span>Your Door</span>
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore quis dolorum, quaerat sint saepe repellendus recusandae delectus voluptates maxime!</p>
              </div>

              <div className='order__btns d-flex align-items-center gap-2'>
                <button className='order__btn d-flex align-items-center justify-content-between gap-1'>Order Now <i class="ri-arrow-right-s-line"></i></button>
                <button className='all-order__btns'>
                  <Link to='/food'>See All Foods</Link>
                </button>
              </div>

              <div className='hero__service d-flex align-items-center gap-3 mt-3'>
                <p className='d-flex align-items-center gap-2'>
                  <span className='shipping__icon'><i class="ri-car-line"></i></span>
                  No shipping charges
                </p>
                <p className='d-flex align-items-center gap-2'>
                  <span className='shipping__icon'><i class="ri-shield-check-line"></i></span>
                  100% secure checkout
                </p>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='hero__img'>
                <img src={heroImg} alt='hero-img' className='w-100' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <hr></hr>
      <section className='mt-2 mb-2'>
        <Category />
      </section>

      <section className='bg-light'>
        <Container>
          <Row>
            <Col lg='12' md='12'>
              <div className="text-center">
                <h6 className='feature__subtitle'>What We Serve</h6>
                <h2 className='feature__title mb-2'>Just Sit Back At Home
                  <h2 className='feature__title'>
                    We Will <span> Take Care</span>
                  </h2>
                </h2>
                <p className='text__desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo inventore adipisci doloribus quaerat debitis.</p>
              </div>
            </Col>

            {cartData.map((item, index) => (
              <Col lg='4' md='6' sm='6'>
                <div key={index} className='cart__item mt-2'>
                  <div className='cart__img text-center py-3 px-5'>
                    <img src={item.Url} alt='ServiceImg' className='w-25' />
                    <h6 className='mt-2 fw-bold'>{item.displayName}</h6>
                    <p className='mt-2 cart__para'>{item.desc}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className='mb-2'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h3>Popular Foods</h3>
            </Col>

            <Col lg='12'>
              <div className="food__items mt-5 d-flex align-items-center justify-content-center gap-5">
                <button className={`gap-3 all__btns ${category === 'ALL' ? 'active__btn' : ''}`} onClick={() => setCategory('ALL')}>All</button>
                <button className={`gap-3 all__btns ${category === 'BREAD' ? 'active__btn' : ''}`} onClick={() => setCategory('BREAD')}><img src={foodImg01} alt='bread' />bread</button>
                <button className={`gap-3 all__btns ${category === 'BURGER' ? 'active__btn' : ''}`} onClick={() => setCategory('BURGER')}><img src={foodImg02} alt='burger' />burger</button>
                <button className={`gap-3 all__btns ${category === 'PIZZA' ? 'active__btn' : ''}`} onClick={() => setCategory('PIZZA')}><img src={foodImg03} alt='pizza' />pizza</button>
              </div>
            </Col>
          </Row>
          <Row>
            {allproducts.map(item => (
              <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-3'>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className='why-choose__us pt-0 pb-0'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={whyImg} alt='whyImage' className='w-100' />
            </Col>

            <Col lg='6' md='6' className='pt-5 mt-0 bg-light'>
              <div className="why-tasty__treat">
                <h5 className='why-tasty__title'>Why <span>Tasty Treat?</span></h5>
                <p className='why-tasty__desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio veniam enim itaque numquam sequi alias doloremque. Quam voluptatibus ab nam autem ipsa culpa maiores nostrum a. Sapiente, quos quis?</p>
              </div>

              <ListGroup>
                <ListGroupItem className='border-0 ps-0'>
                  <p className='tasty__desc d-flex align-items-center gap-3'><i class="ri-checkbox-circle-line"></i> Fresh and tasty foods</p>
                  <p className='desc__item'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime incidunt autem quidem!</p>
                </ListGroupItem>
                <ListGroupItem className='border-0 ps-0'>
                  <p className='tasty__desc d-flex align-items-center gap-3'><i class="ri-checkbox-circle-line"></i> Quality support</p>
                  <p className='desc__item'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime incidunt autem quidem!</p>
                </ListGroupItem>
                <ListGroupItem className='border-0 ps-0'>
                  <p className='tasty__desc d-flex align-items-center gap-3'><i class="ri-checkbox-circle-line"></i> Order from any location</p>
                  <p className='desc__item'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime incidunt autem quidem!</p>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-2 mt-4'>
        <Container>
          <Row>
            <Col lg='12'>
              <h2 className='text-center fw-bold mb-5'>Hot Pizza's</h2>
            </Col>
            {hotpizzas.map(item => (
              <Col lg='3' md='4' key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className='bg-body-tertiary mt-4'>
        <Container>
          <Row>
            <Col lg='6' md='6' className='pt-4'>
              <div className="testimonial">
                <h5 className="testimonial__title mb-3">Testimonial</h5>
                <h2 className='testimonial__subtitle mb-3'>What our <span>customers</span> are saying</h2>
                <p className='testimonial__desc'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi numquam porro iure debitis corrupti cupiditate quos ducimus maxime dolore necessitatibus.</p>
                <Testimonial />
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='testimony__img'>
                <img src={networkImg} alt='networkImg' className='w-100' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home