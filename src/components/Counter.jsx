import './Counter.css'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/counterReducer';

const Counter = () => {
    const counter = useSelector((state) => state.counter.counter);
    const isToggled = useSelector((state) => state.counter.isToggled); // useSelector is a hook that allows us to extract data from the Redux store state
    const dispatch = useDispatch(); // useDispatch is a hook that gives us access to the dispatch function from the Redux store

    const incrementHandle = () => {
        dispatch(counterActions.increase());
    }
    const decrementHandle = () => {
        dispatch(counterActions.decrease());
    }
    const IncreaseByFive = () => {
        dispatch(counterActions.increaseBy5(5));
    }

    const toggleHandle = () => {
        dispatch(counterActions.toggle());
    }

    const resetHandle = () => {
        dispatch(counterActions.reset());
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
                <button className='increase-by-5-button' onClick={IncreaseByFive}>Increase By 5</button>
                <button className='toggle-button' onClick={toggleHandle}>
                    {isToggled ? 'Hide Toggle' : 'Show Toggle'}
                </button>
            </div>
        </section>
    )
}

export default Counter