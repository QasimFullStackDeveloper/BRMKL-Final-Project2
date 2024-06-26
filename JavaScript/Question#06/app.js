let form = document.getElementById('Form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const num = document.getElementById('num').value;
    const result = square(num);

    document.getElementById('result').textContent = result;
});

function square(num) {
    return "Square Of this Number is : " + num * num;
}
