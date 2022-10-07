const {Router} = require('express');
const router = Router();

const {history, entry, out, updateHistory} = require('../controllers/call.controllers')

router.get('/wallet', history);

router.post('/ingreso', entry);

router.put('/wallet', updateHistory);

router.delete('/wallet', out);

module.exports = router;