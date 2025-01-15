import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import { isFibonacciSequence } from './utils/fibonacci.js';

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

router.post('/api/check-fibonacci', async (ctx) => {
  console.log('Checking sequence');
  const { sequence } = ctx.request.body;

  if (!Array.isArray(sequence)) {
    ctx.status = 400;
    ctx.body = { error: `Invalid sequence format ${sequence} should be array` };
    return;
  }

  ctx.body = {
    isFibonacci: isFibonacciSequence(sequence),
  };
});



app.listen(3888, () => {
  console.log(`Server running on localhost:3888`);
});
