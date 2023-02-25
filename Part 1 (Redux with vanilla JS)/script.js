// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const resetEl = document.getElementById("reset");
const decrementEl = document.getElementById("decrement");

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

// action creators
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    };
};

const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    };
};

const reset = () => {
    return {
        type: RESET
    };
};

// initial state
const initialState = {
    value: 0,
};

// create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload,
        };
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload,
        };
    } else if (action.type === RESET) {
        return {
            ...state,
            value: 0,
        };
    }
    else {
        return state;
    }
}


// create store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};

// update UI initially
render();

store.subscribe(render);

// button click listeners
incrementEl.addEventListener("click", () => {
    store.dispatch(increment(3));
});

decrementEl.addEventListener("click", () => {
    store.dispatch(decrement(2));
});

resetEl.addEventListener("click", () => {
    store.dispatch(reset());
});
