import React, { useState } from 'react'
import './Journey_grid.css'
import { Fade } from 'react-awesome-reveal'

export const Journey_grid = () => {
    

    const my_journey_obj=[{
        id:1,
        year:'2020',
        exp_string:'',
        Worked_in:'',
        },{
        id:2,
        year:'2021',
        exp_string:'',
        Worked_in:'',
        }]

    const [Count,setCount] = useState(my_journey_obj.length)

    const print_journey_obj = my_journey_obj.map(element=>{
        return(<>
            <Fade delay={200}>
            {/* <div className='main_line'></div>
            <div>{element.year}</div> */}
            <div className='journey_obj_grid_main'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
            </Fade>
            </>
        )
    })

  return (
    <>
    <div className='main_outer_journey_grid'>
    <Fade delay={200}>
    <h3>Beginning</h3>
    </Fade>
    {print_journey_obj}
    </div>
    </>
  )
}
