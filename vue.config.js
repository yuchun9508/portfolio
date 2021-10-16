const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  publicPath: IS_PRODUCTION ? '/v2/' : '/',
  outputDir: IS_PRODUCTION ? 'dist/v2/' : 'dist',
  configureWebpack(config) {
    if (IS_PRODUCTION) {
      config.plugins.push(
        new PrerenderSPAPlugin({
          // Required - The path to the webpack-outputted app to prerender.
          staticDir: path.join(__dirname, 'dist'),

          // Optional - The path your rendered app should be output to.
          // (Defaults to staticDir.)
          outputDir: path.join(__dirname, 'dist/v2'),

          // Optional - The location of index.html
          indexPath: path.join(__dirname, 'dist', '/v2/index.html'),

          // Required - Routes to render.
          routes: ['/'],

          renderer: new Renderer({
            // Optional - Wait to render until the specified event is dispatched on the document.
            // eg, with `document.dispatchEvent(new Event('custom-render-trigger'))`
            renderAfterDocumentEvent: 'render-event',

            // Other puppeteer options.
            // (See here: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions)
            // headless: false // Display the browser window when rendering. Useful for debugging.
          }),
        })
      )
    }
  },
}