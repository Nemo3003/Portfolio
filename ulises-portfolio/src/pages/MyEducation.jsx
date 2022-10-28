import React from 'react'
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import '../sass/styles.css';
import "../styles/index.css"

export default function MyEducation() {
    const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
    return(
        <Fragment>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            Brigham Young University - Idaho.
          </AccordionHeader>
          <AccordionBody>
            <h2>Bachelor's degree in Science, Applied Technology</h2>
            Here I learned to be productive, to be proactive and to be accountable for my actions. Programming has been the most intense I have ever seen before.
            
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            Universidad Nacional de Cuyo
          </AccordionHeader>
          <AccordionBody>
            <h2 >Diplomatura Universitaria en desarrollo artistico de videojuegos, especialidad en sonido</h2>
            <p>- Know the process for the integral development of videogames, in terms of the use of
                tools from software, gameplay, sound, images, video, and management. <br/>
                - Program video games, using basic software elements and tools.</p>
                <br/>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            Universidad Nacional de San Martin
          </AccordionHeader>
          <AccordionBody>
          <h2> Diplomatura Universitaria en Planificacion de Proyectos con Perspectiva de Género , EconomicsDiplomatura Universitaria en Planificacion de Proyectos con Perspectiva de Género , Economics</h2> 
- Contribute to increasing the levels of awareness and commitment of organizations with the agenda of women, gender, and diversity. <br/>
- Consolidate the skills, knowledge, and tools of those who lead institutions in terms of equality in order to optimally implement gender mainstreaming.
          </AccordionBody>
        </Accordion>
      </Fragment>
  
    )
}