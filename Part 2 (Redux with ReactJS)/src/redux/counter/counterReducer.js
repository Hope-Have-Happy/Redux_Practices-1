import { DECREMENT, INCREMENT, RESET } from "./actionTypes";

const initialState = {
    value: 0
}

const countReducer = (state = initialState, action) => {
    const { type } = action
    switch (type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1,
            }

        case DECREMENT:
            return {
                ...state,
                value: state.value - 1,
            }

        case RESET:
            return {
                ...state,
                value: 0
            }

        default:
            return state
    }
}

export default countReducer;