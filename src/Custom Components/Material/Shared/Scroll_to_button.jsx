import React from 'react'

import { IoArrowDownSharp } from "react-icons/io5";
import './Scroll_to_button.css'

export const Scroll_to_button = (props) => {
  return (
    <div>
        <button className='down_arrow'
        onClick={()=>{document.getElementById(`${props.jump_to_id}`).scrollIntoView({behavior:'smooth'},true)}}>
        <IoArrowDownSharp/>
        </button>
    </div>
  )
}
