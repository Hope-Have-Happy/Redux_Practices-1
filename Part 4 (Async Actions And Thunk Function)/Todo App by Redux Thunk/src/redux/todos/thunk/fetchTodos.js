import { fetchTodo } from "./../actions";

const fetchTodos = async (dispatch) => {
    const response = await fetch('http://localhost:9000/todos')
    const data = await response.json();

    dispatch(fetchTodo(data))
}


export default fetchTodos;