

import Joi from "joi"


const addMessageSchema = Joi.object({

    message: Joi.string()
    .min(4)
    .required(),

    receivedId: Joi.string()
    .length(24)
    .hex()
    .required()
})


const getMessagesSchema = Joi.object({

    userId: Joi.string()
    .length(24)
    .hex()
    .required()
    .messages({
        "string.length" : "User Id must a valid objectId",
        "any.required" : "User Id is required"
    })

})

const deleteMessageSchema = Joi.object({

    id: Joi.string()
        .length(24)
        .hex()
        .required()
        .messages({
            "string.length": "Id must be a valid objectId",
            "any.required": "Id is required"
        })

})

export {addMessageSchema,
        getMessagesSchema,
        deleteMessageSchema
}