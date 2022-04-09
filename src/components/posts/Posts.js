import React, {useEffect, useState} from 'react';
import {postService} from "../../services";
import {Post} from "../post/Post";

const Posts = ({userIdForPosts}) => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        postService.getPostsById(userIdForPosts).then(({data}) => setPosts(data))
    }, [])
    return (
        <div>
            {
                posts && posts.map(post => <Post
                    key={post.id}
                    post={post}/>)
            }
        </div>
    );
};

export {Posts};