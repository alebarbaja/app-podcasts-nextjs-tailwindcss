const routes = module.exports = require('next-routes')();

routes
.add('index')
.add('channel', '/:slug.:id', 'channel')
.add('episode', '/:slug.:id', 'episode')
