import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {locationActions} from "../../redux";
import {Location} from "../Location/Location";
import css from './Locations.module.css'

const Locations = () => {
    const {locations, next, prev} = useSelector(state => state.locations);
    const [query, setQuery] = useSearchParams({page: '1'});
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(locationActions.getAll({page: query.get('page')}))
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
            <div className={css.locations}>
                {locations.map(location => <Location key={location.id} location={location}/>)}
            </div>
            <div className={css.btn}>
                <button disabled={!prev} onClick={prevPage}>Prev</button>
                <button disabled={!next} onClick={nextPage}>Next</button>
            </div>

        </div>
    );
};

export {Locations};