import css from './App.module.css'

import { Users, SingleUser} from "./components";


function App() {
    
  return (
    <div className={css.main_app}>
      <SingleUser/>
      <Users/>



    </div>
  );
}

export default App;
