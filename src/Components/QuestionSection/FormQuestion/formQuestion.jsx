import React from 'react';
import './formQuestion.css'

const FormQuestion = () => {
    return (
        <form className='form-question'>
            <div className='input'>
                <input type="text" name="name" id="name" placeholder='Your name' />
            </div>
            <div className='input'>
                <input type="email" name="email" id="email" placeholder='Your email' />
            </div>
            <div className='input'>
                <textarea name="message" id="message" rows="7" placeholder='Your message'></textarea>
            </div>
            <div className='input'>
                <button className='btn_send'>SEND</button>
            </div>
        </form>
    );
}

export default FormQuestion;
