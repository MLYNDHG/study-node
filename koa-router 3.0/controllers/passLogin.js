const password_fn=async (ctx,next)=>{
    const name=ctx.request.body.username||'',password=ctx.request.body.password||'';
    console.log(`name:${name},password:${password}`);
    ctx.response.type='text/html';
    if(name==='luxifel'&&password==='123456'){
      ctx.response.body=`<h1>Welcome ${name}</h1>`;
    }else{
      ctx.response.body=`<h1>Login Failed</h1>
      <p><a href='/login'>Try Again</a></p>
      `;
    }
  };
  module.exports={'POST /passLogin':password_fn };