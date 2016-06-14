const router = require('koa-router');
const view = require('../controller/controller');

//路由处理，首页指定用index函数处理，但需要先经过validate函数校验
var API = new router();

API.get('/', view.index)
   .get('/getQQNewsDetail/', view.detail)
   .post('/getQQNewsDetail/', view.detail);

exports.RULE  = API.middleware();
