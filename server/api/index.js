if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const router = require('./router');
const app = new Koa();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser());

app.use(router.routes());

app.listen(PORT, () => console.log('listening on 5000'));
