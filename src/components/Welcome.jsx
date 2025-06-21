import React from 'react'
import "./Welcome.css"
import { useDispatch } from 'react-redux'
import { authActions } from '../store/authReducer'

const Welcome = () => {
    const dispatch = useDispatch();
    const loginHandler = () => {
        dispatch(authActions.login());
        console.log("hello");
    }    
    return (
        <>
            <button className='login-btn' onClick={loginHandler}>
                Login to redux counter
            </button>
        </>
    )
}

export default Welcome