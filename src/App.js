
import {useDispatch, useSelector} from "react-redux";

const App = () => {
  let state = useSelector(state => state);
  let dispatch = useDispatch();


  return (
      <div>
        <h1>state is - {state}</h1>

        <button onClick={() => {
          dispatch({type: 'INC', payload: 1});
        }}>increment
        </button>
        <button onClick={() => {
          dispatch({type: 'DEC', payload: 1});
        }}>decrement
        </button>
        <button onClick={() => {
          dispatch({type: 'RESET', payload: 0});

        }}>reset
        </button>

      </div>
  );
};

export default App;