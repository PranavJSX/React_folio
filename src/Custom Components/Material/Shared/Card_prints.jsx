import React from 'react'
import './Card_prints.css'

export const Card_prints = (props) => {
  return (
    <div className='flip_card'>
    <div className='main_card_div'>
      <div className='flip_card_front'>
        <h2>{props.myobj.title}</h2>
        <p>{props.myobj.details}</p>
        </div>
        <div className='flip_card_back'>
        <a href={`${props.myobj.link}`} target='_blank'><button className='card_buttons'>Source</button></a>


        <div className='tech_stack_div'>
          {props.myobj.tech.map(i=>{
            return(
              <div>{i}</div>
            )
          })}
        </div>
        </div>
    </div>
    </div>
  )
}