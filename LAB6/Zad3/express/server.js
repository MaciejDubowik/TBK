const express = require('express');
const bodyParser = require('body-parser')
const {Pool} = require('pg');

const app = express();

const pool = new Pool({
    database: "zad3_db",
    user: "postgres",
    password: "postgres",
    host: "172.17.0.2",
    port: 5432,
});

app.listen(8000, '0.0.0.0', () => {
    console.log('Application listening at 0.0.0.0:8000');
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/cars', async (req, res) => {
    const result = await pool.query('SELECT * FROM Car');
    res.send(result.rows);
});

app.post('/addCar', (req, res) => {
    const {model, year, details} = req.body;
    pool.query(`INSERT INTO Car (model, year, details) VALUES ($1, $2, $3) RETURNING *`, [model, year, details], (err, results) => {
        if (err)throw err;
        res.send(results.rows[0]);
    });
});
