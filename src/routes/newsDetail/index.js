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

const title = 'Chi tiết tin tức'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export default {

  path: '/p/:slug',

  async action({store, fetch, path, params}) {
    store.dispatch(showLoading())
    let seoGraphql = 'seo(url: "'+ path +'"){url,title,description,og_title,og_image,og_description}'
    // let information = 'information{id, services, common}'
    let recentNews = 'recentNews:get5RecentPost{title, coverUrl, slug, public, description, view, category, created_at}'
    let categories = 'categories:getCategories{title, slug, created_at}'
    let news = 'news:getOnePost(slug: "'+ params.slug +'"){ coverUrl, category, slug, public, title, description, body, view, tags, created_at}'

    let seo = {}
    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: '{' + seoGraphql + recentNews + news + categories + '}',
      }),
    });
    const { data } = await resp.json();
    seo = data.seo || {}
    if (!data ) throw new Error('Failed to load data.');
    store.dispatch(setData(data))
    store.dispatch(hideLoading())


    return require.ensure([], require => require('./NewsDetail').default, 'newsDetail')
      .then(NewsDetail => ({
        title: store.getState().data.news.value.title,
        description: store.getState().data.news.value.description,
        chunk: 'newsDetail',
        component: <Layout data={store.getState().data}><NewsDetail data={store.getState().data} /></Layout>,
      }));
  },

};
