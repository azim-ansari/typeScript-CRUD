import Joi from 'joi'

export default {
    Body: Joi.object().keys({
        email: Joi.string()
        .required()
        .email()
        .messages({
                'any.required': App.Messages.ClassValidatorMessages.EmptyEmail(),
                'string.email': App.Messages.ClassValidatorMessages.InvalidEmail()
        }),
        password: Joi.string()
        .required()
        .min(8)
        .pattern(new RegExp(App.Messages.ClassValidatorMessages.PasswordRegex()))
        .messages({
                "string.pattern.base": App.Messages.ClassValidatorMessages.InvalidPassword(),
                "any.required": App.Messages.ClassValidatorMessages.EmptyPassword(),
                "string.min": App.Messages.ClassValidatorMessages.InvalidPassword(),

        }),
        username: Joi.string()
        .alphanum()
        .required()
        .min(3)
        .messages({
            'string.alphanum': App.Messages.Signup.Error.InvalidUsernameFormat(),
            'any.required': App.Messages.Signup.Error.UsernameAlreadyInUse(),
            'string.min': App.Messages.Signup.Error.UsernameMinLength()
        })
    })
}