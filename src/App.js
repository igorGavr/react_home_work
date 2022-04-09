import css from './App.module.css'
import {Posts, UserDetails, Users} from "./components";
import {useState} from "react";


function App() {
    const [user, setUser] = useState(null)

    const [userIdForPosts, setUserIdForPosts] = useState(null)
  return (
    <div className={css.main_app}>
       <div>
           <Users setUser={setUser} setUserIdForPosts={setUserIdForPosts}/>
           {user && <UserDetails user={user}
                                 setUserIdForPosts={setUserIdForPosts}/>}
       </div>
       {userIdForPosts && <Posts userIdForPosts={userIdForPosts}/>}
    </div>
  );
}

export default App;
