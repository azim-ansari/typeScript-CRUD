import Joi from "joi"
import '@core/declarations'

export default {
  Body: Joi.object().keys({
    email: Joi.string()
      .email()
      .required()
      .messages({
        "string.email": App.Messages.ClassValidatorMessages.InvalidEmail(),
        "any.required": App.Messages.ClassValidatorMessages.EmptyEmail(),
      }),
    password: Joi.string()
      .required()
      .min(8)
      .pattern(new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/))
      .messages({
        "string.pattern.base": App.Messages.ClassValidatorMessages.InvalidPassword(),
        "any.required": App.Messages.ClassValidatorMessages.EmptyPassword(),
        "string.min": App.Messages.ClassValidatorMessages.InvalidPassword(),

      })

  }),
}