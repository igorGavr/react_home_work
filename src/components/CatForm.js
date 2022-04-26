import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {catActions} from "../redux/slices/cat.slice";

const CatForm = () => {
    const nameInput = useRef();
    const dispatch = useDispatch();
    return (
        <div>
            <input type="text" ref={nameInput}/>
            <button onClick={() => dispatch(catActions.add({name: nameInput.current.value}))}>Add</button>
        </div>
    );
};

export {CatForm};