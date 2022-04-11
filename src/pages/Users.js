import React, {useEffect, useState} from 'react';
import ApiService from "../services/api.service";
import {Outlet} from "react-router-dom";
import {logDOM} from "@testing-library/react";
import {UserComponent} from "../components/UserComponent";

const Users = () => {
    const apiService = new ApiService('users');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        apiService.getAllData().then(value => setUsers(value))

    }, [])
    return (
        <div>
            {
                users.map(value => <UserComponent key={value.id} item={value}/>)
            }
            <hr/>
            <div>
                <h3>details about user</h3>
                <Outlet/>
            </div>

        </div>
    );
};

export {Users};