import React from 'react'
import { Card_prints } from '../../Custom Components/Material/Shared/Card_prints'
import './Projects.css'

export const Projects = () => {
    const projects_obj_arr=[{
        title:'JS project',
        detials:'',
        tech:'',
        link:'',
        videos:''
    },{title:'',
        detials:'',
        tech:'',
        link:'',
        videos:''
    },{
        title:'',
        detials:'',
        tech:'',
        link:'',
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
