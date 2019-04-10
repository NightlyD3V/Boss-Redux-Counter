//IMPORT ACTIONS
import { INCREMENT, DECREMENT } from '../actions';

//SOURCE OF ALL TRUTH
const initialState = {
    counter: 1
};

export const Reducer = ( state=initialState, action ) => {
    switch( action.type ) {
        case INCREMENT: 
            return {
                ...state,
                counter: action.payload + 1
            }
        case DECREMENT: 
            return {
                ...state,
                counter: action.payload - 1
            }
        default: return state
    }
}

