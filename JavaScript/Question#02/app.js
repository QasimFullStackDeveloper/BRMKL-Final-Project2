let form = document.getElementById('Form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const result = maxOfTwo(num1, num2);

    document.getElementById('result').textContent = result;
});

function maxOfTwo(num1, num2) {
    if (num1 > num2) {
        return "Number 1 is greater.";
    } else if (num1 == num2) {
        return "Both Numbers are Equal.";
    } else {
        return "Number 2 is greater.";
    }
}
