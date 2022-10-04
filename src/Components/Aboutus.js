import React from 'react'
import { NavLink } from 'react-router-dom'
import Loginproject from "../images/Loginproject.jpg";



const Aboutus = () => {
  return (
    <div>
         <div>
        <section id='header' className='d-flex align-items-center'>
            <div className='container-fluid nav_bg'>
                <div className='row'>
                    
                   
                    <div className='col-10 mx-auto'>
                    <div className='row'>
                        <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                            <h1>React Component Showcase <strong className='brand-name'>(Minor Project)</strong></h1>
                            <h2 className='my-3'>
                            <h3>Welcome to our Aboutus page....</h3>
                                <h5>hello!! everyone......
                                Your company’s About Us page is another opportunity to tell a story that will help you stick in your customer’s minds.
                                </h5>
                                
                            </h2>
                            <div className='mt-3'>
                                <NavLink to='/service' className='btn btn-primary'>Get started</NavLink>
                            </div>
                        </div>
                        <div className='col-lg-6 order-1 order-lg-2 header-img'>
                            <img src={Loginproject} className="animation: float 6s ease-in-out infinite" alt="home img" height="500px" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
           
        </section>
    </div>
  
    </div>
  )
}

export default Aboutus;