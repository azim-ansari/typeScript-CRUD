import '@core/declarations'
import _ from "lodash"
import * as fs from 'fs'
import { Response } from 'express'
import { resolve } from 'path'

export const _registerResponders = async (response: Response) => {
    try {
        const responseDirectoryPath = resolve(`${__dirname}/../responses`)
        const responses = fs.readdirSync(responseDirectoryPath)
        for (let i = 0; i < responses.length; i++) {
            const responseFileName: string = responses[i]
            let responseFunctionName: string = responseFileName.split('.')[0]
            responseFunctionName = responseFunctionName ? _.camelCase(responseFunctionName) : null
            // eslint-disable-next-line
            const targetFunction = (require(resolve(`${responseDirectoryPath}/${responseFileName}`))).default
            if(typeof targetFunction === 'function'){
                response[responseFunctionName] = targetFunction
            }
        }
    } catch (error) {
        Logger.error(error)

    }
}