const express = require('express')
const router = express.Router()
const usuariosController = require('../controllers/usuariosController')

module.exports = ()=>{
    router.get('/usuarios',usuariosController.list)
    return router
}