
import React from 'react'
import Link from 'next/link'
//aimport { fetchfrontCourses } from "../../../libs/data";

const First=()=>{
  const courses=[
  {
    imgSrc: 'assets/img/bg/couress-img-1.jpg',
    category: 'SATs',
    title: 'SAT Test Prep',
    description:
      'AFEX Hub Ltd offers a comprehensive SAT prep program that includes group classes and practice tests to help students achieve their best scores on this important standardized test.',
  },
  {
    imgSrc: 'assets/img/bg/couress-img-2.jpg',
    category: 'IELTS/TOEFL',
    title: 'IETLTS/TOEFL Prep',
    description:
      'We offer comprehensive test preparation programs for the TOEFL and IELTS exams, two of the most widely accepted language proficiency tests for academic purposes. ',
  },
  {
    imgSrc: 'assets/img/bg/couress-img-3.jpg',
    category: 'GRE/GMAT',
    title: 'GRE/GMAT Test Prep',
    description:
      'Our GRE and GMAT test prep program provides comprehensive group classes to help students achieve their desired scores and gain admission to top graduate schools.',
  },
  ]
  return (
    <>
      <section
        className="shop-area pt-120 pb-120 p-relative "
        data-animation="fadeInUp animated"
        data-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <h6 className="mt-20 mb-50">Showing 1–3 of 3 results</h6>
            </div>
            <div className="col-lg-6 col-sm-6 text-right">
              <select name="orderby" className="orderby" aria-label="Shop order">
                <option value="menu_order">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date">Sort by latest</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
            </div>
          </div>
          <div className="row align-items-center">
            {courses.map((course,index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="courses-item mb-30 hover-zoomin">
                  <div className="thumb fix">
                    <Link href="/Courses/CourseDetails">
                      <img src={course.imgSrc} alt="course-img" />
                    </Link>
                  </div>
                  <div className="courses-content">
                    <div className="cat">
                      <i className="fal fa-graduation-cap" /> {course.price}
                    </div>
                    <h3>
                      <Link href="/Courses/CourseDetails">{course.title}</Link>
                    </h3>
                    <p>{course.description}</p>
                    <Link href="/Courses/CourseDetails" className="readmore">
                      Read More <i className="fal fa-long-arrow-right" />
                    </Link>
                  </div>
                  <div className="icon">
                    <img src="assets/img/icon/cou-icon.png" alt="icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </>
  );
}

export default First;