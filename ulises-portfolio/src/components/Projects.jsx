import React from 'react'
import { FetchJson} from '../helper/FetchJson'

export default function Projects(){
    //Fetch the project from the json file in the data folder
    return(
        <>
        
        <div className='projects-div'>
                <FetchJson/>
            </div>
            </>
    )
}