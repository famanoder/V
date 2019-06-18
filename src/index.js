import Eryue from './lib/start';
import {Config, Middlewares, Router, Service} from './lib/decorator';

@Service
class User {
  getUserList(id) {
    const users = 'users';
    return users;
  }
}

@Config('config.js')
@Router.get('v1', {
  'user': async ({context, next, service}) => {
    // console.log(cx);
    const user = await service.user.getUserList();
    context.body = user;
    // cx.success(user);
    // await next();
  },
  'greet': 'Hello, world.'
})
@Middlewares([
  async (cx, next) => {
    cx.body = 'cx.service.user.getUserList()';
    // await next();
  }
])
class App extends Eryue {}

new App().then(port => console.log(`an app server started at ${port}.`));