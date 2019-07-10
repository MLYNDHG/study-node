//模拟数据库  创建数据数组
const products = [{
  name: '苹果',
  price: 3
}, {
  name: '牛奶',
  price: 5
}];

const getProduct_fn = async (ctx, next) => {
  ctx.rest({
    products: products
  });
}

module.exports = {
  'GET /api/products': getProduct_fn
}