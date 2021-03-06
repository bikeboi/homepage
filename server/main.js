import Koa from 'koa';
import * as _ from 'koa-route';
import serve from 'koa-static';
import fs from 'fs';
import path from 'path';

const app = new Koa();

const rescApi = {
    js: (ctx) => {
	let js = fs.readFileSync(path.join(__dirname,'www/bundle.js'));
        ctx.body = js;
        ctx.type = 'application/javascript';
        ctx.status = 200;
    },
    css: (ctx) => {
	let css = fs.readFileSync(path.join(__dirname,'www/style.css'));
        ctx.body = css;
        ctx.type = 'style/css';
        ctx.status = 200;
    },
    img: (ctx,imgName) => {
	let img = fs.readFileSync(path.join(__dirname,`www/img/${imgName}`));
        ctx.body = img;
        ctx.type = 'image/png';
        ctx.status = 200;
    }
}

const mainApi = {
    home: (ctx) => {
	let html = fs.readFileSync(path.join(__dirname,'www/index.html'));
	ctx.body = html;
        ctx.type = 'text/html';
        ctx.status = 200;
    }
};

// Resource API
app.use(_.get('/api/resources/bundle.js',rescApi.js));
app.use(_.get('/api/resources/style.css',rescApi.css));
app.use(_.get('/api/resources/img/:imageName',rescApi.img));

// Main API
app.use(_.get('/',mainApi.home));

const PORT = process.env.NODE_ENV == 'production' ? 80: 8000;

app.listen(PORT);
console.log(`Listening on port ${PORT}`);
