import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import {Header} from "../../components";
import css from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div>
            <div className={css.topMenu}>
                <NavLink to={'characters'}>Characters</NavLink>
                <NavLink to={'episodes'}>Episodes</NavLink>
                <NavLink to={'locations'}>Locations</NavLink>
            </div>
            <div>
                <Header/>
                <Outlet/>
            </div>

        </div>
    );
};

export {MainLayout};