// require libs
var http = require('http'),
    sys = require('sys'),
    static = require('node-static');
    
// define function
function StaticHttp(options) {

  // ensure this function is always used with the "new" operator
  if (! (this instanceof arguments.callee)) {
    return new arguments.callee(arguments);
  }

  // allow ability to refer the current instance
  var self = this;
  
  self.settings = {
    port: options.port || 80, // default to port 80 if none given
		path: options.path || './public' // default to ./public static path url
  }

  // create static asset server
  var server = http.createServer(function(request, response) {
    var file = new static.Server(self.settings.path, {
      cache: false
    });
    
    request.addListener('end', function() {
      file.serve(request, response);
    })
  });
  
  // listen for requests
  server.listen(self.settings.port);

};


// name this module
module.exports = StaticHttp;
