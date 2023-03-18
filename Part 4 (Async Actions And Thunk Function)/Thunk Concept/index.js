const { createStore, applyMiddleware } = require("redux");
const { delayTheAction, fetchTodo } = require("./middleware");
const { fetchData } = require("./utility");

// initial state 
const initialState = {
    todos: []
};


// reducer
const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        title: action.payload
                    }
                ]
            };

        case 'LOAD_TODO':
            return {
                ...state,
                todos: [...state.todos, ...action.payload]
            }

        default:
            return state;
    }
}

// store
const store = createStore(todoReducer, applyMiddleware(delayTheAction, fetchTodo));


// subscribe to state changes
store.subscribe(() => {
    console.log(store.getState());
});

// dispatch actions
// store.dispatch({
//     type: 'ADD_TODO',
//     payload: 'Learn Redux'
// });

// store.dispatch({
//     type: 'FETCH_TODO',
// });
store.dispatch(fetchData);