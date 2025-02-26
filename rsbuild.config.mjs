import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import postcssNesting from 'postcss-nesting';

export default defineConfig({
  server: {
    base: '/bingou',
  },
  plugins: [pluginReact()],
  tools: {
    postcss: (opts, { addPlugins }) => {
      addPlugins([postcssNesting]);
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcssNesting,
                ],
              },
            },
          },
        ],
        type: 'css/auto',
      },
    ],
  },
});
