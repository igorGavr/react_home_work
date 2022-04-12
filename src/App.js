import {CarForm, Cars} from "./components";
import {useState} from "react";


function App() {
    const [newCar, setNewCar] = useState(null);

    const [carForUpdate, setCarForUpdate] = useState(null)
  return (
    <div className="App">
        <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate}/>
        <hr/>
        <Cars newCar={newCar} setCarForUpdate={setCarForUpdate}/>
    </div>
  );
}

export default App;
