import css from './App.module.css'

import {Form2, SingleUser, Users} from "./components";
import { useState} from "react";
import {Form1} from "./components";


function App() {
    const [singleUser, setSingleUser] = useState(null)

  return (
    <div className={css.main_app}>
        { singleUser && <SingleUser user={singleUser} />}
        <Users getUser={setSingleUser}/>
        <Form1/>
        <Form2/>


    </div>
  );
}

export default App;
