import React, {useEffect, useState} from 'react';

import css from './Users.module.css'
import {userService} from "../../services";
import {User} from "../user/User";
import {UserDetails} from "../userDetails/UserDetails";

const Users = ({getUser}) => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null);
    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])
    const getUserId = async (id) => {
        const {data} = await userService.getById(id);
        setUser(data)
    }
    return (
        <div className={css.usersMain}>
            <div className={css.users}>
                {users.map(user =>
                    <User
                        key={user.id}
                        user={user}
                        getUserId={getUserId}
                        getUser={getUser}
                    />)}
            </div>
            <div className={css.userDetails}>
                {user && <UserDetails user={user}/>}
            </div>
        </div>
    );
};

export {Users};