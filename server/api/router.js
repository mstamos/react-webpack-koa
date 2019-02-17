const Router = require('koa-router');
const router = new Router();

router.get('/foo', async ctx => {
  ctx.body = {
    data: 'Sending some JSON'
  };
});

module.exports = router;
