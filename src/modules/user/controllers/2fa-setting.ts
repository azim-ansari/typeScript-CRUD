import '@core/declarations'
import { Request, Response } from 'express'
import AuthenticationService from '@helpers/generate-totp.helper'


export default async function _TwoFactorAuthenticationSetting(req: Request, res: Response){
    const { userId } = req.body
    const AuthService = new AuthenticationService()
    const userData = await App.Models.User.findById(userId)
    const generateSecret = await AuthService.Generate2FACode()
    if(generateSecret){
        const qr = await AuthService.respondWithQRCode(generateSecret.otpauthUrl, res)
        console.log(qr)
    }
    if(generateSecret && !userData?.authenticator?.isConnected){
        userData.authenticator.isConnected = true
        userData.authenticator.secret = generateSecret.base32
        await userData.save()
        return res.success({ item: userData })
    }
    return res.success({ message: "2FA is already enabled.", item: generateSecret})

}