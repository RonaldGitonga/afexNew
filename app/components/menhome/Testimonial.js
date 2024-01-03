'use client'
import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import Backgroundtwo from '../../../public/assets/img/testimonial/noavatar.png';

function Testimonial() {

     let settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
      };

  return (
    <>
       <section className="testimonial-area pt-120 pb-115 p-relative fix">
            <div className="animations-01">
                <img src="assets/img/bg/an-img-03.png" alt="an-img-01" />
            </div>
            <div className="animations-02">
                <img src="assets/img/bg/an-img-04.png" alt="contact-bg-an-01" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-50 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                            <h5>
                                <i className="fal fa-graduation-cap" /> Testimonial
                            </h5>
                            
                            <h2>What Our Clients Say</h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                    <Slider className="testimonial-active wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" {...settings}>

                        <div className="single-testimonial text-center">
                            <div className="qt-img">
                                <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                            </div>
                            <p>AFEX Hub made my SAT prep process enjoyable. The Tutors provided diligent teaching, ensuring i paid close attention and effective study. Thanks to AFEX, I received good financial aid from universities like Yale.</p>
                            <div className="testi-author">
                                <Image src={Backgroundtwo} height={70} width={70} className='rounded-full' />
                            </div>
                            <div className="ta-info">
                                <h6>NANA AKUA ANNOH-QUARSHIE</h6>
                                <span>Yale University 2025</span>
                            </div>
                        </div>

                        <div className="single-testimonial text-center">
                            <div className="qt-img">
                                <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                            </div>
                            <p>AFEX Hub helped me with my college application process. I greatly appreciate the effort my essay reviewer put into guiding my requisite writings, improving my skills, and helping me get into my top school.</p>
                            <div className="testi-author">
                            <Image src={Backgroundtwo} height={70} width={70} className='rounded-full' />
                            </div>
                            <div className="ta-info">
                                <h6>JIAYI XU</h6>
                                <span>UPenn, 2027</span>
                            </div>
                        </div>

                        <div className="single-testimonial text-center">
                            <div className="qt-img">
                                <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                            </div>
                            <p>Besides helping me secure admission into most of the ivies and the world’s top universities like Stanford, Yale, Princeton, Duke, Dartmouth, and Williams, Afex helped me realize one thing in life: never be afraid to ask for help.</p>
                            <div className="testi-author">
                            <Image src={Backgroundtwo} height={70} width={70} className='rounded-full' />
                            </div>
                            <div className="ta-info">
                                <h6>GEORGE BIRIKORANG</h6>
                                <span>Stanford University 2025</span>
                            </div>
                        </div>

                        <div className="single-testimonial text-center">
                            <div className="qt-img">
                                <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                            </div>
                            <p>AFEX Hub is the best test prep. From day one, there was always someone there to help me through the process. Constant attention and progress tracking got me on my game and interaction with old students motivated me to aim higher.</p>
                            <div className="testi-author">
                            <Image src={Backgroundtwo} height={70} width={70} className='rounded-full' />
                            </div>
                            <div className="ta-info">
                                <h6>SELASIE MORTEY</h6>
                                <span>Tufts University 2025</span>
                            </div>
                        </div>

                        <div className="single-testimonial text-center">
                            <div className="qt-img">
                                <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                            </div>
                            <p>I am grateful for AFEX.The tutors and peers believed in me and pushed me to become a better version of myself. With their help, I was accepted into Cornell, a testament to their dedication to excellent results for students.</p>
                            <div className="testi-author">
                            <Image src={Backgroundtwo} height={70} width={70} className='rounded-full' />
                            </div>
                            <div className="ta-info">
                                <h6>DESMOND ABABIO</h6>
                                <span>Cornell University 2025</span>
                            </div>
                        </div>

                        <div className="single-testimonial text-center">
                            <div className="qt-img">
                                <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                            </div>
                            <p>AFEX has been “The Test Prep”. As a low-income, first-generation student, AFEX helped me gain quality SAT preparation and college applications through their college access program FLEEF to gain a full-ride scholarship into Duke University.</p>
                            <div className="testi-author">
                            <Image src={Backgroundtwo} height={70} width={70} className='rounded-full' />
                            </div>
                            <div className="ta-info">
                                <h6>BRIGHT ABOAH</h6>
                                <span>Duke University 2025</span>
                            </div>
                        </div>

                    </Slider>




             
                    </div>
                </div>
            </div>
       </section>
    </>
  )
}

export default Testimonial