let form = document.getElementById('voteForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const age = document.getElementById('age').value;
    const result = canVote(age);

    document.getElementById('result').textContent = result;
});

function canVote(age) {
    if (age >= 18) {
        return "You are eligible to vote.";
    } else {
        return "You are not eligible to vote.";
    }
}
