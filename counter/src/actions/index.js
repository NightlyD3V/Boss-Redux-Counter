//POSSIBLE ACTIONS

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export function increment(addOne) {
    return {
        type: INCREMENT,
        payload: addOne
    }
}

export function decrement(minusOne) {
    return {
        type: DECREMENT,
        payload: minusOne
    }
}