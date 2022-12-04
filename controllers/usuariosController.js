const usuarios = require('../models/usuarios')

exports.list =async (req,res)=>{
    try{
    const colUsuarios = await usuarios.find({})
    res.json(colUsuarios)
    }catch(error){
        console.log(error)
        res.send(error)
        next()
    }

}