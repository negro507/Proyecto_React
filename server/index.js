const express = require('express');
const app = express();
const port = 3001;
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());


// CONEXIÓN BASE DE DATOS
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'usuarios'
});


// VERIFICAR CONEXIÓN
db.connect((err) => {

    if(err){
        console.error('Error al conectar:', err);

    } else {
        console.log('Base de datos conectada');
    }

});


// REGISTRO
app.post('/api/register', (req, res) => {

    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const password = req.body.password;

    db.query(
        'INSERT INTO usuario (nombre, correo, password) VALUES (?, ?, ?)',
        [nombre, correo, password],

        (err, result) => {

            if(err){
                console.error(err);

            } else {
                res.send("Usuario registrado con éxito");
            }

        }
    );

});


// LOGIN
app.post('/api/login', (req, res) => {

    const correo = req.body.correo;
    const password = req.body.password;

    db.query(
        'SELECT * FROM usuario WHERE correo = ? AND password = ?',
        [correo, password],

        (err, result) => {

            if(err){

                console.error(err);

            } else {

                if(result.length > 0){

                    res.send({
                        nombre: result[0].nombre
                    });

                } else {

                    res.send({
                        message: 'Correo o contraseña incorrectos'
                    });

                }

            }

        }
    );

});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});