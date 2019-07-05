const hello_fn=async (ctx,next)=>{
    const parms=ctx.params.name;
    ctx.response.type='text/html';
    ctx.response.body=`<h1>Hello ${parms}</h1>`;
  };

  module.exports={'GET /hello/:name':hello_fn};