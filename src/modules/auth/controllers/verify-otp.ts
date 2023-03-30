import AuthenticationService from '@helpers/generate-totp.helper'
import { Request, Response } from 'express'

export default async function _VerifyOTP(req: Request, res: Response){

    const { otp, otpType, phone, countryCode, email, isAuthenticator, token } = req.body
    let existingUser = null
    let isVerified=false

    if(phone && countryCode){
        existingUser = await App.Models.User.findOne({ phone, countryCode }) 
    }
    if(email){
        existingUser = await App.Models.User.findOne({ email}) 
    }
    if(!existingUser) return res.notFound()

    if(isAuthenticator){
        const auth = new AuthenticationService()
        isVerified = await auth.VerifyOTP("HFGXWY3LN5YFA4DWLAQTI4RXOBESU4COLUWDQVDYONUFCRK2GAUQ", token)

    }
    console.log(isVerified)
    return res.success({ message: 'OTP verified successfully.', item:{ isValidOTP: isVerified } })
}