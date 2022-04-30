import React from 'react';
import {Outlet} from "react-router-dom";

import {CarForm} from "../../components";

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