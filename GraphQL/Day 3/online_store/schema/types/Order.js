const mongoose = require('mongoose')
const Order = mongoose.model("Order")

const typeDefs = `
  type Order {
    _id: ID!
    user: User
    products: [Product]
  }
  extend type Query {
    orders: [Order]
    order(_id: ID!): Order
  }
  extend type Mutation {
    makeOrder(productIds: [ID]!): makeOrderResponse!
    cancelOrder(orderId: ID!): cancelOrderResponse!
  }
  type makeOrderResponse {
    success: Boolean!
    message: String
    order: [Product]
  }
  type cancelOrderResponse {
    success: Boolean!
    message: String
    order: Order
  }
`;

const resolvers = {
  Query: {
    orders(_, __) {
      return Order.find({});
    },
    order(_, { _id }) {
      return Order.findById(_id);
    }
  },
  Order: {
    user: async (parentValue, _) => {
      const order = await parentValue.populate('user').execPopulate();
      return order.user;
    },
    products: async (parentValue, _) => {
      const order = await parentValue.populate('products').execPopulate();
      return order.products;
    }
  },
  Mutation: {
    makeOrder: async(_, {productIds}, context) => {
      const order = new Order({productIds});
      await order.save();
      return {
        success: true,
        message: "Products added to order",
        order: []
      }
    },
    cancelOrder: async(_, {orderId}, context) => {
      const order = await Order.findById(orderId);
      const loggedInUser = context.user;
      if(loggedInUser._id != order.user._id) {
        return {
        success: false,
        message: "This order doesn't belong to you",
        order: order
        }
      }
      await order.remove();
      return {
        success: true,
        message: "Order has been canceled",
        order: order
      }
    }
  }
};

module.exports = {
  typeDefs,
  resolvers
}