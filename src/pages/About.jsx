import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import '../styles/About.css'

const About = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' md='6'>
            <div className='about__info'>
              <h3>Who we are?</h3>
              <div className='about__para mt-4'>
                <p>ASWEBWORKS LLP is a <Link to='/meal'>Web development</Link> company Established in 2016 that has been successfully present in the Web development market since that time has grown to become a well-regarded player in this industry and has proven to be a reliable, efficient and trustworthy service provider to the companies from everywhere the planet.</p>
              </div>
              <div className='about__para'>
                <p><Link to='/contact'>The company</Link> was established recognizing the potential of the increasing market of the businesses, that are or would be looking to form their business processes more efficient by automating them through the use of advanced Web solutions and/or to act in response to the current market forces that dictate the necessity of online presence in order to stay abreast with the competition.</p>
              </div>
            </div>
          </Col>

          <Col lg='12' md='6'>
            <div className='about__info mt-3'>
              <h3>Mission</h3>
              <div className='about__para mt-4'>
                <p>Our Mission is to provide Best Web Development and Digital Marketing services to our clients. We develop Websites,  Web Portals, and e-commerce platforms to improve operations and user experiences. Trust us as your digital partner to help your company reach its full potential.</p>
              </div>
            </div>
          </Col>

          <Col lg='12' md='6'>
            <div className='about__info mt-3'>
              <h3>Vision</h3>
              <div className='about__para mt-4'>
                <p>Our vision at <span>ASWEBWORKS LLP</span> is to be a catalyst for the digital revolution, transforming businesses via creative digital solutions. We seek to create new industry standards, allowing our clients to realise their full digital potential. We strive to be the trusted partner that drives development, provides meaningful experiences, and leaves a lasting influence by focusing on quality, cooperation, and constant learning. Our mission includes sustainability, diversity, and good social effect, with the goal of crafting a future in which technology drives positive change and businesses prosper in the digital era.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col lg='12' md='6' className='bg-light'>
            <div className='d-flex align-items-center justify-content-center pt-5 pb-2 gap-5'>
              <div className='company__info'>
                <span className='adjust__pos1 d-flex align-items-center justify-content-center gap-0'>
                  <span className='span__pos text-center fs-1 fw-bold'>340 </span>
                  <i class="ri-add-line"></i>
                </span>
                <p>HAPPY CLIENTS</p>
              </div>

              <div className='company__info'>
                <span className='adjust__pos2 d-flex align-items-center justify-content-center gap-0'>
                  <span className='span__pos fs-1 fw-bold'>7</span>
                  <i class="ri-add-line"></i>
                </span>
                <p>YEARS OF EXPERIENCE</p>
              </div>

              <div className='company__info'>
                <span className='adjust__pos3 d-flex align-items-center justify-content-center gap-0'>
                  <span className='span__pos fs-1 fw-bold'>50</span>
                  <i class="ri-add-line"></i>
                </span>
                <p>TEAM MEMBERS</p>
              </div>

              <div className='company__info'>
                <span className='adjust__pos4 d-flex align-items-center justify-content-center gap-0'>
                  <span className='span__pos fs-1 fw-bold'>635</span>
                  <i class="ri-add-line"></i>
                </span>
                <p>COMPLETED PROJECTS</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About