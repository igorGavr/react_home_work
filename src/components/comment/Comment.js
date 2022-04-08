import React from 'react';

const Comment = ({comment}) => {
    const {id, name, email} = comment
    return (
        <div>
            {id} {name} {email}
        </div>
    );
};

export {Comment};