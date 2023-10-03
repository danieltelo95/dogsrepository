const { Router } = require('express');

const { getDogs } = require('../controllers/getDogs')
const { getBreedHandler } = require('../handlers/getBreedHandler');
const { getBreedByNameHandler } = require('../handlers/getBreedByNameHandler');
const { postDogHandler } = require('../handlers/postDogHandler');
const { getTemperamentsHandler } = require('../handlers/getTemperamentsHandler');
const { deleteDog } = require('../controllers/deleteDog');
const { updateDog } = require('../controllers/updateDog');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getDogs)

router.get('/dogs/:id', getBreedHandler)

router.get('/name', getBreedByNameHandler)

router.post('/dogs', postDogHandler)

router.get('/temperaments', getTemperamentsHandler)

router.delete('/dogs/:id', deleteDog)

router.put('/dogs/update', updateDog)

module.exports = router;
