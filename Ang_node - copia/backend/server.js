var express= require('express');
var cors= require('cors');
var bp = require('body-parser');

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

app.use(bp.json());

var api=express.Router();
 
//get:tareas
api.get('/tareas',cors(corsOpt), (req,res)=>{
    res.json(tareas);

})
//post:tarea
api.post('/tarea',cors(corsOpt), (req,res)=>{
    tareas.push(req.body);
    res.sendStatus(200);

})
//ruta
app.use('/api', api);

app.listen(7070);