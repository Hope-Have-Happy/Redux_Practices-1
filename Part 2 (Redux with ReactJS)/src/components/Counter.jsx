import { connect } from "react-redux";
import { decrement, increment, reset } from "../redux/counter/actions";

function Counter({count, increment, decrement, reset}) {

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">From Counter Component</div>
            <div className="text-2xl font-semibold">{count || 0}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={increment}
                >
                    Increment
                </button>
                <button
                    className="bg-green-400 text-white px-3 py-2 rounded shadow"
                    onClick={reset}
                >
                    Reset
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={decrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => { 
    // ownProps is our own component's props (in our case this prop will be id )
    // console.log(ownProps);
    return {
        count: state.value,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        increment:(value)=>{ dispatch(increment(value))},
        decrement:(value)=>{ dispatch(decrement(value))},
        reset:()=>{ dispatch(reset())},
    }
}

// connecting component with the {connect} method from 'react-redux' is an old scholl way.(It was for the class components)

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
