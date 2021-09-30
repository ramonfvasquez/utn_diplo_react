var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('contact', {
        title: 'Contact Us',
        body: `<form>
                <input type='text' name='name' placeholder='Name' />
                <br>
                <input type='text' name='email' placeholder='Email' />
                <br>
                <button>Send</button>
            <form/>
       `
    });
});

module.exports = router;