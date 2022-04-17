import {useReducer} from "react";

const reducer = (state, action) => {
    state = {...state, callCount: state.callCount + 1}
  switch (action.type) {
      case 'inc' :
          return {...state, count: state.count + 1}
      case 'dec' :
          return {...state, count: state.count - 1}
      case 'reset' :
          return {...state, count: action.payload}
      default:
          return state
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0, callCount: 0});

  return (
    <div className="App">
        <div>Count: {state.count}</div>
        <div>callCount: {state.callCount}</div>
      <button onClick={() => dispatch({type: 'inc'})}>Inc</button>
      <button onClick={() => dispatch({type: 'dec'})}>Dec</button>
      <button onClick={() => dispatch({type: 'reset', payload: 0})}>Reset</button>

    </div>
  );
}

export default App;
