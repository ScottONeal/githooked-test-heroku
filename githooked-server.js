var githooked = require('githooked');

var server = githooked('test', 'echo "WEBHOOK RECEIVED"', { secret: process.env.GITHOOKED_SECRET || 'thisismysecret' }).listen(process.env.PORT || 3000, function() {
  console.log('Githooked Test Server listening on port: ', this.address().port);
});

server.on('error', function(msg) {
  console.error(msg);
});

