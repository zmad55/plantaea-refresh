module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      ["nativewind/babel"],
      // 'react-native-reanimated/plugin'
      [
        'module-resolver',
        {
          root: ["./src"],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@config': './src/config',
            '@constants': './src/constants',
            '@data': './src/data',
            '@navigation': './src/navigation',
            '@permissions': './src/permissions',
            '@redux': './src/redux',
            '@screens': './src/screens',
            '@utils': './src/utils',
          },
        },
      ],
    ]
  };
};
