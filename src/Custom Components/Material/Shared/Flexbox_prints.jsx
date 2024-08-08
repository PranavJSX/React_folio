import React from 'react'
import './Flexbox_prints.css'

export const Flexbox_prints = (props) => {
    const elements_to_flex = props.arr;
    console.log(`Top_custom_flex_${props.flexboxstyle}`)
    if(props.data_type==='icons'){
        return <div className='master_div'>
            <div></div>
        <div className={`Top_custom_flex_${props.flexboxstyle}_${props.data_type}`}>
        {console.log(elements_to_flex)}
        {elements_to_flex.map(i=>{
            return <div className='flexboxes'> <h2>{i}</h2></div>
        })}</div>
        <div></div>
        </div>
    }
    else if(props.data_type==='data_objects'){
    return(
        <div className='master_div'>
        <div></div>
        <div className={`Top_custom_flex_${props.flexboxstyle}_${props.data_type}`}>
        {console.log(elements_to_flex)}
        {elements_to_flex.map(i=>{
            return <div className='flexboxes'> <h2>{i}</h2></div>
        })}</div>
        <div></div>
        </div>
    )
}

}
