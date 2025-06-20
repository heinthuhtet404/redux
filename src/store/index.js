import { legacy_createStore as createStore} from 'redux';
const initialState = {
    counter: 0,
    isToggled: false
};

const counterReducer = (store = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {counter: store.counter + 1, isToggled: store.isToggled}
    }
    if (action.type === 'DECREMENT') {
        return {counter: store.counter - 1, isToggled: store.isToggled};
    }
    if (action.type === 'RESET') {
        return {counter: 0, isToggled: store.isToggled };
    }
    if (action.type === 'INCREASE_BY_FIVE') {
        return {counter: store.counter + 5, isToggled: store.isToggled};
    }
    if (action.type === 'TOGGLE') {
        return {counter: store.counter, isToggled: !store.isToggled};
    }
    return store;
}
const store = createStore(counterReducer);

export default store;