const { checkSchema, validationResult } = require('express-validator')
function callbackFunction(req, res, next) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    console.debug(JSON.stringify(errors.array())),
      {
        reqId: req.reqId,
      }

    return res.status(422).json({ errors: errors.array() })
  }
  next()
}

exports.repos = [
  checkSchema({
    limit: {
      in: ['query'],
      trim: true,
      escape: true,
      notEmpty: true,
      isInt: true,
      isIn: {
        options: [[10, 50, 100]],
      },
      errorMessage: 'page limit is required. possible values[10,50,100]',
    },
  }),
  callbackFunction,
]

exports.reposByDate = [
  checkSchema({
    createdDate: {
      in: ['query'],
      trim: true,
      escape: true,
      notEmpty: true,
      isDate: true,
      errorMessage: 'created date is required.',
    },
  }),
  callbackFunction,
]
