'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const faqItems = [
    {
        id: 'headingThree',
        question: 'What is the difference between IELTS and TOEFL?',
        answer: ' IELTS and TOEFL are both English proficiency exams, but IELTS is more widely accepted globally, often preferred for immigration purposes, while TOEFL is commonly required for admission to U.S. universities. The key distinction lies in their scoring systems and test formats.'
    },
        {
        id: 'headingOne',
        question: 'How can I prepare effectively for the IELTS/TOEFL exams?',
        answer: ' Effective preparation involves a balanced focus on all language skills—listening, reading, writing, and speaking. Utilize sample tests for practice, expand your vocabulary, refine grammar, and seek feedback to identify areas for improvement.',
    },
    {
        id: 'headingTwo',
        question: 'What is the minimum score required to pass the IELTS/TOEFL exams?',
        answer: 'There is no specific "passing" score; it depends on the requirements of the institution or organization you are applying to. Typically, a score above 6.5 for IELTS and 80 for TOEFL is considered competitive, but it is crucial to check the specific score requirements of your intended destination or institution.',
    }
    ];

function First() {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <section className="project-detail">
                <div className="container">
                    <div className="lower-content">
                        <div className="row">
                            <div className="text-column col-lg-9 col-md-9 col-sm-12">
                                <h2>The GRE & GMAT Test Prep Course</h2>
                             
                                <div className="inner-column">
                                    <div className="course-meta2 review style2 clearfix mb-30">
                                        <ul className="left">
                                            <li>
                                                <div className="author">
                                                    
                                                    <div className="text">
                                                        
                                                        <p>Instructor-Led</p>
                                                    </div>
                                                </div>
                                            </li>
                                            
                                        </ul>
                                        <ul className="right">
                                            <li className="price"></li>
                                        </ul>
                                    </div>
                                    <h3>Course Overview</h3>
                                    <p>
                                        
                                    
                                    The GRE (Graduate Record Examination) assesses verbal, quantitative, and analytical 
                                    writing skills, commonly required for graduate program admissions. Conversely, the GMAT 
                                    (Graduate Management Admission Test) evaluates analytical writing, integrated reasoning, 
                                    quantitative, and verbal skills, focusing on assessing readiness for business and management 
                                    programs.
                                    </p>
                                    <p>
                                    Our GRE and GMAT test prep program provides comprehensive group classes to help 
                                    students achieve their desired scores and gain admission to top graduate schools. 
                                    Our expert instructors offer tailored lesson plans, practice tests, and personalized 
                                    feedback to ensure each student is fully prepared for test day. With a proven track 
                                    record of success, our program has helped numerous students gain admission to prestigious 
                                    graduate programs around the world. Join our group classes and take the first step towards 
                                    your academic and professional goals today.
                                    </p>
                                 
                                    <h4>What You Will Learn</h4>
                                    <p>
                                    
                                    At our tutoring center, we equip students for success in the GRE and GMAT exams by 
                                    providing comprehensive preparation. In GRE sessions, students delve into refining verbal, 
                                    quantitative, and analytical writing skills, gaining strategies for efficient time management. 
                                    GMAT-focused sessions emphasize honing analytical writing, integrated reasoning, quantitative, 
                                    and verbal skills, ensuring students are well-prepared for the unique demands of business and 
                                    management programs.
                                    </p>
                                    <p>
                                    Moreover, we encourage a well-rounded approach by immersing students in 
                                    diverse reading materials for comprehensive understanding. Regular speaking 
                                    practice fosters fluency, while honing critical thinking skills boosts overall 
                                    language proficiency. Utilize our varied study resources and seek expert guidance
                                    for thorough and effective preparation.
                                    </p>
                                    <ul className="pr-ul">
                                        <li>
                                            <div className="icon">
                                                <i className="fal fa-check" />
                                            </div>
                                            <div className="text">
                                            Verbal Excellence: Develop advanced vocabulary, critical reading skills, and effective strategies for verbal reasoning.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fal fa-check" />
                                            </div>
                                            <div className="text">
                                            Quantitative Mastery: Strengthen mathematical foundations and learn advanced problem-solving techniques.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fal fa-check" />
                                            </div>
                                            <div className="text">
                                            Analytical Writing Skills: Enhance the ability to analyze complex issues and communicate thoughts clearly.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fal fa-check" />
                                            </div>
                                            <div className="text">
                                            Strategic Time Management: Acquire techniques to optimize time allocation across various sections.
                                            </div>
                                        </li>
                                    </ul>
                                    <h4>Study Options:</h4>
                                    <table className="table table-bordered mb-40">
                                        <thead>
                                            <tr>
                                                <th>Options</th>
                                                <th>Length</th>
                                                <th>Time</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Saturdays</td>
                                                <td>10 Weeks</td>
                                                <td>1.30pm - 3.30pm</td>
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                    <h3>Frequently Asked Questions</h3>
                                   
                                    <div className="faq-wrap pt-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                        <div className="accordion" id="accordionExample">
                                            {faqItems.map((item, index) => (
                                                <div className="card" key={index}>
                                                    <div className="card-header" id={item.id}>
                                                        <h2 className="mb-0">
                                                            <button className={`faq-btn${activeIndex === index ? '' : ' collapsed'}`} type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target={`#collapse${index}`}
                                                                onClick={() => handleToggle(index)}>
                                                                {item.question}
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id={`collapse${index}`}
                                                        className={`collapse${activeIndex === index ? ' hide' : 'true'}`}
                                                        data-bs-parent="#accordionExample" >
                                                        <div className="card-body">{item.answer}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <aside className="sidebar-widget info-column">
                                    <div className="inner-column3">
                                        <h3>Course Features</h3>
                                        <ul className="project-info clearfix">
                                            <li>
                                                <div className="priceing">
                                                    <strong>Ksh.65,000/-</strong> 
                                                    
                                                </div>
                                            </li>
                                            
                                           
                                            <li>
                                                <span className="icon fal fa-clock" />{" "}
                                                <strong>Duration: </strong> <span>10 weeks</span>
                                            </li>
                                            <li>
                                                <span className="icon fal fa-user" />{" "}
                                                <strong>Enrolled: </strong> <span>20 students</span>
                                            </li>
                                            <li>
                                                <span className="icon fal fa-globe" />{" "}
                                                <strong>Language: </strong> <span>English</span>
                                            </li>
                                            <li>
                                                <div className="slider-btn">
                                                    <Link href="/Contact" className="btn ss-btn smoth-scroll">
                                                        Enroll <i className="fal fa-long-arrow-right" />
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default First