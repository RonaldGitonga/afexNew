'use state'
import React from 'react'
import Video from 'next-video'
import kenya_student from '../../../videos/kenya_student.mp4'

//import Link from 'next/link';




const aboutVideo=()=>{




  return (
    <>
  
        <section className="cta-area cta-bg pt-160 pb-160" style={{ backgroundImage: "url(assets/img/bg/cta_bg.png)" }} >
            <div className="container">
                <div className="row justify-content-center  align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="section-title cta-title video-title wow fadeInLeft animated" data-animation="fadeInDown animated" data-delay=".2s" >
                    <h2>
                        {" "}
                        We're <span>AFEX HUB</span> &amp; We're Diffirent
                    </h2>
                    <p>
                        Our community is being called to reimagine the future. As the only
                        university where a renowned design school colleges,{" "}
                    </p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2"></div>
                <div className="col-lg-4">
                    <div className="s-video-content">
                    <Video src={kenya_student}/>
                    </div>
                </div>
                                </div>
            </div>
        </section>
      

     
    </>
  )
}

export default aboutVideo;