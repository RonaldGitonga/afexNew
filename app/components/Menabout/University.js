import React from 'react'

function University() {
  return (
    <>
        <section className="about-area about-p pt-120 pb-120 p-relative fix">
            <div className="animations-02">
                <img src="assets/img/afex-pics/OMTATA PORTRAIT 1.jpg" alt="contact-bg-an-01" />
            </div>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s" >
                    <img src="assets/img/afex-pics/OMTATA POTRAIT 1.jpg" className='rounded-md'alt="img" />
                    <div className="about-text second-about three-about">
                        <span>
                        82 <sub>+</sub>
                        </span>
                        <p>US Admissions Annually</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="about-content s-about-content pl-15 wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s" >
                    <div className="about-title second-title pb-25">
                        <h5>
                        <i className="fal fa-graduation-cap" /> About Our Campus
                        </h5>
                        <h2>Who We are</h2>
                    </div>
                    <p className="txt-clr">
                    AFEX Hub Limited is a results- driven college advisory organization that 
                    has placed hundreds of students in institutions within the USA and Canada 
                    mostly on scholarships for the past twelve years. We are headquartered in Accra, 
                    Ghana and also have a branch in Nairobi, Kenya. 
                    </p>
                    <p>
                    Across Ghana and Kenya, AFEX is a 
                    market leader in preparing 
                    students for the SAT, GRE, GMAT, IELTS, TOEFL and SSAT. Our students have achieved 
                    remarkable feats at these international exams, boosting students’ chances of gaining 
                    admissions into top schools. In August 2022 alone, 74% of our students ranked Top 1% of 
                    million test-takers worldwide.
                    </p>
                    <div className="about-content2">
                        <div className="row">
                        <div className="col-md-12">
                            <ul className="green2">
                            <li>
                                <div className="abcontent">
                                <div className="ano">
                                    <span>25% </span>
                                </div>{" "}
                                <div className="text">
                                    <h3>SAT Scorers </h3>{" "}
                                    <p>
                                    Top 1% of the SAT Scores Worldwide
                                    </p>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="abcontent">
                                <div className="ano">
                                    <span>82</span>
                                </div>{" "}
                                <div className="text">
                                    <h3>US Admissions</h3>{" "}
                                    <p>
                                    Average Annual School Admissions
                                    </p>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
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

export default University