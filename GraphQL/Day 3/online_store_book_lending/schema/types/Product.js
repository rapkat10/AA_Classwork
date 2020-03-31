const mongoose = require('mongoose')
const Product = mongoose.model("Product")

const typeDefs = `
  type Product {
    _id: ID!
    name: String!
    price: Int
    description: String
    category: Category
    owner: User
  }
  extend type Query {
    products: [Product]
    product(_id: ID!): Product
  }
  extend type Mutation {
    createProduct(name: String, price: Int, description: String, category: ID): ProductUpdateResponse!
    deleteProduct(productId: ID!): ProductUpdateResponse!
  }
  type ProductUpdateResponse {
    success: Boolean!
    message: String
  }
`;

const resolvers = {
  Query: {
    products(_, __) {
      return Product.find({});
    },
    product(_, { _id }) {
      return Product.findById(_id);
    }
  },
  Mutation: {
    deleteProduct: async (_, { productId }, context) => {
      const loggedInUser = context.user;
      const product = await Product.findById(productId);
      if (loggedInUser.isAdmin || loggedInUser._id === product.owner){
        await product.remove();
        return {
          success: true,
          message: "successfully removed product"
        }
      } else {
        return {
          success: false,
          message: "Need to own product to remove it."
        }
      }
    },
    createProduct: async (_, { name, price, description, category }, context) => {
      const loggedInUser = context.user;
      if (!loggedInUser) return {
        success: false,
        message: "Need to log in to add a product"
      }
      if (loggedInUser || loggedInUser.isAdmin){
        const product = new Product({ name: name, price: price, description: description, category: category });
        product.owner = loggedInUser._id;
        await product.save();
        return {
          success: true,
          message: "successfully added product"
        }
      }
    }
  },
  Product: {
    category: async (parentValue, _) => {
      const product = await parentValue.populate('category').execPopulate();
      return product.category;
    }
  }
};

module.exports = {
  typeDefs,
  resolvers
}