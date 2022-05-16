import {Route, Routes, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CharactersPage, EpisodesPage, LocationsPage} from "./pages";
import {HomePage} from "./pages/HomePage/HomePage";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'home'}/>}/>
                    <Route path={'home'} element={<HomePage/>}/>
                    <Route path={'episodes'} element={<EpisodesPage/>}/>
                    <Route path={'characters'} element={<CharactersPage/>}/>
                    <Route path={'locations'} element={<LocationsPage/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
