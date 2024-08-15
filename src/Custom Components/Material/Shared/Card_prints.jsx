import React, { useEffect, useRef } from 'react'
import './Card_prints.css'
import {progress, useInView, useMotionValueEvent, useScroll} from "framer-motion/dom";

export const Card_prints = (props) => {


//   const myscroll = () =>{
//   scroll((progress)=>console.log(progress))
// }


  return (<>
    <div className='main_card_div'>
      <div className='separate_project_div'>
        <div className='block'></div>
        <div className='project_image_div'>Attach your image!</div>        
        <div className='block'></div>
        <div className='project_description_block'>
        <h2>{props.myobj.title}</h2>
        <p>{props.myobj.details}</p>
          <div className='tech_stack_print'>{props.myobj.tech.map(element => {
            return <p>{element}</p>
          })}</div>
          <a href={props.myobj.link} target="_blank"><button>Source Code</button></a>
          </div>
      </div>
    </div>
    </>

)
}
