const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-postcss'],

  webpackFinal: async config => {
    config.resolve.modules.push(path.resolve(__dirname, '../src'));

    return config;
  },
};
