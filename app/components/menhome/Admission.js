import React from 'react'
import Link from 'next/link'
import Backgroundtwo from '../../../public/assets/img/afex-pics/resized/tuition.jpg';
import Image from 'next/image';

function Admission() {
  return (
    <>
        <section className="about-area about-p pt-120 pb-120 p-relative fix" style={{ backgroundImage: "url(/assets/img/afex-pics/resized/tuition.png)", backgroundRepeat: "no-repeat", backgroundPosition: "top" }} >
            <div className="container">
                <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s" >
                        <Image className='rounded-md' src={Backgroundtwo}height={494} width={627}alt="aid-img" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="about-content s-about-content pl-15 wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s" >
                    <div className="about-title second-title pb-25">
                        <h2>Admission &amp; Aid</h2>
                    </div>
                    <p className="txt-clr">
                    We believe in equal opportunities for all. If you're passionate 
                    about education but financial constraints are holding you back, 
                    we've got your back! Don't hesitate to inquire about our financial 
                    aid options. Your dreams matter, and we're here to help make them a 
                    reality. Reach out today to discover the possibilities awaiting you on your academic journey.
                    </p>
                    <p className="txt-clr">
                    Curious about admission guidelines? Wondering how to embark on your 
                    educational journey with us? Don't hesitate—explore our admission 
                    guidelines and get in touch today. We're here to assist you every 
                    step of the way. Your future starts with a simple inquiry.
                    </p>
                    <div className="slider-btn mt-20">
                        <Link href="/About" className="btn ss-btn smoth-scroll">
                        Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Admission