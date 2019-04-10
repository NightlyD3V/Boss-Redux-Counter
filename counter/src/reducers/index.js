import { increment, decrement } from '../actions';

//SOURCE OF ALL TRUTH
const initialState = {
    counter: 0
};

export const Reducer = ( state=initialState, action ) => {
    switch( action.type ) {
        case increment: {
            return state.counter + 1
        }
        case decrement: {
            return state.counter -1
        }
        default: return state
    }
}

