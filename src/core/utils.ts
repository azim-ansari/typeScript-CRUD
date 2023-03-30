import '@core/declarations'
import { Request, Response, NextFunction } from 'express'
import * as fs from 'fs'
import path from 'path'
import ejs from 'ejs'

export const FileExistsSync = (FilePath: string) => {
    return fs.existsSync(`${FilePath}.js`) || fs.existsSync(`${FilePath}.ts`)
}

export function Wrap(controller: CallableFunction) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await controller(req, res, next)
      } catch (error) {
        Logger.error(error)
        return res.internalServerError({ errors: error?.message })
      }
    }
}

export function GenerateOTP(length: number) {
  let result = ""
  const characters = "123456789"
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export function GenerateRandomStringOfLength(length: number) {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export function GenerateHashFrom(params: any) {
  if (!Array.isArray(params)) {
    params = [params]
  }

  params = params
    .filter((e: any) => e != undefined || e != null)
    .sort()
    .map((e: any) => e.toString())
    .join('-')
  // return Crypto.createHash('sha256').update(params.toString()).digest('hex')
}

export const GetPackageJson = () => {
  const packageJson = fs
    .readFileSync(path.resolve(__dirname, '../../package.json'))
    .toString()
  return JSON.parse(packageJson)
}
export function GenerateCallableMessages(_Messages: any) {
  const Messages: { [key: string]: any } = {}

  function _GenerateCallableMessages(
    target: any,
    values: { [key: string]: any }
  ) {
    try {
      for (const key in values) {
        if (typeof values[key] == 'string') {
          target[key] = (params: { [key: string]: string }) => {
            return ejs.render(values[key], params)
          }
        } else {
          target[key] = {}
          _GenerateCallableMessages(target[key], values[key])
        }
      }
    } catch (error) {
      Logger.error(error)
    }
  }

  _GenerateCallableMessages(Messages, _Messages)
  return Messages
}