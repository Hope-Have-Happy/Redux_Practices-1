const fetch = require('node-fetch');

const fetchData = async (dispatch, getState) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3');

    const data = await response.json();

    dispatch({
        type: 'LOAD_TODO',
        payload: data
    })

    return;
}

module.exports = { fetchData };