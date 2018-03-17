const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const users = require('./modules/users/users.routes');

const app = express();

// settings
app.set('port', process.env.PORT || 3000);


// middelwares
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/users', users);

app.listen(app.get('port'), () => {
  console.log('server on port 3000');
});
