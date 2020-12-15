module.exports = function (api) {
  var currentEnv = api.env('development')

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          forceAllTransforms: true,
          useBuiltIns: 'entry',
          corejs: 3,
          modules: false,
          exclude: ['transform-typeof-symbol'],
        },
      ],
      [
        '@babel/preset-react',
        {
          development: true,
          runtime: 'automatic',
          useBuiltIns: true,
        },
      ]
    ].filter(Boolean),
    plugins: [
      'babel-plugin-macros',
      'babel-plugin-styled-components',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-destructuring',
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true,
        },
      ],
      [
        '@babel/plugin-proposal-object-rest-spread',
        {
          useBuiltIns: true,
        },
      ],
    ].filter(Boolean),
  }
}
