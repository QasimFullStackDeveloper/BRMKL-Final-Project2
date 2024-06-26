let form = document.getElementById('Form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const tempInCelcius = document.getElementById('num').value;
    const result = celsiusToFahrenheit(tempInCelcius);

    document.getElementById('result').textContent = result;
});

function celsiusToFahrenheit(tempInCelcius) {
    let f = (tempInCelcius * 9 / 5) + 32;
    return "Temperature in Fahrenheit is : " + f;
}
