import {Route, Routes, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CharactersPage, EpisodesPage} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'episodes'}/>}/>
          <Route path={'episodes'} element={<EpisodesPage/>}/>
          <Route path={'characters'} element={<CharactersPage/>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
