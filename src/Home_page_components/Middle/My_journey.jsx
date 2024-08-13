import React from 'react'
import './My_journey.css'
import { Fade } from "react-awesome-reveal";
import { Flexbox_prints } from '../../Custom Components/Material/Shared/Flexbox_prints';
import { DiJavascript } from "react-icons/di";
import { TbFileTypeHtml } from "react-icons/tb";
import { SiCsswizardry } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { Journey_grid } from './Journey_grid';

export const My_journey = () => {

  const myicons=[
    <DiJavascript className='material_icons'/>,
    <TbFileTypeHtml className='material_icons'/>,
    <SiCsswizardry className='material_icons'/>,
    <IoLogoReact className='material_icons'/>,
    <FaGitAlt className='material_icons'/>
  ]
  return (
    <>
    <div className='my_jorney_top_div'><h1>My Tech Stack</h1>
        </div>
        <div><Flexbox_prints arr={myicons} flexboxstyle='row'
        data_type='data_objects'
        /></div>
        <Fade className='top_fade'
        cascade damping={1.1} delay={150}
        >
        </Fade>
        <Journey_grid/>
        </>
  )
}
