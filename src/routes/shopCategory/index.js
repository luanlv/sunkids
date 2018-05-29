/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import { setData } from '../../actions/data';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

const title = 'Happy green | Gian hàng'

export default {

  path: '/cua-hang/:slug',

  async action({store, fetch, path, params}) {

    store.dispatch(showLoading())

    let seoGraphql = 'seo(url: "'+ path +'"){url,title,description,og_title,og_image,og_description}'
    let recentNews = 'recentNews:get5RecentPost{title, coverUrl, slug, public, description, view, category, created_at}'

    let productCategories = 'productCategories:getProductCategories{title, slug, created_at}'

    let products = 'allProducts:getAllProductsByCategory(slug: "' + params.slug + '"){ coverUrl, category, slug, title, body, price, view, created_at}'
    // let information = 'information{id, about, services, common}'

    let seo = {}

    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: '{' + seoGraphql + recentNews + products + productCategories + '}',
      }),
    });
    const { data } = await resp.json();
    seo = data.seo || {}
    if (!data ) throw new Error('Failed to load data.');
    store.dispatch(setData(data))
    store.dispatch(hideLoading())

    return require.ensure([], require => require('../shop/Shop').default, 'shop')
      .then(About => ({
        title,
        chunk: 'shop',
        component: <Layout data={store.getState().data} ><About data={store.getState().data} slug={params.slug} /></Layout>,
      }));
  },

};
