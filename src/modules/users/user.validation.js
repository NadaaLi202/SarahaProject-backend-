import Joi from "joi";

const signUpSchema = Joi.object({


    name: Joi.string()
    .min(3)
    .max(30)
    .required(),

    email: Joi.string()
    .email()
    .pattern(new RegExp (/^[a-zA-Z0-9]{6,50}@(yahoo|gmail).com$/))
    .required(),


    // confirmEmail: Joi.boolean()
    // .required(),

    password: Joi.string()
    .pattern(new RegExp (/^[a-zA-Z0-9]{6,50}$/))
    .required(),

    age: Joi.number()
    .min(18)
    .max(100)
    .required()

})


const signInSchema = Joi.object({


    email: Joi.string()
    .email()
    .pattern(new RegExp (/^[a-zA-Z0-9]{6,50}@(yahoo|gmail).com$/)),

    password: Joi.string()
    .pattern(new RegExp (/^[a-zA-Z0-9]{6,50}$/))
    .required()

})

export {
    signInSchema,
    signUpSchema
}