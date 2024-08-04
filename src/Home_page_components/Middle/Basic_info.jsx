import React, { useEffect, useState } from 'react'
import './Basic_info.css'

// import portfolio from '../../../public/portfolio_profile.png'

export const Basic_info = () => {
    let info_string = `Hi my name is Pranav , welcome to my personal portfolio
    Developer and QA Automation engineer executing problem solving-through programming and
Technologies. Very passionate about building applications which are scalable and interactive while
learning new technologies every day .
    `
    const [current_text , setcurrent_text] = useState('')
    const [current_index,setcurrent_index] = useState(0)
    let delay = 15;
    useEffect(()=>{
      if(current_index<info_string.length){
        const timeout = setTimeout(() => {
          setcurrent_text(prevtext=>prevtext + info_string[current_index]);
          setcurrent_index(prevIndex=>prevIndex+1)
        }, delay);
        return ()=>clearTimeout(timeout)
      }
    },[current_index,delay,info_string])
   
  return (
    <div className='overall_info_div'>
        <div className='info_div'><span>{<p id='info_para'>{current_text}</p>}</span></div>
        <div className='img_div'>
          <h1>My image</h1>
          <image src="./src/Images/portfolio_profile.png"/>
          </div>
    </div>
  )
}
