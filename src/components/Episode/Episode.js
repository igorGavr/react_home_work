import React from 'react';

const Episode = ({episode: {name, air_date, episode}}) => {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{air_date}</h2>
            <h3>{episode}</h3>
        </div>
    );
};

export {Episode};