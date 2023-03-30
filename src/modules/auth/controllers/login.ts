import '@core/declarations'
import { Request, Response } from "express"
import bcrypt from 'bcrypt'
import RequestValidator from '@helpers/request-validator.helper'
import LoginDTO from '../dtos/login.dto'


export default async function _Login(req: Request, res: Response){
    //Validate the request params
    const { email, password } = req.body
    const { error } =  await RequestValidator(LoginDTO.Body, req.body)
    if(error) return res.unprocessableEntity({ error: error?.message })

    let existingUser = null

    existingUser = await App.Models.User.findOne({ email })
    if(!existingUser) return res.notFound({ message: App.Messages.Signin.Error.UserNotExists() })

    //Match the user password
    if((!await bcrypt.compare(password, existingUser?.password))){

        //Incorrect Password Attempts
        existingUser.signinAttempts.push(Date.now())

        return res.badRequest({ message: App.Messages.Signin.Error.IncorrectPassword() })
    }
    existingUser.toObject()
    delete existingUser?.password
    return res.success({ Message: App.Messages.Signin.Success.SigninSuccessful(), data: existingUser })


    
}