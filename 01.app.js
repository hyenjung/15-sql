const express = require('express');
const path = require('path');
const moment = require('moment');
const mysql = require('mysql2');

const app = express();

app.listen(3000, () => { console.log('http://127.0.0.1:3000') });
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.pretty = true;

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/city',(req,res)=>{
    const pug = {
        file: 'city'
    }
    res.render
});
app.get('/city/create',(req,res)=>{
    res.send('/city/create');
});
app.use((req,res)=>{
    res.send('/404');
});