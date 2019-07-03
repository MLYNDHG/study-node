const login_fn=async (ctx,next)=>{
    ctx.response.type='text/html';
    ctx.response.body=`<h1>login</h1>
    <form action='/passLogin' method='post'>
    <p>Username:<input type='text'  name='username'></p>
    <p>Password:<input type='password' name='password'></p>
    <p><input type='submit' value='Login'></p>
    </form>
    `;
  };

  module.exports={'GET /login':login_fn};