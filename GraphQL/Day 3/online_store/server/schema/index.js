const mongoose = require('mongoose');
const User = mongoose.model('User');
const { makeExecutableSchema } = require('graphql-tools');
const { merge } = require('lodash');

const types = require('./types')

const otherTypeDefs = `
  type Query {
    _empty: Boolean
  }
  type Mutation {
    _empty: Boolean
  }
`;

const otherResolvers = {
  Query: {
    _empty: Boolean
  },
  Mutation: {
    _empty: Boolean
  },
};

const typeDefs = [...types.map(type => type.typeDefs), otherTypeDefs];
const resolvers = merge(...types.map(type=> type.resolvers), otherResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = {
  schema,
  typeDefs,
  resolvers
}