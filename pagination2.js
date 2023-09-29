const infoForm = document.getElementById('infoForm');
const infoTableBody = document.getElementById('infoTableBody');

infoForm.addEventListener('submit', event => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const foodOptions = document.getElementById('food').options;
    const selectedFood = Array.from(foodOptions)
        .filter(option => option.selected)
        .map(option => option.value)
        .join(', ');
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    // Create a new row in the table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${address}</td>
    <td>${pincode}</td>
    <td>${gender}</td>
    <td>${selectedFood}</td>
    <td>${state}</td>
    <td>${country}</td>
  `;

    infoTableBody.appendChild(newRow);

    // Clear the form fields after submission
    infoForm.reset();
});
