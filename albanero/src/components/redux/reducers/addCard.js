
import { actions } from './../actions/index';

const initialState = {
    cards:[]
}

export default function(state=initialState,action) {
    switch(action.type) {
        case actions.ADD_CARD :{
            return {
                ...state,
                cards: [...state.cards,action.message]
            };
        }
        case actions.DELETE_CARD :{
            let arr = state.cards;
            arr= arr.filter(e=> e.id !== action.id);
            return {
                ...state,
                cards: arr
            };
        }
        default:
            return state
    }
}