import React from 'react'

export default function ContactMe(){
    return(
        <>
        <div className="contact-me">
            <div className='contact-me-text'>
                <h1>Get in touch</h1>
                <p>If you have any suggestion or project, please send me an email and let's get started.</p>
                <h3>Name</h3>
                <p>Ulises Mariano Melgarejo</p>
                <h3>Location</h3>
                <p>Argentina</p>
                <h3>Email</h3>
                <p>devulmarmel@protonmail.com</p>
            </div>
            <div className='contact-me-form'>
                <br />
                <h1>Contact me</h1>
                <br />
                <button>
                    <a href="mailto:devulmarmel@protonmail.com" target="_blank">Email</a>
                </button>
            </div>
        </div>
        </>
    )
}