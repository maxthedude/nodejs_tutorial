const express = require('express');
const path = require('path');
const app =  express();
const bodyParser = require('body-parser');

app.use('/public', express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json);

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.post('/', (req,res) => {
    console.log(req.body);
    res.json({success:true});
});

app.get('/example', (req,res) => {
    res.send('Example route');
});

app.get('/example/:name/:age', (req,res) => {
    console.log(req.params);
    res.send(req.params.name + " :  : " + req.params.age);
    console.log(req.query);
});

app.listen(5500);