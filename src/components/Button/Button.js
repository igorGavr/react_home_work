import React from 'react';
import {Link} from "react-router-dom";

import css from './Button.module.css'

const Button = ({to, state, children, ...arg}) => {
    return (
        <Link to={to} state={state}>
            <button className={css.button} {...arg}>{children}</button>
        </Link>
    );
};

export {Button};