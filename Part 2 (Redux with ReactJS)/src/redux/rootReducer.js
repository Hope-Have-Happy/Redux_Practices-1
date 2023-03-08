import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";

const RootReducer = combineReducers({
    counter: counterReducer,
    dyncamicCounter: dynamicCounterReducer,
})

export default RootReducer;