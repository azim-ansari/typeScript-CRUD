import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'

function formatErrors(errors, previousProperty = '', result = []) {
  errors.map((e) => {
    if (e.constraints) {
      result.push({
        property: previousProperty + e.property,
        constraints: e.constraints,
      })
    } else if (e.children) {
      formatErrors(e.children, previousProperty + e.property + '.', result)
    }
  })
  return result
}

// const RequestValidator = async (
//   DTOClass: any,
//   requestProperties: any
// ): Promise<any> => {
//   const requestInput = plainToInstance(DTOClass, requestProperties)
//   const validationErrors = await validate(requestInput)
//   if (validationErrors.length > 0) {
//     return formatErrors(validationErrors)
//   }
//   return null
// }
export const RequestValidator =  async(DTO: any, data = {}) => {
	const validationResult = await DTO.validate(data)
	if (validationResult.error) {
		const errors = []
		for (let i = 0; i < validationResult?.error?.details?.length; i++) {
			// eslint-disable-next-line security/detect-object-injection
			errors.push(validationResult.error.details[i].message)
		}
		validationResult.errors = errors
	}
	return validationResult
}
export default RequestValidator