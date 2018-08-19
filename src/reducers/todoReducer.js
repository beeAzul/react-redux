import {FETCH_TODOS, NEW_TODOS} from "../actions/types";

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
        default:
            return state;
    }
}