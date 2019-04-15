const express = require('express');
const path = require('path');
const app = express();

//Getting our routes
const routes = require('./server/routes/router');

//using middleware
app.use(express.static(path.join(__dirname,'dist/angular')));
app.use('/routes', routes);

//Catch all other routes request and return it to the index file
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/angular/index.html'))
});

//Port number definition
const port = process.env.PORT || 8080;


//App listing part
app.listen(port,"192.168.1.7",(req,res)=>{
    console.log(`app running successfully ${port}`);
})