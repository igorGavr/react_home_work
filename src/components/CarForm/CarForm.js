import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";


const CarForm = ({setNewCar}) => {
    // const [formError, setFormError] = useState({});

    const {register, reset, handleSubmit, formState:{errors}} = useForm({
        resolver: joiResolver(carValidator),
        mode: "all"});

    const submit = async (car) => {
        try{
            const {data} = await carService.create(car);
            console.log(data)
            setNewCar(data)
            reset()
        }catch (e) {
            // setFormError(e.response.data)
        }
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            {/*{formError.model && <span>{formError.model[0]}</span>}*/}
            <div><label>Price: <input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
            {errors.Price && <span>{errors.Price.message}</span>}
            {/*{formError.price && <span>{formError.price[0]}</span>}*/}
            <div><label>Year: <input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
            {errors.Year && <span>{errors.Year.message}</span>}
            {/*{formError.year && <span>{formError.year[0]}</span>}*/}
            <button>Save</button>
        </form>
    );
};

export {CarForm};