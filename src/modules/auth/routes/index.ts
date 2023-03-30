import '@core/declarations'
import { Router } from 'express'
import { Wrap } from '@core/utils'
import AuthController from '../controllers'

const authController = new AuthController()
const router = Router()

router.post('/register', Wrap(authController.Register))
router.post('/verify-otp', Wrap(authController.VerifyOTP))
router.post('/login', Wrap(authController.Login))


export const authRouter = router