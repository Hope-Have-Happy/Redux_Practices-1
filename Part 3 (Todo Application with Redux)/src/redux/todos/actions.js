import {
    ADDED,
    ALLCOMPLETED,
    CLEARCOMPLETED,
    COLORSELECTED,
    DELETED,
    TOGGLED
} from "./actionsTypes";

export const addTodo = (text) => {
    return {
        type: ADDED,
        payload: text,
    }
}

export const clearCompleted = () => {
    return {
        type: CLEARCOMPLETED,
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLED,
        payload: id,
    }
}

export const colorSelected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload: {
            todoId,
            color
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETED,
        payload: id,
    }
}

export const allCompleted = () => {
    return {
        type: ALLCOMPLETED,
    }
}

export const toggleAll = () => {
    return {
        type: TOGGLEALL,
    }
}

