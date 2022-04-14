import {CarForm, Cars} from "./components";
import {useState} from "react";


function App() {
    const [newCar, setNewCar] = useState(null);

    const [updatedCar, setUpdatedCar] = useState(null);

    const [carForUpdate, setCarForUpdate] = useState(null);

  return (
    <div className="App">
        <CarForm setNewCar={setNewCar}
                 carForUpdate={carForUpdate}
                 setUpdatedCar={setUpdatedCar}
                 setCarForUpdate={setCarForUpdate}
        />
        <hr/>
        <Cars newCar={newCar}
              setCarForUpdate={setCarForUpdate}
              updatedCar={updatedCar}
        />
    </div>
  );
}

export default App;
