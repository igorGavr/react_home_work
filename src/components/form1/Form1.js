import React, {useRef} from 'react';
import css from './form1.module.css'

const Form1 = () => {

    const name = useRef()
    const age = useRef()
    const submit = (e) => {
        e.preventDefault()
        const name1 = name.current.value
        const age1 = age.current.value
        const user = {name1, age1}
        console.log(user);
    }
    return (
        <form className={css.form1} onSubmit={submit}>
            <div><label>Name : <input type="text" ref={name}/></label></div>
            <div><label>Age : <input type="number" ref={age}/></label></div>

            <button className={css.btn}>Save</button>
        </form>
    );
};

export {Form1};