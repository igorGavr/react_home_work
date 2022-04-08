import React, {useState} from 'react';

import css from './form2.module.css'

const Form2 = () => {
    const [info, setInfo] = useState({});
    const getInfo = (e) => {
        setInfo({...info, [e.target.name]: e.target.value})
    }
    return (
        <div className={css.form2}>
            <div><label>Job :<input type="text"
                                    name={'job'}
                                    onChange={getInfo}
            /></label></div>
            <div><label>Kids :<input type="text"
                                     name={'kids'}
                                     onChange={getInfo}
            /></label></div>
            {JSON.stringify(info)}
        </div>
    );
};

export {Form2};