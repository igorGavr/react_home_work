import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";


import {characterService} from "../../services";
import {Character} from "../Character/Character";
import css from './Characters.module.css'


const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const {state} = useLocation();
    console.log(state)

    useEffect(() => {
        characterService.getByCharacterList(state).then(({data}) => setCharacters(data))
    }, [])

    return (
        <div >
            <div className={css.characters}>
                {characters.map(item => <Character key={item.id} character={item}/>)}
            </div>
        </div>
    );
};

export {Characters};