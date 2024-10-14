// const express=require('express');
// const app = express();
// const port = 3000;

// app.all('/',(req,res,next)=>{
//     res.send('hello from root');
    
// })
// // app.use('/about',(req,res,next)=>{
// //     // console.log('hello 1');
// //     // if (req.url === '/about'){
// //     res.send('hello from about');
// //     // }else{
// //     // res.send('hello from home');
// //     // }
// //     // next();
// // })
// app.get('/about',(req,res)=>{
//     res.send('hello from about ** get');
// })
// app.post('/about',(req,res)=>{
//     res.send('hello from about ** post');
// })
// // app.use('/',(req,res,next)=>{
// //     res.send('hello from root');
    
// // })
// app.use('/home',(req,res,next)=>{
//     res.send('<h1>hello from home</h1>');
    
// })
// app.use((req,res)=>{
//     console.log('404 not found');
// })

// // app.use((req,res)=>{
// //     console.log('hello 2');
// // })

// app.listen(port,()=>{
//     console.log('server started port 3000');
// })
// #############################

const express=require('express');
const app = express();

const port = 3000;
app.use(express.json())

// const homeRouter = require('./homeRouter');
// app.use('/home',homeRouter);

const productsRouter = require('./productsRouter');
app.use('/product',productsRouter);


app.listen(port,()=>{
    console.log('server started port 3000');
})