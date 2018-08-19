import {FETCH_TODOS, ADD_TODO} from "../actions/types";

const initialState = {
    items: [],
    item: {},
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_TODOS:
            // console.log(action.paylod);
            return {
                ...state,
                items: action.paylod
            }
        case ADD_TODO:
            // console.log(action.paylod);
            return {
                ...state,
                item: action.paylod
            }
        default:
            return state;
    }
}