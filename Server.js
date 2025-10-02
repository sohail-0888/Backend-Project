const express =  require('express');

const router =require('./Routers/Routers')
const morgan = require('morgan');


const app = express();


app.use(morgan('dev'));

app.use(router)


app.listen(4000 , () =>{
   console.log(`Post listen 4000`);
   
}) 