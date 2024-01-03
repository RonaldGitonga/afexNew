'use client'
import React from 'react'
import Link from 'next/link'

function About() {
  return (
    <>
       <section className="about-area about-p pt-120 pb-120 p-relative fix" style={{ background: "#eff7ff" }} >
            <div className="animations-02">
                <img src="assets/img/bg/an-img-02.jpg" alt="contact-bg-an-01" />
            </div>

            <div className="container">
                <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s" >
                    <img src="assets/img/afex-pics/KARIMI POTRAIT.jpg" alt="img" className='rounded-md' />
                    <div className="about-text second-about">
                        <span>
                        15 <sub>+</sub>
                        </span>
                        <p>Years of Experience</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="about-content s-about-content pl-15 wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s" >
                    <div className="about-title second-title pb-25">
                        <h5>
                        <i className="fal fa-graduation-cap" /> About Our Campus
                        </h5>
                        <h2>About Us</h2>
                    </div>
                    <p className="txt-clr">
                    As a premier test preparation company, we specialize in comprehensive SAT, GMAT,
                     and IELTS training programs. With a commitment to academic excellence, AfexHub 
                     employs seasoned instructors and cutting-edge resources to equip students with 
                     the skills and confidence needed to excel in these critical exams. The company's 
                     personalized approach, state-of-the-art facilities, and proven track record make 
                     AfexHub a trusted choice for ambitious individuals seeking top-notch preparation 
                     for their SAT, GMAT, and IELTS examinations. Elevate your academic journey with 
                     our tailored training solutions and unlock your full potential.
                    </p>
                    
                    {/* <div className="about-content2">
                        <div className="row">
                        <div className="col-md-12">
                            <ul className="green2">
                            <li>
                                <div className="abcontent">
                                <div className="ano">
                                    <span>01</span>
                                </div>{" "}
                                <div className="text">
                                    <h3>Global Placements</h3>{" "}
                                    <p>
                                    consectetur adipiscing elit sed do eiusmod tem incid
                                    idunt.
                                    </p>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="abcontent">
                                <div className="ano">
                                    <span>02</span>
                                </div>{" "}
                                <div className="text">
                                    <h3>Global Students</h3>{" "}
                                    <p>
                                    consectetur adipiscing elit sed do eiusmod tem incid
                                    idunt.
                                    </p>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div> */}
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

export default About