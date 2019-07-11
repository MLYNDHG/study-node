//模拟数据库  创建数据数组
// const products = [{
//   name: '苹果',
//   price: 3
// }, {
//   name: '牛奶',
//   price: 5
// }];
const products = require('../products');
const APIError = require('../rest').APIError;

const getProducts_fn = async (ctx, next) => {
  ctx.rest({
    products: products.getProducts()
  });
}
const getProductById_fn = async (ctx, next) => {
  const id = ctx.params.id;
  ctx.rest({
    products: products.getProductById(id)
  });
}
const createProduct_fn = async (ctx, next) => {
  const name = ctx.request.body.name,
    price = ctx.request.body.price;
  ctx.rest({
    products: products.createProduct(name, price)
  });
}
const deleteProduct_fn = async (ctx, next) => {
  const id = ctx.params.id;
  ctx.rest({
    products: products.deleteProduct(id)
  });
}

module.exports = {
  'GET /api/products': getProducts_fn,
  'GET /api/getProductById/:id': getProductById_fn,
  'POST /api/createProduct': createProduct_fn,
  'DELETE /api/deleteProduct/:id': deleteProduct_fn,
}