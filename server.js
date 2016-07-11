
var koa = require('koa');
var serve = require('koa-static');
var path = require('path');

var app = koa();

app.use(serve(path.resolve(__dirname, './app'), { maxage: 1000 * 60 * 60 * 24 * 7}));

app.listen(process.env.PORT || 81);

console.log('Listening on port ' + process.env.PORT || 81);