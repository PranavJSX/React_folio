import React from 'react'
import { Card_prints } from '../../Custom Components/Material/Shared/Card_prints'
import './Projects.css'

export const Projects = () => {


    const projects_obj_arr=[
    {
        title:'Image Storage and Location',
        details:`A complete MERN stack app which allows user to login/signup as per requirement and securely allows
        them to store their personal images with location with complete map support(user can open google maps and mark
        the location of the image which is stored in very secure Mongo DB.)`,
        tech:[`React JS`, `Express`, `Node JS`, 'MongoDB'],
        link:'https://github.com/PranavJSX/Mern_app.git',
        image_location:<img src={require('./../../Images/budge_manager_updated_collage.PNG')}/>,
        videos:''
    },
    {   
        title:'Socket IO Room chat app',
        details:`Using Socket.IO's abilities to track , emit , braodcast user connects and disconnects , I have created
        an room chat app where a user or a group of users can chat with each other seamlessly understanding all the 
        functions of socketio with detailed login and chat app design elements `,
        tech:['React JS', 'Node JS', 'Express','Socket.IO','Figma'],
        link:`https://github.com/PranavJSX/1st_chat_app.git`,
        image_location:<img src={require('./../../Images/socket_app_1.PNG')}/>,
        videos:''
    },
    {
        title:'Password Manager',
        details:`Developed a web based Password manager tool to store passwords for different purposes with
        a very secured seamless login and sign up process which reduces the efforts for password
        management.`,
        tech:['Javascript', 'HTML and CSS', 'Firebase database'],
        link:`https://github.com/PranavJSX/Javascript_password_manager`,
        image_location:<img src={require('./../../Images/Password_manager_2.PNG')}/>,
        videos:''
    },
    {   
        title:'Budget_Manager',
        details:`Developed a web based Budget manager tool in which you can store , update your expenses and 
        earnings along with your investment data , you can add your targets and it predicts whether you are hitting it or not , it can even
        provide you with your fav stocks data on the fly so you can track your investments .`,
        tech:['React JS', 'Node JS', 'MongoDB'],
        link:`https://github.com/PranavJSX/Budget_manager.git`,
        image_location:<img src={require('./../../Images/Budget_tracker_1.PNG')}/>,
        videos:''
    },
    
]

  return (
    <div className='project_div'>
        {projects_obj_arr.map(i=>{
            return(<Card_prints myobj={i}/>)
        })}
    </div>
  )
}


