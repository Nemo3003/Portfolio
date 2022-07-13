import React from 'react'
import '../sass/styles.css';

export default function MyServices() {
    return(
        <div className="my-services">
            <div className='my-services-1'>
                <img src="sdf" alt="first" />
                <h4>First one</h4>
                <p>lorem ipsummm</p>
            </div>
            <div className='my-services-2'>
                <h4>Second one</h4>
                <img src="sdf" alt="second" />
                <p>lorem ipsummm</p>
            </div>
            <div className='my-services-3'>
                <h4>Third one</h4>
                <img src="sdf" alt="third" />
                <p>lorem ipsummm</p>
            </div>
        </div>
    )
}