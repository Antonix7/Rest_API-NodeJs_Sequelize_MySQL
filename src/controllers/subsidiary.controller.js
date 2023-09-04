import enterpriseSchema from '../models/enterprise.js'
import subsidiarySchema from '../models/subsidiary.js'

export const getSubsidiary = async (req, res) => {
    try {
        const subsidiary = await subsidiarySchema.findAll()
        console.log("all subsidiary", subsidiary)
        res.status(200).json(subsidiary)
    } catch (error) {
        console.error("Failed trying see subsidiary",error)
        return res.status(500).json({
            message: "Failed trying see subsidiary"
        })
    }
}

export const getSubsidiaryForId = async (req, res) => {
    const {id} = req.params
    try {
        const subsidiary = await subsidiarySchema.findByPk(id)
        console.log("subsidiary updload success", subsidiary)
        res.status(200).json(subsidiary)
    } catch (error) {
        console.error("subsidiary updload failed",error)
        return res.status(500).json({
            message: "Subsidiary updload failed"
        })
    }
}

export const postSubsidiary = async (req, res) => {
    const {id} = req.params
    const {name, location, enterpriseId} = req.body
    try {
        const newSubsidiary = await subsidiarySchema.create({
            name: name,
            location: location,
            enterpriseId: enterpriseId
        })
        console.log(newSubsidiary)
        res.status(200).json(newSubsidiary)
    } catch (error) {
        console.error("Failed trying create subsidiary", error)
        return res.status(500).json({
            message: "Failed trying create subsidiary"
        })
    }
}

export const patchSubsidiary = async (req, res) => {
    const {id} = req.params
    try {
        const newSubsidiary = subsidiarySchema.findByPk(id)
        newSubsidiary.set(req.body)
        await newSubsidiary.save()
        console.log("subsidiary update success")
        res.status(200).json(newSubsidiary)
    } catch (error) {
        console.error("Failed updating subsidiary")
        return res.status(500).json({
            message: "Failed updating subsidiary"
        })
    }
}

export const deleteSubsidiaryForId = async (req, res) => {
    const {id} = req.params
    try {
        const newSubsidiary = subsidiarySchema.destroy({
            where: {
                id: id
            }
        })
        await newSubsidiary.save()
        console.log("subsidiary update success")
        res.status(200).json(newSubsidiary)
    } catch (error) {
        console.error("Failed updating subsidiary")
        return res.status(500).json({
            message: "Failed updating subsidiary"
        })
    }
}