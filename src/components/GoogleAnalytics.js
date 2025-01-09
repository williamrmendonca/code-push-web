import React from 'react';
import PropTypes from 'prop-types';

const GoogleAnalytics = ({ trackingId }) => (
  <>
    <script>
      {`
        window.ga = function() {
          ga.q.push(arguments);
        };
        ga.q = [];
        ga.l = +new Date;
        ga('create','${trackingId}','auto');
        ga('send','pageview');
      `}
    </script>
    <script src="https://www.google-analytics.com/analytics.js" async defer />
  </>
);

GoogleAnalytics.propTypes = {
  trackingId: PropTypes.string.isRequired,
};

export default GoogleAnalytics; 