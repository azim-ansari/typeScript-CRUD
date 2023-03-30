/*eslint-disable */

declare let App: {
    Models: {
        User: any
    }
    Http: {
        app: any
    }
    Config: any
    Messages: {
        ClassValidatorMessages: {
            InvalidEmail: CallableFunction
            InvalidUsername: CallableFunction
            InvalidPassword: CallableFunction
            EmptyPassword: CallableFunction
            EmptyEmail: CallableFunction,
            PasswordRegex: CallableFunction
        }

        GeneralError: {
            SomethingWentWrong: CallableFunction
            BadRequest: CallableFunction
        }
        Helpers: {
            OTPHelper: {
                CodeSentSuccessFullyOverEmail: CallableFunction
            }
            VerifyLinkHelper: {
                ForgotPasswordSMS: CallableFunction
            }
        }
        CodeVerification: {
            Success: {
                GetSuccess: CallableFunction
                CodeSent: CallableFunction
                CodeVerified: CallableFunction
            }
            Error: {
                InvalidLink: CallableFunction
                UserNotExists: CallableFunction
                ForgotPasswordSocialAccountNotAllowed: CallableFunction
                UserEmailUpdateInSocialAccountNotAllowed: CallableFunction
                ResendLimitExceeded: CallableFunction
                ResendIsNotAvailable: CallableFunction
                SessionExpired: CallableFunction
                CodeVerificationExpired: CallableFunction
                CodeVerificationFailed: CallableFunction
                IncorrectCode: CallableFunction
                MissingRecordToVerify: CallableFunction
                AccountBlockedDueToMultipleAttempts: CallableFunction
                DisabledAccount: CallableFunction
                EmailAlreadyInUse: CallableFunction
                PhoneAlreadyInUse: CallableFunction
            }
        }
        ForgotPassword: {
            Success: {
                RequestSuccessful: CallableFunction
                ResetSuccessful: CallableFunction
                CodeSent: CallableFunction
                EmailLinkVerified: CallableFunction
                EmailLinkStatusFetchSuccess: CallableFunction
            }
            Error: {
                CodeAlreadyVerified: CallableFunction
                CodeVerificationFailed: CallableFunction
                InvalidLink: CallableFunction
            }
        }


        Signup: {
            Success: {
                SignupSuccessful: CallableFunction
            }
            Error: {
                PreSignCodeVerificationFailed: CallableFunction
                UsernameAlreadyInUse: CallableFunction
                EmailAlreadyInUse: CallableFunction
                PhoneAlreadyInUse: CallableFunction
                InvalidUsernameFormat: CallableFunction
                UsernameMinLength: CallableFunction
            }
        }
        Signin: {
            Success: {
                SigninSuccessful: CallableFunction
            }
            Error: {
                UserNotExists: CallableFunction
                IncorrectPassword: CallableFunction
                AccountBlockedDueToMultipleAttempts: CallableFunction
                DisabledAccount: CallableFunction
                PasswordSignInNotAllowedInSocialAccount: CallableFunction
            }
        }
        ProfileUpdate: {
            Success: {
                ProfileUpdateSuccessful: CallableFunction
            }
            Error: {
                UsernameAlreadyInUse: CallableFunction
                EmailAlreadyInUse: CallableFunction
                PhoneAlreadyInUse: CallableFunction
            }
        }
        ProfileUpdateSettings: {
            Success: {
                UpdateSuccessful: CallableFunction
            }
            Error: {}
        }
        User: {
            Success: {
                BlockedSuccessful: CallableFunction
                UnblockedSuccessful: CallableFunction
            }
            Error: {
                AlreadyBlocked: CallableFunction
                NotBlocked: CallableFunction
            }
        }
    }
}
declare let Logger: any

/*eslint-enable */