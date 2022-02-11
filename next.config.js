const modulesToTranspile = ["react-native", "@react-native-aria/utils"];
const withTM = require("next-transpile-modules")(modulesToTranspile);

const moduleExports = withTM({
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ]
    return config
  },
});

module.exports = moduleExports;
