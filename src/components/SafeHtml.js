import React from 'react';
import PropTypes from 'prop-types';
import SanitizedHTML from 'react-sanitized-html';

const SafeHtml = ({ content }) => (
  <SanitizedHTML
    allowedAttributes={{ '*': ['class', 'id', 'style'] }}
    allowedTags={['div', 'span', 'p', 'a', 'img', 'h1', 'h2', 'h3', 'table', 'tr', 'td', 'th', 'thead', 'tbody']}
    html={content}
  />
);

SafeHtml.propTypes = {
  content: PropTypes.string.isRequired,
};

export default SafeHtml; 