import "dotenv/config";
import express from "express";
import { ApolloServer } from "apollo-server-express";

import models, { connectDb } from "./src/model";
import schema from "./src/schema";
import resolvers from "./src/resolvers";

const port = process.env.PORT || 3000;

const startApolloServer = async () => {
  const server = new ApolloServer({
    introspection: true,
    typeDefs: schema,
    resolvers,
    context: async () => ({
      models,
    }),
  });
  const app = express();
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  connectDb()
    .then(() => {
      app.listen({ port }, () => {
        console.log(
          "Your graphql server is ready at http://localhost:3000/graphql"
        );
      });
    })
    .catch((err) => {
      console.log("Not able to connect with mongo DB", err);
    });
};

startApolloServer();
