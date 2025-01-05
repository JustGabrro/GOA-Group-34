document.addEventListener('DOMContentLoaded', () => {
    const personForm = document.getElementById('personForm');
    const personList = document.getElementById('personList');

    const loadPeople = () => {
        const people = JSON.parse(localStorage.getItem('people')) || [];
        personList.innerHTML = '';
        people.forEach(person => displayPerson(person));
    };

    const savePerson = person => {
        const people = JSON.parse(localStorage.getItem('people')) || [];
        people.push(person);
        localStorage.setItem('people', JSON.stringify(people));
    };

    const displayPerson = ({ firstName, lastName, age, idNumber, height, description, email }) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>ID:</strong> ${idNumber}</p>
            <p><strong>Height:</strong> ${height} cm</p>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;
        personList.appendChild(li);
    };

    const generateEmail = (firstName, lastName, age) => {
        const randomNumber = Math.floor(Math.random() * 1000);
        return `${firstName.toLowerCase()}.${lastName.toLowerCase()}${age}${randomNumber}@example.com`;
    };

    personForm.addEventListener('submit', event => {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const age = parseInt(document.getElementById('age').value.trim(), 10);
        const idNumber = document.getElementById('idNumber').value.trim();
        const height = parseInt(document.getElementById('height').value.trim(), 10);
        const description = document.getElementById('description').value.trim();
        const email = generateEmail(firstName, lastName, age);

        const person = { firstName, lastName, age, idNumber, height, description, email };

        savePerson(person);
        displayPerson(person);

        personForm.reset();
    });

    loadPeople();
});
