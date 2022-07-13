import React from 'react'
import '../sass/styles.css';

export default function Header() {
    return(
        <div className="header-class">

        <div className='Name'>
            <p>Hello, I'm </p><h1><span className='name'>Ulises Mariano Melgarejo</span>.</h1>
            <p>and I am a Software Developer</p>
        </div>
        <div className='Pics-name'>
            <img src="../img/image.jpg" alt="Me" />
        </div>
        </div>
    )
}