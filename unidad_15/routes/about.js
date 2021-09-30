var express = require('express');
var router = express.Router();

var staff = [
    {
        name: 'Fluttershy',
        position: 'CEO',
        photo: '/images/fluttershy.png',
    },
    {
        name: 'Rainbow Dash',
        position: 'CFO',
        photo: '/images/rainbow-dash.png',
    },
    {
        name: 'Applejack',
        position: 'General Manager',
        photo: '/images/applejack.png',
    },
    {
        name: 'Pinkie Pie',
        position: 'Community Manager',
        photo: '/images/pinkie-pie.png',
    },
    {
        name: 'Twilight Sparkle',
        position: 'Community Manager',
        photo: '/images/twilight-sparkle.png',
    },
];

router.get('/', function(req, res) {
    res.render('about', {
        title: 'About Us',
        body: `<ul class='staff-list'>
                ${staff.map((member) => {
                    return (`<li class='staff-member'>
                                <h2>${member.name}</h2>
                                <h4>${member.position}</h4>
                                <br><br><br>
                                <img src=${member.photo} alt=${member.name}>
                            </li>
                        `
                    );
                }).join('')}
            </ul>
        `
    });
});

module.exports = router;