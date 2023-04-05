var express = require('express');
var proxy = require('http-proxy-middleware');
var cors = require('cors')
var app = express();

app.use(cors())

app.use('/', proxy.createProxyMiddleware({
 target: 'http://ajax.frontend.itheima.net',
    changeOrigin: false,
    pathRewrite: {
        "^/api": ""
    }
}));
app.listen(3000);

