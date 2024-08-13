import React from 'react'
import './Footer.css'
import { BiArrowToTop } from "react-icons/bi";

export const Footer = () => {
  return (<>
  <div className='footer_main_div'>
    <span className='dancing_script_cursive'>Designed By - Pranav</span>
    <button className='jump_to_top_button' onClick={()=>{document.querySelector('.top_nav')
    .scrollIntoView({behavior:'smooth'},true)}}><BiArrowToTop/></button>
  </div>
  </>
  )
}
