import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {dogActions} from "../redux/slices/dog.slice";

const DogForm = () => {
    const nameInput = useRef();
    const dispatch = useDispatch();
    return (
        <div>
            <input type="text" ref={nameInput}/>
            <button onClick={()=> dispatch(dogActions.add({name: nameInput.current.value}))}> Add</button>
        </div>
    );
};

export {DogForm};