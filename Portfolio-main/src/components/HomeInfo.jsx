import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'


const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} alt="img" className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 '>
            Hi I am <span className="font-semibold">Likith Kandepu</span>👋<br />
            a Full Stack Developer passionate about user-friendly digital experiences, collaborative problem-solving, innovation, and team management, holding a B.Tech in Computer Science Engineering from KL University, Guntur
        </h1>
    ),
    2: (
        <InfoBox
            text="I have learnt many new growing technologies like react js and MERN Stack"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Have done many projects and gained experience in developing"
            link="/projects"
            btnText="Explore more"
        />
    ),
    4: (
        <InfoBox
            text="Want to hire me or know more about me...."
            link="/contact"
            btnText="Contact me"
        />
    ),
}


const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo