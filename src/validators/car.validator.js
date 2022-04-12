import Joi from "joi";

const carValidator = Joi.object({
    // model:Joi.string().min(1).max(20).required().messages({
    //     'string.empty':'model cant be empty))))',
    //     'string.min':'model may be min 1 symbol))))'
    // }),
    model: Joi.string().regex(/^[a-zA-ZА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Тільки букви мін 1 символ максимум 20'
    }),
    price:Joi.number().min(0).max(100000).required().messages({
        'number.empty':'price cant be empty))))',
        'number.min':'price may be min 1 symbol))))'
    }),
    year:Joi.number().min(1970).max(2022).required().messages({
        'number.empty':'year cant be empty))))',
        'number.min':'year is VIDRO ))))'
    })
})

export {
    carValidator
}