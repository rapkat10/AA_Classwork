const mongoose = require('mongoose');
const User = mongoose.model('User');

const typeDefs = `
type User {
  _id: ID!
  email: String!
  orders: [Order]
  order: Order
}
extend type Query {
  me: User
}
extend type Mutation {
  signup(email: String!, password: String!): UserCredentials
}
type UserCredentials {
  _id: ID!
  email: String!
  token: String
  orders: [Order]
}
`;

const resolvers = {
  User: {
    orders: async (parentValue, _, context) => {
      const queriedUser = parentValue;
      const loggedInUser = context.user;
      if (loggedInUser && queriedUser._id === loggedInUser._id) {
        await loggedInUser.populate('orders').execPopulate();
        return loggedInUser.orders;
      }
      return null;
    },
    order: async (parentValue, { _id }, context) => {
      const loggedInUser = context.user;
      const order = await Order.findbyId(_id);
      if (loggedInUser && order.user._id === loggedInUser._id){
        return order;
      }
      return null;
    }
  },
  Query: {
    me(_, __, context){
      return context.user;
    }
  },
  Mutation: {
    signup(_, { email, password }) {
      return User.signUp(email, password);
    },
  }
};

module.exports = {
  typeDefs,
  resolvers
}