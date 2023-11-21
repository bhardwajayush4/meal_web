import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <section className='mb-0 pb-1'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='contact mt-2'>
              <div className='contact__info'>
                <h3>Get in Touch</h3>
                <p><span>ASWEBWORKS LLP</span> is a New Age Digital Marketing & Web Design Company. If You Have Any Queries Please Feel Free To Contact Us.</p>
              </div>
              <div className='contact__office mt-4'>
                <div className='contact__As d-flex align-items-center gap-5 '>
                  <span className='fw-bold'><i class="ri-map-pin-line"></i></span>
                  <div className='company__info'>
                    <h5>Operating Address</h5>
                    <p>New Bhagwan Nagar, Subhash Nagar, Ludhiana, Punjab.</p>
                  </div>
                </div>

                <div className='contact__As d-flex align-items-center gap-5'>
                  <span className='fw-bold'><i class="ri-phone-fill"></i></span>
                  <div className='company__info'>
                    <h5>Phone</h5>
                    <p>+91 7888707384</p>
                  </div>
                </div>

                <div className='contact__As d-flex align-items-center gap-5'>
                  <span className='fw-bold'><i class="ri-mail-fill"></i></span>
                  <div className='company__info'>
                    <h5>Email</h5>
                    <p>info@aswebworks.com</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg='6' md='6' className='col__query'>
            <div className='query__box text-center'>
              <div className='query mb-4 mt-4'>
                <h4>Send Us Query</h4>
              </div>
              <div className='text'>
                <div className='text__inputs'>
                  <input type="text" placeholder='Name' />
                </div>
                <div className='text__inputs'>
                  <input type="email" placeholder='Email' />
                </div>
                <div className='text__inputs'>
                  <input type="number" placeholder='Phone' />
                </div>
                <div className='text__inputs'>
                  <textarea rows='4' cols='50' />
                </div>
                <div className='sub__btn d-flex gap-5'>
                  <button>Submit</button>
                  <button>Cancel</button>
                </div>
              </div>
            </div>
          </Col>

          <Col lg='12' className='mt-3 text-center'>
            <div >
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.4146151347754!2d75.87688637530826!3d30.93098277602501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83e4e27fe88b%3A0x401e35676cedbae2!2sASWEBWORKS%20LLP%20%7C%20Web%20Design%20Company%20in%20Ludhiana!5e0!3m2!1sen!2sin!4v1697022610121!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact