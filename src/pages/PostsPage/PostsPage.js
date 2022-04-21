import {useContext, useEffect, useState} from "react";
import { postService } from "../../services";
import { Post } from "../../components";
import {Outlet, useParams, useSearchParams} from "react-router-dom";
import {MyContext} from "../../index";


const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const { userId } = useParams();

    // const value = useContext(MyContext)
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        if (userId) {
            postService.getByUserId(userId).then(({ data }) => setPosts(data))
        } else {
            postService.getAll(query.get('page'), 10).then(({ data }) => setPosts(data))
        }
        // console.log(value)
        // value.age = 11
    }, [userId, query])

    const nextPage = () => {
      // let page = query.get('page');
      // page = +page + 1
      //   setQuery({page: page.toString()})
        const queryObj = Object.fromEntries(query.entries())
        queryObj.page++
        setQuery(queryObj)
    }
    return (
        <div style={{ display: 'flex' }}>
            <div>
                {
                    posts.map(post => <Post key={post.id}
                                            post={post}
                                            flag={!userId}/>)
                }
                <button onClick={() => nextPage()}>NEXT PAGE</button>
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export { PostsPage };