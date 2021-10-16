const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/v2/' : '/',
  configureWebpack(config) {
    if (process.env.NODE_ENV === 'production') {
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/'],
        renderer: new Renderer({
          renderAfterDocumentEvent: 'render-event',
        }),
      })
    }
  },
}