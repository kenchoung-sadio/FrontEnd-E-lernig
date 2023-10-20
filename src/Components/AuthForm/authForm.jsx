import React from 'react';
import './authForm.css'
import {FcGoogle} from 'react-icons/fc'

const AuthForm = () => {
    return (
        <form className='auth-form'>
            <h2>Welcome to <span>E.LEARNIA</span></h2>
            <div className='header-form'>
                <h1>Sign in</h1>
                <p>No account? <br /> <span>sign up</span></p>
            </div>
            <div className="content-form">
                <div className='input'>
                    <label htmlFor="email-name">Enter your username or email address</label>
                    <input type="text" name="email-name" id="email-name" placeholder='Username or email adress' />
                </div>
                <div className='input'>
                    <label htmlFor="password">Enter your password</label>
                    <input type="password" name="password" id="password" placeholder='Password' />
                </div>
                <br />
                <div className='input'>
                    <button className='btn_submit_auth'>Sign in</button>
                </div>
                <div className="input">
                    <button className='btn_submit_google_auth'>
                        <FcGoogle size={20} className='ic_google'/>
                        Sign in with Google
                    </button>
                </div>
            </div>
        </form>
    );
}

export default AuthForm;
