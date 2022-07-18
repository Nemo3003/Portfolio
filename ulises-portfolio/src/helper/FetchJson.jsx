//Fetch the projects.json file in data and get all the information
//and display it in the page.
import React from "react";

import { stockData } from "../data/projects";

export const FetchJson = () => {
  return (
    <>
   
        {stockData.map((data, key)=>{
            return(
                <div key={key} className={data.location}>
                    {
                        data.project
                    }
                    <br />
                    <img src={data.image} alt="data" />
                    <br />
                    {data.description}
                    <br />
                    {data.stack}
                    <br />
                    {data.start_date}
                    <br />
                    {data.end_date}
                    <br />
                    {data.status}
                    <br />
                    <br />
                </div>
            )
        })}
    
    </>)
};