import React from 'react';

const Post = ({post, getComments}) => {
    const {id, title , body} = post
    // console.log(post)
    return (
        <div>
            <div>
                {id} {title} {body}
            </div>
            <button onClick={() => getComments(id)}>Show Comments</button>
        </div>
    );
};

export {Post};