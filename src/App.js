import {Counter, Users} from "./components";
import {UserForm} from "./components/UserForm";
import {Dogs} from "./components/Dogs";
import {Connect} from "react-redux";
import {Cats} from "./components/Cats";
import {DogForm} from "./components/DogForm";
import {CatForm} from "./components/CatForm";


function App() {
  return (
    <div >
      {/*<Counter/>*/}
      {/*  <UserForm/>*/}
      {/*  <Users/>*/}
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <DogForm/>
            <CatForm/>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Dogs/>
            <Cats/>
        </div>

    </div>
  );
}

export default App;
