import React from 'react';
import AuthForm from '../../Components/AuthForm/authForm';
import img_login_section from './../../Assets/img_login_page_section.png'
import { Link } from 'react-router-dom';
import './signUp.css'

const SignUpPage = () => {
    return (
        <section className='login-page'>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <section className='up-section'>
          <Link to='/' className='span'>E.LEARNIA</Link>
          <h1>Sign up to</h1>
          <h2>Lorem Ipsum is simply</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </section>
        <AuthForm
          auth_type={'Sign up'}
          input_contain={
          <>
                <div className='input-sign-up'>
                    <label htmlFor="name">Enter your username</label>
                    <input type="text" name="name" id="name" placeholder='Username  adress' />
                </div>
                <div className='input-sign-up'>
                    <label htmlFor="email">Enter your email address</label>
                    <input type="email" name="email" id="email" placeholder='Email adress' />
                </div>
                <div className='input-sign-up'>
                    <label htmlFor="password">Enter your password</label>
                    <input type="password" name="password" id="password" placeholder='Password' />
                </div>
                <div className='input-sign-up'>
                    <label htmlFor="Cpassword">Enter your confirm password</label>
                    <input type="password" name="Cpassword" id="Cpassword" placeholder='Confirm Password' />
                </div>
          </>
          }
         />
      </div>

      <div className='image-container'>
        <img src={img_login_section} alt='img_login_section' />
      </div>
    </section>
    );
}

export default SignUpPage;
