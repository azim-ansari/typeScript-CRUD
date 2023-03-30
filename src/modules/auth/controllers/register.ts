import '@core/declarations'
import AuthenticationService from '@helpers/generate-totp.helper'
import RequestValidator from '@helpers/request-validator.helper'
import { Request, Response} from 'express'
import RegisterDTO from '../dtos/register.dto'


export default async function _Register(req: Request, res: Response){

    //Validate the request Parameters
    const { error }  = await RequestValidator(RegisterDTO.Body, req.body)

    if (error) return res.unprocessableEntity({ error: error.message })
    

    const { userName, fullName, email, password, mobile, countryCode, country } = req.body
    const newUser = new App.Models.User({
        userName,
        fullName,
        email,
        password,
        phone: mobile,
        countryCode
    })
    await newUser.save()
    
    return res.success({
        message: App.Messages.Signup.Success.SignupSuccessful(),
        data: newUser
    })

}