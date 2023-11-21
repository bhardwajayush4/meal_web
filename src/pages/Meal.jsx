import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import ProductsImg from '../assets/fake-data/products'
import { useState, useEffect } from 'react'
import '../styles/Meal.css'
import foodImg01 from '../assets/images/bread.png'
import foodImg02 from '../assets/images/hamburger.png'
import foodImg03 from '../assets/images/pizza.png'
import ProductCard from '../UI/Product-card/ProductCard'

const Meal = () => {

  const [products, setProducts] = useState(ProductsImg)
  const [category, setCategory] = useState('')

  useEffect(() => {
    if (category === 'Pizza') {
      const filteredPizzas = ProductsImg.filter(item => item.category === 'Pizza')
      setProducts(filteredPizzas)
    };

    if (category === 'Burger') {
      const filteredBurgers = ProductsImg.filter(item => item.category === 'Burger')
      setProducts(filteredBurgers)
    }

    if (category === 'Bread') {
      const filetredBreads = ProductsImg.filter(item => item.category === 'Bread')
      setProducts(filetredBreads)
    }
  }, [category])

  return (
    <>

      <section className='mb-2'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h3>Popular Foods</h3>
            </Col>

            <Col lg='3'>
              <div className='meal__btn'>
                <button onClick={() => setCategory('Pizza')}><img src={foodImg03} alt='pizza' />Pizza</button>
                <button onClick={() => setCategory('Bread')}><img src={foodImg01} alt='bread' />Bread</button>
                <button onClick={() => setCategory('Burger')}><img src={foodImg02} alt='burger' />Burger</button>
              </div>
            </Col>

            <Col lg='9'>
              <Row>
              {products.map(item => (
                  <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-3'>
                    <ProductCard item={item} />
                  </Col>
              ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Meal