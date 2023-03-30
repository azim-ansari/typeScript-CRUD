import * as SpeakEasy from 'speakeasy'
import * as QRCode from 'qrcode'
import {Response} from 'express'

export default class AuthenticationService {
    public async respondWithQRCode(data: string, res: Response) {
        QRCode.toFileStream(res, data);
      }
    public async Generate2FACode(){
        const secretCode = SpeakEasy.generateSecret({
            name: "Moonzii"
        })
        
        const qr = await QRCode.toDataURL(secretCode.otpauth_url)
        
        
        return {
            otpauthUrl : secretCode.otpauth_url,
            base32: secretCode.base32,
            qr
        }
    }
    public async VerifyOTP(secret: string, token: string){
        const isVerified = SpeakEasy.totp.verify({secret, encoding: 'base32', token })
        return isVerified
    }
}