const mongoose = require('mongoose');
const User = mongoose.model('User');
const Category = mongoose.model('Category');
const Product = mongoose.model('Product');
const Order = mongoose.model('Order');
const { makeExecutableSchema } = require('graphql-tools');

const types = require('./types')

const otherTypeDefs = `
  
  type Product {
    _id: ID!
    name: String!
    price: Int
    description: String
    category: Category
  }
  type Category {
    _id: ID!
    name: String!
    products: [Product]
  }
  type Order {
    _id: ID!
    user: User
    products: [Product]
  }
  type Query {
    categories: [Category]
    products: [Product]
    category(_id: ID!): Category
    product(_id: ID!): Product
    orders: [Order]
    order(_id: ID!): Order
  }
  type Mutation {
    createProduct(name: String, price: Int, description: String, category: ID): ProductUpdateResponse!
    deleteProduct(productId: ID!): ProductUpdateResponse!
    createCategory(name: String): CategoryUpdateResponse!
    deleteCategory(categoryId: ID!): CategoryUpdateResponse!
  }
    type CategoryUpdateResponse {
    success: Boolean!
    message: String
  }
    type ProductUpdateResponse {
    success: Boolean!
    message: String
  }
`;

const resolvers = {
  Query: {
    categories(_, __) {
      return Category.find({});
    },
    products(_, __) {
      return Product.find({});
    },
    orders(_, __) {
      return Order.find({});
    },
    order(_, { _id }) {
      return Order.findById(_id);
    },
    product(_, { _id }) {
      return Product.findById(_id);
    },
    category(_, { _id }) {
      return Category.findById(_id);
    }
  },
  Mutation: {
    deleteCategory: async(_, { categoryId }, context) => {
      const category = await Category.findById(categoryId);
      await category.remove();
      return {
        success: true,
        message: "successfully removed category"
      }
    },
    createCategory: async(_, { name }, context) => {
      const category = new Category({name});
      await category.save();
      return {
        success: true,
        message: "successfully added category"
      }
    },
    deleteProduct: async(_, { productId }, context) => {
      const product = await Product.findById(productId);
      await product.remove();
      return {
        success: true,
        message: "successfully removed product"
      }
    },
    createProduct: async(_, { name, price, description, category }, context) => {
      const product = new Product({name: name, price: price, description: description, category: category});
      await product.save();
      return {
        success: true,
        message: "successfully added product"
      }
    },
  },
  Category: {
    products(parentValue, _) {
      return Product.find({ category: parentValue._id });
    }
  },
  Product: {
    category: async (parentValue, _) => {
      const product = await parentValue.populate('category').execPopulate();
      return product.category;
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
  }
};

// const typeDefs = [
//   {
//     types,
//     otherTypeDefs
//   }
// ]
const typeDefs = [...types.map(type => type.typeDefs), otherTypeDefs];
console.log(types);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = {
  schema,
  typeDefs,
  resolvers
}