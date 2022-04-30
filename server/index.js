const express = require('express')
const {ApolloServer} = require('apollo-server-express')

const resolvers = require("./graphql/resolvers")
const typeDefs = require("./graphql/types")

const http = require('http');

async function startApolloServer() {

  const configurations = {
    development: {ssl: false, port: 4000, hostname: 'localhost'},
  };

  const environment = 'development';
  const config = configurations[environment];

  const server = new ApolloServer({
    resolvers,
    typeDefs,
  });

  await server.start()

  const app = express();
  server.applyMiddleware({app, path: '/', cors: true})

  let httpServer;
  httpServer = http.createServer(app);
  
  app.use("/", express.json())
  httpServer.listen(process.env.port || 4000)

  return { server, app };
}


startApolloServer().then(r => {})