import React from 'react'
import './Nav.css'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/authReducer';

const Nav = () => {
    const isToggled = useSelector((state) => state.auth.isLogin);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authActions.logout());
    };

    return (
        <nav>
            <h1>Redux Counter</h1>
            {
                isToggled && (
                    <ul>
                        <li>My records</li>
                        <li>Profile</li>
                        <li>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>
                    </ul>
                )
            }
        </nav>
    )
}

export default Nav