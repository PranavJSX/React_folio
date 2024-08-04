import React from 'react'
import './Card_prints.css'

export const Card_prints = (props) => {

  return (
    <div className='main_card_div'>
        <h2>{props.myobj.title}</h2>
    </div>
  )
}
