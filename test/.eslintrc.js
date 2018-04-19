module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true
  },
  globals: {
    expect: true,
    sinon: true
  },
  parserOptions: {
    ecmaVersion: 2017, // ES8
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      // 启用对实验性的 object rest/spread properties 支持。该语法在 ecmaVersion: 2018 中得到支持。该选项在未来将被移除。
      experimentalObjectRestSpread: true
    }
  },
}