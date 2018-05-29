import * as type from '../constants';

export default function data(state = {}, action) {
  switch (action.type) {
    case type.SET_DATA:
      const data = action.payload.value
      return {
        ...state,
        information: {
          ...state.information,
          value: data.information || state.information.value
        },
        news: {
          ...state.news,
          value: data.news || state.news.value
        },
        product: {
          ...state.product,
          value: data.product || state.product.value
        },
        allNews: {
          ...state.allNews,
          value: data.allNews || state.allNews.value
        },
        allProducts: {
          ...state.allProducts,
          value: data.allProducts || state.allProducts.value
        },
        allHotdeals: {
          ...state.allHotdeals,
          value: data.allHotdeals || state.allHotdeals.value
        },
        productRelative: {
          ...state.productRelative,
          value: data.productRelative || state.productRelative.value
        },
        allNewsByCategory: {
          ...state.allNewsByCategory,
          value: data.allNewsByCategory || state.allNewsByCategory.value
        },
        recentNews: {
          ...state.recentNews,
          value: data.recentNews || state.recentNews.value
        },
        categories: {
          ...state.categories,
          value: data.categories || state.categories.value
        },
        productCategories: {
          ...state.productCategories,
          value: data.productCategories || state.productCategories.value
        },
        productByCategory: {
          ...state.productByCategory,
          value: data.productByCategory || state.productByCategory.value
        },
        recentProduct: {
          ...state.recentProduct,
          value: data.recentProduct || state.recentProduct.value
        },
        category: {
          ...state.category,
          value: data.category || state.category.value
        }
      }
    default:
      return state;
  }
}
