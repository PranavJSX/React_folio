import React, { useEffect } from 'react'
import './Card_prints.css'

export const Card_prints = (props) => {

  const observer_function=()=>{
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            entry.target.classList.toggle('show',entry.isIntersecting)
        })
    })
    const hidden_elements = document.querySelectorAll('.hidden');
    hidden_elements.forEach((el)=>{
        observer.observe(el)
    })
}

useEffect(() => {
  observer_function();
}, [])

  return (
    <div className='flip_card hidden'>
    <div className='main_card_div'>
      <div className='flip_card_front'>
        <h2>{props.myobj.title}</h2>
        <p>{props.myobj.details}</p>
        </div>
        <div className='flip_card_back'>
        <a href={`${props.myobj.link}`} target='_blank'> 
<button class="btn">
  SOURCE CODE
</button></a>
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