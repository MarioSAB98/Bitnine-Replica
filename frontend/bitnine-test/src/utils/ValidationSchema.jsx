import React from 'react'
import Joi from 'joi'

export const validateSignup = async (signupObject) => {

    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

        repeat_password: Joi.ref('password'),

        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    })


    const { error } = schema.validate(signupObject, { abortEarly: false });

    if (error) {
        return error.details;
    }

}

export const validateLogin = async (loginObject) => {

    const schema = Joi.object({

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),


        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    })


    const { error } = schema.validate(loginObject, { abortEarly: false });

    if (error) {
        return error.details;
    }

}
