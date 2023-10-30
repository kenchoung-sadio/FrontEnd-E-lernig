import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../LandingPage/landing';
import { Navbar } from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';
import CoursesPage from './CoursesPage/courses';

const Main = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/list-courses' element={<CoursesPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default Main;
