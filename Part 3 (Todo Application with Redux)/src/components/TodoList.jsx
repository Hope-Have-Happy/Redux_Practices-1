import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const { status, colors } = useSelector((state) => state.filter);
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {/* <!-- todo --> */}

            {
                todos
                    .filter(todo => {
                        if (status === 'All') {
                            return todo;
                        } else if (status === 'Incomplete') {
                            return !todo.completed;
                        } else if (status === 'Complete') {
                            return todo.completed;
                        }
                    })
                    .filter(todo => {
                        if (colors.length > 0) {
                            return colors.includes(todo?.color)
                        }
                        return true;
                    })
                    .map((todo) => (
                        <Todo todo={todo} key={todo.id} />
                    ))
            }
            {/* <!-- todo --> */}
        </div>

    );
};

export default TodoList;