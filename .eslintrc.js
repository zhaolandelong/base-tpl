const path = require('path');
const root = __dirname;

module.exports = {
  root: true,
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 2017, // ES8  
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      // 启用对实验性的 object rest/spread properties 支持。该语法在 ecmaVersion: 2018 中得到支持。该选项在未来将被移除。  
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(root, 'config/webpack.base.js')
      }
    }
  },
  rules: {
    'max-len': 0,
    'jsx-a11y/anchor-is-valid': ['error', { 'components': [] }], // react-router <Link />  
    'react/prop-types': ['error', { ignore: ['match', 'routes'] }] // react-router props.match props.routes
  }
}
