import React from 'react';

import {Comment} from "../comment/Comment";

const Comments = ({comments}) => {

    return (
        <div>
            {
                comments && comments.map(comment => <Comment key={comment.id}
                                                             comment={comment}/>)
            }
        </div>
    );
};

export {Comments};