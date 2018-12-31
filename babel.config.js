module.exports = (api) => {
  api.cache(true)
  const presets = [
    [
      "@babel/preset-env",
      {
        "targets": {"node": "current"},
        "useBuiltIns": "entry", // see: https://github.com/babel/babel/issues/8829
        "modules": "commonjs"
      }
    ]
  ];

  return {
    presets
  }
}
