let nunjucks = require('nunjucks');
//创建引擎模板对象
//path:创建读取path目录的文件系统加载器路径
//opts:对模板引擎的设置
function createEnv(path, opts) {
  //获取设置参数
  let autoescape = opts.autoescape === undefined ? true : opts.autoescape,
    noCache = opts.noCache || false,
    watch = opts.watch || false,
    throwOnUndefined = opts.throwOnUndefined || false,
    //创建模板引擎对象
    env = new nunjucks.Environment(
      new nunjucks.FileSystemLoader(path, {
        noCache: noCache,
        watch: watch,
      }), {
        autoescape: autoescape,
        throwOnUndefined: throwOnUndefined
      });
  //过滤设置
  if (opts.filters) {
    for (let f in opts.filters) {
      env.addFilter(f, opts.filters[f]);
    }
  }
  return env;
}

let env = createEnv('views', {
  watch: true,
  filters: {
    hex: function (n) {
      return 'Ox' + n.toString(16);
    }
  }
});

const str = env.render('hello.html', {
  name: 'luxifel'
});
console.log(str);