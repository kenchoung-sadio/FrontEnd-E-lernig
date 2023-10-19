import React from 'react';
import CourseCard from '../CourseCard/courseCard';
import'./coursesList.css'

const CoursesList = () => {
    return (
        <div className='courses-element'>
            <div className='list-card'>
                <CourseCard id={1}/>
                <CourseCard id={2}/>
                <CourseCard id={3}/>
            </div>
            <div className='container-btn-more-courses'>
                <button className='btn_submit_principal'>More Courses</button>
            </div>
        </div>
    );
}

export default CoursesList;
