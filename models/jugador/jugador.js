import mongoose from 'mongoose';
const { Schema, model} = mongoose;

const jugadorSchema = new Schema({
    nombre:{
        type: String,
        require: true
    },
    puntaje:{
        type: Number,
        default: 0,
        require: true
    },
    fecha:{
        type: String,
        default: null
    }
});

const JugadorModel = model('Jugador', jugadorSchema);

export {JugadorModel};