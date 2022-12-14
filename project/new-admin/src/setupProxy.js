const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://i.maoyan.com",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    }),
    createProxyMiddleware("/server", {
      target: "http://203.60.15.94:8500",
      changeOrigin: true,
      pathRewrite: { "^/server": "" },
    })
  );
};
