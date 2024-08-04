import React from 'react'
import './Main.css'
import { Header } from '../../../Home_page_components/Top/Header'
import { Basic_info } from '../../../Home_page_components/Middle/Basic_info'
import { My_journey } from '../../../Home_page_components/Middle/My_journey'
import { Projects } from '../../../Home_page_components/Middle/Projects'

export const Main = () => {
    return <>
    <div><Header/></div>
    <div><Basic_info/></div>
    <div><My_journey/></div>
    <div className='myprojects_div'><Projects/></div>
    <footer></footer>
        </>
}
