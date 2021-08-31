var button = document.getElementById('getTransport');

button.addEventListener('click', function (event) {
    event.preventDefault();
});

button.addEventListener('click', function getTransport() {
    var distance = document.getElementById('distance');
    var answer = document.getElementById('answer');
    var transport = '';

    if (distance.value > 0 && distance.value < 1000) {
        transport = 'on foot'
        document.body.style.backgroundImage = "url('static/images/foot.jpg')";
    } else if (distance.value >= 1000 && distance.value < 10000) {
        transport = 'by bike'
        document.body.style.backgroundImage = "url('static/images/bike.jpg')";
    } else if (distance.value >= 10000 && distance.value < 30000) {
        transport = 'by bus'
        document.body.style.backgroundImage = "url('static/images/bus.jpg')";
    } else if (distance.value >= 30000 && distance.value < 100000) {
        transport = 'by car'
        document.body.style.backgroundImage = "url('static/images/car.jpg')";
    } else if (distance.value >= 100000) {
        transport = 'by plane'
        document.body.style.backgroundImage = "url('static/images/plane.jpg')";
    }

    return answer.innerHTML = 'For a distance of ' + distance.value + ' m you should go ' + transport + '.'
});

