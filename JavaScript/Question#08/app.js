let form = document.getElementById('Form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const num = document.getElementById('num').value;
    const result = isPositive(num);

    document.getElementById('result').textContent = result;
});

function isPositive(num) {
    if (num >= 0) {
        return "Number is Positive.";
    } else {
        return "Number is Negative.";
    }
}
