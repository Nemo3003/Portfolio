import React from 'react'
import { FetchJson} from '../helper/FetchJson'
import "../styles/index.css"

export default function Projects(){
    //Fetch the project from the json file in the data folder
    return(
        <>
        
        <div className='flex flex-wrap justify-evenly my-proj'>
                <FetchJson/>
            </div>
            </>
    )
}