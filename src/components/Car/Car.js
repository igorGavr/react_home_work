import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car, car: {id, model, price, year}}) => {
    const dispatch = useDispatch();

    const deleteById = async () => {
      await dispatch(carActions.deleteByIdAsync({id}))
    }
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{width: '300px'}}>{id} -- {model} -- {price} -- {year}</div>
            <button onClick={deleteById}>Delete</button>
            <button onClick={() => dispatch(carActions.setCarForUpdate({car}))}>Update</button>
        </div>
    );
};

export {Car};