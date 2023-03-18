import { COLORCHANGED, STATUSCHANGED } from './actionsTypes';
import { initialState } from "./initailState";

const filterReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {

        case STATUSCHANGED:
            return {
                ...state,
                status: action.payload
            }

        case COLORCHANGED:

            if (action.payload.changeType === 'added') {
                return {
                    ...state,
                    colors: [...state.colors, action.payload.color]
                }

            } else if (action.payload.changeType === 'removed') {

                return {
                    ...state,
                    colors: state.colors.filter(color => color !== action.payload.color)
                }

            }

            return state;


        default:
            return state;
    }
}

export default filterReducer;

