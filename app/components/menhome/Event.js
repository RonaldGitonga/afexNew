import React from 'react'
import Link from 'next/link'
import BackgroundOne from '../../../public/assets/img/afex-pics/events/IMG_9403.jpg';
import BackgroundTwo from '../../../public/assets/img/afex-pics/events/SATs.jpg';
import BackgroundThree from '../../../public/assets/img/afex-pics/events/graduation.jpg';
import Image from 'next/image';
function Event() {
  return (
    <>
        <section className="event pt-120 pb-90 p-relative fix">
            <div className="animations-06">
                <img src="assets/img/bg/an-img-06.png" alt="an-img-01" />
            </div>
            <div className="animations-07">
                <img src="assets/img/bg/an-img-07.png" alt="contact-bg-an-01" />
            </div>
            <div className="animations-08">
                <img src="assets/img/bg/an-img-08.png" alt="contact-bg-an-01" />
            </div>
            <div className="animations-09">
                <img src="assets/img/bg/an-img-09.png" alt="contact-bg-an-01" />
            </div>
            <div className="container">
                <div className="row">
                <div className="col-lg-12 p-relative">
                    <div className="section-title center-align mb-50 text-center wow fadeInDown animated"
                    data-animation="fadeInDown"
                    data-delay=".4s">
                    <h5>
                        <i className="fal fa-graduation-cap" /> Our Events
                    </h5>
                    <h2>Upcoming Events</h2>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-6  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="event-item mb-30 hover-zoomin">
                    <div className="thumb">
                        <Link href="/single-event">
                          <Image src={BackgroundTwo} width={1180} height={787} alt='evn-img1'/>
                        </Link>
                    </div>
                    <div className="event-content">
                        <div className="date">
                        <strong>18</strong> March, 2024
                        </div>
                        <h3>
                        <Link href="/single-event">
                            {" "}
                            QnA &amp; SAT Prep and testing
                        </Link>
                        </h3>
                        <p>
                        SAT 2024 open day
                        </p>
                        <div className="time">
                        3:30 pm - 4:30 pm <i className="fal fa-long-arrow-right" />{" "}
                        <strong>Afex Hub Premises</strong>
                        </div>
                    </div>
                    </div>
                </div>
            
                <div className="col-lg-4 col-md-6  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="event-item mb-30 hover-zoomin">
                    <div className="thumb">
                        <Link href="">
                        <Image src={BackgroundThree} width={1180} height={787} alt='evn-img3'/>
                        </Link>
                    </div>
                    <div className="event-content">
                        <div className="date">
                        <strong>22</strong> March, 2024
                        </div>
                        <h3>
                        <Link href="">
                            {" "}
                            GRE/GMAT Graduation Day
                        </Link>
                        </h3>
                        <p>
                        GRE/GMAT Graduation,December Cohort
                        </p>
                        <div className="time">
                        3:30 pm - 4:30 pm <i className="fal fa-long-arrow-right" />{" "}
                        <strong>Nairobi</strong>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="event-item mb-30 hover-zoomin">
                    <div className="thumb">
                        <Link href="">
                        <Image src={BackgroundOne} width={1180} height={787} alt='evn-img1'/>
                        </Link>
                    </div>
                    <div className="event-content">
                        <div className="date">
                        <strong>22</strong> May, 2024
                        </div>
                        <h3>
                        <Link href="">
                            {" "}
                        IELTS/TOEFL Farewell Dinner
                        </Link>
                        </h3>
                        <p>
                        January Cohort farewell Dinner
                        </p>
                        <div className="time">
                        3:30 pm - 8:30 pm <i className="fal fa-long-arrow-right" />{" "}
                        <strong>Sarova Panafric</strong>
                        </div>
                    </div>
                    </div>
                </div>
       
                </div>
            </div>
        </section>
    </>
  )
}

export default Event