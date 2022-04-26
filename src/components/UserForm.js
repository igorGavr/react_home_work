import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../redux/slices/user.slice";

const UserForm = () => {
    const nameInput = useRef();
    const dispatch = useDispatch();
    return (
        <div>
            <input type="text" ref={nameInput}/>
            <button onClick={()=> dispatch(userActions.add({name: nameInput.current.value}))}>Add</button>
        </div>
    );
};

export {UserForm};