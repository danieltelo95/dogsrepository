const { Router } = require('express');

const { getDogs } = require('../controllers/getDogs')
const { getBreedHandler } = require('../handlers/getBreedHandler');
const { getBreedByNameHandler } = require('../handlers/getBreedByNameHandler');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getDogs)

router.get('/dogs/:id', getBreedHandler)

router.get('/name', getBreedByNameHandler)

module.exports = router;
