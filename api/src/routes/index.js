const { Router } = require('express');

const { getDogs } = require('../controllers/getDogs')
const { getBreed } = require('../controllers/getBreed')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getDogs)

router.get('/dogs/:id', getBreed)

module.exports = router;
