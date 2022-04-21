import React from 'react';
import {Outlet, Link, NavLink, useNavigate} from "react-router-dom"
import css from './MainLayout.module.css'

const MainLayout = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className={css.header}>
                <NavLink to="home">Home</NavLink>
                <NavLink to="users">Users</NavLink>
                <NavLink to="posts" replace>Posts</NavLink>
                <NavLink to="about">About</NavLink>
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