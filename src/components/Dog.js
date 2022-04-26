import React from 'react';
import {useDispatch} from "react-redux";
import {dogActions} from "../redux/slices/dog.slice";

const Dog = ({dog: {id, name}}) => {
    const dispatch = useDispatch();
    const updateDog = (id) => {
      dispatch(dogActions.updateDogById({id}))
    }
    return (
        <div>
            {name} -- {id}
            <button onClick={() =>
                dispatch(dogActions.deleteById({id}))}>
                Delete</button>
            <button onClick={updateDog}>Update</button>
        </div>
    );
};

export {Dog};