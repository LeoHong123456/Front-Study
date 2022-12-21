const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', { target: 'https://m.maizuo.com/' ,changeOrigin: true, pathRewrite:{'^/api':''}})
    );
};