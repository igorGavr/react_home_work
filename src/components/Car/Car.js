import React from 'react';

const Car = ({car}) => {
    const {id, model, price, year} = car
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <hr/>

        </div>
    );
};

export {Car};