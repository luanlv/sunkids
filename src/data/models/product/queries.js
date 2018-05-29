import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
  } from 'graphql';

import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';

import type from './type'
import model from './schema'

export default {

  getProducts: {
    type: new GraphQLObjectType({
        name: 'getProducts',
        description: 'getProducts object',
        fields: () => ({
          page: {
            type: GraphQLInt
          },
          totalPage: {
            type: GraphQLInt
          },
          data: {
            type: new GraphQLList(type)
          }
        })
      }),
      args: {
        page: {
          type: GraphQLInt
        }
      },
      resolve: model.getProducts
  },
  getHotdeals: {
    type: new GraphQLObjectType({
        name: 'getHotdeals',
        description: 'getHotdeals object',
        fields: () => ({
          page: {
            type: GraphQLInt
          },
          totalPage: {
            type: GraphQLInt
          },
          data: {
            type: new GraphQLList(type)
          }
        })
      }),
      args: {
        page: {
          type: GraphQLInt
        }
      },
      resolve: model.getHotdeals
  },
  getOneProduct: {
    type: type,
    args: {
      slug: {
        type: GraphQLString
      }
    },
    resolve: model.getOneProduct
  },
  getOneHotdeal: {
    type: type,
    args: {
      slug: {
        type: GraphQLString
      }
    },
    resolve: model.getOneHotdeal
  },
  getAllProduct: {
    type: new GraphQLList(type),
    resolve: model.getAllProduct
  },
  getAllHotdeal: {
    type: new GraphQLList(type),
    resolve: model.getAllHotdeal
  },
  getAllProductsByCategory: {
    type: new GraphQLList(type),
    args: {
      slug: {
        type: GraphQLString
      }
    },
    resolve: model.getAllProductsByCategory
  },

  get5RecentProduct: {
    type: new GraphQLList(type),
    resolve: model.get5RecentProduct
  },

  getProductRelative: {
    type: new GraphQLList(type),
    resolve: model.getProductRelative,
  }
};
