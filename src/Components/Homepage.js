import React from 'react'
import { NavLink } from 'react-router-dom'


const Homepage = () => {
  return (
    <div>
        <section id='header' className='d-flex align-items-center'>
            <div className='container-fluid nav_bg'>
                <div className='row'>
                    
                   
                    <div className='col-10 mx-auto'>
                    <div className='row'>
                        <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                            <h1>React Component Showcase <strong className='brand-name'>(Minor Project)</strong></h1>
                            <h2 className='my-3'>
                                We are the team of talented developer making website
                            </h2>
                            <div className='mt-3'>
                                <NavLink to='/service' className='btn btn-primary'>Get started</NavLink>
                            </div>
                        </div>
                        <div className='col-lg-6 order-1 order-lg-2 header-img'>
                            <img src="https://unbounce.com/photos/Homepage-Mobile.png.webp" className="zoom-in" alt="home img" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
           
        </section>
    </div>
  )
}

export default Homepage