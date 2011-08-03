require.paths.unshift(__dirname + "/vendor/");

var StaticHttp = require('./modules/statichttp');

new StaticHttp({
  port:3456,
	path:'./public'
});
