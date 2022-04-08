import React from 'react';

import css from './Single.module.css'

const SingleUser = ({user}) => {
    const {id} = user
    return (
        <div className={css.singleUser}>
            ID - {id}
        </div>
    );
};

export {SingleUser};