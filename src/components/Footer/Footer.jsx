import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import image from '../../assets/images/res-logo.png'
import '../../styles/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className="logo footer__logo text-start">
              <img src={image} alt='' />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.Laborum quis, adipisci eos est
              </p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Delievery time</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Monday - Thursday</span>
                <p>10:00a.m - 11:00p.m</p>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Contact</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Location: ZindaBazar, Sylhet-3100, Bangladesh</span>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>phone: 0714526878</span>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Email: food44@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6' className='mb-3'>
            <h5 className='footer__title'>Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder='Enter your email' />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg='6' md='6'>
            <p className='copy__links'>Copyright-2023, website made by Ayush Bhardwaj. All rights reserved</p>
          </Col>
          <Col lg='6' md='6'>
            <div className='social__links d-flex align-items-center gap-3 justify-content-end'>
              <p className='m-0'>Follow :</p>
              <span><Link to='https://www.facebook.com/'><i class="ri-facebook-line"></i></Link></span>
              <span><Link to='https://github.com/'><i class="ri-github-fill"></i></Link></span>
              <span><Link to='https://www.youtube.com/'><i class="ri-youtube-line"></i></Link></span>
              <span><Link to='https://in.linkedin.com/'><i class="ri-linkedin-line"></i></Link></span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer