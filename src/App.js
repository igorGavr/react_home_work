import {Test} from "./components/Test";
import {useEffect, useState} from "react";


function App() {
    console.log('constructor')

    const [flag, setFlag] = useState(true);

    useEffect(() => {
        console.log('componentDidMount - тобто компонент повністю прогрузився')
    }, [])
    useEffect(() => {
        console.log('componentDidUpdate')
    }, [flag])
  return (
    <div className="App">
        {console.log('render')}
        {/*{flag && <Test b={23}/>}*/}
        <button onClick={() => setFlag(!flag)}>Hide</button>
    </div>
  );
}

export default App;
