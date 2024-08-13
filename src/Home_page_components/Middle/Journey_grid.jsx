import React, { useState } from 'react'
import './Journey_grid.css'
import { Fade } from 'react-awesome-reveal'


export const Journey_grid = () => {
    

    const my_journey_obj=[{
        year:'2020',
        tech:`Java, SQL, Python Pandas, React JS, Dialogflow`,
        org:'High Radius Corporations(Intern)'
    },{
        year:'2021-2024',
        tech:'JS ,JAVA, HTML and CSS, JUnit, API , Jenkins, DB2, Testing Frameworks',
        org:'Wipro Technologies',   
        }
        ];

        return<>
        <h1 style={{color:'rgb(107, 102, 102)',
        
        }}>Experience</h1>
        {<div className='top_exp_grid'>
            <div className='basic_info_grid'>
                <div><span className='data_spans'><h3>Industry Experience</h3></span>
                <span className='data_spans'>3+ Years</span>
                </div>
                <div><span className='data_spans'><h3>Design Expert</h3></span>
                <span className='data_spans'></span>
                </div>
                <div><span className='data_spans'><h3>Large Projects Built</h3></span>
                <span className='data_spans'>10+</span></div>
                <div>
                <span className='data_spans'><h3>Managed</h3></span>
                <span className='data_spans'>Stakeholders</span>
                </div>
            </div>
            <div className='exp_info_grid'>
                <div><div><span className='exp_data_spans'><h3 className='year_heading'>{my_journey_obj[0].year}</h3><h3>{my_journey_obj[0].tech}</h3></span></div>
                <div><span className='exp_data_spans'><h2>{my_journey_obj[0].org}</h2></span></div>
                </div>
                <div><div><span className='exp_data_spans'><h3 className='year_heading2'>{my_journey_obj[1].year}</h3><h3>{my_journey_obj[1].tech}</h3></span></div>
                <div><span className='exp_data_spans'><h2>{my_journey_obj[1].org}</h2></span></div></div>
            </div>
            </div>}
        </>
}
