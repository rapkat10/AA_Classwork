const mongoose = require('mongoose')
const Category = mongoose.model("Category")

const typeDefs = `
  type Category {
    _id: ID!
    name: String!
    products: [Product]
  }
  extend type Query {
    categories: [Category]
    category(_id: ID!): Category
  }
  extend type Mutation {
    createCategory(name: String): CategoryUpdateResponse!
    deleteCategory(categoryId: ID!): CategoryUpdateResponse!
  }
  type CategoryUpdateResponse {
    success: Boolean!
    message: String
  }
`;

const resolvers = {
  Query: {
    categories(_, __, context) {
      return Category.find({});
    },
    category(_, { _id }) {
      return Category.findById(_id);
    }
  },
  Mutation: {
    deleteCategory: async (_, { categoryId }, context) => {
      const loggedInUser = context.user;
      if (loggedInUser.isAdmin) {
        const category = await Category.findById(categoryId);
        await category.remove();
        return {
          success: true,
          message: "successfully removed category"
        }
      }
    },
    createCategory: async (_, { name }, context) => {
      const loggedInUser = context.user;
      if (loggedInUser.isAdmin) {
        const category = new Category({ name });
        await category.save();
        return {
          success: true,
          message: "successfully added category"
        }
      }
    }
  },
  Category: {
    products(parentValue, _) {
      return Product.find({ category: parentValue._id });
    }
  },
  Category: {
    products(parentValue, _) {
      return Product.find({ category: parentValue._id });
    }
  }
};

module.exports = {
  typeDefs,
  resolvers
}