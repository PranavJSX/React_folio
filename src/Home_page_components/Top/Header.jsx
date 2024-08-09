import React from "react";
import './Header.css'

export const Header=()=>{
    return<>
    <div className="top_nav">
        <button>PROJECTS</button>
        <button>ABOUT ME</button>
        {/* <div className="multi"> */}
        <button className="split">CONTACT</button>
    </div>
    </>
}