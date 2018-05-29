/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

const title = 'Setting';

export default {

  path: '/setting',

  async action({query}) {
    return require.ensure([], require => require('../AdminRequire').default, 'admin')
      .then( Admin => ({
        title,
        chunk: 'admin',
        disableSSR: true,
        component:  <Admin.App
          name={title}
        >
          <Admin.Setting title={title} />
        </Admin.App>,
      }));

  },
};
