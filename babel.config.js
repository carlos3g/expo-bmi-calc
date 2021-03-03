const importOptions = {
  paths: [
    {
      rootPathSuffix: 'src',
    },
    {
      rootPathSuffix: './src/assets',
      rootPathPrefix: '@assets/',
    },
    {
      rootPathSuffix: './src/components',
      rootPathPrefix: '@components/',
    },
    {
      rootPathSuffix: './src/screens',
      rootPathPrefix: '@screens/',
    },
    {
      rootPathSuffix: './src/services',
      rootPathPrefix: '@services/',
    },
  ],
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [['babel-plugin-root-import', importOptions]],
  };
};
