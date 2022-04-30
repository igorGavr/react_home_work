import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {carService} from "../../services";
import {CarDetails} from "../../components";


const SingleCarPage = () => {
    const [car, setCar] = useState(null);
    const { state } = useLocation();
    const { carId } = useParams();

    useEffect(() => {
        if (state) {
            setCar(state);
        } else {
            carService.getById(carId).then(({data}) => setCar(data));
        }
    }, []);

    return (
        <div>
            {
                car && <CarDetails key={car.id} car={car}/>
            }
        </div>
    );
};

export {SingleCarPage};