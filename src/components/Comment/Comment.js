import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment
    return (
        <div>
            {postId} - {id} - {name} - {email} - {body}
        </div>
    );
};

export {Comment};