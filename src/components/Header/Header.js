import React from 'react';

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.header}>
            {<h1>Rick and Morty</h1>}
        </div>
    );
};

export {Header};