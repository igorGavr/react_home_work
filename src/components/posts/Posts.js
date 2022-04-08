import React from 'react';
import {Post} from "../post/Post";

const Posts = ({posts, getComments}) => {
    return (
        <div>
            {!posts && <h1>loading</h1>}
            { posts && posts.map(post => <Post key={post.id}
                                               post={post}
                                               getComments={getComments}/>)
            }
        </div>
    );
};

export {Posts};