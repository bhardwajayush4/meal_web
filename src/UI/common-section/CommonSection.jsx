import React from 'react'
import { Container, Row,Col } from 'reactstrap'
import '../../styles/CommonSection.css'

const CommonSection = (props) => {
  return (
    <section className='common__section'>
        <Container>
           <h2>{props.title}</h2>
        </Container>
    </section>
  )
}

export default CommonSection