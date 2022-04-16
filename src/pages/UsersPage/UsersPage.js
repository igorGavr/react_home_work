import React, {useEffect, useState} from 'react';
import {userService} from "../../services";
import {User} from "../../components";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])
    return (
        <div>
            <Outlet/>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {UsersPage};