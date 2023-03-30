import '@core/declarations'
import { IBaseModel } from '@core/database'
import { Schema, model as Model } from 'mongoose'
import bcrypt from 'bcrypt'
import { Role } from '@core/constants/roles'
import _ from 'lodash'
const ObjectId = Schema.Types.ObjectId

export enum Signin2FASettings {
  Off = 'Off',
  Email = 'Email',
  Phone = 'Phone',
  AuthenticatorApp = 'AuthenticatorApp',
}

export interface IUser extends IBaseModel {
  username?: string
  firstName?: string
  lastName?: string
  bio?: string
  links?: string[]
  email?: string
  isEmailVerified?: boolean
  phone?: string
  isMobileVerified?: boolean
  countryCode?: string
  password?: string
  country?: string
  referralCode?: string

  accountType?: Role
  business?: {
    name?: string
    businessId?: string
    location?: string
    type?: string
  }
  usedStorageInMegaBytes?: number
  verification?: {
    codeType?: string
    communicationChannel?: string
    verificationToken?: string
    isVerified?: boolean
  }
  isFirstLogin?: boolean
  lastSigninAt?: Date
  accountMetadata?: {
    isBlocked?: boolean
    unblocksAt?: Date
    customBlockMessage?: string
  }
  invalidSigninAttemptsAt?: Date[]

  signin2FASettings?: Signin2FASettings

  authenticator?: {
    isConnected?: boolean
    secret?: string
  }
  preferredCategories?: []
}

const schema = new Schema<IUser>(
  {
    username: { type: String, unique: true, sparse: true },
    firstName: { type: String, sparse: true },
    lastName: { type: String, sparse: true },

    bio: String,
    links: [String],
    email: { type: String, unique: true, sparse: true },
    isEmailVerified: { type: Boolean, default: false},
    phone: { type: String, unique: true, sparse: true },
    isMobileVerified: { type: Boolean, default: false},
    countryCode: String,
    country: String,

    password: { type: String, select: false },
    accountType: {
      type: String,
      enum: [Role.USER, Role.NFT_FOUNDER, Role.SUPER_ADMIN, Role.ADMIN],
      default: Role.USER,
    },
    business: {
      name: { type: String, sparse: true },
      businessId: { type: String },
      location: { type: String },
      type: { type: String },
    },
    preferredCategories:{
        type: [ObjectId],
        ref: "Categories"
    },
    referralCode: { type: String },
    verification: {
      type: {
        codeType: {
          type: String,
          enum: [
            'forgotPassword',
            'resetPassword',
            'email',
            'phone',
            '2FA',
            null,
          ],
        },
        communicationChannel: {
          type: String,
          enum: ['Email', 'SMS'],
        },
        verificationToken: String,
        isVerified: { type: Boolean, default: false },
      },
      _id: false,
      select: false,
    },

    isFirstLogin: { type: Boolean, default: true },
    lastSigninAt: Date,
    accountMetadata: {
      isBlocked: { type: Boolean, default: false },
      unblocksAt: Date,
      customBlockMessage: String,
    },
    invalidSigninAttemptsAt: {
      type: [Date],
      default: [],
    },

    signin2FASettings: {
      type: String,
      enum: Object.keys(Signin2FASettings),
      default: Signin2FASettings.Off,
    },

    // From Base Model
    isActive: { type: Boolean, default: true },
    _createdBy: { type: ObjectId, ref: 'User', select: false },
    _updatedBy: { type: ObjectId, ref: 'User', select: false },
  },
  {
    autoIndex: true,
    versionKey: false,
    timestamps: true,
  }
)

schema.index(
  {
    _id: 1,
    userName: 1,
  },
  { unique: true }
)

// Before Save Hook
schema.pre('save', async function () {
  // Hash password
  const { password } = this
  if (this.isModified('password')) {
    const hash = bcrypt.hashSync(password, App.Config.SALT_ROUNDS)
    this.password = hash
  }
})

/**
 * *************************************************
 *        S T A T I C   M E T H O D S
 * *************************************************
 */

// Function to check if any document exits with the given id
schema.static('findById', (value, projection = {}) => {
  return App.Models.User.findOne({ _id: value }, projection)
})

// Function to check if any document exits with the given username
schema.static('findByUsername', (username) => {
  return App.Models.User.findOne({ username })
})

// Function to check if any document exits with the given email
schema.static('findByEmail', (email) => {
  return App.Models.User.findOne({ email })
})

// Function to check if any document exits with the given phone
schema.static('findByPhone', (phone, countryCode) => {
  return App.Models.User.findOne(_.omitBy({ phone, countryCode }, _.isNil))
})

// Function to check if any document exits with the given social id
schema.static('findBySocialId', (socialId, socialProvider) => {
  return App.Models.User.findOne({ socialId, socialProvider })
})

/**
 * *************************************************
 *        I N S T A N C E   M E T H O D S
 * *************************************************
 */

// All Done
export const UserModel = Model<IUser>('User', schema)