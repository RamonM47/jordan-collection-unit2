import { Router } from 'express'

const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Home Page', user: req.user ? req.user : null })
})

function isLoggedIn (req,res,next) {
  if (req.isAuthenticated()) {
      return done()
  }
  res.redirect('/auth/google')
}

export {
  router
}