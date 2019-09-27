require('rootpath')();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const jwt = require('./helper/jwt');
const errorHandler = require('./helper/error-handler');

//Getting our routes
const routers = require('./routers');

//using middleware
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'../dist/angular/')));

// use JWT auth to secure the api
// app.use(jwt());

// console.log(jwt());

//Routing
app.use('/api', routers);

// global error handler
app.use(errorHandler);


//Catch all other routes request and return it to the index file
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../dist/angular/index.html'))
});


// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    debugger;
    console.log('Server listening on port ' + port);
});