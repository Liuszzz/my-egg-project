// app/router.js
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.admin.index);
    router.get('/news', controller.news.list);
    router.get('/home', controller.home.index);
  };