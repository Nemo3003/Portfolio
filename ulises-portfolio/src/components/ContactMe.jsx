import React from 'react'

export default function ContactMe(){
    return(
        <>
        <div className="row">
            <div className='col-8 col-sm-6'>
                <h1>Get in touch</h1>
                <p>If you have any suggestion or project, please send me an email and let's get started.</p>
                <h3>Name</h3>
                <p>Ulises Mariano Melgarejo</p>
                <h3>Location</h3>
                <p>Argentina</p>
                <h3>Email</h3>
                <p>devulmarmel@protonmail.com</p>
            </div>
            <div className='col-4 col-sm-6'>
                <br />
                <h1>Contact me</h1>
                <br />
                <button>
                    <a className='' href="mailto:devulmarmel@protonmail.com" target="_blank">Email</a>
                </button>
            </div>
        </div>
        </>
    )
}