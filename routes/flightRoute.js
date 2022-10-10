const express = require('express');

const router = express.Router();

const { getAllFlights, getFlight, deleteFlight, createFlight, updateFlight } = require('../controllers/flightController');


router.get("/", getAllFlights);

router.get('/:title', getFlight);

router.delete('/:title', deleteFlight);

router.post('/', createFlight);

router.put('/', updateFlight);

module.exports = router;

