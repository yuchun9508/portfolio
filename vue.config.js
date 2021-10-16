const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/v2/' : '/',
  configureWebpack(config) {
    if (process.env.NODE_ENV === 'production') {
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

            // Optional - Wait to render until the specified element is detected using `document.querySelector`
            // renderAfterElementExists: '[data-vue-meta]',
            
            // Other puppeteer options.
            // (See here: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions)
            headless: false // Display the browser window when rendering. Useful for debugging.
          }),
        })
      )
    }
  },
}