import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CategoryImg01 from '../../assets/images/category-01.png'
import CategoryImg02 from '../../assets/images/category-02.png'
import CategoryImg03 from '../../assets/images/category-03.png'
import CategoryImg04 from '../../assets/images/category-04.png'
import '../../styles/Category.css'


const Cartdata = [
  {
    displayName: 'Fastfood',
    Url: CategoryImg01,
  },
  {
    displayName: 'Pizza',
    Url: CategoryImg02,
  },
  {
    displayName: 'AsianFood',
    Url: CategoryImg03,
  },
  {
    displayName: 'RowMeat',
    Url: CategoryImg04,
  }
]

const Category = () => {
  return (
    <Container>
      <Row>
        {Cartdata.map((item, index) => (
          <Col lg='3' md='4' sm = '6' xs = '6' className='mb-3 justify-content-center'>
            <div key={index} className="category__item d-flex align-items-center gap-5">
              <div className='category__img'>
                <img src={item.Url} alt='categoryImg' />
              </div>
              <h6>{item.displayName}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Category