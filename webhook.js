"use strict";

module.exports = (app) => {
    app.post('/webhook', (req, res) => {
        console.log('Activate Github Webhook');
        console.log('Body Start');
        console.log(req.body);
        console.log('Body End');
        res.status(200).send({success: true});
    });
};
