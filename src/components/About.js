import React from 'react'
import MyPic from '../images/me.png'

function About() {
  return (
    <div className='About'>
        <img src={MyPic} alt="akram pictur" />

        <h1>Boughazi Akram</h1>

        <p>Computer Science (student) , self taught FrontEnd Developer (React Js 💕) , I live in Algeria 🇩🇿 </p>
    </div>
  )
}

export default About