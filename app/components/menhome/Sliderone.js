// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import Background from '../../../public/assets/img/afex-pics/sliderone.jpg';
import Backgroundtwo from '../../../public/assets/img/afex-pics/sliderone.jpg';

// Import Swiper's CSS and core components
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Initialize Swiper core components
SwiperCore.use([Navigation, Pagination,Autoplay]);

function Sliderone() {
  const settings = {
    autoplay: true,
    autoplayspeed: 3000,
    navigation: {
      nextEl: '.slick-next',
      prevEl: '.slick-prev',
    },
    pagination: {
      clickable: true,
    },
  };

  return (
    <>
     
      <section id="home" className="slider-area fix p-relative">
        <Swiper className="slider-active" style={{ background: "#141b22" }} {...settings}>
          <SwiperSlide  className='single-slider'>
          <Image className="single-slider slider-bg p-relative" src={Backgroundtwo} width={1920} height={500} priority={true} />  
          <div className="container">
                        <div className="row">
                        <div className="col-lg-7 col-md-7">
                            <div className="slider-content s-slider-content mt-50">
                            <h5 data-animation="fadeInUp" data-delay=".4s">
                                welcome To AfexHub
                            </h5>
                            {/* <h2 data-animation="fadeInUp" data-delay=".4s">
                                Education is the best key success in life
                            </h2> */}
                           
                            <div className="slider-btn mt-10 mb-10">
                                <Link href="/About" className="btn ss-btn mr-15" data-animation="fadeInLeft" data-delay=".4s" >
                                    Discover More <i className="fal fa-long-arrow-right" />
                                </Link>
                                <Link href="/Contact" className="btn ss-btn active" data-animation="fadeInLeft" data-delay=".4s" >
                                    Contact Us <i className="fal fa-long-arrow-right" />
                                </Link>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 p-relative"></div>
                        </div>
                    </div>
                     


              
            
          </SwiperSlide>


          <SwiperSlide >
          <Image className="single-slider slider-bg p-relative" src={Backgroundtwo} width={1920} height={500} priority={true} /> 
          <div className="container">
                        <div className="row">
                        <div className="col-lg-7 col-md-7">
                            <div className="slider-content s-slider-content mt-50">
                            <h5 data-animation="fadeInUp" data-delay=".4s">
                                welcome To AfexHub
                            </h5>
                            {/* <h2 data-animation="fadeInUp" data-delay=".4s">
                                Education is the best key success in life
                            </h2>
                            <p data-animation="fadeInUp" data-delay=".6s">
                                Donec vitae libero non enim placerat eleifend aliquam erat
                                volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed
                                nisl tristique, commodo gravida lectus non.
                            </p> */}
                            <div className="slider-btn mt-10 mb-10">
                                <Link href="/About" className="btn ss-btn mr-15" data-animation="fadeInLeft" data-delay=".4s" >
                                    Discover More <i className="fal fa-long-arrow-right" />
                                </Link>
                                <Link href="/Contact" className="btn ss-btn active" data-animation="fadeInLeft" data-delay=".4s" >
                                    Contact Us <i className="fal fa-long-arrow-right" />
                                </Link>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 p-relative"></div>
                        </div>
                    </div>
           
          </SwiperSlide>
        </Swiper>
    </section>
 
      
    </>
  );
}

export default Sliderone;
