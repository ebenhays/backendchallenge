class BaseException extends Error {
  constructor(code, message, actualError = null) {
    super(message)
    this.type = 'generic'
    this.message = message
    this.code = code
    this.errors = actualError == null ? [] : [actualError]
  }
}

class AxiosServiceException extends BaseException {
  constructor(code, message, statusCode, actualError) {
    super(code, message, actualError)
    this.type = 'service'
    this.status_code = statusCode
  }
}

class ApplicationResponseException extends Error {
  constructor(errorCode, message, statusCode, actualError = null) {
    super(message)
    this.name = 'ApplicationResponseException'
    if (statusCode) this.statusCode = statusCode
    if (errorCode) this.errorCode = errorCode
    if (actualError) this.actualError = actualError
  }
}

module.exports = {
  ApplicationResponseException,
  AxiosServiceException,
}
