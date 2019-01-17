import { gql } from 'apollo-server-express';

import { getTodos, getTodo } from '../api/todo';

export const typeDefs = gql`
  type Query {
    getTodo(id: String!): Todo!
    getTodos: [Todo]!
  }

  type Todo {
    userId: Int!
    id: Int!
    title: String!
    completed: Boolean!
  }
`;

export const resolvers = {
  Query: {
    async getTodo(root, params) {
      const { id } = params;
      const data = await getTodo(id);

      return data;
    },
    async getTodos() {
      const data = await getTodos();

      return data;
    }
  }
};
