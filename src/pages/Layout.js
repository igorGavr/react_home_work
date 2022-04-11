import React from 'react';
import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <div>
                <h3>sub menu</h3>
                <ol>
                    <li><Link to={'users'}>users page</Link></li>
                    <li><Link to={'posts'}> all posts </Link></li>
                    <li><Link to={'comments'}>comments </Link></li>
                </ol>
            </div>

            <Outlet/>

        </div>
    );
};

export {Layout};