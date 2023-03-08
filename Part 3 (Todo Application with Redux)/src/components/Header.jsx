import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, allCompleted, clearCompleted } from '../redux/todos/actions';
import completeImage from "./../assets/images/double-tick.png";
import noteImage from "./../assets/images/notes.png";
import plusImage from "./../assets/images/plus.png";

const Header = () => {

    const [todo, setTodo] = useState("");

    const dispatch = useDispatch();

    const handleInput = (e) => {
        e.target.value && setTodo(e.target.value)
    }

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (todo.length) {
            dispatch(addTodo(todo));
        } else {
            alert("Write something to the input field")
        }
        setTodo("");
    }

    const completeHandler = () => {
        dispatch(allCompleted())
    }

    const cleaerHandler = () => {
        dispatch(clearCompleted())
    }

    return (
        <div>
            <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                onSubmit={handleAddTodo}
            >
                <img src={noteImage} className="w-6 h-6" alt="Add todo" />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    value={todo}
                    onChange={handleInput}
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li
                    className="flex space-x-1 cursor-pointer"
                    onClick={completeHandler}
                >
                    <img src={completeImage} className="w-4 h-4" alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer" onClick={cleaerHandler}>
                    Clear completed
                </li>
            </ul>
        </div>
    );
};

export default Header;