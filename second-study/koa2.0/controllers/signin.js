var fn_signin = async (ctx, next) => {
  var name = ctx.request.body.name || '',
    password = ctx.request.body.password || '';
  console.log(`sign in with name:${name},password:${password}`);
  if (name === 'yt' && password === '520') {
    ctx.response.body = '<h1>登陆成功</h1>';
  } else {
    ctx.response.body = `<h1>登录失败</h1>
    <p><a href="/login">重试</p>
    `;
  }
}

module.exports = {
  'POST /signin': fn_signin
};