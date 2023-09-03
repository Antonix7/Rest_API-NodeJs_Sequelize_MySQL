const enterpriseSchema = require('./models/enterprise.js')
const subsidiarySchema = require('./models/subsidiary.js')

export const getEnterprise = async (req, res) => {
    try {
        const enterprise = await enterpriseSchema.findAll()
        console.log("all enterprise", enterprise)
        res.status(200).json(enterprise)
    } catch (error) {
        console.error('failed trying see enterprise', error)
        return res.status(500).json({
            message: "Failed trying see enterprise"
        })
    }
}

export const getEnterpriseForId = async (req, res) => {
    try {
        const id = res.params
        const enterprise = await enterpriseSchema.findByPk(id)
        
        if (!enterprise) return res.status(404).json({
            message: "This enterprise not exist"
        })

        console.log("watching the enterprise", enterprise)
        res.status(200).json(enterprise)

    } catch (error) {
        console.error('failed trying see enterprise', error)
        return res.status(500).json({
            message: "Failed trying see enterprise"
        })
    }
}

export const postEnterprise = async (req, res) => {
    try {
        const {name, ceo, location} = req.body
        const newEnterprise = await enterpriseSchema.create({
        name: name,
        ceo: ceo,
        location: location
        });
        console.log("enterprise created", newEnterprise)
        res.status(200).json(newEnterprise)
    } catch (error) {
        console.error('Failed at created enterprise', error)
        return res.status(404).json({
            message: "Failed at created enterprise"
        })
    }
}

export const patchEnterprise = async (req, res) => {
    const {id} = req.params
    const {name, ceo, location} = req.body
    try {
        const enterprise = await enterpriseSchema.findByPk(id)
        enterprise.name = name
        enterprise.ceo = ceo
        enterprise.location = location
        const newEnterprise = await enterprise.save()
        console.log("enterprise update", newEnterprise)
        res.status(200).json(newEnterprise)
    } catch (error) {
        console.error('failed trying update enterprise')
        res.status(500).json({
            message: "Failed trying update enterprise"
        })
    }
}

export const deleteEnterprise = async (req, res) => {
    try {
        const {id} = req.params
        const newEnterprise = await enterpriseSchema.destroy({
            where: {
                id,
            }
        })
        console.log("enterprise deleted", newEnterprise)
        res.status(200).json(newEnterprise)
    } catch (error) {
        console.error('failed trying delete enterprise')
        return res.status(500).json({
            message: "Failed trying delete enterprise"
        })
    }
}

export const getSubsidiaryEnterprise = async (req, res) => {
    const {id} = req.params
    try {
        const subsidiariesOfEnterprise = subsidiarySchema.findAll({
            where: {
                enterpriseId: id
            }
        })
        console.log("All subsidiaries of this enterprise", subsidiariesOfEnterprise)
        res.status(200).json(subsidiariesOfEnterprise)
    } catch (error) {
        console.error("failed optaining subsidiaries", error)
        return res.status(500).json({
            message: "Failed optaining subsidiaries "
        })
    }
}