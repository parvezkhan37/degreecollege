import React from 'react'
import './About.css'
import about_img from '../../asset/about.png'
import play_icon from '../../asset/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} className="about-img" alt="about_img" />
        <img src={play_icon} className="play-icon" alt="play_icon" onClick={(e)=>setPlayState(true)}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a tronsformative educational journey with our university's comprehensive education programs. OUr cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of educaton.</p>
        <p>With a focus on innovation, hands-n lerning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
        <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway achieve your goals and unlock your full potential in shaping the future of education.</p>
      </div>
    </div>
  )
}

export default About
