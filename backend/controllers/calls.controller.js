const express = require('express');
const { Router } = require('express');

const router = Router();

const calls = require ('../moc.data.js/callers.data.json');

const callsCopy = [...calls]

router.get('/', (req, res) => {
    console.log('success')
    res.status(200).send(callsCopy)
});

module.exports = router;
