import React from 'react'
import Backgroundtwo from '../../../public/assets/img/afex-pics/resized/tutors.jpg';
import Image from 'next/image';

function Shep() {
    
  const features = [
    {
      icon: 'assets/img/icon/fea-icon01.png',
      title: 'Skilled Teachers',
      description:
      
        "Unlock your potential with our skilled tutors. Elevate your learning experience with personalized guidance and mastery-focused teaching. "
    },
    {
      icon: 'assets/img/icon/fea-icon02.png',
      title: 'Affordable Courses',
      description:
        ' Explore our affordable courses, where quality education meets budget-friendly options. Affordable excellence, accessible for everyone.',
    },
    {
      icon: 'assets/img/icon/fea-icon03.png',
      title: 'Efficient & Flexible',
      description:
        'Our adaptable schedules cater to your needs, ensuring a personalized and effective path to success.',
    },
  ];

  return (
    <>
      <section className="steps-area p-relative" style={{ backgroundColor: '#032e3f' }}>
        <div className="animations-10">
          <Image src={Backgroundtwo} alt="an-img-01" width={627} height={494}/>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="section-title mb-35 wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s">
                <h2></h2>
              
              </div>
              <ul className="pr-20">
                {features.map((feature) => (
                  <li key={feature.icon}>
                    <div className="step-box wow fadeInUp animated"
                      data-animation="fadeInUp"
                      data-delay=".4s">
                      <div className="dnumber">
                        <div className="date-box">
                          <img src={feature.icon} alt="icon" />
                        </div>
                      </div>
                      <div className="text">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="step-img wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
              <Image src={Backgroundtwo} alt="an-img-01" width={727} height={400}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shep;
