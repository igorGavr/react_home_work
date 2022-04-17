import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services";
import {PostDetails} from "../../components";
import {Outlet} from "react-router-dom";

const SinglePostPage = () => {
    const {state} = useLocation();
    const [post, setPost] = useState(state);
    const {id} = useParams();

    useEffect(() => {
        if (!state) {
            postService.getById(id).then(({data}) => setPost(data))
        } else {
            setPost(state)
        }
    }, [id, state])
    return (
        <div>
            <div>
                {post && <PostDetails post={post}/>}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {SinglePostPage};