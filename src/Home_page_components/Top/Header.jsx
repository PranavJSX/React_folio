import React, { useState } from "react";
import './Header.css'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";


export const Header=()=>{
   
    return<>
    
    <div className="top_nav">
    <div className="dropdown">
            <a href="https://www.linkedin.com/in/pranav-ojha-14007a1a9" target="_blank"><div className="linked_in_span"><FaLinkedin className="material_icons_header"/></div></a>
            <a href="https://github.com/PranavJSX" target="_blank"  > <div><FaSquareGithub  className="material_icons_header"/></div></a>
            <a href="mailto:ojhapranav1999@gmail.com" target="_blank" aria-label="ojhapranav1999@gmail.com"><MdOutlineMailOutline className="material_icons_header"/></a>
            
            </div>
        <button onClick={()=>{document.querySelector('.topic_display').scrollIntoView({behavior:"smooth"},true);
            }}>PROJECTS</button>
        <button onClick={()=>{document.querySelector('#experience_header').scrollIntoView({behavior:"smooth"},true);
            }}>JOURNEY</button>
        {/* <div className="multi"> */}
        
    </div>
    </>
}

