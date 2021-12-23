import conectarBD from "./conexiondb/db.js";
import express from "express";
import cors from "cors";
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from "./graphql/types.js";
import { resolvers } from "./graphql/resolvers.js";

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers 
});

const app = express();

app.use(express.json());

app.use(cors());

app.listen({port:4000}, async ()=>{
    await conectarBD();
    await server.start();

    server.applyMiddleware({app});

    console.log('servidor listo');
});