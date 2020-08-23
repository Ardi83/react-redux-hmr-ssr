const aliases = require('./aliases')

require('@babel/register')({
  'plugins': [
    ['@babel/plugin-transform-runtime', {
      'regenerator': true
    }],
    ['babel-plugin-transform-require-ignore', {
      extensions: ['.scss', '.sass']
    }],
    ['module-resolver', {
      'alias': { ...aliases },
    }],
  ]
})
