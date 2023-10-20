import React, { useEffect, useState } from 'react';
import CourseCard from '../CourseCard/courseCard';
import'./coursesList.css'
import { getCourses } from '../../Services/Courses/getCourses';
import { Box, List, Skeleton } from '@mui/material';

const CoursesList = () => {

    const [courses, setCourses] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const handlerGetCourses = async () => {
        try {
            const data = await getCourses()
            setCourses(data.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handlerGetCourses()
    }, [])

    return (
        <div className='courses-element'>
            <div className='list-card'>
                {isLoading ? 
                (
                    <List
                        style={{display: 'flex', justifyContent: 'space-between', margin: '35px'}} 
                    >
                        <Box sx={{
                            marginRight: '100px'
                        }}>
                            <Skeleton variant="rectangular" width={300} height={200} style={{borderRadius: '10px'}} />
                            <Skeleton width="60%" />
                        </Box>
                        <Box sx={{
                            marginRight: '100px'
                        }}>
                            <Skeleton variant="rectangular" width={300} height={200} style={{borderRadius: '10px'}} />
                            <Skeleton width="60%" />
                        </Box>
                        <Box>
                            <Skeleton variant="rectangular" width={300} height={200} style={{borderRadius: '10px'}} />
                            <Skeleton width="60%" />
                        </Box>
                    </List>
                ) : 
                    courses.slice(0,3).map(course => <CourseCard key={course.id} id={course.id}/>)}
            </div>
            <div className='container-btn-more-courses'>
                <button className='btn_submit_principal'>More Courses</button>
            </div>
        </div>
    );
}

export default CoursesList;
