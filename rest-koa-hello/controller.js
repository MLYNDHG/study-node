module.exports = function () {
  const router = require('koa-router')();

  const fs = require('fs');
  let files = fs.readdirSync(__dirname + '/controllers');
  let files_js = files.filter(function (item) {
    return item.endsWith('.js');
  });

  for (const iterator of files_js) {
    console.log(`Process controller:${iterator}`);
    const obj = require(__dirname + '/controllers/' + iterator);
    for (const key in obj) {
      if (key.startsWith('GET')) {
        const path = key.substring(4);
        router.get(path, obj[key]);
        console.log(`register key mapping :GET ${path}`);
      } else if (key.startsWith('POST')) {
        const path = key.substring(5);
        router.post(path, obj[key]);
        console.log(`register key mapping :POST${path}`);
      } else {
        console.log(`invalid URL:${key}`);
      }
    }
  }
  return router.routes();
}