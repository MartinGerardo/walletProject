//coneccion con posgre
const {Pool} = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'gerardo93',
    database: 'wallet',
    port: '5432'
});
let arrayTest = [];

// GET: Lista el historial de la Wallet
const history = async (req, res) => {
 
    const response = await pool.query('SELECT * FROM regist')
    res.status(200).json(response.rows);    
     console.log(response.rows)

}
// POST: Ingreso de valores en la wallet
let entry = (req, res)=>{
let fondo = req.body;
    const stringers = JSON.stringify(fondo);    
    console.log(stringers);
    // const response= await pool.query('INSERT INTO operations (amount, concept, daymonth, type_op) VALUES ($1, $2, $3, $4)', [amount, concept, daymonth, type_op])
    // console.log(response); 
    // res.send('operacion ingresada');
};
//UPDATE: Modifica el concepto del historial
const updateHistory = (req, res) => {
    res.send('modifica')
}

// DELETE: Egreso de Valores en la Wallet
const out = (req, res) => {
    res.send('Elimina')
};

module.exports = {
    history,
    entry,
    updateHistory,
    out
}