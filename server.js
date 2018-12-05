var http=require('http');
var express=require('express');

var app=express();
var path=require('path');

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/task1.html'));
})


app.get('/cal',function(req,res){
    res.sendFile(path.join(__dirname+'/public/calculator.html'));
})

app.get('/task',function(req,res){
    res.sendFile(path.join(__dirname+'/public/task.html'));
})


var server=app.listen(2000,function(){
    console.log('Server started at port 2000')
})