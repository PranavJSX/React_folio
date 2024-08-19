import React, { useEffect, useState } from 'react'
import './Journey_grid.css'
import { Fade } from 'react-awesome-reveal'


export const Journey_grid = () => {

    const observer_function = () => {
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                entry.target.classList.toggle('show',entry.isIntersecting)
            })
        })
        let left_elements = document.querySelectorAll('.hidden_left') 
        left_elements.forEach((element)=>{
            observer.observe(element);
        })
        let rigth_elements = document.querySelectorAll('.hidden_right');
        rigth_elements.forEach(element=>{
            observer.observe(element)
        })
    }

    useEffect(()=>{
        observer_function();
    },[])

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
        <h1 id='experience_header' style={{color:'rgb(107, 102, 102)',
        position:'relative',
        marginLeft:'-85%',
        }}>Experience</h1>
        {<div className='top_exp_grid'>
            <div className='basic_info_grid'>
                <div className='hidden_left'><span className='data_spans '><h3>Industry Experience</h3></span>
                <span className='data_spans'>3+ Years</span>
                </div>
                <div className='hidden_left'><span className='data_spans'><h3>Design Expert</h3></span>
                <span className='data_spans'></span>
                </div>
                <div className='hidden_left'><span className='data_spans'><h3>Large Projects Built</h3></span>
                <span className='data_spans'>10+</span>
                </div>
                <div className='hidden_left'>
                <span className='data_spans'><h3>Managed</h3></span>
                <span className='data_spans'>Stakeholders</span>
                </div>
            </div>
            <div className='exp_info_grid'>
                <div className='exp_grid_sub1 hidden_right'>
                <Fade>
                <div><span className='exp_data_spans'><h3 className='year_heading'>{my_journey_obj[0].year}</h3><h3>{my_journey_obj[0].tech}</h3></span></div>
                <div><span className='exp_data_spans'><h2>{my_journey_obj[0].org}</h2></span></div></Fade>
                </div>
                <div className='exp_grid_sub1 hidden_right'>
                <Fade>
                <div><span className='exp_data_spans'><h3 className='year_heading2'>{my_journey_obj[1].year}</h3><h3>{my_journey_obj[1].tech}</h3></span></div>
                <div><span className='exp_data_spans'><h2>{my_journey_obj[1].org}</h2></span></div></Fade></div>
            </div>
            </div>}
        </>
}
