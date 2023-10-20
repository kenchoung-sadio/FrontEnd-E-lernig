import React from 'react';
import './QuestionSection.css'
import FormQuestion from './FormQuestion/formQuestion';

const QuestionSection = () => {
    return (
        <section className='question-section'>
            <section className='text-question-section'>
                <h1>You have some question?</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
            </section>
            <section>
                <FormQuestion />
            </section>
        </section>
    );
}

export default QuestionSection;
