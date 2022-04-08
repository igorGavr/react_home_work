import React from 'react';

const SingleUser = ({user}) => {
    const {id, name , username} = user
    return (
        <div>
            ID - {id}  Name - {name} Username - {username}
        </div>
    );
};

export {SingleUser};