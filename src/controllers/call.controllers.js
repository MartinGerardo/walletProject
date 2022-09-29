// GET: Lista el historial de la Wallet
const history = (req, res) => {
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