import React from 'react'
import './Footer.css'
import { BiArrowToTop } from "react-icons/bi";

export const Footer = () => {
  return (<>
  <div className='footer_main_div'>
    <div className='info_content'><h4>Let's connect :</h4> 
      <span className='bright_content'><a href="mailto:ojhapranav1999@gmail.com" target='_blank'>ojhapranav1999@gmail.com</a></span>
      <span className='bright_content'><a href='https://www.linkedin.com/in/pranav-ojha-14007a1a9' target='_blank'>Linked In</a></span>
      <span className='bright_content'><a href='https://github.com/PranavJSX' target='_blank'>Github</a></span>



      <a href='https://drive.google.com/file/d/1zLIGz6OTM-J_T9l9J3UdsLXU1Le8byeC/view?usp=drive_link' target='_block'>Resume</a>
      
      </div>
    
    <button className='jump_to_top_button' onClick={()=>{document.querySelector('.top_nav')
    .scrollIntoView({behavior:'smooth'},true)}}><BiArrowToTop/></button>
    
    
    
    <span className='dancing_script_cursive'>Designed By - Pranav</span>

    
  </div>

  </>
  )
}
