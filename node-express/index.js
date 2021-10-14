const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));

const leaderRouter = require('./routes/leaderRouter');
app.use('/leaders', leaderRouter.router);

const dishRouter = require('./routes/dishRouter');
app.use('/dishes', dishRouter.router);

const promotionRouter = require('./routes/promotionRouter');
app.use('/promotions', promotionRouter.router);



app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});