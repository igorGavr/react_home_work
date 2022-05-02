import React from 'react';

import css from './Location.module.css'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {episodeActions} from "../../redux";

const Location = ({location}) => {
    const {name, type, dimension, residents} = location;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toCharacters = () => {
      navigate('/characters', {state: residents})
    }
    return (
        <div className={css.Location} onClick={toCharacters}>
            <h1> {name}</h1>
            <h2>{type}</h2>
            <h3>{dimension}</h3>

        </div>
    );
};

export {Location};