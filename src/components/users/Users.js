import React, {useEffect, useState} from 'react';
import {userService} from "../../services";
import {User} from "../user/User";

const Users = ({setUser, setUserIdForPosts}) => {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            {
                users
                    ? users.map(user => <User key={user.id}
                                              user={user}
                                              setUser={setUser}
                                              setUserIdForPosts={setUserIdForPosts}
                                />)
                    : 'Loading...'
            }
        </div>
    );
};

export {Users};
