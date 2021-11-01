module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true,
        }
      }
    },
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "storybook-dark-mode",
    "@storybook/addon-links",
    "storybook-addon-designs",
    "addon-screen-reader",
    "@storybook/addon-a11y",
    "@storybook/addon-backgrounds",
    "@storybook/addon-viewport",
    "@storybook/addon-storysource",
  ]
}