import { Router } from "express"
const router = Router()
import * as jordansCtrl from '../controllers/jordans.js'

router.get('/', jordansCtrl.index)
router.get('/new', jordansCtrl.new)
router.get('/:id', jordansCtrl.show)
router.get('/:id/edit', jordansCtrl.edit)
router.put('/:id', jordansCtrl.update)
router.post('/', jordansCtrl.create)
router.delete('/:id', jordansCtrl.delete)

export {
    router
}