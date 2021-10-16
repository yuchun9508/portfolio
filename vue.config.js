const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/v2/' : '/',
  configureWebpack(config) {
    if (process.env.NODE_ENV === 'production') {
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: ['/'],
        renderer: new Renderer({
          // Optional - Wait to render until the specified event is dispatched on the document.
          // eg, with `document.dispatchEvent(new Event('custom-render-trigger'))`
          renderAfterDocumentEvent: 'render-event',
          // Optional - Wait to render until the specified element is detected using `document.querySelector`
          renderAfterElementExists: '[data-vue-meta]',
        }),
      })
    }
  },
}