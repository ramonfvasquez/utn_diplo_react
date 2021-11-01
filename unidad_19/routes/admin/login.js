var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('admin/login', {
        layout: 'admin/layout',
    });
});

var usersModel = require('./../../models/usersModel');

router.post('/', async (req, res, next) => {
    try {
        var user = req.body.user;
        var password = req.body.password;

        var data = await usersModel.getUserByUsernameAndPassword(user, password);
        if (data != undefined) {
            req.session.user_id = data.id_usuario;
            req.session.user = data.nombre_usuario;
            res.redirect('admin/obras');
        } else {
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true
            });
        } 
    } catch (error) {
        console.log(error);
    }
});

router.get('/logout', function (req, res, next) {
    req.session.destroy();
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});

module.exports = router;