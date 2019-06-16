const logger = require('morgan');
const express = require('express');
const path = require('path');
const helloRouter = require('./routers/hello')
const connect = require('./schemas')
const joinRouter = require('./routers/join')
const loginRouter = require('./routers/login')
const mypageRouter = require('./routers/mypage')
const uploadRouter = require('./routers/upload')
const timelineRouter = require('./routers/timeline')
const addgpsRouter = require('./routers/addgps')
require('dotenv').config();

//Init 
const app = express();


const port = process.env.PORT||8888;
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/ImgUploads',express.static(path.join(__dirname,'ImgUploads')));

connect()

app.use('/join',joinRouter)
app.use('/login',loginRouter)
app.use('/mypage',mypageRouter)
app.use('/timeline',timelineRouter)
app.use('/addgps',addgpsRouter)
app.use('/hello2',(req,res,next)=>{

    console.log('접속성공3')
    res.json({안녕2:"안녕2"})
    next();
})
app.use('/upload',uploadRouter)


const server = app.listen(port,()=>{

    console.time('서버 시간');
    console.log(port,'포트에서 대기');

});



module.exports = app;

