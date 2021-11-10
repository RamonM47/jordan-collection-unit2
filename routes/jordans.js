import { Router } from "express"
const router = Router()
import * as jordansCtrl from '../controllers/jordans.js'

router.get('/', jordansCtrl.index)
router.post('/', jordansCtrl.create)
router.get('/new', jordansCtrl.new)
router.get('/:id', jordansCtrl.show)
router.delete('/:id', jordansCtrl.delete)


export {
    router
}