const {Router} = require('express')
const {
    getEnterprise,
    getEnterpriseForId,
    postEnterprise,
    patchEnterprise,
    deleteEnterprise,
    getSubsidiaryEnterprise
} = require('../controllers/enterprise.controller.js')

const router = Router()

router.get('/enterprise:id', getEnterpriseForId) // See all enterprise
router.get('/enterprise', getEnterprise) // See employees for id
router.post('/enterprise', postEnterprise) // Add enterprise
router.patch('/enterprise:id', patchEnterprise) // Update enterprise for id
router.delete('/enterprise:id', deleteEnterprise) // delete enterprise for id
router.delete('/enterprise') // delete all enterprise

router.get('/eterprise/:id/subsidiary', getSubsidiaryEnterprise) // See all subsidiaries of this enterprise

module.exports = router