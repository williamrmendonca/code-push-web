if (process.env.NODE_ENV === 'development' && process.env.BROWSER) {
  module.exports = require('./App.dev');
} else {
  module.exports = require('./App.prod');
}
