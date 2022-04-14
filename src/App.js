import {Routes, Route, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {AboutPage, HomePage, NotFoundPage, PostsPage, UsersPage, SinglePostPage} from "./pages";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'home'}/>}/>
          <Route path={'home'} element={<HomePage/>}/>
          <Route path={'users'} element={<UsersPage/>}/>
          <Route path={'posts'} element={<PostsPage/>}>
            <Route path={':id'} element={<SinglePostPage/>}/>
          </Route>
          <Route path={'about'} element={<AboutPage/>}/>
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
