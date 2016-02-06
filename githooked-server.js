var githooked = require('githooked');

githooked('test', 'exit 1', { secret: process.env.GITHOOKED_SECRET || 'thisismysecret' }).listen(process.env.PORT || 3000);
