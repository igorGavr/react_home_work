import React, {useEffect, useState} from 'react';
import {carService} from "../../services";
import {Car} from "../Car/Car";
import {set} from "react-hook-form";

const Cars = ({newCar}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    useEffect(() => {
        if (newCar) {
            setCars([...cars, newCar])
        }
    }, [newCar])
    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car} />)
            }
        </div>
    );
};

export {Cars};