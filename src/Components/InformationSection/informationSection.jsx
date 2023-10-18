import React from 'react';
import CardInformation from './CardInformation/cardInformation';
import './informationSection.css'
import ic_goal from './../../Assets/ic_goal.png'
import ic_history from './../../Assets/ic_history.png'
import ic_innovation from './../../Assets/ic_innovation.png'

const InformationSection = () => {
    return (
        <section className='other-information-information'>
            <h1>Other <span>Information</span></h1>
            <h3>Coming up with a catchy slogan, or crafting the right.</h3>
            <div className='list-card-information'>
                <CardInformation 
                icon={ic_goal}
                title={'Mission'} 
                description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'}
                />
                <CardInformation 
                icon={ic_innovation}
                title={'Vision'} 
                description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'}
                />
                <CardInformation 
                icon={ic_history}
                title={'History'} 
                description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'}
                />
            </div>
        </section>
    );
}

export default InformationSection;
