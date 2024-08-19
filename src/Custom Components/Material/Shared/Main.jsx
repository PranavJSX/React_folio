import React, { useState } from 'react'
import './Main.css'
import { Header } from '../../../Home_page_components/Top/Header'
import { Basic_info } from '../../../Home_page_components/Middle/Basic_info'
import { My_journey } from '../../../Home_page_components/Middle/My_journey'
import { Projects } from '../../../Home_page_components/Middle/Projects'
import {Footer} from '../../../../src/Home_page_components/Bottom/Footer'
import { Scroll_to_button } from './Scroll_to_button'

export const Main = () => {

    return <>
    {/* <button onClick=}>CLick me to go the bottom</button> */}
    <div><Header/></div>
    <div className='basic_info_div'><Basic_info/></div>
    <div><My_journey/></div>
    <span className='to_project_arrow'><Scroll_to_button jump_to_id = 'myprojects_div'/></span>
    <div id ='myprojects_div'><span className='topic_display'>RECENT WORK</span><Projects/></div>
    <footer><Footer/></footer>
        </>
}
