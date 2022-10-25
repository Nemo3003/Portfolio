import React from 'react'
import '../sass/styles.css';
import me from '../assets/me.jpg'
import "../styles/index.css"

export default function Header() {
    return(
        <div className="row">
        <div className='col-md-12'>
            <p>Hello, I'm </p><h1><span className='name'>Ulises Mariano Melgarejo</span>.</h1>
            <p>and I am a Software Developer</p>
        </div>
        <div className='col-md-4'>
        <div className='pic-about'>
                <img width='324vh' src={me} alt="my image" />    
            </div>
        </div>
        </div>
    )
}