import React from 'react'
import Slider from 'react-slick'
import ava01 from '../assets/images/ava-1.jpg'
import ava02 from '../assets/images/ava-2.jpg'
import ava03 from '../assets/images/ava-3.jpg'
import '../styles/Testimonial.css'

const Testimonial = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <div>
                <p className='review__text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam delectus culpa non accusantium error magnam inventore, quia consectetur ratione aperiam maiores dolore id natus et, amet officia. Itaque, natus ipsa!
                </p>
                <div className='set__img d-flex align-items-center gap-4'>
                    <img src={ava01} alt='ava01' className=' rounded' />
                    <h6>Mathew Hayden</h6>
                </div>
            </div>
            <div>
                <p className='review__text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam delectus culpa non accusantium error magnam inventore, quia consectetur ratione aperiam maiores dolore id natus et, amet officia. Itaque, natus ipsa!
                </p>
                <div className='set__img d-flex align-items-center gap-4'>
                    <img src={ava02} alt='ava01' className=' rounded' />
                    <h6>Alysa Perry</h6>
                </div>
            </div>
            <div>
                <p className='review__text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam delectus culpa non accusantium error magnam inventore, quia consectetur ratione aperiam maiores dolore id natus et, amet officia. Itaque, natus ipsa!
                </p>
                <div className='set__img d-flex align-items-center gap-4'>
                    <img src={ava03} alt='ava01' className=' rounded' />
                    <h6>MS Dhoni</h6>
                </div>
            </div>
        </Slider>
    )
}

export default Testimonial