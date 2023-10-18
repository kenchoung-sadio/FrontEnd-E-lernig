import React from 'react';
import './cardInformation.css'

const CardInformation = ({icon, title, description}) => {
    return (
        <div className='card-information'>
            <img src={icon} alt="icon header" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default CardInformation;