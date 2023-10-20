import React from 'react';
import './signin.css'
import AuthForm from '../../Components/AuthForm/authForm';
import img_login_section from './../../Assets/img_login_page_section.png'
import { Link } from 'react-router-dom';

const SignInPage = () => {
    return (
        <section className='login-page'>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <section className='up-section'>
          <Link to='/' className='span'>E.LEARNIA</Link>
          <h1>Sign in to</h1>
          <h2>Lorem Ipsum is simply</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </section>
        <AuthForm />
      </div>

      <div className='image-container'>
        <img src={img_login_section} alt='img_login_section' />
      </div>
    </section>
    );
}

export default SignInPage;
