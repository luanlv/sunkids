/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';
import { setData } from '../../actions/data';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export default {

  path: '/',

  async action({store, fetch, path}) {

    store.dispatch(showLoading())

    let seoGraphql = 'seo(url: "'+ path +'"){url,title,description,og_title,og_image,og_description}'
    // let information = 'information{id, services, common, about, home}'
    let recentNews = 'recentNews:get5RecentPost{title, coverUrl, slug, public, description, view, category, created_at}'
    // let recentNews = 'recentNews:get5RecentPost{title, coverUrl, slug, public, description, view, category, created_at}'
    let productCategories = 'productCategories:getProductCategories{title, slug, created_at}'
    let allHotdeals = 'allHotdeals:getAllHotdeal{ coverUrl, category, slug, title, body, donvi, hotdeal,oldPrice, price, view, created_at}'
    let recentProduct = 'recentProduct:get5RecentProduct{ coverUrl, category, slug, title, body, price, donvi, view, created_at}'
    let seo = {}
    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: '{' + seoGraphql + recentNews + productCategories + recentProduct + allHotdeals + '}',
      }),
    });
    const { data } = await resp.json();
    seo = data.seo || {}
    if (!data ) throw new Error('Failed to load data.');
    store.dispatch(setData(data))
    store.dispatch(hideLoading())

    return {
      title: 'Happy Green | Fresh daily',
      component: <Layout data={store.getState().data}>
        <Home data={store.getState().data} />
      </Layout>,
    };
  },

};
