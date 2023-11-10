import React, { useState } from 'react';
import '../styles/faq.css'

const faqData = [
  {
    "question": "How do I book a car rental or tour package with RSR Tours & Travels?",
    "answer": "You can book a car rental or tour package by visiting our website, selecting your preferred dates, choosing the desired vehicle or tour, and completing the online booking process with payment."
  },
  {
    "question": "What types of vehicles are available for rent?",
    "answer": "We offer a variety of vehicles, including sedans, SUVs, vans, and specialty vehicles. Each vehicle comes with details on capacity, features, and rental rates."
  },
  {
    "question": "What documents are required for car rental?",
    "answer": "You will need a valid driver's license, proof of identity, and any other required documentation for the rental process. Please check our website for specific document requirements."
  },
  {
    "question": "Can I modify or cancel my reservation?",
    "answer": "Yes, you can modify or cancel your reservation. Please refer to our reservation policy on our website for details on the modification process and any associated fees."
  },
  {
    "question": "Are there additional charges, such as insurance fees or fuel costs?",
    "answer": "Additional charges may apply, including insurance options, fuel costs, and other fees. Please review our pricing and policies for a detailed breakdown of charges."
  },
  {
    "question": "Do you offer airport pick-up and drop-off services?",
    "answer": "Yes, we offer airport pick-up and drop-off services. Please check our website for details on availability, fees, and how to arrange for these services."
  },
  {
    "question": "What destinations and tour packages do you offer?",
    "answer": "We offer a variety of destinations and tour packages. Visit our website to explore the destinations covered and find details on the duration, activities, and highlights of our tour packages."
  },
  {
    "question": "How can I contact customer support in case of issues or emergencies?",
    "answer": "You can contact our customer support team by phone at [phone number], or by email at [email address]. We are available 24/7 to assist you with any issues or emergencies."
  },
]


const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse the active FAQ item
    } else {
      setActiveIndex(index); // Expand the clicked FAQ item
    }
  };

  return (
    <div className="container-fluid bg-blur py-5">
      <h2 className='fs-1 text-center text-900'>Still have Doubts?</h2>
      <p className="fs-4 text-secondary text-center my-4">We have answered some of the frequent questions for you!</p>
     <div className="row mt-2">
     <div className="col-12 col-md-12 col-lg-6">
     <div className="faq-left">
     <img src="https://eduquest.itech-theme.com/wp-content/uploads/2023/08/faq.png" alt="" className="w-100" />
     <div className="faq-contact p-3 rounded-3">
      <p className="p-large1 text-white">Contact Us For a <span className="text-main-danger ">Free Learning </span> Consulting Evaluation</p>
      <h1 className="fs-1 text-white">+91 9606729320</h1>
     </div>
     </div>
      </div>
      <div className="col-12 col-md-12 col-lg-6">
      <div className="accordion container" id="faqAccordion">
        {faqData.map((faq, index) => (
          <div className="card course-faq" key={index}>
            <div className="course-faq-question" id={`heading${index}`}>
              <h4 className="mb-0 fs-5">
                <div
                  className={`d-flex w-100 align-items-center ${activeIndex === index ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => handleAccordionClick(index)}
                >
                  <i className={`bi ${activeIndex === index ? 'bi-dash fs-2' : 'bi-plus fs-2'}`}></i>
                  {faq.question}
                </div>
              </h4>
            </div>

            <div
              id={`collapse${index}`}
              className={`collapse ${activeIndex === index ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
     </div>
      <div className="d-flex justify-content-center">
        {/* <ApplyNow text={"Ask More Doubts?"}/> */}
      </div>
    </div>
  );
};

export default FaqSection;
