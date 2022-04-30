import React from 'react';

import css from './episode.module.css'

const Episode = ({episode: {name, air_date, episode}}) => {
    return (
        <div className={css.Episode}>
            <h1>{name}</h1>
            <h2>{air_date}</h2>
            <h3>{episode}</h3>
        </div>
    );
};

export {Episode};