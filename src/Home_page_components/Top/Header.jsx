import React from "react";
import './Header.css'

export const Header=()=>{
    return<>
    <div className="top_nav">
        <button>HOME</button>
        <button>ABOUT ME</button>
        <button className="split">CONTACT</button>
    </div>
    </>
}