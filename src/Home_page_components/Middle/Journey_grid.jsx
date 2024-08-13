import React, { useState } from 'react'
import './Journey_grid.css'
import { Fade } from 'react-awesome-reveal'


export const Journey_grid = () => {
    

    const my_journey_obj=[{
        id:1,
        year:'2020',
        exp_string:`Developed a full stack Application for invoice management with easy tracking, insights and 
        analysis along with a chatbot to provide the user with a seamless experience for their
        invoice management within a single app.
        Coordinated with a team to execute these tasks with also gaining experience with the agile
way of working .`,
        tech:`Java, SQL, Python Pandas, React JS, Dialogflow`,
        org:'High Radius Corporations(Intern)'
    },{
         year:'2021',
        exp_string:`Managed automation scripts which was automated using jenkins to perform regression
        testing and API testing to reduce the manual regression testing effort by 90% .
        Executed the Smoke and regression scripts to reduce the overall time taken for execution by
        creating different timelines for the runs which reduced the total time by 50%`,
        tech:'JS ,JAVA, HTML and CSS, JUnit, Postman API, Jenkins, DB2, Mainframe',
        org:'Wipro Technologies'
        },
        {
            year:'2022',
           exp_string:`Continued working on automation regression , this time executed projects
           related to frontend end to end framework, building understanding of the frontend systems
           and how they are coupled`,
           tech:'JS ,JAVA, HTML and CSS, JUnit ,Playwright',
            org:'Wipro Technologies'
        }
           ,

         { year:'2023',
           exp_string:`Continued my work for the client while building applications and projects
           in JS , Python-flask , react , Selenium , mostly frontend out of the grit to build things. 
           Built MERN applications using server side rendering from Node and Express.`,
           tech:'JS , React , Python , Node , Express.JS , UI design ',
           org:'Wipro Technologies',   
        }
        ]

    const [Count,setCount] = useState(my_journey_obj.length)
    const print_journey_obj = my_journey_obj.map(element=>{
        console.log(element.tech)
        return(<>
            <Fade delay={200}>
            <p className='dancing-script-discrfont'><b>{element.year}</b></p>
                <div className='journey_obj_grid_main'>
                    <p className='highlight_para '>{element.exp_string}</p>
                    <div className='main_line'>
                        <p className='org_p'><span>Org : {element.org}</span></p>
                    </div>
                    <p></p>
                    <p className='highlight_para '>{element.tech}</p>
                </div>
            </Fade>
            </>
        )
    })

  return (
    <>
    <div className='main_outer_journey_grid'>
    <Fade delay={200}>
    </Fade>
    {print_journey_obj}
    </div>
    </>
  )
}
