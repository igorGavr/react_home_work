import React from 'react';
import {Outlet, Link, NavLink} from "react-router-dom";

import css from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div >
            <div className={css.header}>
                <NavLink to={'home'}>home</NavLink>
                <NavLink to={'users'}>users</NavLink>
                <NavLink to={'posts'}>posts</NavLink>
                <NavLink to={'about'}>about</NavLink>
            </div>
            <Outlet/>


        </div>
    );
};

export {MainLayout};