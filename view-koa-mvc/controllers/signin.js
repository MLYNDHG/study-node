signin_fn = async (ctx, next) => {
  const name = ctx.request.body.username || '',
    password = ctx.request.body.password || '';
  console.log(`name:${name},password:${password}`);
  if (name === 'admin' && password === '123456') {
    ctx.render('Signin-ok.html', {
      title: "Sing In Ok",
      name: 'admin'
    })
  } else {
    ctx.render('Signin-failed.html', {
      title: 'Signin In Failed'
    });
  }
}

module.exports = {
  'POST /signin': signin_fn
}