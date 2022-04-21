import React, {useRef} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks";

const LoginPage = () => {
    const {state} = useLocation();
    const {logIn} = useAuth();
    const name = useRef();
    const navigate = useNavigate();
    console.log(state)

    const login = () => {
        const userName = name.current.value
        logIn(userName, () => navigate(state.pathname, {replace: true}))
    }
    return (
        <div>
            <input type="text" ref={name} placeholder={'name'}/>
            <button onClick={() => login()}>log</button>

        </div>
    );
};

export {LoginPage};