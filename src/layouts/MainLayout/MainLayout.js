import React from 'react';
import {Outlet, Link, NavLink, useNavigate} from "react-router-dom"
import css from './MainLayout.module.css'
import {useAuth} from "../../hooks";

const MainLayout = () => {
    const navigate = useNavigate()
    const {user, logOut} = useAuth();
    return (
        <div>
            <div className={css.header}>
                <NavLink to="home">Home</NavLink>
                <NavLink to="users">Users</NavLink>
                <NavLink to="posts" replace>Posts</NavLink>
                <NavLink to="about">About</NavLink>
                {
                    user && <h1>{user} <button onClick={()=>logOut(()=>navigate('/'))}>Log Out</button> </h1>
                }
            </div>
            <hr/>
            <div>
                <button onClick={() => navigate(-1)}>PREV</button>
                <button onClick={() => navigate(1)}>NEXT</button>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};