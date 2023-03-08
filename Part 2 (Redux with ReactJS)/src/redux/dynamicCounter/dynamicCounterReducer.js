import { DYNAMIC_DECREMENT, DYNAMIC_INCREMENT, DYNAMIC_RESET } from "./actionsType";

const initialState = {
    value: 5
}

const dynamicCountReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case DYNAMIC_INCREMENT:
            return {
                ...state,
                value: state.value + payload,
            }


        case DYNAMIC_DECREMENT:
            return {
                ...state,
                value: state.value - payload,
            }

        case DYNAMIC_RESET:
            return {
                ...state,
                value: 5
            }

        default:
            return state
    }
}

export default dynamicCountReducer;