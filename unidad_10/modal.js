var modal = document.getElementById('modal');
var span = document.getElementsByClassName('close')[0];
var frame = document.getElementById('frame');
var btn = [
    document.getElementById('btn-characters'),
    document.getElementById('btn-episodes'),
    document.getElementById('btn-contact'),
    document.getElementById('btn-map'),
    document.getElementById('btn-house'),
    document.getElementById('btn-plant'),
    document.getElementById('btn-school'),
    document.getElementById('btn-mart'),
    document.getElementById('btn-church')
];

for (b of btn) {
    b.onclick = function () {
        modal.style.display = 'block';
    }

    span.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

btn[0].addEventListener('click', characters);
btn[1].addEventListener('click', episodes);
btn[2].addEventListener('click', contact);
btn[3].addEventListener('click', springfieldMap);
btn[4].addEventListener('click', simpsonsHouse);
btn[5].addEventListener('click', powerPlant);
btn[6].addEventListener('click', school);
btn[7].addEventListener('click', mart);
btn[8].addEventListener('click', church);

function characters() {
    frame.src = 'pages/characters.html'
}

function episodes() {
    frame.src = 'pages/episodes.html'
}

function contact() {
    frame.src = 'pages/contact-us.html'
}

function springfieldMap() {
    frame.src = 'pages/springfield-map.html'
}

function simpsonsHouse() {
    frame.src = 'pages/simpsons-house.html'
}

function powerPlant() {
    frame.src = 'pages/nuclear-power-plant.html'
}

function school() {
    frame.src = 'pages/springfield-elementary-school.html'
}

function mart() {
    frame.src = 'pages/kwik-e-mart.html'
}

function church() {
    frame.src = 'pages/first-church-of-springfield.html'
}
