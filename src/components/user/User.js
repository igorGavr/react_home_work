import React from 'react';
import css from './User.module.css'

const User = ({user, setUser, setUserIdForPosts}) => {
    const {id, name, username} = user

    const click = () => {
        setUserIdForPosts(false)
        setUser(user)
    }
    return (
        <div className={css.user}>
            {id} {name} {username}
            <button onClick={click}>Show User Details</button>

        </div>
    );
};

export {User};