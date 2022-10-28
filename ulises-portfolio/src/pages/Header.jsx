import React from 'react'
import '../sass/styles.css';
import me from '../assets/me.jpg'
import "../styles/index.css"

export default function Header() {
    
    return(
        
<div className='content-around flex h-screen'>
<div className="max-w-sm bg-slate rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-auto">
    <a href="#">
        <img className="rounded-t-lg my-pic" src={me} alt=""/>
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ulises M. Melgarejo</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> I am a frontend developer whom enjoys learning and being challenged! There is absolutely nothing I cannot accomplish.</p>
    </div>
</div>
</div>
    )
}