document.getElementById('studentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const student = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        address: {
            street: document.getElementById('street').value,
            city: document.getElementById('city').value
        },
        contact: {
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value
        },
        enrollment: {
            university: document.getElementById('university').value,
            degree: document.getElementById('degree').value,
            joiningYear: document.getElementById('joiningYear').value,
            semester: document.getElementById('semester').value,
            regNumber: document.getElementById('regNumber').value
        }
    };

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
      <p>My name is ${student.firstName} ${student.lastName}, I am ${student.age} years old, and I identify as ${student.gender}.</p>
      <p>I live at ${student.address.street}, ${student.address.city}.</p>
      <p>You can reach me at ${student.contact.phone} or ${student.contact.email}.</p>
      <p>I am studying ${student.enrollment.major} at ${student.enrollment.university}, enrolled in the ${student.enrollment.semester} semester since ${student.enrollment.joiningYear}.</p>
      <p>My registration number is ${student.enrollment.regNumber}.</p>
    `;
    console.log(student);
});