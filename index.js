import express from 'express';
import serverless from 'serverless-http';
import graphiql from 'graphql-playground-middleware-express';
import { ApolloServer } from 'apollo-server-express';

import Schema from './src/schema';

const app = express();

const server = new ApolloServer({
  schema: Schema,
  path: '/graphql'
});

server.applyMiddleware({ app });

app.get('/playground', graphiql({ endpoint: '/graphql' }));

const handler = serverless(app);

export { handler };
