var express= require('express');
var app=express();

tareas=
    [
        {trabajo:'primera tarea', usuario:'David'},
        {trabajo:'segunda tarea', usuario:'Daniel'}
    ]

app.get('/tareas', (req,res)=>{
    res.json(tareas);

})

app.listen(1234);