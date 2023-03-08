import { DYNAMIC_DECREMENT, DYNAMIC_INCREMENT, DYNAMIC_RESET } from "./actionsType"

export const increment = (value) => {
    return {
        type: DYNAMIC_INCREMENT,
        payload: value
    }
}
export const decrement = (value) => {
    return {
        type: DYNAMIC_DECREMENT,
        payload: value
    }
}
export const reset = () => {
    return {
        type: DYNAMIC_RESET,
    }
}