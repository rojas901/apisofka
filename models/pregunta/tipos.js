import { gql } from "apollo-server-express";

const tiposPregunta = gql`

    type Pregunta {
        _id: ID!
        texto: String!
        opcion1: String!
        opcion2: String!
        opcion3: String!
        opcion4: String!
        correcto: String!
        categoria: String!
        puntos: Int!
    }

    type Query {
        Preguntas: [Pregunta]
    }

    type Mutation {
        crearPregunta(
            texto: String!
            opcion1: String!
            opcion2: String!
            opcion3: String!
            opcion4: String!
            correcto: String!
            categoria: String!
            puntos: Int!
        ): Pregunta
    }
`;

export { tiposPregunta };