import { Router } from 'express'
import { getSubsidiary, 
    getSubsidiaryForId, 
    postSubsidiary, 
    patchSubsidiary, 
    deleteSubsidiaryForId } from '../controllers/subsidiary.controller.js'

const router = Router()

router.get('/subsidiary:id', getSubsidiaryForId) // See all subsidiaries
router.get('/subsidiary', getSubsidiary) // See subsidiary for id
router.post('/subsidiary', postSubsidiary) // Add subsidiary
router.patch('/subsidiary:id', patchSubsidiary) // Update subsidiary for id
router.delete('/subsidiary:id', deleteSubsidiaryForId) // delete subsidiary for id
router.delete('/subsidiary') // delete all subsidiaries

export default router;