'use client'
import React, { useState,useRef } from 'react'




const handleChange=(e)=>{
    const {name,value}=e.target;

    setForm({...form,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    setLoading(true);
    emailjs.send(
      'service_epchor9',
      'template_z80dsmq',
      {
        from_name:form.name,
        to_name:"Ronald Gitonga",//recipient account name
        from_email:'form.email',
        to_email:'rgatuiku@gmail.com',//recipient email
        from_subject:form.subject,
        message:form.message,
        phone:form.phone,


      },
      'TwFsrPqxSmJVbbCD5'

    )
    .then(()=>{
      setLoading(false);
      alert('Thank you.I will get back to you as soon as possible');
      setForm(
        {
        name:'',
        email:'',
       
        message:'',
        phone:'',
      }
      )

    },(error)=>{
      setLoading(false);
      console.log(error);
      alert('Something went wrong')
    })

  }
const faqItems = [
    {
        question: 'Cras turpis felis, elementum sed mi at arcu ?',
        answer: 'Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.',
    },
    {
        question: 'Vestibulum nibh risus, in neque eleifendulputate sem ?',
        answer: 'Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.',
    },
    {
        question: 'Donec maximus, sapien id auctor ornare ?',
        answer: 'Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.',
    },
    {
        question: 'Vestibulum nibh risus, in neque eleifendulputate sem ?',
        answer: 'Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.',
    },
    {
        question: 'Donec maximus, sapien id auctor ornare ?',
        answer: 'Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.',
    },
];

function Frequently() {
    const formRef=useRef();
    const [form,setForm]=useState(
        {
          name:'',
          email:'',
          subject:'',
          message:'',
          phone:'',
        }
      
      );
      const [loading,setLoading]=useState(false);

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <section className="faq-area pt-120 pb-120 p-relative fix">
                <div className="animations-10">
                    <img src="assets/img/bg/an-img-04.png" alt="an-img-01" />
                </div>
                <div className="animations-08">
                    <img src="assets/img/bg/an-img-05.png" alt="contact-bg-an-01" />
                </div>
                <div className="container">
                    <div className="row justify-content-center  align-items-center">
                        <div className="col-lg-7">
                            <div className="section-title wow fadeInLeft animated" data-animation="fadeInDown animated" data-delay=".2s">
                                <h2>Get every single answer here.</h2>
                             
                            </div>
                            <div className="faq-wrap mt-30 pr-30">
                                <div className="accordion" id="accordionExample">
                                    {faqItems.map((item, index) => (
                                        <div className="card" key={index}>
                                            <div className="card-header" id={`heading${index}`}>
                                                <h2 className="mb-0">
                                                    <button className={`faq-btn${activeIndex === index ? '' : ' collapsed'}`}
                                                        type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} onClick={() => handleToggle(index)} >
                                                        {item.question}
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id={`collapse${index}`} className={`collapse${activeIndex === index ? ' show' : ''}`} data-bs-parent="#accordionExample" >
                                                <div className="card-body">{item.answer}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-bg02">
                                <div className="section-title wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                    <h2>Have A Question?</h2>
                                </div>
                                <form action={handleSubmit} ref={{formRef}} className="contact-form mt-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-name mb-20">
                                                <input type="text" onChange={handleChange} id="firstn" name="name" value={form.name} placeholder="First Name" required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-subject mb-20">
                                                <input type="text" onChange={handleChange} id="email" name="email" value={form.email} placeholder="Email" required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-subject mb-20">
                                                <input type="text" onChange={handleChange} id="phone" name="phone" value={form.phone} placeholder="Phone No." required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-message mb-30">
                                                <textarea name="message"onChange={handleChange}  id="message" value={form.message} cols={30} rows={10} placeholder="Write comments" defaultValue={""} />
                                            </div>
                                            <div className="slider-btn">
                                                <button type='submit'className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s" >
                                                    <span>Submit Now
                                                    {loading ? 'Sending..': ""}</span>{" "}
                                                    <i className="fal fa-long-arrow-right" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Frequently