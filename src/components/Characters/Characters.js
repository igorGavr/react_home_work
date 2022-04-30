import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {characterService} from "../../services";
import {Character} from "../Character/Character";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const {state} = useLocation();

    useEffect(() => {
        characterService.getByCharacterList(state).then(({data}) => setCharacters(data))
    }, [])
    return (
        <div>
            {characters.map(item => <Character key={item.id} character={item}/>)}

        </div>
    );
};

export {Characters};