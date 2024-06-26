let form = document.getElementById('Form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const result = greet(name);

    document.getElementById('result').textContent = result;
});

function greet(name) {
    return "Hi! " + name + ", welcome to our website. We have a special 15% discount on all plans for our new customers.";
}