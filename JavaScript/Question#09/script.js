document.getElementById('patientForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const patient = {
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
        emergencyContact: {
            name: document.getElementById('emergencyContactName').value,
            relationship: document.getElementById('emergencyContactRelationship').value,
            phone: document.getElementById('emergencyContactPhone').value
        }
    };

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
      <p>My name is ${patient.firstName} ${patient.lastName}, I am ${patient.age} years old, and I identify as ${patient.gender}.</p>
      <p>I live at ${patient.address.street}, ${patient.address.city}.</p>
      <p>You can reach me at ${patient.contact.phone} or ${patient.contact.email}.</p>
      <p>In case of emergency, contact ${patient.emergencyContact.name}, my ${patient.emergencyContact.relationship}, at ${patient.emergencyContact.phone}.</p>
    `;
    console.log(patient);
});
