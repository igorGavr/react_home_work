import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadUsers} from "../../redux/actions";

const Users = () => {
    const defaultRootState = useSelector(state => state.usersState);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
                    .then(value => value.json())
                    .then(value => {
                        loadUsers(value, dispatch);
                    })
    }, [])
    return (
        <div>
            {
                defaultRootState.map(value =>
                    <div key={value.id}>
                        {value.id} -
                        {value.name} -
                        {value.username}
                    </div>)
            }
        </div>
    );
};

export {Users};