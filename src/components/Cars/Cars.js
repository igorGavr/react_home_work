import React, {useEffect, useState} from 'react';
import {carService} from "../../services";
import {Car} from "../Car/Car";
import {set} from "react-hook-form";

const Cars = ({newCar, setCarForUpdate}) => {
    const [cars, setCars] = useState([]);

    const [deletedCarId, setDeletedCarId] = useState(null)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [newCar, deletedCarId])
    // variant 1
    // useEffect(() => {
    //     if (newCar) {
    //         setCars([...cars, newCar])
    //     }
    //     if (deletedCarId) {
    //         setCars(cars.filter(car => car.id !== deletedCarId))
    //     }
    // }, [newCar, deletedCarId])

    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car}
                                     setCarForUpdate={setCarForUpdate}
                                     setDeletedCarId={setDeletedCarId}
                />)
            }
        </div>
    );
};

export {Cars};