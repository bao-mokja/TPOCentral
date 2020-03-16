const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./src/tools/db');

const app = express();



app.use(morgan('tiny'));
app.use(express.static(path.join(`${__dirname}/public/`)));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
//app.use(bodyParser.json())

app.use('/css', express.static(path.join(`${__dirname}/node_modules/bootstrap/dist/css`)));
app.use('/js', express.static(path.join(`${__dirname}/node_modules/bootstrap/dist/js`)));
app.use('/js', express.static(path.join(`${__dirname}/node_modules/jquery/dist`)));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const appRouter =  require('./src/routes/routes')();
const demandRouter =  require('./src/routes/demandRoutes')();
const adminRouter =  require('./src/routes/adminRoutes')();
 


app.use("/", appRouter);
app.use("/demands", demandRouter);
app.use("/admin", adminRouter);

const port = process.env.PORT || 3000;
app.listen(port,function(){
    debug(`on port ${chalk.green(port)}`);
});

