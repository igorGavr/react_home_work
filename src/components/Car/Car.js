import React from 'react';
import {carService} from "../../services";

const Car = ({car, setCarForUpdate}) => {
    const {id, model, price, year} = car
    const deleteCar = async () => {
        await carService.deleteById(id)
    }
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => deleteCar()}>Delete</button>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <hr/>

        </div>
    );
};

export {Car};