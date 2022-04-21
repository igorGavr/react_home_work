import { Navigate, Route, Routes } from "react-router-dom";


import { MainLayout } from "./layouts";
import {
  AboutPage,
  HomePage, LoginPage,
  NotFoundPage,
  PostsPage,
  SinglePostPage,
  SingleUserPage,
  UsersPage
} from "./pages";
import {Comments} from "./components/Comments/Comments";
import {RequireAuth} from "./hoc/RequireAuth";

const App = () => {
  return (
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'home'}/>}/>
          <Route path={'home'} element={<HomePage/>}/>
          <Route path={'users'} element={<UsersPage/>}>
            <Route path={':userId'} element={<SingleUserPage/>}>
              <Route path={'posts'} element={<PostsPage/>}/>
            </Route>
          </Route>
          <Route path={'posts'} element={<PostsPage/>}>
            <Route path={':id'} element={<SinglePostPage/>}>
              <Route path={'comments'} element={<Comments/>}/>
            </Route>
          </Route>
          <Route path={'about'} element={
            <RequireAuth>
              <AboutPage/>
            </RequireAuth>
          }/>
          <Route path={'login'} element={<LoginPage/>}/>
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Route>
      </Routes>
  );
};

export default App;