var sql = require('mssql');
//连接方式1："mssql://用户名:密码@ip地址（无需端口号）/SqlServer名/数据库名称"
//连接方式2："mssql://用户名:密码@ip地址:1433(默认端口号)/数据库名称"
//sql.connect("mssql://sa:PS123321@localhost:1434/TestDB").then(function () {
// Query
// new sql.Request().query("insert into test values('埃勒莫',18);").then(function (recordset) {
//   new sql.Request().query('select * from test').then(function (recordset) {
//     console.log(recordset.recordsets[0]);
//   }).catch(function (err) {
//     console.log(err);
//   });
//   // Stored Procedure
// }).catch(function (err) {
//   console.log(err);
// });


//sequelize
//1.创建sequelize随想实例
const Sequelize = require('sequelize');
const config = require('./config');
let sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mssql',
  port: config.port,
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
});


//2.映射test模型  注意默认数据库中表名为xxxs =>tests
let test = sequelize.define('test', {
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  name: Sequelize.STRING(50),
  age: Sequelize.INTEGER,
}, {
  timestamps: false
});

//操作数据库
//插入数据
// test.create({
//   name: '母唔系',
//   age: 18
// }).then(function (res) {
//   console.log(res);
// }).catch(function (error) {
//   console.log(error);
// });

// //es7
/*
此处可以插入数据，但是主键不可以为自增列
*/
(async () => {
  var now = Date.now();
  let a = await test.create({
    id: 't-' + now,
    name: '母唔系',
    age: 18
  });
  console.log('created: ' + JSON.stringify(a));
})();



//可以用来执行SQL语句sequelize.query(T-SQL);
//sequelize.query("insert into tests values('母唔系',18);");


//查询数据findAll();
(async () => {
  let tt = await test.findAll();
  console.log(`find ${tt.length} tests`);
  for (let t of tt) {
    console.log(JSON.stringify(t));
  }
})();

//修改数据save();  
// (async () => {
//   let tt = await test.findAll({
//     where: {
//       id: 1
//     }
//   });
//   console.log(`find ${tt.length} tests`);
//   for (let t of tt) {
//     t.name = '彭于晏';
//     t.age = 30;
//     t.save();
//     console.log(JSON.stringify(t));
//   }
// })();

//删除数据destroy();
// (async () => {
//   let tt = await test.findAll({
//     where: {
//       id: 10
//     }
//   });
//   console.log(`find ${tt.length} tests`);
//   for (let t of tt) {
//     t.destroy();
//     console.log(JSON.stringify(t));
//   }
// })();