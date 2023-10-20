import React, { useEffect, useState } from 'react';
import './courseCard.css'
import { getCourse } from '../../Services/Courses/getCourse';
import { Skeleton } from '@mui/material';
import { API_URL } from '../../Services/API';

const CourseCard = ({ id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [courseElement, setCourseElement] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const handlerGetCourse = async () => {
    try {
        const data = await getCourse(id)
        setCourseElement(data.data.attributes)
        console.log(data.data.attributes)
        setIsLoading(false)
    } catch (error) {
        console.log(error)
    }
}

  useEffect(() => {
    const btnSeeMore = document.querySelector(`#seeMoreBtn-${id}`);

    if (btnSeeMore) {
      btnSeeMore.style.display = isHovered ? 'block' : 'none';
    }
  }, [isHovered, id]);

  useEffect(() => {
    handlerGetCourse()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className='badge-price'>{courseElement.Type}</span>
      {
        isLoading ?(
          <Skeleton variant="rectangular" width={'100%'} height={'auto'} />
        ) : (
          <img src={API_URL + courseElement.courseImage.data.attributes.formats.thumbnail.url} alt={API_URL + courseElement.courseImage.data.attributes.alternativeText} />
        )
      }
      <button id={`seeMoreBtn-${id}`}>See more</button>
      {
        isLoading ?(
          <Skeleton/>
        ) : (
          <h2>{courseElement.Title}</h2>
        )
      }
    </div>
  );
}

export default CourseCard