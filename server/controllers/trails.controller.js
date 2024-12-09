const trails = require('express').Router()
const db = require('../models')
const { Trail } = db

// GET ALL TRAILS
trails.get('/', async (req, res) => {
    try {
        const foundBooks = await Trail.findAll()
        res.status(200).json(foundTrails)
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

module.exports = trails