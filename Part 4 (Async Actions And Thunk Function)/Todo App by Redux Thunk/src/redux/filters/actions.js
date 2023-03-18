import { COLORCHANGED, STATUSCHANGED } from "./actionsTypes";

export const changeStatus = (status) => {
    return {
        type: STATUSCHANGED,
        payload: status
    }
}

export const changeColor = (changeType, color) => {
    console.log(changeType, color);
    return {
        type: COLORCHANGED,
        payload: {
            changeType,
            color
        }
    }
}

