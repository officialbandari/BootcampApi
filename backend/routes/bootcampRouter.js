const express = require('express');
const allBootcampApi = require('../controllers/bootcampController')

const router = new express.Router();


router.get('/', allBootcampApi.getallbootcamps);

router.post('/', allBootcampApi.createBootcampApi);

router.get('/:id',allBootcampApi.getSingleBootcampApi);

router.patch('/:id',allBootcampApi.patchBootcampApi);

router.delete('/:id', allBootcampApi.deleteBootcampApi);




module.exports = router