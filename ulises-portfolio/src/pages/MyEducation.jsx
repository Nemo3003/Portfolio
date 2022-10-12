import React from 'react'
import '../sass/styles.css';

export default function MyEducation() {
    return(
        <div className="container">
        <div className="row gx-5">
            <div className='col-lg-4 col-md-12'>
                <h4>Web Development</h4>
                <img src="sdf" alt="first" />
                <p>As part of my formation, I am good at developing websites</p>
            </div>
            <div className='col-lg-4 col-md-6'>
                <h4>Web Design</h4>
                <img src="sdf" alt="second" />
                <p>I have been learning how to design powerful websites to impress <br /> and serve the user!!</p>
            </div>
            <div className='col-lg-4 col-md-6'>
                <h4>API Development/Consumption</h4>
                <img src="sdf" alt="third" />
                <p>I have made and consumed various apps throuhout my career</p>
            </div>
        </div>
        </div>
    )
}