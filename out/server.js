"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _ = _interopRequireWildcard(require("koa-route"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa.default();
var rescApi = {
  js: function js(ctx) {
    var js = _fs.default.readFileSync(_path.default.join(__dirname, 'www/bundle.js'));

    ctx.body = js;
    ctx.type = 'application/javascript';
    ctx.status = 200;
  },
  css: function css(ctx) {
    var css = _fs.default.readFileSync(_path.default.join(__dirname, 'www/style.css'));

    ctx.body = css;
    ctx.type = 'style/css';
    ctx.status = 200;
  }
};
var mainApi = {
  home: function home(ctx) {
    var html = _fs.default.readFileSync(_path.default.join(__dirname, 'www/index.html'));

    ctx.body = html;
    ctx.type = 'text/html';
    ctx.status = 200;
  }
}; // Resource API

app.use(_.get('/api/resources/bundle.js', rescApi.js));
app.use(_.get('/api/resources/style.css', rescApi.css)); // Main API

app.use(_.get('/', mainApi.home));
app.listen(8000);
console.log("Listening on port 8000");
