import { Router } from "express"
const router = Router()
import * as jordansCtrl from '../controllers/jordans.js'

router.get('/', isLoggedIn, jordansCtrl.index)
router.get('/new', isLoggedIn, jordansCtrl.new)
router.get('/:id', isLoggedIn, jordansCtrl.show)
router.get('/:id/edit', isLoggedIn, jordansCtrl.edit)
router.put('/:id', isLoggedIn, jordansCtrl.update)
router.post('/', isLoggedIn, jordansCtrl.create)
router.delete('/:id', isLoggedIn, jordansCtrl.delete)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

export {
    router
}