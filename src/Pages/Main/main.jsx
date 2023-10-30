import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';
import LandingPage from './LandingPage/landing';

const Main = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<LandingPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default Main;
