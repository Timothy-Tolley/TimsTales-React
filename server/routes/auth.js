const express = require('express')
// const verifyJwt = require('express-jwt')
const bodyParser = require('body-parser')

const auth = require('../lib/auth')

const router = express.Router()
router.use(bodyParser.json())

router.post('/signin',
  signIn,
  auth.issueJwt
)

function signIn (req, res, next) {
  const user = req.body.username
  const pass = req.body.password
  if (user === process.env.NOT_A_USERNAME && pass === process.env.NOT_A_PASSWORD) {
    next()
  } else {
    invalidCredentials(res)
  }
}

function invalidCredentials (res) {
  res.status(400).send({
    errorType: 'INVALID_CREDENTIALS'
  })
}

// express-jwt middleware lets us use a function as the secret,
// so we can grab from wherever...
// function getSecret (req, payload, done) {
//   done(null, process.env.JWT_SECRET)
// }

// // Protect all routes beneath this point
// router.use(
//   verifyJwt({
//     secret: getSecret
//   }),
//   auth.handleError
// )

// // These routes are protected
// router.get('/addPost', (req, res) => {
//   res.json({

//   })
// })

module.exports = router
