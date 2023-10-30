import React from 'react';
import landing_img from '../../Assets/landing_img.png'
import './Landing.css'
import { Divider } from '@mui/material';
import Courses from '../../Components/Courses/courses';
import InformationSection from '../../Components/InformationSection/informationSection';
import QuestionSection from '../../Components/QuestionSection/questionSection';

const LandingPage = () => {
    return (
        <>
            <Divider />
            <section className='landing-section'>
                <section className='landing-description'>
                    <h1 id="typing-text">Find most Exciting <br /> <span>Online Courses</span></h1>
                    <p>Coming up with a catchy slogan, or crafting the right tagline that defines your brand and really solidifies it in the minds of your customers, is difficult to assign a true value to.</p>
                    <button className='btn_submit_principal'>Start learning</button>
                </section>
                <img src={landing_img} alt='landing img' />
            </section>
            <Divider />
            <Courses />
            <Divider/>
            <InformationSection />
            <Divider />
            <QuestionSection />
            <Divider />
        </>
    );
}

export default LandingPage;
