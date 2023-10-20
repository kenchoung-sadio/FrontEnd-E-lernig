import React from 'react';
import './courses.css'
import CoursesList from '../CoursesList/coursesList';

const Courses = () => {
    return (
        <section className='courses-section'>
            <h1>Featured <span>Courses</span></h1>
            <CoursesList />
        </section>
    );
}

export default Courses;
