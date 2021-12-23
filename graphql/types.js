import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Jugador{
        nombre: String!,
        puntaje: Int!,
        fecha: String!
    }

    type Query{
        Jugadores: [Jugador]
    }
`;

export {typeDefs};