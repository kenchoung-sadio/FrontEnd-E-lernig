import React from 'react';
import './authForm.css'
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom';

const AuthForm = ({auth_type, input_contain, handler_submit}) => {
    return (
        <form className='auth-form' onSubmit={handler_submit}>
            <h2>Welcome to <span>E.LEARNIA</span></h2>
            <div className='header-form'>
                <h1>{auth_type}</h1>
                <p>{auth_type === 'Sign in' ? (<>No account? <br /> <Link className='span' to={'/signup'}>sign up</Link></>) : (<>Have account? <br /> <Link className='span' to={'/login'}>sign in</Link></>)}</p>
            </div>
            <div className="content-form">
                {input_contain}
                <br />
                <div className='input'>
                    <button className='btn_submit_auth'>{auth_type}</button>
                </div>
                <div className="input">
                    <button 
                        className='btn_submit_google_auth'
                        >
                        <FcGoogle size={20} className='ic_google'/>
                        {auth_type} with Google
                    </button>
                </div>
            </div>
        </form>
    );
}

export default AuthForm;
