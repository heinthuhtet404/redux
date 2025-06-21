import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, isToggled: true};
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increase(state) {
            state.counter++;
        }
        ,
        decrease(state) {
            state.counter--;
        },
        toggle(state) {
            state.isToggled = !state.isToggled;
        },
        increaseBy5(state, action) {
            state.counter += action.payload;
        },
        reset(state) {
            state.counter = 0;
            state.isToggled = true; // Resetting the toggle state to true when reset is called
        }
    }
})

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;