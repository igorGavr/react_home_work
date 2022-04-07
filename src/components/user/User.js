import React from 'react';
import css from './User.module.css'

const User = ({user, getUserId}) => {
    const {id , name, username} = user
    return (
        <div className={css.user}>
            {id} -- {name} -- {username}
            <button onClick={() => getUserId(id)}>Details</button>
        </div>
    );
};

export {User};