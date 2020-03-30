const mongoose = require('mongoose')
const User = mongoose.model("User")

const typeDefs = `
type User {
  _id: ID!
  email: String!
  orders: [Order]
}
type Mutation {
  signup(email: String, password: String): User
}
`;

const resolvers = {
  User: {
    orders(parentValue, _) {
      return Order.find({ user: parentValue._id });
    }
  },
  Mutation: {
    signup(_, { email, password }) {
      const newUser = new User({ email, password });
      return newUser.save();
    },
  }
};

module.exports = {
  typeDefs,
  resolvers
}