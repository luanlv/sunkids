/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
import config from '../config';

/* eslint-disable react/no-danger */

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      cssText: PropTypes.string.isRequired,
    }).isRequired),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    app: PropTypes.object, // eslint-disable-line
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: [],
    scripts: [],
  };

  render() {
    const { title, description, styles, scripts, app, children, v, seo, scriptTop, css  } = this.props;
    return (
      <html className="no-js" lang={this.props.lang}>
        <head>

          <meta charSet="utf-8" />
          {/*[if IE]>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<![endif]*/}
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="description" content />
          <meta name="author" content />
          {/* Page title */}
          <title>Anh ngữ Sunkids - Education for future</title>
          {/*[if lt IE 9]>

<![endif]*/}
          {/* Bootstrap Core CSS */}
          <link href="/themes/demo/assets/css/bootstrap.css" rel="stylesheet" type="text/css" />
          {/* Icon fonts */}
          <link href="/themes/demo/assets/fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link href="/themes/demo/assets/fonts/glyphicons/bootstrap-glyphicons.css" rel="stylesheet" type="text/css" />
          <link href="/themes/demo/assets/fonts/flaticons/flaticon.css" rel="stylesheet" type="text/css" />
          {/* Google fonts */}
          <link href="https://fonts.googleapis.com/css?family=Baloo|Lato:400,700,900" rel="stylesheet" />
          {/* Style CSS */}
          <link href={"/themes/demo/assets/css/style.css?v=" + v} rel="stylesheet" />
          {/* Plugins CSS */}
          <link rel="stylesheet" href="/themes/demo/assets/css/plugins.css" />
          {/* Color Style CSS */}
          <link href="/themes/demo/assets/styles/maincolors.css" rel="stylesheet" />
          {/* LayerSlider stylesheet */}
          <link rel="stylesheet" href="/themes/demo/assets/layerslider/css/layerslider.css" />
          {/* Favicons*/}
          <link rel="apple-touch-icon" sizes="72x72" href="http://ingridkuhn.com/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="http://ingridkuhn.com/apple-icon-114x114.png" />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          {/* Switcher Only */}
          <link rel="stylesheet" id="switcher-css" type="text/css" href="/themes/demo/assets/switcher/css/switcher.css" media="all" />
          {/* END Switcher Styles */}
          {/* Demo Examples (For Module #3) */}
          <link rel="alternate stylesheet" type="text/css" href="/themes/demo/assets/styles/maincolors.css" title="maincolors" media="all" />
          <link rel="alternate stylesheet" type="text/css" href="/themes/demo/assets/styles/cuteandbright.css" title="cuteandbright" media="all" />
          <link rel="alternate stylesheet" type="text/css" href="/themes/demo/assets/styles/pinkandblue.css" title="pinkandblue" media="all" />

          <link rel="alternate stylesheet" type="text/css" href="/themes/demo/assets/styles/sweetpastel.css" title="sweetpastel" media="all" />

          <link rel="alternate stylesheet" type="text/css"  href={"/css/app.css?v=" +v }/>
          <style dangerouslySetInnerHTML={{ __html: css }} />
          <script dangerouslySetInnerHTML={{ __html: scriptTop }} />
        </head>
        <body id="page-top" data-spy="scroll" data-target=".navbar-custom">

        <div id="fb-root" />
        <script dangerouslySetInnerHTML={{ __html: "(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v3.0&appId=1773112352977230&autoLogAppEvents=1'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'));" }} />

        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        <script dangerouslySetInnerHTML={{ __html: `window.App=${serialize(app)}` }} />


        <script src="/themes/demo/assets/js/jquery.min.js" />
        <script src="/themes/demo/assets/js/bootstrap.min.js"/>
        {/*<script src="/themes/demo/assets/js/contact.js"/>*/}
        <script src="/themes/demo/assets/js/plugins.js"/>
        <script src="/themes/demo/assets/js/prefixfree.js"/>
        <script src="/themes/demo/assets/layerslider/js/layerslider.kreaturamedia.jquery.js" type="text/javascript"/>
        {/*<script src="/themes/demo/assets/switcher/js/bootstrap-select.js"/>*/}
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.js" type="text/javascript"/>
        {/*<script src="/themes/demo/assets/switcher/js/dmss.js"/>*/}
        <script src="/jquery.imagemapster.min.js" type="text/javascript" />
        <script src="/themes/demo/assets/js/main.js"/>
          <script  src={scripts[0] + "?v=" + v } />
          <script  src={scripts[1] + "?v=" + v } />

          <script dangerouslySetInnerHTML={{ __html: this.props.scriptBottom }} />


        </body>
      </html>
    );
  }
}

export default Html;
