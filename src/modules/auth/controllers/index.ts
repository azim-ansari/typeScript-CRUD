import '@core/declarations'
import _Register from '../controllers/register'
import _VerifyOTP from './verify-otp'
import _Login from './login'

export default class AuthController {
    Register = _Register
    VerifyOTP=_VerifyOTP
    Login = _Login
}