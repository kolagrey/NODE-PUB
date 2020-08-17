const express = require('express');
const router = express.Router();

/* GET home page. */
router.post('/webhook', function (req, res, next) {
    console.log('Activate Github Webhook Refactored');
    console.log('Body Start');
    console.log(req.body);
    console.log('Body End');
    res.status(200).send({ success: true });
});

module.exports = router;
