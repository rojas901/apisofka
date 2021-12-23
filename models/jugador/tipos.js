import { gql } from "apollo-server-express";

const tiposJugador = gql`

    type Jugador {
        _id: ID!
        nombre: String!
        puntaje: Int!
        fecha: String!
    }

    type Query {
        Jugadores: [Jugador]
    }

    type Mutation {
        crearJugador(
            nombre: String!
            puntaje: Int!
        ): Jugador
    }
`;

export { tiposJugador };