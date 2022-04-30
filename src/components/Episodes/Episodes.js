import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {Episode} from "../Episode/Episode";
import {episodeActions} from "../../redux";


const Episodes = () => {
    const {episodes, next, prev} = useSelector(state => state.episodes);
    const [query, setQuery] = useSearchParams({page: '1'});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(episodeActions.getAll({page: query.get('page')}))
    }, [query])

    const nextPage = () => {
        const nextPage = +query.get('page') + 1;
        setQuery({page: `${nextPage}`})
    }
    const prevPage = () => {
        const prevPage = +query.get('page') - 1;
        setQuery({page: `${prevPage}`})
    }
    return (
        <div>
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            <button disabled={!prev} onClick={prevPage}>Prev</button>
            <button disabled={!next} onClick={nextPage}>Next</button>

        </div>
    );
};

export {Episodes};