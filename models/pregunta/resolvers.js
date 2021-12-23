import { PreguntaModel } from "./pregunta.js";

const resolversPregunta = {
    Query: {
        Preguntas: async (parent, args) => {
            const preguntas = await PreguntaModel.find();
            return preguntas;
        }
    },
    Mutation: {
        crearPregunta: async (parent, args) => {
            const preguntaCreada = await PreguntaModel.create({
                texto: args.texto,
                opcion1: args.opcion1,
                opcion2: args.opcion2,
                opcion3: args.opcion3,
                opcion4: args.opcion4,
                correcto: args.correcto,
                categoria: args.categoria,
                puntos: args.puntos
            });
            return preguntaCreada;
        }
    }
};

export {resolversPregunta};