//Fetch the projects.json file in data and get all the information
//and display it in the page.
import React from "react";

import { stockData } from "../data/projects";

export const FetchJson = () => {
  return (
    <>
    <div>
        {stockData.map((data, key)=>{
            return(
                <div key={key}>
                    {
                        data.project
                          + data.description+ 
                          " \n"+ data.stack+ " "
                          + data.start_date + " "
                          + data.end_date
                        + " " + data.status + <img src="data.project" alt="data.image"/>
                    }
                </div>
            )
        })}
    </div>
    </>)
};