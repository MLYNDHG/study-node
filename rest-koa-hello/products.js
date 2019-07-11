//模拟数据库的操作
let id = 0;
//主键自增
function nextId() {
  id++;
  return id;
}

//创建表对象
function Product(name, Price) {
  this.id = nextId();
  this.name = name;
  this.Price = Price;
}
//添加表数据
let procucts = [
  new Product('香蕉', 5),
  new Product('牛奶', 6),
  new Product('辣条', 0.5)
];
//暴露出模拟数据库增删改查的操作
module.exports = {
  //获取所有数据
  getProducts: () => {
    return procucts;
  },
  //根据id获取单个商品数据
  getProductById: (id) => {
    for (const item of procucts) {
      if (item.id.toString() === id.toString()) {
        return item;
      }
    }
  },
  //新建商品
  createProduct: (name, Price) => {
    const p = new Product(name, Price);
    procucts.push(p);
    return p;
  },
  //删除商品
  deleteProduct: (id) => {
    let index = -1,
      i = 0;
    for (i; i < procucts.length; i++) {
      if (procucts[i].id.toString() === id.toString()) {
        index = i;
      }
    }
    if (index > 0) {
      procucts.splice(index, 1);
      return 0;
    }
    return null; //表示删除失败
  }
  //修改商品

};