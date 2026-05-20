require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos');
});

// Obtener todos los apartamentos
app.get('/apartamentos', (req, res) => {
    db.query('SELECT * FROM apartamentos', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Agregar un apartamento
app.post('/apartamentos', (req, res) => {
    const { numero, area, precio, acabados } = req.body;
    db.query('SELECT id FROM apartamentos WHERE numero = ?', [numero], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length > 0) return res.status(400).json({ error: 'Ya existe un apartamento con ese número' });
        const sql = 'INSERT INTO apartamentos (numero, area, precio, acabados) VALUES (?, ?, ?, ?)';
        db.query(sql, [numero, area, precio, acabados], (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ mensaje: 'Apartamento creado', id: result.insertId });
        });
    });
});

// Actualizar estado de un apartamento
app.put('/apartamentos/:id', (req, res) => {
    const { estado } = req.body;
    const sql = 'UPDATE apartamentos SET estado = ? WHERE id = ?';
    db.query(sql, [estado, req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ mensaje: 'Estado actualizado' });
    });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});