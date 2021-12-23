import { JugadorModel } from "./jugador.js";

const resolversJugador = {
    Query: {
        Jugadores: async (parent, args) => {
            const jugadores = await JugadorModel.find();
            return jugadores;
        }
    },
    Mutation: {
        crearJugador: async (parent, args) => {
            let date = new Date();
            const jugadorCreado = await JugadorModel.create({
                nombre: args.nombre,
                puntaje: args.puntaje,
                fecha: date.toLocaleString()
            });
            return jugadorCreado;
        }
    }
};

export {resolversJugador};