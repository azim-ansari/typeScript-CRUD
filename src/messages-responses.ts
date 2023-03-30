const Messages = {
    ClassValidatorMessages: {
      InvalidEmail: 'Please enter the email address in a valid format.',
      InvalidUsername: 'Please enter the username in a valid format.',
      InvalidPassword:
        'The password should have min 8 characters ( 1 numeric, 1 special character(@, !), and 1 caps letter).',
      EmptyPassword: 'Password is required.',
      EmptyEmail: 'Email is required.',
      PasswordRegex: '/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/'
    },
  
    GeneralError: {
      SomethingWentWrong: 'Something went wrong.',
      BadRequest: 'Bad Request',
    },
    Helpers: {
      OTPHelper: {
        CodeSentSuccessFullyOverEmail:
          'This is your One Time Password: <%=OTP%> from <%=BrandName%>.',
      },
      VerifyLinkHelper: {
        ForgotPasswordSMS: 'Link <%=verifyLink%> from <%=BrandName%>.',
      },
    },
    CodeVerification: {
      Success: {
        GetSuccess: 'Verification status fetched successfully.',
        CodeSent: 'Verification <%=type%> has been sent to your <%=to%>.',
        CodeVerified: 'Verification code verified successfully.',
      },
      Error: {
        InvalidLink: 'Invalid Link!',
        UserNotExists: 'Sorry, we could not find your account.',
        ForgotPasswordSocialAccountNotAllowed:
          'Your account is created with Social Signup, please try with Social Login!',
        UserEmailUpdateInSocialAccountNotAllowed:
          "Your account is created with Social Signup, can't update email!",
        ResendLimitExceeded:
          'You have exceeded the limits, please try again in some time.',
        ResendIsNotAvailable: 'Resend is not available at this time',
        SessionExpired: 'This session has expired!',
        CodeVerificationExpired: 'Verification <%=type%> has expired.',
        CodeVerificationFailed: 'OTP Invalid!',
        IncorrectCode:
          'The verification code password is incorrect. Please try again',
        MissingRecordToVerify: 'No record found for verification.',
        AccountBlockedDueToMultipleAttempts:
          'Your account has been blocked for <%=timeLeftToUnblock%>. Please try again later.',
        DisabledAccount: 'Your account has been disabled.',
        EmailAlreadyInUse: 'Email is already in use.',
        PhoneAlreadyInUse: 'Phone is already in use.',
      },
    },
    ForgotPassword: {
      Success: {
        RequestSuccessful: 'Password reset initialization successful.',
        ResetSuccessful: 'Password reset successful.',
        CodeSent: 'Verification code sent successfully.',
        EmailLinkVerified: 'Email link verified successfully.',
        EmailLinkStatusFetchSuccess: 'Email link status fetched successfully.',
      },
      Error: {
        CodeAlreadyVerified: 'Already verified!',
        CodeVerificationFailed:
          'Reset password code did not pass the verification.',
        InvalidLink: 'Invalid Link.',
      },
    },
    Signup: {
      Success: {
        SignupSuccessful: 'Account created successfully.',
      },
      Error: {
        PreSignCodeVerificationFailed: 'Code verification failed.',
        UsernameAlreadyInUse: 'Username is not available.',
        EmailAlreadyInUse:
          'This email address already exists, please try logging in',
        PhoneAlreadyInUse:
          'This phone number already exists, Please try logging in.',
        UsernameMinLength: 'Username must be longer than 3 characters.',
        InvalidUsernameFormat: 'Username must contain alpha numeric value.'
      },
    },
    Signin: {
      Success: {
        SigninSuccessful: 'Signin Successful.',
      },
      Error: {
        UserNotExists: "User doesn't exist, Please Sign Up.",
        IncorrectPassword: 'The entered credentials are wrong, Please try again.',
        AccountBlockedDueToMultipleAttempts:
          'Due to multiple wrong attempts you are not allowed to log in for <%=timeLeftToUnblock%>.',
        DisabledAccount: 'Your account has been disabled.',
        PasswordSignInNotAllowedInSocialAccount:
          'Your account is created with Social Signup, please try with Social Login!',
      },
    },
    ProfileUpdate: {
      Success: {
        ProfileUpdateSuccessful: 'Profile Updated Successful.',
      },
      Error: {
        UsernameAlreadyInUse: 'Username is already in use.',
        EmailAlreadyInUse: 'Email is already in use.',
        PhoneAlreadyInUse: 'Phone is already in use.',
      },
    },
    ProfileUpdateSettings: {
      Success: {
        UpdateSuccessful: 'Settings updated successful.',
      },
      Error: {},
    },
    User: {
      Success: {
        BlockedSuccessful: 'User blocked Successful.',
        UnblockedSuccessful: 'User unblocked Successful.',
      },
      Error: {
        AlreadyBlocked: 'User is already blocked.',
        NotBlocked: 'User is not blocked.',
      },
    },
  }
  export default Messages