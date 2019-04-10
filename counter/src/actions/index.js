//POSSIBLE ACTIONS
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const PLAY = 'PLAY';

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

export function play(play) {
    return {
        type: PLAY,
        payload: play
    }
}