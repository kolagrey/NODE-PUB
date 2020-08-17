"use strict";

module.exports = (app) => {
    app.post('/webhook', (req, res) => {
        console.log('Activate Github Webhook');
        console.log(req.body);
        res.status(200).send({success: true});
    });
};
