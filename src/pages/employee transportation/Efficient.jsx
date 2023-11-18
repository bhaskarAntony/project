import React from 'react'
import './styles/hero.css'
import { Link } from 'react-router-dom'

const efficientData = [
    {
        title:"Step 1: Schedule Transportation",
        description:"Use our easy-to-use online platform to schedule transportation for your employees.",
        image:"https://img.freepik.com/free-photo/high-angle-woman-holding-laptop_23-2149954894.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais"
    },
    {
        title:"Step 2: Pick-up and Drop-off",
        description:"Our professional drivers will pick up your employees from their designated locations and drop them off at your workplace.",
        image:"https://img.freepik.com/free-photo/woman-talking-with-taxi-driver-car_23-2149149583.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais"
    },
    {
        title:"Step 3: On-Time Arrival",
        description:"We ensure that your employees arrive at work on time, every time.",
        image:"https://img.freepik.com/free-photo/smiling-young-pretty-caucasian-woman-holding-clock-doing-ok-sign-isolated-green_141793-33041.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais"
    }
]
function Efficient() {
  return (
    <section className='efficient container-fluid p-lg-5 p-3'>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-8">
        <span className="fs-4 text-main">Efficient</span>
      <h1 className="fs-1 text-bold">Streamline Your Employee <br /> Transportation with Ease</h1>
      <p className="fs-6">Our employee transportation service simplifies the process of getting your employees to work efficiently. With our streamlined system, you can ensure that your employees arrive on time and ready to work.</p>
        </div>
      </div>
      <div className="row mt-4">
        {
            efficientData.map((item, index)=>(
                <div className="col-12 col-sm-12 col-md-4" key={index}>
                    <div className="efficient-card border bg-light  mb-3">
                        <img src={item.image} alt={item.title} className='w-100' />
                        <div className="p-2">
                            <h1 className="fs-4 text-bold mt-3">{item.title}</h1>
                            <p className="fs-6">{item.description}</p>

                        </div>
                    </div>
                </div>
            ))
        }
      </div>
      <div className=" mt-4 btns d-flex align-item-center gap-3">
        <Link to='/' className='main-btn text-center text-decoration-none'>Learn More</Link>
        <Link to='/' className='btn-outline  border-0 text-center text-decoration-none'>Sign Up <i class="bi bi-chevron-right"></i></Link>
      </div>
    </section>
  )
}

export default Efficient
