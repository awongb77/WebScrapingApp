// const proxy = require ('http-proxy-middleware');
// module.exports = function(app) {
//     app.use(proxy('/api1' , {target : 'http://localhost:5000'}));
//     app.use(proxy('/twitterSentiment' , {target : 'http://localhost:5001'}));
// }

const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', {
      target: 'http://localhost:5000', // API endpoint 1
      changeOrigin: true,
      pathRewrite: {
        "^/api1": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api2', {
      target: 'http://localhost:5001', // API endpoint 2
      changeOrigin: true,
      pathRewrite: {
        "^/api2": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api3', {
      target: 'http://localhost:5002', // API endpoint 3
      changeOrigin: true,
      pathRewrite: {
        "^/api3": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api4', {
      target: 'http://localhost:5003', // API endpoint 4
      changeOrigin: true,
      pathRewrite: {
        "^/api4": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api5', {
      target: 'http://localhost:5004', // API endpoint 5
      changeOrigin: true,
      pathRewrite: {
        "^/api5": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
}