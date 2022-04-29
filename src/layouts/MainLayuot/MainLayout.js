import React from 'react';
import {CarForm} from "../../components";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};