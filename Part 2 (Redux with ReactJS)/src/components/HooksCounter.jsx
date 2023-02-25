import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/counter/actions";

export default function Counter() {

    const count = useSelector(state=>state.value);
    const dispatch = useDispatch();

    const incrementHandler = (value)=>{
        return dispatch(increment(value))
    }
    const decrementHandler = (value)=>{
        return dispatch(decrement(value))
    }
    const resetHandler = ()=>{
        return dispatch(reset())
    }
    
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">From Counter Component</div>
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>incrementHandler(1)}
                >
                    Increment
                </button>
                <button
                    className="bg-green-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>resetHandler()}
                >
                    Reset
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>decrementHandler(1)}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}