import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {userService} from "../../services";
import {User} from "../../components";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])
    return (
        <div>
            <div>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
            <div><Outlet/></div>

        </div>
    );
};

export {UsersPage};