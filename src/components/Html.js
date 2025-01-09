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
import { analytics } from '../config';
import SafeHtml from './SafeHtml';
import GoogleAnalytics from './GoogleAnalytics';

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      cssText: PropTypes.string.isRequired,
    }).isRequired),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    state: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: [],
    scripts: [],
    state: null,
  };

  render() {
    const { title, description, styles, scripts, state, children } = this.props;
    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          {styles.map(style => (
            <style key={style.id} id={style.id}>
              {style.cssText}
            </style>
          ))}
        </head>
        <body style={{ minHeight: '100%' }}>
          <div id="app">
            <SafeHtml content={children} />
          </div>
          
          {state && (
            <script>
              {`window.APP_STATE = ${JSON.stringify(serialize(state, { isJSON: true }))}`}
            </script>
          )}
          
          {scripts.map(script => <script key={script} src={script} />)}
          
          {analytics.google.trackingId && (
            <GoogleAnalytics trackingId={analytics.google.trackingId} />
          )}
        </body>
      </html>
    );
  }
}

export default Html;
