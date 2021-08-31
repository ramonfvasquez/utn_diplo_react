var btnRed = document.getElementById('red');
var btnBlue = document.getElementById('blue');
var btnGreen = document.getElementById('green');

btnRed.addEventListener('click', function () {
    changeBackgroundColor('tomato');
});

btnBlue.addEventListener('click', function () {
    changeBackgroundColor('royalblue');
});

btnGreen.addEventListener('click', function () {
    changeBackgroundColor('seagreen');
});

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
};