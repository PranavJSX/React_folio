import React from 'react'
import { Card_prints } from '../../Custom Components/Material/Shared/Card_prints'
import './Projects.css'

export const Projects = () => {


    const projects_obj_arr=[{
        title:'Password Manager',
        details:`Developed a web based Password manager tool to store passwords for different purposes with
        a very secured seamless login and sign up process which reduces the efforts for password
        management.`,
        tech:['Javascript', 'HTML and CSS', 'Firebase database'],
        link:`https://github.com/PranavJSX/Javascript_password_manager`,
        videos:''
    },{title:'Personal Portfolio page in Python :',
        details:`Build a web based Portfolio page showcasing various Projects where , users can use the
        contact me page to send an email which reduces efforts to write a separate email .`,
        tech:[`Python`, `Streamlit`, `Pandas`],
        link:'https://github.com/PranavJSX/app-2-portfolia.git',
        videos:''
    },{
        title:'Script to automate the Hotel booking Process :',
        details:`Developed a Selenium script which books a hotel on a booking website where a user has the
        option to pick and choose the city resulting in reducing manual efforts`,
        tech:['Java', 'Selenium'],
        link:'https://github.com/PranavJSX/Selenium_JAVA_scripttobookahotel.git',
        videos:''
    },{
        title:'Script to automate the Hotel booking Process :',
        details:`Developed a Selenium script which books a hotel on a booking website where a user has the
        option to pick and choose the city resulting in reducing manual efforts`,
        tech:['Java', 'Selenium'],
        link:'https://github.com/PranavJSX/Selenium_JAVA_scripttobookahotel.git',
        videos:''
    }]

  return (
    <div className='project_div'>
        {projects_obj_arr.map(i=>{
            return(<Card_prints myobj={i}/>)
        })}
    </div>
  )
}
