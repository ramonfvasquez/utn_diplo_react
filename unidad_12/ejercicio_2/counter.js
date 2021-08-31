var textArea = document.getElementById('text');

textArea.onkeyup = function () {
    document.getElementById('counter').innerHTML = 'Characters: ' + textArea.value.length;
};

textArea.onkeydown = function () {
    document.getElementById('counter').innerHTML = 'Characters: ' + textArea.value.length;
};