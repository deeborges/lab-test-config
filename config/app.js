const _express = require('express');
const _app = _express();

_app.use('/', (req, res) => {
    return res.send('deu certo');
});

module.exports = _app;