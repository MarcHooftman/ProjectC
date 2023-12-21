const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();
const { env } = require('process');

const target = env.REACT_APP_LOCAL_API === "true" ? "https://localhost:7185" : "https://5344-2a02-a212-92c8-8400-a99d-7185-f1f5-8289.ngrok-free.app/api"

const context = [
  "activity",
];

const onError = (err, req, resp, target) => {
  console.error(`${err.message}`);
}

module.exports = function (app) {
  const appProxy = createProxyMiddleware(context, {
    proxyTimeout: 10000,
    target: target,
    // Handle errors to prevent the proxy middleware from crashing when
    // the ASP NET Core webserver is unavailable
    onError: onError,
    secure: false,
    // Uncomment this line to add support for proxying websockets
    //ws: true, 
    headers: {
      Connection: 'Keep-Alive',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
      "Access-Control-Allow-Headers": "Content-Type",
    }
  });

  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', 'https://localhost:44463');
  //   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  //   res.header('Access-Control-Allow-Headers', 'Content-Type');
  //   next();
  // });

  app.use(appProxy);
};
