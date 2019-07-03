const index_fn=async (ctx,next)=>{
    ctx.response.typr='text/html';
    ctx.response.body='<h1>index.html</h1>';
  };

  module.exports={'GET /':index_fn};