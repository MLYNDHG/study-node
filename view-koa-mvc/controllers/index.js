const index_fn = async (ctx, next) => {
  ctx.render("index.html", {
    title: "Welcome"
  });
  // ctx.response.type = 'text/html';
  // ctx.response.body = '<h1>index.html</h1>';
};

module.exports = {
  'GET /': index_fn
};