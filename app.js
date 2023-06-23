const express = require ('express');
const app = express();

//config
app.set('view engine','pug');
app.set('views','./views');
app.use(express.static('public'));
app.use(express.urlencoded({extends: true}));

//routes 
app.get('/',(req,res)=>{
    return res.render('landingpage');    
});

app.get('/login',(req,res)=>{
    return res.render('Login');
});
app.post('/login',(req,res)=>{
    const { email,password }=req.body;
    console.log(email,password);
    return res.redirect('/');
});
app.get('/register',(req,res)=>{
    return res.render('Register');
});
app.post('/register',(req,res)=>{
    const { email, password,DateOfBirth,name}=req.body;
    console.log(email, password, DateOfBirth, name);
    return res.redirect('/');
});
//start 
const PORT=3000;
app.listen(PORT,()=>{
    console.log('serveur is runing on port 3000');
});