let form = document.getElementById('Form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const num = document.getElementById('num').value;
    const result = isEvenOrOdd(num);

    document.getElementById('result').textContent = result;
});

function isEvenOrOdd(num) {
    if (num % 2 == 0) {
        return "Number is Even.";
    } else {
        return "Number is Odd.";
    }
}
