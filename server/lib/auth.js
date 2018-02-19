const jwt = require('jsonwebtoken')

function createToken (secret) {
  return jwt.sign({
    username: process.env.username
  }, secret, {
    expiresIn: '1d'
  })
}

function handleError (err, req, res, next) {
  if (err) {
    return res.status(403).json({
      message: 'Access to this resource was denied.',
      error: err.message
    })
  }
  next()
}

function issueJwt (req, res, next) {
  const token = createToken(process.env.JWT_SECRET)
  res.json({
    message: 'Authentication successful.',
    token
  })
}

module.exports = {
  handleError,
  issueJwt
}
