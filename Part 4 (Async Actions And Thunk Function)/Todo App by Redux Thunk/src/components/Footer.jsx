import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, changeStatus } from './../redux/filters/actions';

const todoCount = (incompleteTodo) => {
    if (incompleteTodo === 0) {
        return "All done";
    } else if (incompleteTodo === 1) {
        return "1 task left";
    } else if (incompleteTodo > 1) {
        return `${incompleteTodo} tasks left`;
    }
};

const Footer = () => {

    const todos = useSelector(state => state.todos);
    const { colors, status } = useSelector(state => state.filter);

    const dispatch = useDispatch();

    const changStatusHandler = (status) => {
        dispatch(changeStatus(status));
    }

    const changeColorHandler = (color) => {
        if (colors.includes(color)) {
            dispatch(changeColor('removed', color));
        } else {
            dispatch(changeColor('added', color));
        }
    }

    const incompleteTodo = todos.filter(todo => !todo.completed).length;
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{todoCount(incompleteTodo)}</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${status === 'All' && 'font-bold'} `} onClick={() => changStatusHandler("All")}
                >
                    All
                </li>
                <li>|</li>
                <li className={`cursor-pointer ${status === 'Incomplete' && 'font-bold'} `} onClick={() => changStatusHandler("Incomplete")}
                >
                    Incomplete
                </li>
                <li>|</li>
                <li className={`cursor-pointer ${status === 'Complete' && 'font-bold'}`} onClick={() => changStatusHandler("Complete")}>Complete</li>
                <li></li>
                <li></li>
                <li
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'} `}
                    onClick={() => changeColorHandler('green')}
                ></li>
                <li
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'} `}
                    onClick={() => changeColorHandler('red')}
                ></li>
                <li
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'} `}
                    onClick={() => changeColorHandler('yellow')}
                ></li>
            </ul>
        </div>
    );
};

export default Footer;