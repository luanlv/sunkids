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

const title = 'Happy green | Giỏ hàng'

export default {

  path: '/gio-hang',

  async action({store, fetch, path}) {
    store.dispatch(showLoading())

    let seoGraphql = 'seo(url: "'+ path +'"){url,title,description,og_title,og_image,og_description}'
    // let information = 'information{id, contact, services, common}'

    let seo = {}
    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: '{' + seoGraphql +'}',
      }),
    });
    const { data } = await resp.json();
    seo = data.seo || {}
    if (!data ) throw new Error('Failed to load data.');
    store.dispatch(setData(data))
    store.dispatch(hideLoading())

    return require.ensure([], require => require('./Cart').default, 'cart')
      .then(Cart => ({
        title,
        chunk: 'cart',
        component: <Layout data={store.getState().data}><Cart data={store.getState().data} /></Layout>,
      }));
  },

};
