let form = document.getElementById('Form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const num = document.getElementById('num').value;
    const result = getGrade(num);

    document.getElementById('result').textContent = result;
});

function getGrade(num) {
    if (num >= 90 && num <= 100) {
        return "A Grade.";
    }
    else if (num >= 80 && num <= 89) {
        return "B Grade.";
    } else if (num >= 70 && num <= 79) {
        return "C Grade.";
    } else if (num >= 60 && num <= 69) {
        return "D Grade.";
    } else if (num >= 0 && num <= 59) {
        return "F Grade.";
    } else {
        return "Invalid Input(Marks Should be From 0 to 100).";
    }
}
