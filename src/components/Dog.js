import React from 'react';
import {useDispatch} from "react-redux";
import {dogActions} from "../redux/slices/dog.slice";

const Dog = ({dog}) => {
    const {id, name} = dog
    const dispatch = useDispatch();

    return (
        <div>
            {name} -- {id}
            <button onClick={() =>
                dispatch(dogActions.deleteById({id}))}>
                Delete</button>
            <button onClick={() =>
                dispatch(dogActions.setDogForUpdate({dog}))}>
                Update</button>
        </div>
    );
};

export {Dog};