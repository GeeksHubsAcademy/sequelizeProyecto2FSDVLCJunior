const router = require('express').Router();

const pasajerosRouter = require('./routers/pasajero.router');
// const navesRouter = require('./routers/nave.router');

router.use('/pasajeros', pasajerosRouter);
// router.use('/naves', navesRouter);


module.exports = router;