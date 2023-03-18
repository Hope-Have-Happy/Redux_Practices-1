const fetch = require('node-fetch');

// delay the action by curry function
const delayTheAction = (store) => (next) => (action) => {
    if (action.type === 'ADD_TODO') {
        console.log('Delay the action');

        setTimeout(() => {
            next(action)
        }, 2000);

        return;
    }
    return next(action);
}

// fetch the action
const fetchTodo = (store) => (next) => async (action) => {

    if (typeof action === 'function') {
        return action(store.dispatch, store.getState)
    }

    // if(action.type === 'FETCH_TODO'){

    // fetch by node-fetch
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3');

    // const data = await response.json();

    // dispatch({
    //     type: 'LOAD_TODO',
    //     payload: data
    // })

    // return;
    // }


    return next(action);
}

module.exports = { delayTheAction, fetchTodo };