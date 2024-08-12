import React, { useState } from "react";
import './Header.css'

export const Header=()=>{
    
    const show_drop_menu=()=>{
        document.querySelector('.dropdown_menu').style.opacity = 1;
        document.querySelector('.dropdown_menu').style.pointerEvents = 'auto';
           
    }
    
    const hide_drop_menu=()=>{
        document.querySelector('.dropdown_menu').style.opacity = 0;
    }

    const drop_menu_entered_handler= () =>{
        document.querySelector('.dropdown_menu').style.opacity = 1;
        document.querySelector('.dropdown_menu').style.pointerEvents = 'auto';
    }

    const drop_menu_exit_handler = () => {
        document.querySelector('.dropdown_menu').style.opacity = 0;
        document.querySelector('.dropdown_menu').style.pointerEvents = 'none';
    }
    return<>

    <div className="top_nav">
        <button onClick={()=>{document.querySelector('.topic_display').scrollIntoView({behavior:"smooth"},true);
            }}>PROJECTS</button>
        <button onClick={()=>{document.querySelector('.main_outer_journey_grid').scrollIntoView({behavior:"smooth"},true);
            }}>JOURNEY</button>
        {/* <div className="multi"> */}
        <div className="dropdown">
        <button className="split" onMouseEnter={show_drop_menu} onMouseLeave={hide_drop_menu}>CONTACT</button>
        <div className="dropdown_menu" onMouseEnter={drop_menu_entered_handler} onMouseLeave={drop_menu_exit_handler}>
            <a href="https://www.linkedin.com/in/pranav-ojha-14007a1a9" target="_blank"><div className="linked_in_span">Linked In</div></a>
            <a href="www.google.co.in" >Github</a>
            <a href="www.google.co.in" >Link1</a>
        </div> 
        </div>
        
    </div>
    </>
}

