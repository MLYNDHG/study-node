const config = require('./config'); //引入
const Sequelize = require('sequelize'); //引入

//第一步，创建一个sequelize对象实例
var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  port: config.port,
  pool: {
    max: 5,
    min: 0,
    idle: 3000
  }
});
//第二步  定义表明的映射对象告诉sequelize如何映射数据库的表
var hero = sequelize.define('hero', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: Sequelize.STRING(50),
  hp: Sequelize.FLOAT,
  damage: Sequelize.INTEGER
}, {
  timestamps: false
})


//三  新增数据    create
//三.1 promise添加数据
// hero.create({
//   id: null,
//   name: '无极剑圣',
//   hp: 390,
//   damage: 150
// }).then(res => {
//   console.log(`create` + res);
// }).catch(err => {
//   console.log(`failes` + err);
// });
//三.2  async+await添加数据    
// (
//   async () => {
//     var hero = await hero.create({
//       id: null,
//       name: '暴走萝莉',
//       hp: 450,
//       damage: 200
//     });
//     console.log('created:' + hero);
//   })()

//四  查询数据  findAll
// (
//  async () => {
//   var heros = await hero.findAll();
//   console.log(`find${heros.length} heros:`);
//   for (const hero of heros) {
//     console.log(JSON.parse(JSON.stringify(hero)));
//   }
// })();

///?????不知道为啥async的写法无效且报错 
hero.findAll().then(res => {
  console.log(`find${res.length} heros:`);
  for (const hero of res) {
    console.log(JSON.parse(JSON.stringify(hero)));
  }
}).catch(err => {
  console.log(err);
});

//五  更新数据  save
hero.update({
  name: '傻逼'
}, {
  where: {
    id: 5
  }
});

//六  删除数据  destroy
hero.destroy({
  where: {
    id: {
      $gte: 7 //条件看文档
    }
  }
})