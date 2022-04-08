import css from './App.module.css'

import {Comments, Form2, SingleUser, Users} from "./components";
import { useState} from "react";
import {Form1} from "./components";
import {Posts} from "./components";
import {userService} from "./services";


function App() {
    const [singleUser, setSingleUser] = useState(null)

    const [posts, setPosts] = useState(null)

    const [comments, setComments] = useState(null)

    const getPosts = (id) => {
        userService.getPosts(id).then(({data}) => setPosts(data))
    }

    const getComments = (id) => {
      userService.getComments(id).then(({data}) => setComments(data))

    }

  return (
    <div className={css.main_app}>
        <div>
            { singleUser && <SingleUser user={singleUser} />}
            <Users getUser={setSingleUser}
                    getPosts={getPosts}/>
        </div>
        <div>

            {
                posts && <Posts posts={posts}
                                getComments={getComments}/>
            }
            {
                comments && <Comments comments={comments}/>
            }


        </div>
        <div>
            <Form1/>
            <Form2/>
        </div>




    </div>
  );
}

export default App;
