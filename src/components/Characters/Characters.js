import React, {useEffect, useState} from 'react';
import {useLocation, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {characterService} from "../../services";
import {Character} from "../Character/Character";
import css from './Characters.module.css'
import {characterActions} from "../../redux/slices/character.slice";




const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const {state} = useLocation();
    const {allCharacters, next, prev}= useSelector(state => state.characters);
    const [query, setQuery] = useSearchParams({page: '1'});
    const dispatch = useDispatch();

    console.log(allCharacters, characters)

    useEffect(() => {
        if (state) {
            characterService.getByCharacterList(state).then(({data}) => setCharacters(data))
        }else {
            dispatch(characterActions.getAll({page: query.get('page')}))

            console.log(characters)
        }
        setCharacters(allCharacters)
    }, [query, state])

    const nextPage = () => {
        const nextPage = +query.get('page') + 1;
        setQuery({page: `${nextPage}`})
    }
    const prevPage = () => {
        const prevPage = +query.get('page') - 1;
        setQuery({page: `${prevPage}`})
    }

    return (
        <div >
            <div className={css.characters}>
                {characters.map(item => <Character key={item.id} character={item}/>)}
            </div>

            <div>
                <button disabled={!prev} onClick={prevPage}>Prev</button>
                <button disabled={!next} onClick={nextPage}>Next</button>
            </div>
        </div>
    );
};

export {Characters};