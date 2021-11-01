var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('admin/obras', {
        layout: 'admin/layout',
        user: req.session.nombre_usuario,
    });
});

module.exports = router;