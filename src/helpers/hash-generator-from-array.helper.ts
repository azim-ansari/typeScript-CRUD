import '@core/declarations'
import crypto from 'crypto'
import _ from 'lodash'

class HashGeneratorFromArray {
  Generate(targetArray: string | string[]) {
    if (!_.isArray(targetArray)) {
      return null
    }

    const hash = crypto
      .createHash('md5')
      .update(_(targetArray).sort().join(':'))
      .digest('hex')
    return hash
  }
}

export default new HashGeneratorFromArray()
