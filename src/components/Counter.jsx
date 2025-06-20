import React, { useState } from 'react'
import './Counter.css'
import { useSelector , useDispatch } from 'react-redux'

const Counter = () => {
    const counter = useSelector((state) => state.counter);
    const isToggled = useSelector((state) => state.isToggled); // useSelector is a hook that allows us to extract data from the Redux store state
    const dispatch = useDispatch(); // useDispatch is a hook that gives us access to the dispatch function from the Redux store

    const incrementHandle = () => {
        if(isToggled) {
            dispatch({ type: 'INCREMENT' });
        }else {
            alert("Counter is hidden, please toggle to show it before incrementing");
        }
    }
    const decrementHandle = () => {
        if (counter > 0 && isToggled) {
            dispatch({ type: 'DECREMENT' });
        }else {
            alert("Counter cannot be decremented below 0");
        }
    }
    const resetHandle = () => {
        if (isToggled) {
            dispatch({ type: 'RESET' });
        }else {
            alert("Counter is hidden, please toggle to show it before resetting");
        }
    }
    const IncreaseByfive = () => {
        if (isToggled) {
            dispatch({ type: 'INCREASE_BY_FIVE' });
        }else {
            alert("Counter is hidden, please toggle to show it before increasing by 5");
        }
    }
    const toggleHandle = () => {
        dispatch({ type: 'TOGGLE' });
    }

    return (
        <section>
            <h3>Redux Counter</h3>
            {
                isToggled && <h1 className='counter-value'>Counter Value: {counter}</h1>
            }

        <div className='button-container'>
            <button className='increment-button' id="increment-button" onClick={incrementHandle}>Increment</button>
            <button className='decrement-button' id="decrement-button" onClick={decrementHandle}>Decrement</button>
            <button className='reset-button' id="reset-button" onClick={resetHandle}>Reset</button>
            <button className='increase-by-5-button' onClick={IncreaseByfive}>Increase By 5</button>
            <button className='toggle-button' onClick={toggleHandle}>
                {isToggled ? 'Hide Toggle' : 'Show Toggle'}
            </button>
        </div>
    </section>
  )
}

export default Counter