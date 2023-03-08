import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actionsTypes";
import { initialState } from "./initialState";

const generateId = (todo) => {
    const id = todo.reduce((maxid, todo) => Math.max(todo.id, maxid), -1)
    return id + 1;
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADDED:
            return [
                ...state,
                {
                    id: generateId(state),
                    text: action.payload,
                    completed: false
                }
            ]

        case TOGGLED:
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else {
                    return todo
                }
            })

        case COLORSELECTED:
            return state.map(todo => {
                if (todo.id === action.payload.todoId) {
                    return {
                        ...todo,
                        color: action.payload.color
                    }
                } else {
                    return todo
                }
            })

        case DELETED:
            return state.filter(todo => todo.id !== action.payload)

        case ALLCOMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })

        case CLEARCOMPLETED:
            return state.filter(todo => todo.completed === false)

        default:
            return state
    }
}

export default todoReducer;