import React, { useEffect, useState } from 'react';
import card_img from '../../Assets/card_img.png'
import './courseCard.css'

const CourseCard = ({ id }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const btnSeeMore = document.querySelector(`#seeMoreBtn-${id}`);

    if (btnSeeMore) {
      btnSeeMore.style.display = isHovered ? 'block' : 'none';
    }
  }, [isHovered, id]);

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className='badge-price'>Free</span>
      <img src={card_img} alt="img" />
      <button id={`seeMoreBtn-${id}`}>See more</button>
      <h2>Web Development with HTML - CSS -JS</h2>
    </div>
  );
}

export default CourseCard