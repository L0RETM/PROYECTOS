var express= require('express');
var cors= require('cors');

var app=express();

//configuracion basica de un cors
var corsOpt={
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

var tareas=
    [
        {trabajo:'primera tarea', usuario:'Lorena Tamayo'},
        {trabajo:'segunda tarea', usuario:'David Cotta'}
    ]

 

app.get('/tareas',cors(corsOpt), (req,res)=>{
    res.json(tareas);

})

app.listen(1234);