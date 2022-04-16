import {useRoutes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {AboutPage, HomePage, NotFoundPage, PostsPage, UsersPage} from "./pages";
import {UserDetails} from "./components";
import {A} from "./components/A/A";
import {createContext} from "react";

export let MyContext = createContext('default')

function App() {
  let routes = [
    {
      path : '/',
      element: <MainLayout/>,
      children: [
        {element : <HomePage/>, path: 'home'},
        {
          element : <UsersPage/>,
          path: 'users',
          children: [
            {element : <UserDetails/>, path: ':id'}
          ]
        },
        {element : <PostsPage/>, path: 'posts'},
        {element : <AboutPage/>, path: 'about'},
        {element : <NotFoundPage/>, path: '*'},
      ]
    }
  ]
  let element = useRoutes(routes)

  return (
    <div className="App">

      {element}

      App component
      <MyContext.Provider value={'some info'}>
        <A/>
      </MyContext.Provider>

    </div>
  );
}

export default App;
