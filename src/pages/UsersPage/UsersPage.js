import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { userService } from '../../services';
import { Loading, User } from '../../components';
import css from './UsersPage.module.css'

const UsersPage = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(({ data }) => setUsers(data));
    }, [])

    return (
        <div className={css.wrapper}>
            <div className={css.users}>
                {
                    users
                        ? users.map((user) => <User key={user.id} user={user}/>)
                        : <Loading/>
                }
            </div>
            <Outlet/>
        </div>
    );
};

export { UsersPage };