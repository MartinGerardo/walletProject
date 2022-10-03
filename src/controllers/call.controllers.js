const {Pool} = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'gerardo93',
    database: 'wallet',
    port: '5432'
});
// GET: Lista el historial de la Wallet
const history = async (req, res) => {
    const response = await pool.query('SELECT * FROM list_reg')
    res.status(200).json(response.rows);
    res.send('Historial');
    console.log("Historia")

}
// POST: Ingreso de valores en la wallet
const entry = (req, res)=>{
    res.send('ingreso')
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