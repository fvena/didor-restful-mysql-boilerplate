const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const helmet = require('helmet');
const config = require('./config/vars');
const models = require('./config/models');
const router = require('./api/router');
const error = require('./utils/error');


/**
* Express instance
* @public
*/
const app = express();

// request logging. dev: console | production: file
app.use(morgan(config.logs));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// gzip compression
app.use(compress());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// Check Database
models.sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to SQL database:', config.db_name);
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', config.db_name, err);
  });

// mount api v1 routes
app.use('/api', router);

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);


// listen to requests
app.listen(config.port, () => console.info(`server started on port ${config.port} (${config.env})`));
