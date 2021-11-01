var express = require('express');
var router = express.Router();
var obrasModel = require('../../models/obrasModel');

router.get('/', async function (req, res, next) {
    var data = await obrasModel.getPlays().then(val => {return val});

    res.render('admin/obras', {
        layout: 'admin/layout',
        user: req.session.user,
        content: data,
    });    
});

module.exports = router;