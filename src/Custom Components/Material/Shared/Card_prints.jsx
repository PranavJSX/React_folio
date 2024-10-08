import React, { useEffect, useRef, useState } from 'react'
import './Card_prints.css'
import {motion,  useScroll, useTransform} from "framer-motion";

export const Card_prints = (props) => {




  const increase_x_color = () =>{
    increase_x_color = increase_x_color + 1;
  }
const ref1 = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["0 1" ,"1.33 1" ]
  });

  const opacity = useTransform(
    scrollYProgress,
    [0,1],
    [0,1]
  )

  const x = useTransform(scrollYProgress,[0,1] , [-200 , 0]);
  const y = useTransform(scrollYProgress,[0,1] , [200 , 0]);


return (<motion.div className='main_card_div' ref={ref1}style={{opacity:opacity}}> 
<motion.div className='separate_project_div' style={{x}}>
    <div className='block'></div>
    <div className='project_image_div'>{props.myobj.image_location}</div>    
    
</motion.div>
<motion.div className='project_description_block' style={{y}}>
  
    <h2>{props.myobj.title}</h2>
    <p>{props.myobj.details}</p>
      <div className='tech_stack_print'>{props.myobj.tech.map(element => {
        return <p>{element}</p>
      })}</div>
      <a href={props.myobj.link} target="_blank"><button className='source_code_button'>Source Code</button></a>
      </motion.div>
  </motion.div>)
  

}

