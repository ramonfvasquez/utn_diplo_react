var button = document.getElementById('getLargest');

button.addEventListener('click', function (event) {
    event.preventDefault();
});

button.addEventListener('click', function setAnswer() {
    var numbers = document.getElementById('numbers').value.split(',');
    var answer = document.getElementById('answer');

    numbers = fillWithZeroes(numbers);

    var largest = getLargest(numbers);

    return answer.innerHTML = 'The largest number is ' + largest + '.';
});

function fillWithZeroes(numbers) {
    var i = 0;
    for (number of numbers) {
        if (number == '') {
            numbers.splice(i, 1, '0');
        }

        i++;
    }

    return numbers;
};

function getLargest(numbers) {
    var largest = parseInt(numbers[0]);

    for (number of numbers) {
        if (number > largest) {
            largest = parseInt(number);
            console.log(largest);
        }
    };

    return largest;
};