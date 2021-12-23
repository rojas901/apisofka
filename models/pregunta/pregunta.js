import mongoose from 'mongoose';
const { Schema, model} = mongoose;

const preguntaSchema = new Schema({
    texto:{
        type: String,
        require: true
    },
    opcion1:{
        type: String,
        require: true
    },
    opcion2:{
        type: String,
        require: true
    },
    opcion3:{
        type: String,
        require: true
    },
    opcion4:{
        type: String,
        require: true
    },
    correcto:{
        type: String,
        require: true
    },
    categoria:{
        type: String,
        require: true
    },
    puntos:{
        type: Number,
        require: true
    }
});

const PreguntaModel = model('Pregunta', preguntaSchema);

export {PreguntaModel};