import React, { useEffect, useState } from 'react'
import './Basic_info.css'

// import portfolio from '../../../public/portfolio_profile.png'

export const Basic_info = () => {

  let intro = `Hi, My name is Pranav `;
    let info_string = `Welcome to my personal portfolio. I am a developer, designer, and builder executing problem solving through programming and Technologies. Very passionate about building applications that are scalable and interactive.`
    // const [current_text , setcurrent_text] = useState('')
    // const [current_index,setcurrent_index] = useState(0)
    // let delay = 15;
    // useEffect(()=>{
    //   if(current_index<info_string.length){
    //     const timeout = setTimeout(() => {
    //       setcurrent_text(prevtext=>prevtext + info_string[current_index]);
    //       setcurrent_index(prevIndex=>prevIndex+1)
    //     }, delay);
    //     return ()=>clearTimeout(timeout)
    //   }
    // },[current_index,delay,info_string])
   
  return (
    <>
    <div className='overall_info_div'>
        <div className='info_div'>
        <span className='hi_text satisfy-regular'>{intro}</span>
          <span >{<p id='info_para'>{info_string}</p>}</span></div>
          
        <div id='my_image_div2'></div>

        <div id = 'my_image_div'></div>
        </div></>
  )
}
  