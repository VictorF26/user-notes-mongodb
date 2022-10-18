const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true, //control de espcacios
        unique: true //no puede haber más con el mismo en la misma bbdd
    }
}, {
    timestamps : true //se guarda cuando ha sido creado
})

module.exports = model('User', userSchema);