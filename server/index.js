const express = require('express');
const app = express();
const port = 3001;
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

//conectar a la abse de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'usuarios'
});

//Confirmar si conecto bien o no a la base de datos
db.connect((err)=>{
    if(err){
        console.error('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conexión a la base de datos establecida');
    }
});

//endpoint para registrar usuario
app.post('/api/register', (req,res) =>{
    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const password = req.body.password;

db.query(
    'INSERT INTO usuario (nombre, correo, password) VALUES (?, ?, ?)',
    [nombre, correo, password],
    (err, result) =>{
        if(err){
            console.error(err);
        }else{
            res.send("Usuario registrado con éxito");
        }
    }
    );
});


//Endpoint para login de usuario
app.post('/api/login', (req,res) =>{
    const correo = req.body.correo;
    const password = req.body.password;

    db.query(
        'SELECT * FROM usuario WHERE correo = ? AND password = ?',
        [correo, password],
        (err, result) =>{
            if(err){
                console.error(err);
            }else{
                if(result.length>0){
                    res.send(result);
                    
                } else {
                    res.send({message: "Correo o contraseña incorrectos"});
                }
            }
        }
    )
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
