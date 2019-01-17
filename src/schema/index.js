import { makeExecutableSchema } from 'graphql-tools';

import * as Todo from './todo';

export default makeExecutableSchema({
  typeDefs: Todo.typeDefs,
  resolvers: {
    ...Todo.resolvers
  }
});
